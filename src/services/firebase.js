import { firebaseAuth, firebaseDatabase } from '../util/firebase';

export default class FirebaseService {
    static signIn = (email, password) => {
        firebaseAuth.signInWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static getUser = () => {
        firebaseAuth.onAuthStateChanged( user => {
            if(user)
                return user;
            else
                return null;
        });
    }

    static signOut = () => {
        firebaseAuth.signOut();
    }

    static getCategories = (callback) => {
        let query = firebaseDatabase.ref('categories');

        let items = [];

        query.on('value', datasnapshot => {
           datasnapshot.forEach( childSnapshot => {
               items.push(childSnapshot.val());
           })
           callback(items);
        })
        
        return query;
    }

    static registerUser = (email, password) => {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then((u) => {
                console.log(u);
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            }) 
    }


    static insertProduct = (product) => {
        let ref = firebaseDatabase.ref('products').push();
        let id = firebaseDatabase.ref('products').push().key;
        ref.set(product);
        return id;
    }
}