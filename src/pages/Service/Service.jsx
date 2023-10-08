import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";


const Service = () => {
    const {id}=useParams();
    const services = useLoaderData();
    const [selectedService,setSelectedService]= useState({});
    useEffect(()=>{
        const findService = services?.find(service=> service.id==id);
        setSelectedService(findService);
    },[id,services])


    return (
        <div>
            <h2 className="">Service details {id}</h2>
           <SingleServiceCard selectedService={selectedService}></SingleServiceCard>
        </div>
    );
};

export default Service;