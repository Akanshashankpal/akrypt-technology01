import React, { useState } from 'react';

const Toast = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormdata] = useState([]);
    const [showToast, setShowToast] = useState(false); // State to control toast visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const obj = {
            username,
            password
        };
        
        setFormdata([...formData, obj]);

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    console.log(formData);

    return (
        
        <div className='toast' >
            {showToast && (
                <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm m-auto" role="alert">
                    <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">login successfully.</div>
                    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-success" aria-label="Close">
                        <span className="sr-only">Close</span>                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            )}

            <h1 className='font-medium'>Form</h1>
            <form className="max-w-sm mx-auto mt-10" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required
                        value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='enter your password' required
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default Toast;
