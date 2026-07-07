import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/config";

const productRef = collection(db, "products");

// Traer productos
export const getProducts = async () => {
  try {
    const snapShot = await getDocs(productRef);

    const productFormat = snapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return productFormat;
  } catch (error) {
    console.error("Error al cargar productos", error);
    return [];
  }
};

// Traer un producto por ID
export const getProductById = async (id) => {
  try {
    const productDocRef = doc(db, "products", id);
    const snapShot = await getDoc(productDocRef);

    if (snapShot.exists()) {
      const product = {
        id: snapShot.id,
        ...snapShot.data(),
      };

      console.log("Doc", product);

      return product;
    }

    return null;
  } catch (error) {
    console.error("Error al traer producto ID", error);
    return null;
  }
};

// Alta de productos
export const createProduct = async (product) => {
  try {
    const docRef = await addDoc(productRef, product);

    return docRef.id;
  } catch (error) {
    console.error("Error al cargar producto", error);
    throw error;
  }
};