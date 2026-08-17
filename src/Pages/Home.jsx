

function Homepage () {
    return (

     <>
        <div className=" flex justify-between  px-8 items-center py-14">

        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Available for Frontend Developer Roles</h2>
            <h1 className="text-4xl font-bold">Building Responsive & Interactive Web Experiences</h1>
             <p className="text-lg">
                Hi, I'm Abdul Ghaffar Memon. <br />A Junior Frontend Web Developer passionate about crafting <br/> responsive layouts, and modern web applications.
             </p>

             <div className="flex gap-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">View My Work</button>
                <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">Get in Touch</button>
             </div>
        </div>

        <div className="border border-gray-700 rounded-full  ">
            <img src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" alt="Profile" className="rounded-full w-96 h-96 object-cover" />
        </div>
           
        </div>

        <div className="py-14 pb-8">
            <h2 className="text-3xl text-center">My Skills</h2>
            <p className="text-2xl text-center">Here are some of the technologies and tools I'm proficient in:</p>
            <div className="flex flex-col gap-4 mt-4 justify-center items-center">
                <div className="flex gap-4">
                <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">HTML</button>
                <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">CSS</button>
                <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">JavaScript Fundamentals</button>
                
                </div>
              
                <div className="flex gap-4">
                    <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">React.js</button>
                    <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">Tailwind CSS</button>
                    <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md mr-2">Github</button>

                </div>
               

            </div>
        </div>
     </>   
     
    )
      

}

export default Homepage;