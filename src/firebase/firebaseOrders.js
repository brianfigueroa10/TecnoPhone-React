import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { format } from 'date-fns';
import { firestore } from './firebaseConfig';


const generateOrderId = () => {
    const randomId = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomId.toString();
};

export const createOrder = async (orderData, user) => {
    if (user) {
        try {
            const orderId = generateOrderId();
            const docRef = await addDoc(collection(firestore, 'orders'), {
                orderId: orderId,
                userId: user.uid,
                cartItems: orderData.cartItems,
                total: orderData.total,
                details: orderData.details,
                timestamp: format(new Date(), 'dd/MM/yyyy HH:mm')
            });

            console.log('Order created with ID:', docRef.id);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    }
};

export const getOrders = async (user) => {
    if (user) {
        try {
            const ordersQuery = query(collection(firestore, 'orders'), where('userId', '==', user.uid));
            const ordersSnapshot = await getDocs(ordersQuery);
            const orders = ordersSnapshot.docs.map((doc) => doc.data());
            return orders;
        } catch (error) {
            console.error('Error getting orders:', error);
        }
    }
};
