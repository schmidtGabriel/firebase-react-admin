import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../../firebase";

export async function listUsers() {
  const q = collection(db, "users");

  const querySnapshot = await getDocs(query(q));

  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
  })) as any[];
}
