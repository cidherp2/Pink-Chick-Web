import React, { useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItemPink';
import CheckoutForm from './CheckOutForm';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: black;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ProceedToCheckoutButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const ContinueShoppingButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const CartCheckoutButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const PaymentMethodDropdown = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;


const CartItemModal = ({ items, totalPrice, onClose, onCheckout, onContinueShopping }) => {
    const [formData, setFormData] = useState({
        paymentMethod: '',
        address: '',
        zipcode: '',
        name: '',
        email: '',
        phone: '',
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\d{10}$/; // Assumes a 10-digit phone number
        return regex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic
        const newErrors = {};

        if (!formData.paymentMethod) {
            newErrors.paymentMethod = 'Payment method is required';
        }

        if (!formData.address) {
            newErrors.address = 'Address is required';
        }

        if (!formData.zipcode) {
            newErrors.zipcode = 'Zipcode is required';
        }

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email || !validateEmail(formData.email)) {
            newErrors.email = 'Valid email is required';
        }

        if (!formData.phone || !validatePhone(formData.phone)) {
            newErrors.phone = 'Valid phone number is required';
        }

        if (Object.keys(newErrors).length === 0) {
            // No errors, proceed with checkout
            onCheckout(formData);
        } else {
            // Set validation errors
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>Checkout Confirmation</h2>
                <div>
                    {items.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <Form onSubmit={handleSubmit}>
                    {/* <PaymentMethodDropdown
                        name="paymentMethod"

                        onChange={handleChange}
                    >
                        <option value="">Select Payment Method</option>
                        <option value="cash">Cash</option>
                        <option value="card">Card</option>
                        <option value="oxxo">OXXO</option>
                    </PaymentMethodDropdown> */}
                    {/* {errors.paymentMethod && <ErrorMessage>{errors.paymentMethod}</ErrorMessage>} */}

                    <Input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}

                    <Input
                        type="text"
                        name="zipcode"
                        placeholder="Zipcode"
                        value={formData.zipcode}
                        onChange={handleChange}
                    />
                    {errors.zipcode && <ErrorMessage>{errors.zipcode}</ErrorMessage>}

                    <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}

                    <Input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

                    <ButtonContainer>
                    <CheckoutForm items={items} totalPrice={totalPrice} />
                        {/* <ProceedToCheckoutButton type="submit">Pagar</ProceedToCheckoutButton> */}
                    </ButtonContainer>
                </Form>
                <CartCheckoutButton onClick={onClose}>Salir</CartCheckoutButton>
            </ModalContent>
        </ModalOverlay>
    );
};

export default CartItemModal;
