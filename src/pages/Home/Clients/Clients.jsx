import avatar1 from "../../../assets/avatar1.jpg";
import avatar2 from "../../../assets/avatar2.png"

import Marquee from "react-fast-marquee";
const Clients = () => {
  return (
    <div className="py-4">
      <h2 className="text-4xl my-8 text-center text-white font-semibold">Our Happy Clients</h2>

      <div>
      <Marquee pauseOnHover={true} >
        <div className="w-72 h-96 shadow-xl shadow-yellow-400/50 px-4 py-6 border rounded-lg flex flex-col mx-4 bg-gray-200 ">
          <img className="rounded-full w-20 mx-auto" src={avatar1} alt="" />
          <p className="text-xl font-bold text-center my-4">ABC Corporation</p>
          <p className="flex-grow">
            Exceptional services! The event was flawlessly organized, and the
            attention to detail was impressive.
          </p>
          <p className="font-semibold my-4 text-center">Rating 4.9</p>
        </div>
        <div className="w-72 h-96 shadow-xl shadow-yellow-400/50 px-4 py-6 border rounded-lg flex flex-col mx-4 bg-gray-200">
          <img className="rounded-full w-20 mx-auto" src={avatar2} alt="" />
          <p className="text-xl font-bold text-center my-4">XYZ Enterprises</p>
          <p className="flex-grow">
          Highly professional team! The event exceeded our expectations, and the creative ideas were outstanding.
          </p>
          <p className="font-semibold my-4 text-center">Rating 4.9</p>
        </div>
        <div className="w-72 h-96 shadow-xl shadow-yellow-400/50 px-4 py-6 border rounded-lg flex flex-col mx-4 bg-gray-200">
          <img className="rounded-full w-20 mx-auto" src={avatar1} alt="" />
          <p className="text-xl font-bold text-center my-4">ABC Corporation</p>
          <p className="flex-grow">
          Great communication and collaboration. The event management team was responsive and proactive throughout the process.
          </p>
          <p className="font-semibold my-4 text-center">Rating 4.9</p>
        </div>
        <div className="w-72 h-96 shadow-xl shadow-yellow-400/50 px-4 py-6 border rounded-lg flex flex-col mx-4 bg-gray-200">
          <img className="rounded-full w-20 mx-auto" src={avatar2} alt="" />
          <p className="text-xl font-bold text-center my-4">ABC Corporation</p>
          <p className="flex-grow">
          Impressed with the creativity and innovation. The thematic decor and entertainment were a big hit with our attendees.
          </p>
          <p className="font-semibold my-4 text-center">Rating 4.9</p>
        </div>
        <div className="w-72 h-96 shadow-xl shadow-yellow-400/50 px-4 py-6 border rounded-lg flex flex-col mx-4 bg-gray-200">
          <img className="rounded-full w-20 mx-auto" src={avatar1} alt="" />
          <p className="text-xl font-bold text-center my-4">ABC Corporation</p>
          <p className="flex-grow">
          Reliable and efficient services. The event ran smoothly, and the staff was courteous and professional.
          </p>
          <p className="font-semibold my-4 text-center">Rating 4.9</p>
        </div>
        <div className="w-72 h-96 shadow-xl shadow-yellow-400/50 px-4 py-6 border rounded-lg flex flex-col mx-4 bg-gray-200">
          <img className="rounded-full w-20 mx-auto" src={avatar2} alt="" />
          <p className="text-xl font-bold text-center my-4">RST Group</p>
          <p className="flex-grow">
          Exceptional event planning expertise! Our product launch was a huge success, thanks to the dedicated team.
          </p>
          <p className="font-semibold my-4 text-center">Rating 4.9</p>
        </div>
      </Marquee>
      </div>
    </div>
  );
};

export default Clients;