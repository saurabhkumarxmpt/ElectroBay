import { FaBox, FaUndo, FaTruck } from "react-icons/fa";
import Slider from "../components/HomePageSlider";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
   <>
   <div className="px-5 md:px-10">
    
            {/* main slider of home page */}
         <Slider/>
            {/* return benner section */}
         <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 px-6 py-6 mt-14 bg-red-50  rounded-md text-gray-800">
        <div className="flex-1 flex flex-col items-center text-center">
            <FaBox className="text-3xl text-gray-600 mb-2" />
            <p className="text-lg font-semibold">Top Quality Products</p>
            <p className="text-sm text-gray-500">Only verified and branded items</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
            <FaUndo className="text-3xl text-gray-600 mb-2" />
            <p className="text-lg font-semibold">7 Days Easy Return</p>
            <p className="text-sm text-gray-500">Hassle-free refund/replace</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
            <FaTruck className="text-3xl text-gray-600 mb-2" />
            <p className="text-lg font-semibold">Free Shipping</p>
            <p className="text-sm text-gray-500">No extra charge on orders</p>
        </div>
        </div>

        {/* Categories section */}
        <div className="flex justify-between items-center px-4 mt-12 ">
            <div className="text-lg font-semibold">
                Shop by categories
            </div>
            <div className="text-sm text-gray-600 hover:border-b transition">
                <Link to='/allcategories'>All departments → </Link>
            </div>
        </div>

        {/* Categories Cards Section */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {["slide1.jpg", "slide2.jpg", "slide3.jpg", "Image1.jpg"].map((img, index) => (
            <div key={index} className="bg-gray-100   overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={`/ClientImages/${img}`}
                alt={`Category ${index + 1}`}
                className="w-full h-[310px] object-cover"
            />
            <div className="p-3 text-left text-base font-semibold">
                Category Name
            </div>
            </div>
            ))}
            </div>

            {/* double side information tab in home page */}
            <div className="flex flex-col md:flex-row w-full gap-2 h-[180px]">

            {/* Left Side */}
            <div
            className="w-full md:w-1/2 h-[150px] bg-cover bg-center flex items-center text-gray-800"
            style={{ backgroundImage: "url('/ClientImages/gaming-console.jpg')" }}
            >
            <div className="pl-18">
                <h3 className="text-xl font-bold mb-2">Shop from ElectroBy</h3>
                <p className="text-md mb-2">Best quality Products</p>
                <button className="flex items-center gap-2 text-gray-600  cursor-pointer transition hover:border-b">
                See more
                <span className="text-xl">→</span> 
                </button>
            </div>
            </div>
            {/* Right Side */}
            <div
            className="w-full md:w-1/2 h-[150px] bg-cover bg-center flex items-center text-gray-800"
            style={{ backgroundImage: "url('/ClientImages/watch.jpg')" }}
            >
            <div className="pl-18">
                <h3 className="text-xl font-bold mb-2">Deals And Promotions</h3>
                <p className="text-md mb-2">Shop Today's deal,lightning desk, and limited time</p>
                <button className="flex items-center gap-2 text-gray-600  cursor-pointer transition hover:border-b">
                See more
                <span className="text-xl">→</span>
                </button>
            </div>
            </div>
            </div>

            {/* ElctroBay shopping section */}
            <div className="w-full h-auto bg-gray-100 mt-9 py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text Section */}
          <div className="text-center md:text-left px-4 py-6">
              <p className="text-gray-500 text-sm mb-1">Discover ElectroBay</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                ElectroBay Delivers to You
              </h2>
              <p className="text-base text-gray-600 mt-3">
                Your one-stop destination for shopping —<br className="hidden md:block" />
                we deliver all over India at the most affordable prices.
              </p>
              <button className="border mt-3 text-gray-800 px-3 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 hover:text-white transition cursor-pointer">
                View More
              </button>
            </div>
             {/* Right Image Section */}
          <div className="w-[180px] md:w-[400px]">
            <img
              src="/ClientImages/delevery.png" 
              alt="ElectroBay Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

</div>
   </>
  );
};

export default HomePage;
