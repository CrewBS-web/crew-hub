import StaffList from "@/components/shared/staff/staff-list";
import { getStaff } from "@/lib/actions/staff.actions";

const Staff = async () => {
  const staff = await getStaff();
  return <StaffList data={staff} />;
};

export default Staff;
