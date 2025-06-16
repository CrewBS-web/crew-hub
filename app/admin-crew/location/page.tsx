import { getLocations } from "@/lib/actions/location.actions";
import AdminLocationView from "@/components/shared/admin/location/admin-location";

const AdminLocation = async () => {
  const locations = await getLocations();
  return (
    <div>
      <AdminLocationView locations={locations} />
    </div>
  );
};

export default AdminLocation;
