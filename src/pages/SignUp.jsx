import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    
    
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
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url()`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken',
            }}
        >
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name='name'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Photo URL</label>
                        <input type="text"
                            name='photo'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your photo URL" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password" />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
                    </div>
                </form>

                <p className="text-white text-center mt-6">Already have an account? <Link to='/signin' className="text-blue-400 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;