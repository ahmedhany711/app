import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchproducts } from "../rtk/slices/products-slice";
import { DeleteFromCart, addToCart } from "../rtk/slices/CartSlice";
import { MdStarRate } from "react-icons/md";
import '../App.css';
import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Details } from "../rtk/slices/DetailsSlice";
import { FaHeart } from "react-icons/fa6";
import { DeleteFromSaved, addToSaved } from "../rtk/slices/SaveProductSlice";

const Products = () => {

    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchproducts());
    }, [dispatch]);



    // Heart
    const [clickedHearts, setClickedHearts] = useState(() => {
        const storedState = localStorage.getItem('clickedHearts');
        return storedState ? JSON.parse(storedState) : {};
    });
    useEffect(() => {
        localStorage.setItem('clickedHearts', JSON.stringify(clickedHearts));
    }, [clickedHearts]);

    //cart
    const [clickedCart, setClickedCart] = useState([]);

    useEffect(() => {
        localStorage.setItem('clickedCarts', JSON.stringify(clickedCart));
    }, [clickedCart]);


    return (
        <>
            <div className="container my-4">
                <div className=" grid grid-rows-1 grid-cols-4 gap-x-3 gap-y-6  ">
                    {products.map((product) => {

                        return (
                            <Card key={product.id} className="relative">

                                <FaHeart className={`heart1 absolute top-5  right-3 ${clickedHearts[product.id] ? 'text-red-700' : 'text-gray-300'}  text-md cursor-pointer
                                hover:fill-red-600 
                                `}
                                    onClick={() => {
                                        setClickedHearts((prev) => ({
                                            ...prev,
                                            [product.id]: !prev[product.id],
                                        }))

                                        clickedHearts[product.id] === false ? dispatch(addToSaved(product
                                        )) :
                                            dispatch(DeleteFromSaved(product
                                            ));

                                    }
                                    } />


                                <Link to={"/details"} onClick={() => {
                                    dispatch(Details(product));
                                }}>

                                    <img
                                        alt=""
                                        src={product.image}
                                        className="imagee mx-auto my-4 h-56 w-2/3  "
                                    />
                                    <IoMdEye className="absolute top-10  right-3 text-gray-300 text-md" />
                                </Link>

                                <Card.Body className="relative h-56">

                                    <Card.Title className="text-base text-gray-600 mb-4 ">{product.title}</Card.Title>

                                    <Card.Text className="flex justify-start items-center text-xl gap-0 text-gray-600">
                                        {Array.from({ length: 5 }).map((_, index) => {
                                            const starValue = index + 1;

                                            if (starValue <= product.rating.rate) {
                                                return (
                                                    <MdStarRate
                                                        key={index}
                                                        className="text-2xl mr-2"
                                                        color="#FFD700" // Set to gold
                                                    />
                                                );
                                            } else if (starValue === Math.ceil(product.rating.rate) && product.rating.rate % 1 !== 0) {
                                                // If the rating is a decimal, calculate the percentage to fill the star
                                                const decimalPart = (product.rating.rate % 1 * 100).toFixed(2);
                                                const gradient = `linear-gradient(90deg, #FFD700 ${decimalPart}%, #808080 ${decimalPart}%)`;

                                                return (
                                                    <svg key={index} className="text-2xl mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill="none" d="M0 0h24v24H0z" />
                                                        <path fill={gradient} d="M14.43 10L12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z" />
                                                    </svg>
                                                );
                                            }

                                            return (
                                                <MdStarRate
                                                    key={index}
                                                    className="text-2xl mr-2"
                                                    color="#808080" // Default to gray
                                                />
                                            );
                                        })}
                                        ( {product.rating.rate} )
                                    </Card.Text>

                                    <div className="absolute bottom-6 left-3 mt-1 w-full "   >
                                        <div className="flex ml-3 mr-8 justify-between">
                                            <Card.Text className="text-xl  flex text-gray-600 "> $ {product.price}</Card.Text>

                                            
                                            {clickedCart.includes(product.id) ? (
                                                <BsFillCartCheckFill
                                                    className={
                                                        `text-3xl cursor-pointer
                                                        text-gray-600`
                                                    }
                                                    onClick={() => {
                                                        dispatch(DeleteFromCart(product));
                                                        setClickedCart((prev) => prev.filter((id) => id !== product.id));

                                                    }}
                                                />
                                            ) : (
                                                <BsCart
                                                    className="text-3xl cursor-pointer
                                                    text-gray-600"
                                                    onClick={() => {

                                                        dispatch(addToCart(product));

                                                        setClickedCart((prev) => [...prev, product.id]);

                                                    }}
                                                />
                                            )}




                                            {/* {isCartVisible ? (
                                                <BsCart
                                                    className="text-3xl cursor-pointer"
                                                    onClick={() => {
                                                        clickedCart[product.id] === false ?
                                                            dispatch(addToCart(product)) :
                                                            dispatch(DeleteFromCart(product
                                                            ));
                                                        // dispatch(addToCart(product));

                                                        setClickedCart((prev) => ({
                                                            ...prev,
                                                            [product.id]: true,
                                                        }));

                                                        setIsCartVisible(false);
                                                    }}
                                                />
                                            ) : (
                                                <BsFillCartCheckFill
                                                    className="text-3xl cursor-pointer  "
                                                    onClick={() => setIsCartVisible(true)}
                                                />
                                            )} */}

                                            {/* <BsCart className="  text-3xl  cursor-pointer  " onClick={() => {
                                            //     dispatch(addToCart(product))

                                            // }
                                            // } />
                                            // < BsFillCartCheckFill className="  text-3xl  cursor-pointer  visible hover:invisible" /> */}

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
                        );
                    })}
                </div>
            </div >
        </>
    );
};

export default Products;
