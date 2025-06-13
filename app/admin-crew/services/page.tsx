import ServicesList from "@/components/shared/services/services-list";
import { getServices } from "@/lib/actions/product.actions";

const AdminServices = async () => {
  const services = await getServices();
  return (
    <div>
      <ServicesList
        data={services}
        title="Послуги:"
        isAdmin={true}
      ></ServicesList>
    </div>
  );
};

export default AdminServices;
