import { Typewriter } from 'react-simple-typewriter'
import img1 from "../../../public/img_banner/img1.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />

                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-6xl font-bold'>
                        Experience the <br /> magic of{' '}
                            <br />
                            <span className='text-orange-600 font-bold'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['History', 'Culture', 'Nature']}
                                    loop={10000}
                                    cursor
                                    cursorStyle='.'
                                    typeSpeed={70}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-6xl font-bold'>
                        Experience the <br /> magic of{' '}
                            
                            <span className='text-orange-600 font-bold'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['History', 'Culture', 'Nature']}
                                    loop={10000}
                                    cursor
                                    cursorStyle='.'
                                    typeSpeed={70}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-full'>
                        <h1 className='text-6xl font-bold'>
                        Experience the <br /> magic of{' '}
                            
                            <span className='text-orange-600 font-bold'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['History', 'Culture', 'Nature']}
                                    loop={10000}
                                    cursor
                                    cursorStyle='.'
                                    typeSpeed={70}
                                    deleteSpeed={100}
                                    delaySpeed={1000}
                                    
                                />
                            </span>
                        </h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5">Discover More</button>
                            
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;