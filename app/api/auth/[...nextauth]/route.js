import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // Add this line

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // Add other providers if needed
    ],
    // Other NextAuth configurations
});

export { handler as GET, handler as POST };
