import React, { useEffect, useState } from "react";
import Employeecard from "./Employeecard";

function EmloyeeDashboard() {
  const [data, setData] = useState([]);
  const [pageCount, sePageCount] = useState(0);
  const [currentPage, setCurrentpage] = useState(1);

  const fetchData = () => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?limit=10&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        sePageCount(data.totalPages);
      });
  };

  console.log(currentPage);
  // console.log(pageCount)

  useEffect(() => {
    fetchData();
  }, [currentPage]);


  useEffect(()=>{

    fetchData2()
  },[])
  
  const fetchData2 = () => {
    fetch(
      `https://reqres.in/api/users`
    )
      .then((res) => res.json())
      .then((data) => {
        // setData(data.data);
        // sePageCount(data.totalPages);

        console.log(data)
      });
  };

  return (
    <div>
      <h1 className="font-medium text-lg"> Employee Dashboard</h1>

      <table border={{}} className="w-full mt-5">
        <tr className="border-1">
         <th  className="border-1">S.no.</th>
          <th  className="border-1">Name</th>
          <th  className="border-1">Department</th>
          <th  className="border-1">image</th>
          <th  className="border-1">Gender</th>
          <th  className="border-1">Salary</th>
        </tr>

        {data.map((el,ind) => (
            
          <Employeecard key={el.id} {...el} ind={ind} currentPage={currentPage} />
        ))}
      </table>

      {new Array(pageCount).fill(0).map((el, ind) => (
        <button
        className="w-8 mt-5 h-8"
          disabled={ind + 1 === currentPage}
          onClick={() => setCurrentpage(ind + 1)}

          style={ind+1==currentPage? {backgroundColor:"black",color:"white"}:{}}
        >
          {ind + 1}
        </button>
      ))}
    </div>
  );
}

export default EmloyeeDashboard;