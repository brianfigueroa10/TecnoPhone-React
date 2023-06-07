import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, updateProfile } from 'firebase/auth';
import { auth, firestore } from './firebaseConfig';
import { registerUserStart, registerUserSuccess, registerUserFailure } from '../redux/UserSlice';
import { addDoc, collection } from 'firebase/firestore';

export const createUser = async (values, dispatch) => {
    try {
        dispatch(registerUserStart());

        const signInMethods = await fetchSignInMethodsForEmail(auth, values.email);
        if (signInMethods.length > 0) {
            alert('El correo electrónico ya está registrado');
            return null; // Devuelve null en caso de que el correo electrónico ya esté registrado
        }

        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;

        await updateProfile(user, { displayName: values.name });
        alert(`Usuario creado: ${user.displayName}`);

        // Guardar el usuario en la colección de Firestore
        const userRef = await addDoc(collection(firestore, 'users'), {
            name: user.displayName,
            email: user.email,
            // Agrega aquí los campos adicionales que desees guardar
        });

        // Obtener el ID del documento creado
        const userId = userRef.id;

        // Actualizar el usuario con el ID del documento en Firestore
        await updateProfile(user, { userId });

        return user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error al crear el usuario:', errorCode, errorMessage);
        return null; // Devuelve null en caso de que ocurra un error
    }
};

export const register = (values) => async (dispatch) => {
    try {
        const user = await createUser(values, dispatch);

        if (user) {
            dispatch(registerUserSuccess(user));
        } else {
            dispatch(registerUserFailure('Error al registrar el usuario'));
        }
    } catch (error) {
        dispatch(registerUserFailure(error.message));
    }
};