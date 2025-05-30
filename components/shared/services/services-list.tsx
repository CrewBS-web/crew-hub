import ServiceCard from "./services-card";
import { Service } from "@/types";

interface ServiceListProps {
  data: Service[];
  title?: string;
  limit?: number;
}

const ServiceList = ({ data, title, limit }: ServiceListProps) => {
  const limitedData = limit ? data.slice(0, 4) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-col-1 sm:grid-col-1 md:grid-cols-1 lg:grid-col-2 gap-4">
          {limitedData.map((service: Service, index) => (
            <ServiceCard service={service} key={service.name} index={index} />
          ))}
        </div>
      ) : (
        <div>
          <p>No service found</p>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
