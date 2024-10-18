import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'


const MyList = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email)
    const allSpots = useLoaderData()
    const filteredList = allSpots.filter(spot => spot.email === user.email)
    const [myList, setMyList]= useState(filteredList)

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/tourists-spots/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Coffee has been deleted.',
                                    'success'
                                )
                                const remaining = myList.filter(spot => spot._id !== _id);
                                setMyList(remaining);
                            }})
                }
            });
    }




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
                            myList.map(spot => <tr key={spot._id} className="hover">
                                <td>{spot.countryName}</td>
                                <td>
                                    <ol>
                                        <li>{spot.spotName}</li>
                                        <li>{spot.location}</li>
                                        <li>{spot.seasonality}</li>
                                        <li>{spot.avgCost}</li>
                                    </ol>
                                </td>
                                <td className="flex gap-3">
                                    <Link to={`/updatespot/${spot._id}`}><button className="btn">Update</button></Link>

                                    <button onClick={()=>handleDelete(spot._id)} className="btn">Delete</button>
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