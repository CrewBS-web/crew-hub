import { Staff } from "@prisma/client";
import StaffCard from "./staff-card";

interface StaffListProps {
  data: Staff[];
}

const StaffList = ({ data }: StaffListProps) => {
  return (
    <div className="my-10">
      <h2 className="h3-bold mb-4 font-semibold">Майстри:</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-3 sm:gap-3 md:gap-6 items-stretch">
          {data.map((staff: Staff) => (
            <StaffCard {...staff} key={staff.id} />
          ))}
        </div>
      ) : (
        <div>
          <p>No Staff found</p>
        </div>
      )}
    </div>
  );
};

export default StaffList;
