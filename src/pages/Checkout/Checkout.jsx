import React from "react";
import { CheckoutWrapper } from "./CheckoutStyles";
import CheckoutForm from "../../components/Checkouts/CheckoutForm";
import CheckoutCard from "../../components/Checkouts/CheckoutCard";

const Checkout = () => {
  return (
    <CheckoutWrapper>
      <CheckoutForm />
      <CheckoutCard />
    </CheckoutWrapper>
  );
};

export default Checkout;
