// import NextAuth from "next-auth"
// import Google from "next-auth/providers/google"
// import GitHub from "next-auth/providers/github"
// export const {handlers, signIn , signOut , auth}= NextAuth({
//     providers:[Google],[GitHub]
// }
// )
// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import GitHub from "next-auth/providers/github";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     GitHub({
//       clientId: process.env.AUTH_GITHUB_ID!,
//       clientSecret: process.env.AUTH_GITHUB_SECRET!,
//     }),
//   ],
// });
// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import GitHub from "next-auth/providers/github";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID!,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET!,
//     }),
//     GitHub({
//       clientId: process.env.AUTH_GITHUB_ID!,
//       clientSecret: process.env.AUTH_GITHUB_SECRET!,
//     }),
//   ],
// });

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
})
