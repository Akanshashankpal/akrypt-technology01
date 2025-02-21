import React, { useState } from 'react';

let dataObj = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phNumber: "",
    country: "",
    birthDate: "",
    avatar: "",
    marriageStatus: false,
    gender: "",

}
const ShowFormData = () => {
    const [formObj, setformObj] = useState(dataObj)
    const [data, setData] = useState([])
    const [showToast, setShowToast] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form Submitted")

        setData([...data, formObj])
        setformObj(dataObj)

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    }

    const handlechange = (e) => {
        const { name, value, type, checked } = e.target

        setformObj({
            ...formObj,
            [name]: (type === "checkbox") ? checked : value
        })
    }
    console.log(formObj)
    console.log(data)
    return (
        <div>
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

            <form className="max-w-lg mx-auto mt-5 bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                <label htmlFor="" >
                    FirstName:- <input type="text" name="firstName" id="" placeholder='Enter your Firstname' value={formObj.firstName} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4" />
                </label> {""}

                <label htmlFor=""  >
                    LastName:- <input type="text" name="lastName" id="" placeholder='Enter your Lastname' value={formObj.lastName} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4" />
                </label>{""}
                <br />
                <label htmlFor="" >
                    Email:- <input type="email" name="email" id="" placeholder="Enter your email" value={formObj.email} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4" />
                </label>{""}
                <br />
                <label htmlFor="" >
                    Password:- <input type='password' name="password" id="" placeholder="Enter your password" value={formObj.password} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"/>
                </label>{""}
                <br /><br />
                <label htmlFor="" >
                    phone Number :- <input type="number" name="phNumber" id="" placeholder='Enter your Phone Number' value={formObj.phNumber} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"/>
                </label>{""}

                <label htmlFor="" >
                    Country :- <select name="country" id="" value={formObj.country} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4">
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Japan">Japan</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Russia">Russia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="China">China</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                    </select>
                </label>{""}

                <br />
                <label htmlFor="" >
                    Birth Date  <input type="date" name="birthDate" id="" value={formObj.birthDate} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"/>
                </label>{""}

                <label htmlFor="" >
                    Choose Avtar <input type="file" name="avatar" id="" value={formObj.avatar} onChange={handlechange} className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"/>
                </label>{""}
                <br />
                <label htmlFor="" >
                    Select if Married  <input type="checkbox" name="marriageStatus" id="" checked={formObj.marriageStatus} onChange={handlechange} className="w-2 p-3 border border-gray-300  text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4 ml-45"/>  Married Status
                </label>{""}
                <br /><br />

                <label htmlFor="" >
                    Choose Gender :- 
                    <input type="radio" name="gender" value="Male" checked={formObj.gender === "Male"} onChange={handlechange} className="ml-4 mr-2"/> Male
                    <input type="radio" name="gender" value="female" checked={formObj.gender === "female"} onChange={handlechange}  className="ml-4 mr-2"/> Female
                    <input type="radio" name="gender" value="others" checked={formObj.gender === "others"} onChange={handlechange}  className="ml-4 mr-2"/> Others
                </label>{""}
                <br /><br /><br />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    );
}

export default ShowFormData;
