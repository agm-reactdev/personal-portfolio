

function Homepage () {
    return (
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
    )
}

export default Homepage;