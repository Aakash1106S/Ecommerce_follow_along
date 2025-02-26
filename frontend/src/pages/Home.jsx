import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Products/Product";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/products");
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch products.");
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-white text-center">Loading products...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="w-full min-h-screen bg-neutral-800 p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-6">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <Product 
                        key={product._id}
                        product={product}
                        onMoreInfo={() => navigate(`/product/${product._id}`)}
                    />
                ))}
            </div>
        </div>
    );
}
