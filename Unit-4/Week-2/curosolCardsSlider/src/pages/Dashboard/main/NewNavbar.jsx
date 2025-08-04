import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import axios from "../../../axios";

const NewNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/users/profile');
        setProfile(response?.data?.result);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchProfile();
  }, []);



  return (
    <>
      <header class="bg-white p-4 shadow-lg">
        <div class="flex flex-col md:flex-row justify-between items-center">
          {/* <!-- Dropdown Menu --> */}
          <div class="w-full md:w-1/5 mb-4 md:mb-0">
            <select id="week-btn" class="p-2 rounded text-black w-full">
              <option value="week1">Week 1</option>
              <option value="week2">Week 2</option>
              <option value="week3">Week 3</option>
              <option value="week4">Week 4</option>
            </select>
          </div>
          {/* <!-- Buttons --> */}
          <div class="flex justify-center gap-4 w-full md:w-auto">
            <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full md:w-auto">Tomorrow</button>
            <button class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full md:w-auto">After Tomorrow</button>
          </div>
        </div>
      </header>

    </>
  );
};

export default NewNavbar;
