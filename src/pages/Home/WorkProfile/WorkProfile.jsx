import work1 from "../../../assets/wrk(3).jpg";
import work2 from "../../../assets/wrk(1).jpg";
import work3 from "../../../assets/wrk(2).jpg";
import work4 from "../../../assets/wrk(4).jpg";

const WorkProfile = () => {
  return (
    <div>
      <h2 className=" text-white font-semibold text-3xl text-center">
        Glimpse of Our Works
      </h2>
      <div className="grid md:grid-cols-2 gap-5 p-8">
        <div data-aos="zoom-out-right">
          <img className="h-[50vh] w-full rounded-sm" src={work1} alt="" />
          <p className="text-white text-2xl font-semibold text-center ">
            Dhaka International Trade Fair 2022
          </p>
        </div>
        <div data-aos="zoom-out-left">
          <img className="h-[50vh] w-full rounded-sm" src={work2} alt="" />
          <p className="text-white text-2xl font-semibold text-center ">
            Education Summit, Dhaka University
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <img className="h-[50vh] w-full rounded-sm" src={work3} alt="" />
          <p className="text-white text-2xl font-semibold text-center ">
            Conference of Investors in Garments Sector
          </p>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
          <img className="h-[50vh] w-full rounded-sm" src={work4} alt="" />
          <p className="text-white text-2xl font-semibold text-center ">
            World Young Leaders Summit, Dhaka
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkProfile;
