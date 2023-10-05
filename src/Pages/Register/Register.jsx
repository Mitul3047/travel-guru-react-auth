
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar';

const Register = () => {
    return (
        <div>
        <NavBar></NavBar>
        <div className=" justify-center items-center max-w-xl mx-auto  flex flex-col ">
            <div className="border-2 px-14 py-9 ">
                <div className="space-y-14">
                    <h1 className="text-black text-2xl font-bold">Create an account</h1>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className=" w-full border-b-2 outline-none font-medium placeholder-black" />
                    <input
                        type="Last Name"
                        name="lastName"
                        placeholder="Type here"
                        className=" w-full border-b-2 outline-none font-medium placeholder-black" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Username or Email"
                        className=" w-full border-b-2 outline-none font-medium placeholder-black" />

                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className=" w-full border-b-2 outline-none font-medium placeholder-black" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        className=" w-full border-b-2 outline-none font-medium placeholder-black" />
                </div>
                <div className="flex justify-between items-center mt-6 mb-12">
                    <div>
                        <input
                            type="checkbox"
                            name="checkbox"
                            className="checked" />
                        <label className="ml-2 font-medium">Remember Me</label>
                    </div>
                    <p className="btn-link font-medium text-[#F9A51A]">Forget Password</p>
                </div>
                <button
                    type="submit"
                    className="btn text-black font-medium bg-[#F9A51A] rounded-none w-full ">
                    Login
                </button>
                <p className="text-center">
                    Don’t have an account?
                    <Link to={'/login'}>
                        <span
                            className="btn-link font-medium  ml-2 text-[#F9A51A]">
                            Create an account
                        </span>
                    </Link>
                </p>
            </div>
            <p className="divider my-6 max-w-sm mx-auto  font-medium ">or</p>
            <div >
                <div className="relative rounded-full border-2 flex justify-center py-3  items-center  my-6 w-96  font-medium ">
                    <img className=" absolute left-2 w-9" src="../../../public/images/icons/fb.png" alt="" />
                    <h3>Continue with Facebook</h3>
                </div>
            </div>
            <div >
                <div className="relative rounded-full border-2 flex justify-center py-3  items-center  my-6 w-96  font-medium ">
                    <img className=" absolute left-2 w-9" src="../../../public/images/icons/google.png" alt="" />
                    <h3>Continue with Google</h3>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Register;