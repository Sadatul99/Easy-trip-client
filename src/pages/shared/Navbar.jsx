import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const navLinks = (
        <>
            <li><Link to='/' className="text-gray-700 font-bold hover:text-blue-500 transition duration-200">Home</Link></li>
            <li><Link to='/tourists-spots' className="text-gray-700 font-bold hover:text-blue-500 transition duration-200">Tourists Spots</Link></li>
            <li><Link to='/add-torists-spot' className="text-gray-700 font-bold hover:text-blue-500 transition duration-200">Add Spot</Link></li>
            <li><Link to='/my-list' className="text-gray-700 font-bold hover:text-blue-500 transition duration-200">My List</Link></li>
        </>
    );
    

    const handleLogout = () => {
        logOut()
            .then()
            .catch()

    }

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>

                <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-200">
                    Easy Trip
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <div className="flex gap-4">

                            <Link to='/profile'>
                                <img className=" w-10 h-10 rounded-full"
                                    src={user.photoURL} />
                            </Link>
                            <button onClick={handleLogout} className="btn">Sign Out</button>

                        </div>
                        :
                        <div className="flex gap-3">
                            <Link to="/signin">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400">
                                    Register
                                </button>
                            </Link>
                        </div>

                }

            </div>
        </div>
    );
};

export default Navbar;