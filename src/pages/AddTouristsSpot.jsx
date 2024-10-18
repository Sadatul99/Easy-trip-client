

const AddTouristsSpot = () => {

    const handleAddSpot = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const spotName = form.spot_name.value
        const countryName = form.country_Name.value
        const location = form.location.value
        const avgCost = form.avgCost.value
        const seasonality = form.seasonality.value
        const travelTime = form.travelTime.value
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value
        const description = form.description.value

        const newSpot = {name,email,image,spotName,countryName,location,avgCost,seasonality,travelTime,totalVisitorsPerYear,description}

        //send data to the server
        fetch('http://localhost:5000/tourists-spots',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(newSpot)
        })
        .then(res=> res.json())
        .then(data=>{console.log(data)})

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Add Tourist Spot</h1>
                
                <form onSubmit={handleAddSpot} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* User Name */}
                    <div>
                        <label htmlFor="userName" className="block text-gray-700">User Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* User Email */}
                    <div>
                        <label htmlFor="userEmail" className="block text-gray-700">User Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            placeholder="https://example.com/image.jpg"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Tourist Spot Name */}
                    <div>
                        <label htmlFor="tourists_spot_name" className="block text-gray-700">Tourist Spot Name</label>
                        <input
                            type="text"
                            id="spot_name"
                            name="spot_name"
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
                            placeholder="Location"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Average Cost */}
                    <div>
                        <label htmlFor="average_cost" className="block text-gray-700">Average Cost</label>
                        <input
                            type="number"
                            id="cost"
                            name="avgCost"
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
                            placeholder="e.g., Summer, Winter"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Travel Time */}
                    <div>
                        <label htmlFor="travel_time" className="block text-gray-700">Travel Time</label>
                        <input
                            type="text"
                            id="travel_time"
                            name="travelTime"
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
                            placeholder="Describe the spot"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Add Button */}
                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristsSpot;
