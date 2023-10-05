import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <h2 className="text-5xl border-b-2 p-2 border-red-400">Opps!!! Page Not Found</h2>
            <Link 
            to ={'/'}
            className="mt-6  text-3xl  p-2 rounded-lg outline outline-green-400"
            >Go home</Link>
        </div>
    );
};

export default Error;