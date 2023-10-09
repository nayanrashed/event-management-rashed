import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ServiceCard from "./ServiceCard";
import Clients from "./Clients/Clients";
import WorkProfile from "./WorkProfile/WorkProfile";




const Home = () => {
  const services = useLoaderData();
  
  return (
    <div className="bg-gray-700">
      <Banner></Banner>
      <div className="mt-16 md:mt-1">
        <h2 className="text-3xl text-center text-white font-semibold my-4">Our Services</h2>
        {/* Service Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
          {services?.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <Clients></Clients>
      <WorkProfile></WorkProfile>
      
    </div>
  );
};

export default Home;
