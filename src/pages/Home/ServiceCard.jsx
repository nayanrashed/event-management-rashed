/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, picture, category_title, description, price, rating } = service;
  return (
    <div className="mx-auto my-8" data-aos="fade-down">
      <div className="relative flex md:w-80 lg:w-96 flex-col rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-xl shadow-amber-400/50 ">
        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img className="w-full h-full" src={picture} alt="picture" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {category_title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {description.length > 100 ? (
              <p>{description.slice(0, 100)}....</p>
            ) : (
              <p>{description}</p>
            )}
            <p className="mb-3">Category Package starts with <span className="text-bold">{price}$</span></p>
          
            <p className="text-center">
              <Rating initialRating={rating} readonly />
            </p>
            <Link to={`/service/${id}`}>
              <div className="p-6 pt-0 flex justify-center mt-4 ">
                <button
                  className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full"
                  type="button"
                  data-ripple-light="true"
                >
                  Details
                </button>
              </div>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
