import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";

const TouristsSpots = () => {
    const loadedSpots = useLoaderData();
    const [sortOrder, setSortOrder] = useState('asc');

    // Sort the spots based on the avgCost
    const sortedSpots = [...loadedSpots].sort((a, b) => {
        const costA = parseFloat(a.avgCost);
        const costB = parseFloat(b.avgCost);
        return sortOrder === 'asc' ? costA - costB : costB - costA;
    });

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">All Tourist Spots</h1>

            {/* Sort Dropdown */}
            <div className="mb-4">
                <label htmlFor="sort" className="mr-2 text-gray-700 font-semibold">Sort by Average Cost:</label>
                <select id="sort" value={sortOrder} onChange={handleSortChange} className="p-2 border rounded">
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedSpots.map(spot => (
                    <div key={spot._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={spot.image} alt={spot.spotName} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{spot.spotName}</h2>
                            <p className="text-gray-700">Average Cost: {spot.avgCost}</p>
                            <p className="text-gray-700">Total Visitors per Year: {spot.totalVisitorsPerYear}</p>
                            <p className="text-gray-700">Travel Time: {spot.travelTime} days</p>
                            <p className="text-gray-700">Seasonality: {spot.seasonality}</p>
                            <Link to={`/tourists-spots/${spot._id}`} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TouristsSpots;
