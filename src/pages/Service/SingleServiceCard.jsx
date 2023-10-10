import Rating from "react-rating";

const SingleServiceCard = ({ selectedService }) => {
  const { picture, category_title, description, price, rating } =
    selectedService;
  return (
    <div className="relative flex w-full my-4 flex-col-reverse md:flex-row rounded-xl bg-slate-200 bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden md:rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img
          src={picture}
          alt="image"
          className="h-full w-full object-cover rounded-b-lg"
        />
      </div>
      <div className="p-6 flex flex-col items-center">
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {category_title}
        </h4>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {description}
        </p>
        <p className="text-center">
          <Rating initialRating={rating} readonly />
        </p>
        <p className="text-center">
          Packages starts with <button className="btn">{price}$</button>
        </p>
      </div>
    </div>
  );
};

export default SingleServiceCard;
