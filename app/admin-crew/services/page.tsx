import AdminServicesView from "@/components/shared/admin/service/admin-service";
import { getServices } from "@/lib/actions/product.actions";

const AdminServices = async () => {
  const services = await getServices();
  return (
    <div>
      <AdminServicesView services={services} />
    </div>
  );
};

export default AdminServices;
