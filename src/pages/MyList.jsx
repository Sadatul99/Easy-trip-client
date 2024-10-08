import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";



const MyList = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const allSpots = useLoaderData()
    const filteredList = allSpots.filter(spot => spot.email === user.email)


    return (
        <div>
            <h2 className="text-4xl text-blue-600 text-center font-semibold mb-6">My List</h2>
            <div className="overflow-x-auto min-h-screen">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Country Name</th>
                        <th>Spot Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredList.map(spot=> <tr key={spot._id} className="hover">
                            <td>{spot.countryName}</td>
                            <td>
                                <ul>
                                    <li>{spot.spotName}</li>
                                    <li>{spot.location}</li>
                                    <li>{spot.seasonality}</li>
                                    <li>{spot.avgCost}</li>
                                </ul>
                            </td>
                            <td className="flex gap-3">
                                <button className="btn">Update</button>
                                <button className="btn">Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MyList;