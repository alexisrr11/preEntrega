import { collection, addDocs, getDocs, getDoc, doc, query, where } from 'firebase/firebase';
import { db } from '../firebase/config';

const productRef = collection(db, "products");

//Traer productos
export const getProducts = async () => {
    try {
        const snapShot = await getDocs(productRef);
        const productFormat = snapShot.docs.map((doc) => {
            return{id: doc.id, ...doc.data()}
        });
        return productFormat;
    } catch (error) {
        console.error("error al cargar productos", error)
        return [];
    }
};

//Funcion que pida solo un producto
export const getProductById = async (id) => {
    try {
        const productRef = doc(db, "products", id);
        const snapShot = await  getDoc(productRef);
        if(snapShot.exists()){
            const product = { id: snapShot.id, ...snapShot.data() };
            console.log("Doc", product);
            return product;
        } else {
            return null
        }
    } catch (error) {
        console.error("Error al traer producto ID", error)
        return null
    }
};

//Alta de productos 
export const createProducts = () => {
    try {
        const docRef = addDocs(productRef);
        return docRef.id;
    } catch (error) {
        console.error("Error al cargar producto", error)
        throw error;
    }
};