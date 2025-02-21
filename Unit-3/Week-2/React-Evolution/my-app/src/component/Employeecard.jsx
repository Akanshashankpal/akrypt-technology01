import React from 'react';

const Employeecard = ({name,department,image,gender,salary,ind,currentPage}) => {
    return (
        <tbody >

       
                <tr  className='border-1 hover:border-transparent hover:bg-gray-300 hover:text-black'>
                <td className="border-1">
                {(currentPage - 1) * 10 + ind + 1}
               </td>
                    <td className='border-1'>{name}</td>
                    <td className='border-1'>{department}</td>
                    <td className='border-1'><img src={image} alt={name}  className='w-10 m-auto'/></td>
                    <td className='border-1'>{gender}</td>
                    <td className='border-1'>{salary}</td>
                </tr>
            
    </tbody>
    );
}

export default Employeecard;
