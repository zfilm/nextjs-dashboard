import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import credentials from 'next-auth/providers/credentials';

 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [credentials({})],
});