import Lottie from "lottie-react";
import travelAnimation from '../../../public/Animation - 1729232636022.json';

const AboutUs = () => {
    return (
        <div className=" py-10">
            <div className="flex flex-col lg:flex-row-reverse shadow-xl rounded-xl p-10">
                {/* Animation Section */}
                <figure className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <Lottie animationData={travelAnimation} />
                </figure>

                {/* Text Section */}
                <div className="w-full lg:w-2/3 lg:pr-28 space-y-6 lg:space-y-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-center lg:text-left">About Us</h2>
                    <p className="text-base lg:text-lg text-justify lg:text-left">
                        At Easy Trip, we believe that travel is not just about reaching a destination—it's about the experiences, memories, and connections we make along the way. Our mission is to bring you closer to the world's most breathtaking destinations, uncover hidden gems, and make every trip an adventure to remember.
                        <br /><br />
                        Whether you're a seasoned explorer or planning your first getaway, Easy Trip offers expert guidance, curated travel spots, and insider tips to help you make the most of your journey. From pristine beaches to bustling cities, serene mountains to cultural heartlands, we aim to inspire your wanderlust and provide a seamless travel experience.
                        <br /><br />
                        Join us in exploring the world, one unforgettable trip at a time!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
