import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './cards';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function Freebook() {
    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const response = await axios.get("https://book-store-coral-nine.vercel.app/");
                console.log(response.data);
                setBook(response.data);
            }
            catch (error) {
                console.log("Error in fetching book data :", error.message);
            }
        }
        getBook();
    }, [])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-y-2'>
            <h1 class=" text-2xl md:text-4xl mt-1 font-extrabold text-gray-350 mb-10 relative inline-block ">
                Explore Free Books
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-pink-500 rounded"></span>
            </h1>
            <p class="text-gray-600 text-sm md:text-base max-w-2xl">
                Explore a rich library of free books from various genres including
                comedy, fiction, horror, romance, and adventure. All books are
                available for free and can be read anytime, anywhere.
            </p>

            <div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default Freebook;