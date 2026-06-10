"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import {
  updateStaff,
  createStaff,
  deleteStaff
} from "@/lib/actions/staff.actions";
import { Staff } from "@/types";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

import StaffEditDialog from "./staff-edit-dialog";
import StaffList from "../../staff/staff-list";

interface AdminServicesProps {
  staff: Staff[];
}

export default function AdminStaffView({ staff }: AdminServicesProps) {
  const [editStaff, setEditStaff] = useState<Staff | null>(null);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isNew, setIsNew] = useState(false);

  const router = useRouter();

  const emptyStaff: Omit<Staff, "id"> = {
    name: "",
    description: "",
    description_short: "",
    isSenior: false,
    isArtDirector: false,
    isBarber: false,
    images: "",
    slug: "",
    reserve_link: ""
  };

  const handleDelete = (id: string) => {
    if (isPending) return;
    startTransition(() => {
      deleteStaff(id).then(() => {
        router.refresh();
      });
    });
  };

  const handleEdit = (staff: Staff) => {
    setIsNew(false);
    setEditStaff(staff);
    if (!staff.id) {
      setIsNew(true);
    }
    setOpen(true);
  };

  const handleSave = async () => {
    setOpen(false);
    if (editStaff?.isArtDirector) editStaff.isSenior = true;
    if (!isNew && editStaff) {
      updateStaff(editStaff).then(() => {
        router.refresh();
      });
    } else if (isNew && editStaff) {
      createStaff(editStaff).then(() => {
        router.refresh();
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-12">
      <Button onClick={() => handleEdit(emptyStaff as Staff)} className="w-1/3">
        <CirclePlus />
        Додати майстра
      </Button>
      <StaffList
        data={staff}
        isAdmin={true}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <StaffEditDialog
        open={open}
        setOpen={setOpen}
        editStaff={editStaff}
        setEditStaff={setEditStaff}
        handleSave={handleSave}
      />
    </div>
  );
}
