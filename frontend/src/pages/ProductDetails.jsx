import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetails({ addToCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Failed to fetch product details");
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) return <p className="text-white text-center">Loading product details...</p>;

    return (
        <div className="min-h-screen bg-neutral-800 flex justify-center items-center p-10">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col w-full max-w-4xl">
                <div className="flex">
                    <img 
                        src={`http://localhost:8000/${product.images[0]}`} 
                        alt={product.name} 
                        className="w-1/2 h-auto rounded-lg"
                    />
                    <div className="w-1/2 p-6">
                        <h2 className="text-3xl font-bold">{product.name}</h2>

                        {/* Description Section */}
                        <h3 className="text-lg font-semibold mt-4">Description</h3>
                        <p className="text-gray-600">{product.description}</p>

                        {/* Category & Tags */}
                        <h3 className="text-lg font-semibold mt-4">Category</h3>
                        <p className="text-gray-700">{product.category}</p>

                        <h3 className="text-lg font-semibold mt-4">Tags</h3>
                        <p className="text-gray-700">{product.tags.join(", ")}</p>

                        {/* Price Section */}
                        <h3 className="text-lg font-semibold mt-4">Price</h3>
                        <p className="text-2xl font-bold text-green-700">${product.price}</p>

                        {/* Quantity Section */}
                        <h3 className="text-lg font-semibold mt-4">Quantity</h3>
                        <div className="flex items-center my-2">
                            <button 
                                className="px-3 py-1 bg-red-500 text-white rounded-lg"
                                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                            >-</button>
                            <span className="px-4 text-lg">{quantity}</span>
                            <button 
                                className="px-3 py-1 bg-green-500 text-white rounded-lg"
                                onClick={() => setQuantity(prev => prev + 1)}
                            >+</button>
                        </div>

                        {/* Add to Cart Button */}
                        <button 
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            onClick={() => addToCart(product, quantity)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>

                
            </div>
        </div> 
    );
}
