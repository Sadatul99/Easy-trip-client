import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const {
        _id,
        name,
        email,
        image,
        spotName,
        countryName,
        location,
        avgCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,
        description,
    } = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        // Collect form values
        const updatedSpotData = {
            name: form.name.value,
            email: form.email.value,
            image: form.image.value,
            spotName: form.spot_name.value,
            countryName: form.country_Name.value,
            location: form.location.value,
            avgCost: form.avgCost.value,
            seasonality: form.seasonality.value,
            travelTime: form.travelTime.value,
            totalVisitorsPerYear: form.totalVisitorsPerYear.value,
            description: form.description.value,
        };

        // Send data to the server
        fetch(`http://localhost:5000/tourists-spots/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedSpotData),
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });
            }
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Update Tourist Spot</h1>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* User Name */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700">User Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={name} // Set default value
                            required
                            placeholder="Your Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label htmlFor="email" className="block text-gray-700">User Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={email} // Set default value
                            required
                            placeholder="Your Email"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="image" className="block text-gray-700">Image URL</label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            defaultValue={image} // Set default value
                            required
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Tourist Spot Name */}
                    <div>
                        <label htmlFor="spot_name" className="block text-gray-700">Tourist Spot Name</label>
                        <input
                            type="text"
                            id="spot_name"
                            name="spot_name"
                            defaultValue={spotName} // Set default value
                            required
                            placeholder="Spot Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Country Name */}
                    <div>
                        <label htmlFor="country_Name" className="block text-gray-700">Country Name</label>
                        <input
                            type="text"
                            id="country_Name"
                            name="country_Name"
                            defaultValue={countryName} // Set default value
                            required
                            placeholder="Country Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label htmlFor="location" className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            defaultValue={location} // Set default value
                            required
                            placeholder="Location"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Average Cost */}
                    <div>
                        <label htmlFor="avgCost" className="block text-gray-700">Average Cost</label>
                        <input
                            type="number"
                            id="avgCost"
                            name="avgCost"
                            defaultValue={avgCost} // Set default value
                            required
                            placeholder="Average Cost"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Seasonality */}
                    <div>
                        <label htmlFor="seasonality" className="block text-gray-700">Seasonality</label>
                        <input
                            type="text"
                            id="seasonality"
                            name="seasonality"
                            defaultValue={seasonality} // Set default value
                            required
                            placeholder="e.g., Summer, Winter"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Travel Time */}
                    <div>
                        <label htmlFor="travelTime" className="block text-gray-700">Travel Time</label>
                        <input
                            type="text"
                            id="travelTime"
                            name="travelTime"
                            defaultValue={travelTime} // Set default value
                            required
                            placeholder="e.g., 7 days"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Total Visitors Per Year */}
                    <div>
                        <label htmlFor="totalVisitorsPerYear" className="block text-gray-700">Total Visitors Per Year</label>
                        <input
                            type="number"
                            id="totalVisitorsPerYear"
                            name="totalVisitorsPerYear"
                            defaultValue={totalVisitorsPerYear} // Set default value
                            required
                            placeholder="e.g., 10000"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-gray-700">Short Description</label>
                        <textarea
                            id="description"
                            name="description"
                            defaultValue={description} // Set default value
                            required
                            placeholder="Describe the spot"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Update Button */}
                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateSpot;
