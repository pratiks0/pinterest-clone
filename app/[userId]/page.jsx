"use client";
import React, { use, useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import UserInfo from '../components/UserInfo'

function Profile({params}) {
    const db=getFirestore(app);
    const [userInfo,setUserInfo]=useState();
    const [listOfPins,setListOfPins]=useState([]);
    useEffect(()=>{
      console.log(params.userId.replace('%40','@'))
      if(params)
      {
        getUserInfo(params.userId.replace('%40','@'))
      }
    },[params]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUserInfo(docSnap.data())
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return(
    <div>
       {userInfo? <UserInfo userInfo={userInfo}/>: null}
    </div>
  )
}

export default Profile;
