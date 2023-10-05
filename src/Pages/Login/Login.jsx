import NavBar from "../Shared/NavBar";


const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=" justify-center items-center max-w-xl mx-auto h-[80vh] flex flex-col ">
                <div className="border-2 px-14 py-9 ">
                    <div className="space-y-14">
                        <h1 className="text-black text-2xl font-bold">Login</h1>
                        <input
                            type="text"
                            name="email"
                            placeholder="Type here"
                            className=" w-full border-b-2 outline-none font-medium placeholder-black" />

                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            className=" w-full border-b-2 outline-none font-medium placeholder-black" />
                    </div>
                    <div className="flex justify-between items-center mt-6 mb-12">
                        <div>
                        <input
                            type="checkbox"
                            name="checkbox" 
                            className="checked"/>
                        <label className="ml-2 font-medium">Remember Me</label>
                        </div>
                        <p className="btn-link font-medium text-[#F9A51A]">Forget Password</p>
                    </div>
                    <button
                    type="submit"
                    className="btn text-black font-medium bg-[#F9A51A] rounded-none w-full ">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;