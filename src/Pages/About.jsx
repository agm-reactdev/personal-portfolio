function Aboutpage () {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-bold text-center mt-4 sm:mt-8">About Me</h1>
            
            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-center mt-4 max-w-3xl mx-auto leading-relaxed text-gray-300">
                I am Abdul Ghaffar Memon, a passionate Junior Frontend Web Developer based in Pakistan. 
                I hold a degree in Economics from the University of Sindh and have shifted my focus toward building 
                modern, responsive, and user-centric web applications. I turn designs into functional code using modern frontend tools.
            </p>

            {/* Education Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold mt-10 sm:mt-12 text-center">Educational Background</h2>
            
            {/* Education Cards Grid */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 sm:mt-8 max-w-4xl mx-auto">
                <div className="bg-white text-black text-base sm:text-lg font-medium px-6 py-4 rounded-2xl w-full md:w-auto text-center shadow-md">
                    Bachelor's Degree in Economics
                </div>
                <div className="bg-white text-black text-base sm:text-lg font-medium px-6 py-4 rounded-2xl w-full md:w-auto text-center shadow-md">
                    University of Sindh
                </div>
                <div className="bg-white text-black text-base sm:text-lg font-medium px-6 py-4 rounded-2xl w-full md:w-auto text-center shadow-md">
                    Focus Area: Frontend Development, Web Technologies & Modern JavaScript
                </div>
            </div>
        </div>
    )
}

export default Aboutpage;