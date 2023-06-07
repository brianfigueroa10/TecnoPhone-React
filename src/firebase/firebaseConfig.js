import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC_sUN0BS3Tc9cRyZ2HUYpOcJ8nS-Bn_1Q",
  authDomain: "tecnophone-e1399.firebaseapp.com",
  projectId: "tecnophone-e1399",
  storageBucket: "tecnophone-e1399.appspot.com",
  messagingSenderId: "337060660936",
  appId: "1:337060660936:web:fd55d5036731b61db907fd",
  measurementId: "G-5DR4ZXD7MF"
};

// Inicializa Firebase con un nombre de aplicación único
const app = firebase.initializeApp(firebaseConfig, "UniqueAppName");

// Obtiene una referencia a la base de datos Firestore
const database = app.database();
const auth = app.auth();
const firestore = getFirestore(app);

export default app;
export { database, auth, firestore};



