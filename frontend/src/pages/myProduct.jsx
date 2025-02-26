import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Products/Product";

export default function ByProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [editingProduct, setEditingProduct] = useState(null);
    const [updatedData, setUpdatedData] = useState({});

    // 🔥 Change this to your actual email
    const userEmail = "kalviums76@gmail.com";  

    useEffect(() => {
        fetchProducts();
    }, []);

    // 🔹 Fetch Products by Email
    const fetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/products/by-email/${userEmail}`);
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            setError("No products found for this email.");
            setLoading(false);
        }
    };

    // 🔹 Handle Delete Product
    const handleDelete = async (productId) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
        
        try {
            await axios.delete(`http://localhost:8000/api/products/${productId}`);
            alert("Product deleted successfully!");
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error("Error deleting product:", error);
            alert("Failed to delete product.");
        }
    };

    // 🔹 Handle Update Product (Show Form)
    const handleEdit = (product) => {
        setEditingProduct(product);
        setUpdatedData({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category,
            tags: product.tags.join(", "),
        });
    };

    // 🔹 Handle Update Input Change
    const handleInputChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    };

    // 🔹 Submit Updated Product
    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8000/api/products/${editingProduct._id}`, updatedData);
            alert("Product updated successfully!");
            setEditingProduct(null);
            fetchProducts();
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Failed to update product.");
        }
    };

    if (loading) return <p className="text-white text-center">Loading products...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="w-full min-h-screen bg-neutral-800 p-10">
            <h2 className="text-3xl font-bold text-white text-center mb-6">My Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="bg-neutral-700 p-4 rounded-lg shadow-md text-white">
                        <Product product={product} />

                        <div className="flex justify-between mt-2">
                            <button 
                                className="bg-blue-500 text-white px-3 py-1 rounded"
                                onClick={() => handleEdit(product)}
                            >
                                Update
                            </button>
                            <button 
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => handleDelete(product._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🔹 Update Form (Shows Only When Editing) */}
            {editingProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-xl font-bold mb-4">Update Product</h2>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <input 
                                type="text"
                                name="name"
                                value={updatedData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                placeholder="Product Name"
                                required
                            />
                            <textarea 
                                name="description"
                                value={updatedData.description}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                placeholder="Description"
                                required
                            ></textarea>
                            <input 
                                type="number"
                                name="price"
                                value={updatedData.price}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                placeholder="Price"
                                required
                            />
                            <input 
                                type="number"
                                name="stock"
                                value={updatedData.stock}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                placeholder="Stock Quantity"
                                required
                            />
                            <input 
                                type="text"
                                name="category"
                                value={updatedData.category}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                placeholder="Category"
                                required
                            />
                            <input 
                                type="text"
                                name="tags"
                                value={updatedData.tags}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded"
                                placeholder="Tags (comma separated)"
                            />
                            <div className="flex justify-end">
                                <button 
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                                    onClick={() => setEditingProduct(null)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
