import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=25`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    // console.log(data)
    return (
        <div >
            <div className='h-10 flex justify-center item-center p-5 '>
            <h1 className='text-4xl font-bold mb-4 text-blue-600'> All Products</h1>

            </div>
            <br />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 shadow-md'>
            {
                data.map((e) => (
                    <div key={e.id} className='w-full max-w-md border border-gray-300 rounded-lg p-5 mt-5 bg-white'>
                    <h5 className='text-sm font-semibold text-gray-600'>{e.id}</h5>
                    <h1 className='text-xl font-bold text-gray-800 mt-2'>{e.name}</h1>
                    <p className='text-base text-gray-500 mt-1'>{e.email}</p>
                    <span className='text-sm text-gray-600 mt-2 block'>{e.body}</span>
                </div>
                ))
            }
            </div>
            
        </div>
    );
}

export default Product;
