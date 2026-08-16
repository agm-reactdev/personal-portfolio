import { Link } from 'react-router-dom';


function Navbar() {
   return (
     <div className="flex justify-between items-center h-24 px-8 bg-gray-800 text-white">
         <div>
            <h1 className="text-2xl font-bold"><Link to="/">Abdul Ghaffar</Link></h1>
         </div>
          
          <div>
             <ul className="flex gap-8 ">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/projects">Portfolio</Link></li>
               <li><Link to="/contact">Contact</Link></li>
             </ul>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Resume</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Contact Me</button>
          </div>
     </div>
   )
}

export default Navbar;