import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from the API
    const fetchData = () => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setData(data.products); 
                setLoading(false);
                console.log(data);
            })
            .catch((error) => {
                setError('Error fetching products');
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="h-screen mt-10">
            <h1 className="font-bold text-3xl text-center mb-4">Product List</h1>

            <div className=" mx-auto">
                {loading && <p>Loading products...</p>}
                {error && <p>{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-350">
                    {data.map((product) => (
                        <div
                            key={product.id}
                            className="border border-gray-300 rounded-lg p-5 mt-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 "
                        >
                            <h4 className="text-lg font-semibold text-center text-gray-500">{product.id}</h4>
                            <h1 className="text-xl font-bold mb-2">{product.title}</h1>
                            <p className="mb-2">{product.description || 'No description available'}</p>
                            <div className="flex justify-between">
                                <span className="text-gray-700 font-semibold">{product.category}</span>
                                <span className="text-green-500 font-semibold">${product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
