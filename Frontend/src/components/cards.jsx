import React from 'react'

function Cards({ item }) {
    return (
        <div className="card bg-base-200
                    w-full sm:w-80 lg:w-96 
                    h-115
                    shadow-sm hover:shadow-lg transition hover:scale-105 duration-200">

            <figure className="h-50 sm:h-55 overflow-hidden">
                <img
                    src={item.image}
                    alt="Books"
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body flex flex-col justify-between">

                <div>
                    <h2 className="card-title text-pink-400 text-lg sm:text-xl flex justify-between items-center">
                        {item.type}
                        <div className="badge badge-secondary text-xs sm:text-sm">
                            {item.kind}
                        </div>
                    </h2>
                    <div>  <p className="line-clamp-2 sm:line-clamp-3 text-gray-100 text-sm sm:text-base">
                        {item.title}
                    </p>
                        <p className="line-clamp-3 text-sm text-gray-600">
                            {item.description}
                        </p></div>


                </div>

                <div className="card-actions flex justify-between items-end">
                    <div className="text-base sm:text-lg font-semibold">
                        Price : {item.price}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 badge badge-outline hover:bg-pink-500 duration-200 hover:text-white hover:border-black hover:py-3 hover:cursor-pointer">
                        Buy Now
                    </div>
                </div>

            </div>
        </div>
    );
}


export default Cards
