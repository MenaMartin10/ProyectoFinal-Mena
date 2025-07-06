import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";
import app from "../firebaseConfig";

const db = getFirestore(app);

export const getProductos = async () => {
  const productosRef = collection(db, "productos");
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductoById = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("Producto no encontrado");
  }
};
