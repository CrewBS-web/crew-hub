"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteService } from "@/lib/actions/product.actions";
import { Service } from "@/types";
import ServicesList from "@/components/shared/services/services-list";
import ServiceEditDialog from "./service-edit-dialog";

interface AdminServicesProps {
  services: Service[];
}

export default function AdminServicesView({ services }: AdminServicesProps) {
  const [editService, setEditService] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = (id: string) => {
    if (isPending) return;
    startTransition(() => {
      deleteService(id).then(() => {
        router.refresh();
      });
    });
  };

  const handleEdit = (service: Service) => {
    setEditService(service);
    setOpen(true);
  };

  const handleSave = () => {
    debugger;
    console.log("Сохраняем изменения:", editService);
    setOpen(false);
    // можно вызвать updateService(...) здесь
  };

  return (
    <div>
      <ServicesList
        data={services}
        title="Послуги:"
        isAdmin={true}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <ServiceEditDialog
        open={open}
        setOpen={() => setOpen}
        editService={editService}
        setEditService={() => setEditService}
        handleSave={() => handleSave}
      />
    </div>
  );
}
