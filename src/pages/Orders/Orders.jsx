import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getOrders } from '../../firebase/firebaseOrders';
import { CardContainer, DateAndTime, DateDescImg, DateDescPrice, DateDescQuantity, DateDescTitle, DateDescription, NoOrders, OrderId, OrderSection, PriceTotal, ProductDesc, ProductOrderContainer, ProductOrderDesc, ProductOrderTitle } from './OrdersStyles';
import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle';
import { formatPrice } from '../../utils/utils';



const Orders = () => {
  const user = useSelector((state) => state.user.user);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const fetchOrders = async () => {
      const userOrders = await getOrders(user);
      setOrders(userOrders);
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <OrderSection>
      <SectionTitle>Mis Ordenes</SectionTitle>
      {orders.length === 0 ? (
        <NoOrders>
          <p>Aún No hay órdenes realizadas.</p>
        </NoOrders>
      ) : (
        orders.map((order) => (

          <CardContainer key={order.orderId}>

            <DateDescription>
              <OrderId>Número de Orden: {order.orderId}</OrderId>
              <DateAndTime>Fecha: {order.timestamp} Hs.</DateAndTime>
            </DateDescription>

            <ProductOrderContainer>

              <ProductOrderTitle>Producto</ProductOrderTitle>

              {order.cartItems.map((item) => (
                <ProductOrderDesc key={item.product.id}>

                  <ProductDesc>
                    <DateDescImg src={item.product.img} />
                    <span style={{ color: '#888888', fontSize: '12px' }}>{item.product.marca}: <DateDescTitle>{item.product.name} </DateDescTitle></span>
                  </ProductDesc>

                  <DateDescPrice>Precio: {formatPrice(item.product.price)} <DateDescQuantity>Cant: {item.quantity}</DateDescQuantity></DateDescPrice>

                </ProductOrderDesc>
              ))}
              <PriceTotal>Total: {formatPrice(order.total)}</PriceTotal>
            </ProductOrderContainer>

          </CardContainer>
        ))
      )}
    </OrderSection>
  );
};

export default Orders;

