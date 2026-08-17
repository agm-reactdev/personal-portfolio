function Aboutpage () {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-12 ">About Me</h1>
            <p className="text-lg text-center mt-4">
                 I am Abdul Ghaffar Memon, a passionate Junior Frontend Web Developer <br/>based in Pakistan. <br/>I hold a degree in Economics from the University of Sindh <br/>
                 and have shifted my focus toward building <br/> modern, responsive, and user-centric web applications. <br/>I turn designs into functional code using modern frontend tools
            </p>
             <p className="text-3xl font-bold mt-8 text-center">Educational Background</p>
            <div className="flex justify-center gap-4 mt-8 text-center">
                <p className="bg-white text-black text-2xl px-4 py-2 rounded-2xl">Bachelor's Degree in Economics</p>
                <p className="bg-white text-black text-2xl px-4 py-2 rounded-2xl">University of Sindh</p>
                <p className="bg-white text-black text-2xl px-4 py-2 rounded-2xl">Focus Area: Frontend Development, Web Technologies & Modern JavaScript</p>
            </div>
        </div>
    )
}

export default Aboutpage;