import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import ServiceCard from "./ServiceCard";


const Home = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="div">
        <h2 className="text-3xl">Our Services</h2>
        {/* Service Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            {
                services.map(service=> <ServiceCard key={service.id} service={service}></ServiceCard>  )
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
