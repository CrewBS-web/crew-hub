import { getServices } from "@/lib/actions/product.actions";
import ServicesList from "@/components/shared/services/services-list";

const Services = async () => {
  const services = await getServices();
  return (
    <div>
      <ServicesList
        data={services}
        title="Послуги:"
        isAdmin={false}
      ></ServicesList>
    </div>
  );
};

export default Services;
