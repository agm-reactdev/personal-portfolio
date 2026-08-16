function Footer () {
    return (
        <div className="flex flex-col  bg-gray-700 text-white px-8 py-4">
            <div className="flex justify-between gap-4 ">
                <div>
                    <h2> <a href="#">Abdul Ghaffar</a> </h2>
                    <p>
                        Junior Frontend Web Developer crafting clean,<br /> 
                        responsive, and user-friendly web interfaces.
                    </p>
                </div>
                <div>
                    
                    <ul className="flex flex-col gap-4">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <p>Github : agm_dev</p>
                    <p>Linkdin : abdulghaffar</p>
                    <p>Email : abdulghaffarmemon052@example.com</p>
                </div>
            </div>

            <div className="mt-4">
                <p className="text-center">© 2023 Abdul Ghaffar. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;