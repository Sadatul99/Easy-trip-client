import { useLoaderData, Link } from "react-router-dom";

const SpotDetails = () => {
    const { 
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
        description 
    } = useLoaderData();

    return (
        <div className="container mx-auto p-6 space-y-6">
            {/* Spot Image with Overlayed Title */}
            <div className="relative">
                <img src={image} alt={spotName} className="w-full h-96 rounded-lg shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white p-4">
                    <h1 className="text-4xl font-bold">{spotName}</h1>
                    <p className="text-lg">{location}, {countryName}</p>
                </div>
            </div>

            {/* Main Information Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-lg">
                <p><strong>Travel Time:</strong> {travelTime} days</p>
                <p><strong>Seasonality:</strong> {seasonality}</p>
                <p><strong>Average Cost:</strong> ${avgCost}</p>
                <p><strong>Visitors per Year:</strong> {totalVisitorsPerYear}</p>
            </div>

            {/* Description Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-3">Description</h2>
                <p>{description}</p>
            </div>

            {/* User Information Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-3">User Information</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>

            {/* Go to Home Button */}
            <div className="text-center mt-6">
                <Link to="/tourists-spots" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Go back</Link>
            </div>
        </div>
    );
};

export default SpotDetails;
