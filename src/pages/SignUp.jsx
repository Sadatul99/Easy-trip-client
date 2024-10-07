import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye , FaEyeSlash} from "react-icons/fa";

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
     
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photo = form.photo.value
        console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => console.log(result))
            .catch(error => console.error(error))

    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Register</h2>
                
                <form onSubmit={handleSignUp}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Photo URL</label>
                        <input
                            type="text"
                            name="photo"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your photo URL"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                        <button 
                            type="button" 
                            onClick={togglePasswordVisibility} 
                            className="absolute top-[53px] right-0 transform -translate-y-1/2 pr-3"
                        >
                            {showPassword ? (
                                <FaEye className="text-gray-500" />
                            ) : (
                                <FaEyeSlash className="text-gray-500" />
                            )}
                        </button>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Register
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-6 text-gray-700">
                    Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;