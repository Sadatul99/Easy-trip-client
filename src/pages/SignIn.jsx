import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye , FaEyeSlash} from "react-icons/fa";

const SignIn = () => {
    
    const {signInWithEmail} =useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSignIn = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInWithEmail(email, password)
        .then(result=> console.log(result))
        .catch(error=> console.error(error))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-blue-600 text-center mb-6">Please Login</h2>
                
                <form onSubmit={handleSignIn}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
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

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center mt-6 text-gray-700">
                    Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;