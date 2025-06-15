import AdminStaffView from "@/components/shared/admin/staff/admin-staff";
import { getStaff } from "@/lib/actions/staff.actions";

const AdminStaff = async () => {
  const staff = await getStaff();
  return (
    <div>
      <AdminStaffView staff={staff} />
    </div>
  );
};

export default AdminStaff;
