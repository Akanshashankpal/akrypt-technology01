import React, { useState } from "react";

let dataObj = {
  fullname: "",
  phone: "",
  country: "",
  isVoter: true,
};

function NewForm() {
  const [formObj, setformObj] = useState(dataObj);

  const [data,setData]=useState([])

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    setData([...data,formObj])
    setformObj(dataObj)
  };

  const handelChange = (e) => {

    const {name,value,type,checked}=e.target

    setformObj({
        ...formObj,
        [name]: type==="checkbox"?checked:value
    })

  };

  console.log(formObj)
  console.log(data)

  return (
    <div>
      <h1>Voter Form</h1>

      <form action="" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          value={formObj.fullname}
          onChange={handelChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="phone"
          id=""
          placeholder="PhoneNumber"
          value={formObj.phone}
          onChange={handelChange}
        />
        <br />
        <br />
        <select
          name="country"
          id=""
          onChange={handelChange}
          value={formObj.country}
        >
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="nepal">Nepal</option>
          <option value="china">China</option>
        </select>
        <br />
        <br />

        <label htmlFor="">
          <input
            type="checkbox"
            name="isVoter"
            id=""
            onChange={handelChange}
            // value={formObj.isVoter}
            checked={formObj.isVoter}
          />{" "}
          isVoter
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <br /><br />
      {
        data.map((el)=>(
            <div key={el.id}>
                <h1>{el.fullname}</h1>
                <p>{el.phone}</p>
                <h4>{el.country}</h4>
                <h3>{el.isVoter?"Voter hai":"voter Nahi hai"}</h3>
            </div>
        ))
      }
    </div>
  );
}

export default NewForm;