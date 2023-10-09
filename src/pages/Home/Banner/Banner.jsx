import bannerPicture1 from "../../../assets/ban1.jpg";
import bannerPicture2 from "../../../assets/ban2.jpg";
import bannerPicture3 from "../../../assets/ban3.jpg";
import bannerPicture4 from "../../../assets/ban4.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[80vh] flex justify-center">
      <div className="carousel w-full h-[80vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={bannerPicture1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={bannerPicture2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={bannerPicture3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={bannerPicture4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center border w-3/4 h-[80vh] absolute top-0 text-white">
        <div>
          <p>blackdot</p>
          <p className="md:text-3xl text-center">
            A Bespoke Event Planning Service in Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
