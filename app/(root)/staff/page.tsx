import StaffList from "@/components/shared/staff/staff-list";
import { getStaff } from "@/lib/actions/staff.actions";
import Image from "next/image";

const Staff = async () => {
  const staff = await getStaff();
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/info-section/info-section-bg-2.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/75 dark:bg-black/70" />
      </div>
      <StaffList data={staff} />
    </div>
  );
};

export default Staff;
