import React from "react";
import { useState } from "react";


const FetchData = () => {

    const [myData , setMyData] = useState([]);

    const loadUserData = () => {
        fetch('https://reqres.in/api/users?page=1')
            .then(res => res.json())
            .then(data => setMyData(data.data));
}

    return ( 
    <div class=' w-[100vw] h-[100vh] bg-gradient-to-r from-[#8360c3] to-[#2ebf91]'>
      <nav class=' flex justify-around bg-gradient-to-r from-sky-500 to-indigo-500 '>
        <h1 class="text-3xl font-bold m-[8px] ">Shubham Task-2</h1>
        <button class=' cursor-pointer m-[10px] bg-gray-800  p-2 rounded-md   text-xl text-white ' onClick={loadUserData}>Get Users</button>
      </nav>
      {/* <h1 class=' text-center font-bold text-2xl '>Users Data</h1> */}
      <div class=' w-[830px] flex flex-wrap m-auto '>
        {myData.map((x) => (

            <div className='w-[250px] h-[300px] bg-gray-900 rounded-md shadow-xl ml-3 mr-3 mt-4 flex flex-col'>
                <img src={x.avatar} alt='' class=' w-[180px] h-[180px] ml-[28px] mt-[20px]'></img>
                <h2 class=' font-bold ml-9 mt-5 text-white'>First Name:  {x.first_name}</h2>
                <h2 class=' font-bold ml-9  text-white'>Last Name:   {x.last_name}</h2>
                <h2 class=' font-bold ml-1  text-white'>Email:{x.email}</h2>
            </div>
          
      ))}

      
        
      </div>
    
    </div>
    )
}


export default FetchData;