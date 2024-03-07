import React, { useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../rtk/slices/CartSlice';
import { Link } from 'react-router-dom';
import { DeleteFromCart, Details, reload } from '../rtk/slices/DetailsSlice';
import { Clear, addToSaved } from '../rtk/slices/SaveProductSlice';
import { IoMdEye } from 'react-icons/io';
import { MdStarRate } from 'react-icons/md';
import { BsCart } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa6';

const SaveProduct = () => {

    const product = useSelector(state => state.save);
    const dispatch = useDispatch();




    return (
        <>
            <Container>
                <div className=' flex  justify-around my-5 items-center'>
                    <h1 className='flex-initial  w-64 text-4xl hover:text-gray-200 transition-all duration-400'> Saved  Page</h1>
                    <Button className=' flex-initial  w-32  bg-gray-50 text-gray-700  border-none  text-2xl  px-7 py-3 rounded-xl' onClick={() => {
                        dispatch(Clear())

                    }} > Clear</Button>
                </div>
                <div className=" grid grid-rows-1 grid-cols-4 gap-x-3 gap-y-4 mb-5  ">
                    {
                        product.map((product) => {
                            return (
                                <Card key={product.id} className="relative">
                                    <Link to={"/details"} onClick={() => {
                                        dispatch(Details(product));
                                    }}><img
                                            alt=""
                                            src={product.image}
                                            className="text-gray-600 mx-auto my-4 h-56 w-2/3  "
                                        /> <IoMdEye className="absolute top-10  right-3 text-gray-400 text-md" /></Link>
                                    {/* <button className=" bg-zinc-900 text-white  text-xl text-center  mx-auto w-full h-12 -mt-16 mb-5 opacity-0   hover:opacity-75  no-underline"
                                    onClick={() =>
                                        dispatch(addToCart(product))
                                    }>
                                    <p className="mt-2">
                                        Add To Cart
                                    </p>
                                </button> */}

                                    <Card.Body className="relative h-56">

                                        <Card.Title className="text-base mb-3 text-gray-600">{product.title}</Card.Title>

                                        <Card.Text className="flex items-center text-xl gap-2 text-gray-600">
                                            <MdStarRate color="gold" className="text-2xl mr-2 " />

                                            {product.rating.rate} / 5
                                        </Card.Text>
                                        <div className="absolute bottom-3 left-3 mt-3 w-full "   >
                                            <div className="flex ml-3 mr-8 justify-between">
                                                <Card.Text className="text-xl  flex text-gray-600"> $ {product.price}</Card.Text>

                                                <BsCart className="  text-3xl  cursor-pointer  text-gray-600" onClick={() =>
                                                    dispatch(addToCart(product))
                                                } />

                                            </div>
                                        </div>
                                        {/* <Button
                                                className="ml-8 "
                                                variant="primary"
                                                onClick={() =>
                                                    dispatch(addToCart(product))
                                                }
                                            >
                                                Add to Cart
                                            </Button> */}
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }</div>
            </Container >
        </>
    );
}

export default SaveProduct;
//

{/* <div div className='row mx-auto mb-7 max-w-2xl  shadow-md rounded-2xl overflow-hidden ' >
    <div className='col-4 p-4 '>
        <img src={product.image} alt='' className='h-48 w-fill   object-cover ' />
    </div>
    < div className='col-8 my-8 p-3 relative'>
        <div className='mb-8 font-bold text-lg'>{product.title}  </div>
        <div className=''>${product.price}  </div>

        <Button className='bg-red-800 my-4 border-none absolute right-10' onClick={() => {
            dispatch(DeleteFromCart(product))
        }} > Delete</Button>
    </div>
</div> */}