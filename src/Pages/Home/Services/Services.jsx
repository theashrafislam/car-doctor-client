import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className="my-12">
            <div className="space-y-4 text-center">
                <h3 className="text-orange-500 font-bold text-xl">Service</h3>
                <h1 className="text-black font-bold text-4xl">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center mt-12">
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
        </div>
    );
};

export default Services;