/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginWithEmail = async (email: string, password: string) => {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
