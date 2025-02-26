import React from "react";

export default function Cart({ cart }) {
    return (
        <div className="min-h-screen bg-neutral-800 p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Your Cart</h2>

            {cart.length === 0 ? (
                <p className="text-white text-center">Your cart is empty</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cart.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <img 
                                src={`http://localhost:8000/${item.images[0]}`} 
                                alt={item.name} 
                                className="w-full h-40 object-cover rounded-lg"
                            />
                            <h3 className="text-lg font-bold">{item.name}</h3>
                            <p className="text-gray-600">${item.price}</p>
                            <p className="font-semibold">Quantity: {item.quantity}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
