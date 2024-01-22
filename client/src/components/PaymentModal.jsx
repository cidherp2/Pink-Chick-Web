import React, { useState } from 'react';
import styled from 'styled-components';
import CartItem from './CartItemPink';
import { useEffect } from 'react';
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

const ModalContent = styled.div /*style*/`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: black;
  position: relative;
  height: 100%;
  overflow:scroll;
  padding-bottom:2rem;
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


const CartItemModal = ({ items, totalPrice, onClose, onCheckout,onQuantityChange,onRemove,onSizeChange,onValidation}) => {
    const [formData, setFormData] = useState({
        // paymentMethod: '',
        address: '',
        zipcode: '',
        name: '',
        email: '',
        phone: '',
    });

    const [isVisible, setIsVisible] = useState(true);

    const [isFormValid, setIsFormValid] = useState(false);

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+\s*$/;
        return regex.test(email);
    };
   

    const validatePhone = (phone) => {
        const regex = /^\d{10}\s*$/; // Assumes a 10-digit phone number
        return regex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation logic
        const newErrors = {};

        // if (!formData.paymentMethod) {
        //     newErrors.paymentMethod = 'Payment method is required';
        // }

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
        // validateForm();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const  validateForm = async (e) => {
        const newErrors = {};
        let flag = 0;
        // if (!formData.paymentMethod) {
        //    console.log( newErrors.paymentMethod = 'Payment method is required');
        // }else{
        //     flag++
        // }
        if (!formData.address) {
            console.log(newErrors.address = 'Address is required');
        }
        
        if (!formData.zipcode) {
            console.log(newErrors.zipcode = 'Zipcode is required');
        }
        
        if (!formData.name) {
            console.log(newErrors.name = 'Name is required');
        }
       
        if (!formData.email || !validateEmail(formData.email)) {
            console.log(newErrors.email = 'Valid email is required');
        }
       
        if (!formData.phone || !validatePhone(formData.phone)) {
            console.log(newErrors.phone = 'Valid phone number is required');
        }
        

        const isValid = Object.keys(newErrors).length === 0;

        if (isValid) {
            // No errors, proceed with checkout
            setIsFormValid(true);
            setIsVisible(false)
            localStorage.setItem('formData', JSON.stringify(formData));
        } else {
            // Set validation errors
            await setErrors(newErrors);
            await setIsFormValid(false);
            
        }
        
        

        console.log(isValid);
        // Check if there are no errors


   
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>Checkout Confirmation</h2>
                <div>
                    {items.map((item) => (
                        <CartItem 
                        key={item.id} 
                        item={item} 
                        onRemove={onRemove}
                        onQuantityChange={onQuantityChange} 
                        onSizeChange = {onSizeChange}
                        
                        />
                        
                    ))}
                </div>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                {isVisible && (
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
                        placeholder="Dirección"
                        value={formData.address}
                        onChange={handleChange }
                    />
                    {errors.address && <ErrorMessage>{errors.address}</ErrorMessage>}

                    <Input
                        type="text"
                        name="zipcode"
                        placeholder="Código postal"
                        value={formData.zipcode}
                        onChange={handleChange }
                    />
                    {errors.zipcode && <ErrorMessage>{errors.zipcode}</ErrorMessage>}

                    <Input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange }
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
                        placeholder="Teléfono 10 dígitos"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}

                <button onClick={validateForm}>Valida mi info</button>
            
                </Form>
                )}

                    {!isVisible &&(
                    <ButtonContainer>
                    <CheckoutForm items={items} totalPrice={totalPrice} isFormValid={isFormValid}/>
                        {/* <ProceedToCheckoutButton type="submit">Pagar</ProceedToCheckoutButton> */}
                    </ButtonContainer>
                     )}
               
                <CartCheckoutButton onClick={onClose}>Salir</CartCheckoutButton>
               
            </ModalContent>
        </ModalOverlay>
    );
};

export default CartItemModal;
