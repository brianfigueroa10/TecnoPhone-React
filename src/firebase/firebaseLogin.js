import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from './firebaseConfig';

import { getUserSuccess, getUserFailure, loginUserStart, loginUserSuccess, loginUserFailure } from '../redux/UserSlice';
import { doc, getDoc } from 'firebase/firestore';

export const loginUser = async (email, password, dispatch) => {
    try {
        dispatch(loginUserStart());

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        dispatch(loginUserSuccess(user));
        alert('Inicio de sesión correcto');
        // Obtener el usuario desde Firestore
        const userSnapshot = await getDoc(doc(firestore, 'users', user.uid));

        if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            dispatch(getUserSuccess(userData));
        } else {
            dispatch(getUserFailure('No se encontró información de usuario'));
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al iniciar sesión:', errorCode, errorMessage);
        if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta');
        } else if (errorCode === 'auth/user-not-found') {
            alert('Email no registrado');
        }
        dispatch(loginUserFailure(errorMessage));
    }
};