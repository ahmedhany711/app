import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Clear, Decrement, DeleteFromCart, increment } from '../rtk/slices/CartSlice';
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
const Cart = () => {

    const cartProduct = useSelector(state => state.cart);
    const dispatch = useDispatch();
    
    const totalPrice = cartProduct.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0)

    return (
        <Container>
            <div className=' flex  justify-around my-5 items-center'>

                <h1 className='flex-initial text-gray-500 w-64 text-2xl hover:text-gray-200 transition-all duration-400'> Total Price : $  {totalPrice.toFixed(2)}</h1>

                <Button className=' flex-initial  w-32  bg-gray-50 text-gray-700  border-none  text-2xl  px-7 py-3 rounded-xl' onClick={() => {
                    dispatch(Clear())
                }} > Clear</Button>

            </div>
            {
                cartProduct.map((product) => {
                    return (
                        <div div className='row mx-auto mb-7 max-w-2xl  shadow-md rounded-2xl overflow-hidden ' >
                            <div className='col-4 p-4 '>
                                <img src={product.image} alt='' className='h-48 w-fill   object-contain ' />
                            </div>
                            < div className='col-8 my-8 p-3 relative'>
                                <div className='mb-8 font-bold text-lg text-gray-600'>{product.title}  </div>
                                <div className='text-gray-500 text-xl'>{product.price} $ </div>

                                <div className='-mt-5 text-md flex justify-end mr-5 items-center'>
                                    <FaCirclePlus className='text-xl mr-3 ' onClick={() => {
                                        dispatch(increment(product))
                                    }} />
                                    <p className='text-3xl m-0 text-bold text-gray-600'>{product.quantity}</p>
                                    <FaCircleMinus className='text-xl ml-3 ' onClick={() => {
                                        dispatch(Decrement(product))
                                    }} />
                                </div>
                                <Button className='bg-red-800 my-4 border-none absolute right-10' onClick={() => {
                                    dispatch(DeleteFromCart(product))
                                }} > Delete</Button>
                            </div>
                        </div>

                    )
                })
            }

        </Container >
    );
}

export default Cart;
