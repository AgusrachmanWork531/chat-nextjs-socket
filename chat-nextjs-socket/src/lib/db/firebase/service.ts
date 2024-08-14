import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './init';

const firestore = getFirestore(app);

export async function retriveData(collectionName: string) {
    try {
        const snapshot = (await getDocs(collection(firestore, collectionName)));
        const docs = snapshot.docs.map((doc) => doc.data());
        return docs;
    } catch (error) {
        console.log(error);
        return error;
    }

}

export async function retriveDataByQuery(collectionName: string, field: string, value: string) : Promise<any[] | Error> {
    try {
        const q = await query(collection(firestore, collectionName), where(field, '==', value));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return new Error(querySnapshot.docs.length.toString());
        }
        const docs = querySnapshot.docs.map((doc) => doc.data());
        return docs;
    } catch (error) {
        console.log(error);
        return new Error('user not found');
        
    }
}