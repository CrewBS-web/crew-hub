import Image from "next/image";
import NotFoundPage from "@/app/not-found";
import { getStaffById } from "@/lib/actions/staff.actions";
import BackButton from "@/components/ui/back-button";

interface StaffPageProps {
  params: Promise<{ id: string }>;
}

const StaffPage = async ({ params }: StaffPageProps) => {
  const { id } = await params;

  const staff = await getStaffById(id);

  if (!staff) return <NotFoundPage />;

  return (
    <div>
      <BackButton />
      <div className="max-w-3xl mx-auto p-6 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
          <div className="relative rounded-full border-2 border-white h-42 w-42 overflow-hidden shrink-0">
            <Image
              src={staff.images}
              alt={staff.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{staff.name}</h1>
            <p className="text-gray-500 mb-2">
              {staff.isSenior ? "Senior" : "Expert"}
            </p>
          </div>
        </div>
        <p className="text-lg">{staff.description}</p>
      </div>
    </div>
  );
};

export default StaffPage;
