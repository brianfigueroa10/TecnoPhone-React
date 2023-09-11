import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardContainer, DateAndTime, DateDescImg, DateDescPrice, DateDescQuantity, DateDescTitle, DateDescription, NoOrders, OrderId, OrderSection, PriceTotal, ProductDesc, ProductOrderContainer, ProductOrderDesc, ProductOrderTitle } from './OrdersStyles';
import { SectionTitle } from '../../components/UI/SectionTitle/SectionTitle';
import { formatDateAndTime, formatPrice } from '../../utils/utils';
import { getOrders } from '../../axios/axios-orders';
import { clearError, clearOrders, fetchOrdersFail, fetchOrdersStart } from '../../redux/ordersSlice';



const Orders = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.user);
  const ordersState = useSelector(state => state.orders.orders);
  const orders = ordersState ? ordersState.data : null;
  const error = ordersState ? ordersState.error : null;

  useEffect(() => {
    dispatch(fetchOrdersStart());
    if (!currentUser) {
      dispatch(clearOrders());
      return;
    }
    if (!orders) {
      getOrders(dispatch, currentUser);
    }
    if (!currentUser?.token) {
      dispatch(fetchOrdersFail());
    } else {
      error && dispatch(clearError());
    }
  }, [dispatch, currentUser, orders, error]);

  if (!orders || orders.length === 0) {
    return (
      <NoOrders>
        <p>Aún no hay órdenes realizadas.</p>
      </NoOrders>
    );
  }

  return (
    <OrderSection>
      <SectionTitle>Mis Ordenes</SectionTitle>
        {orders.map((order) => (
          <CardContainer key={order._id}>

            <DateDescription>
              <OrderId>Número de Orden: {order._id}</OrderId>
              <DateAndTime>Fecha: {formatDateAndTime(order.createdAt)} Hs.</DateAndTime>
            </DateDescription>

            <ProductOrderContainer>

              <ProductOrderTitle>Producto</ProductOrderTitle>

              {order.items.map((item) => (
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
      }
    </OrderSection>
  );
};

export default Orders;

