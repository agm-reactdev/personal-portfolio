import { Link } from 'react-router-dom';

function Homepage () {
    return (
     <>
        {/* Main Hero Container - Added Responsive Grid & Spacing */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row justify-between px-4 sm:px-8 items-center py-8 lg:py-14 gap-8">

        {/* Text Section */}
        <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-400">Available for Frontend Developer Roles</h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Building Responsive & Interactive Web Experiences</h1>
             <p className="text-base sm:text-lg text-gray-300 max-w-xl">
                Hi, I'm Abdul Ghaffar Memon. A Junior Frontend Web Developer passionate about crafting responsive layouts, and modern web applications.
             </p>

             {/* Buttons - Routing linked */}
             <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-md font-medium transition-colors">
                  View My Work
                </Link>
                <Link to="/contact" className="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-5 py-2.5 rounded-md font-medium transition-colors">
                  Get in Touch
                </Link>
             </div>
        </div>

        {/* Profile Image - Scalable Size */}
        <div className="border border-gray-700 rounded-full p-2 flex-shrink-0">
            <img 
              src="https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png" 
              alt="Profile" 
              className="rounded-full w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover" 
            />
        </div>
           
        </div>

        {/* Skills Section */}
        <div className="py-12 pb-8 max-w-6xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">My Skills</h2>
            <p className="text-lg sm:text-xl text-center text-gray-400 mt-1">Here are some of the technologies and tools I'm proficient in:</p>
            
            <div className="flex flex-wrap gap-3 mt-6 justify-center items-center max-w-2xl mx-auto">
                <span className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm sm:text-base font-medium">HTML</span>
                <span className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm sm:text-base font-medium">CSS</span>
                <span className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm sm:text-base font-medium">JavaScript Fundamentals</span>
                <span className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm sm:text-base font-medium">React.js</span>
                <span className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm sm:text-base font-medium">Tailwind CSS</span>
                <span className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm sm:text-base font-medium">Github</span>
            </div>
        </div>
     </>   
    );
}

export default Homepage;