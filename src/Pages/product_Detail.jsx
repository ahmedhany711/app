import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/CartSlice';
import { Link } from 'react-router-dom';
import { DeleteFromCart, Details, reload } from '../rtk/slices/DetailsSlice';


const Product_Detail = () => {
    const product = useSelector(state => state.Detail);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [])
    return (
        <>
            <Container>
                {
                    product.map((product) => {
                        return (
                            <div div className='row mx-10 mt-1 max-w-5xl  shadow-md rounded-2xl overflow-hidden h-screen ' >
                                <div className='col-12 p-2 '>
                                    <img src={product.image} alt='' className='h-72 w-full   object-contain ' />
                                </div>
                                < div className='col-12 mt-10 p-3 relative'>
                                    <div className='mb-3 font-bold text-3xl text-gray-600'>{product.title}  </div>
                                    <div className='mb-3  text-xl'>{product.description}  </div>

                                    <div className='flex items-center justify-between my-5 w-full h-10 mx-auto'>
                                        <div className=' font-bold text-3xl ml-10'>
                                            ${product.price}  </div>
                                        <Link className='btn  bg-gray-800 text-white  ml-auto border-none  ' to={'/cart'} onClick={() => {
                                            dispatch(addToCart(product))
                                        }}  > Add To cart</Link>
                                        <Button className=' bg-red-800  border-none ml-6  ' onClick={() => {
                                            dispatch(DeleteFromCart(product))
                                        }} > Delete</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                }

            </Container >
        </>
    );
}

export default Product_Detail;
