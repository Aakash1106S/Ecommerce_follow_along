import React, { useEffect, useState } from "react";

export default function Product({ product, onMoreInfo }) {
    const { name, description, images, price } = product;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [images.length]);

    return (
        <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex flex-col justify-between">
            <img 
                src={`http://localhost:8000/${images[currentImageIndex]}`} 
                alt={name} 
                className="w-full h-56 object-cover rounded-lg mb-2 transition-opacity duration-500"
            />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm opacity-50 line-clamp-2">{description}</p>
            <p className="text-lg font-bold my-2">${price}</p>
            <button 
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={onMoreInfo}
            >
                More Info
            </button>
        </div>
    );
}
