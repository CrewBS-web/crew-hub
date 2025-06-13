"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteService } from "@/lib/actions/product.actions";
import { Service } from "@/types";
import ServicesList from "@/components/shared/services/services-list";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AdminServicesProps {
  services: Service[];
}

export default function AdminServices({ services }: AdminServicesProps) {
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Редактировать услугу</DialogTitle>
          </DialogHeader>

          {editService && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <Label htmlFor="name">Назва послуги</Label>
                <Input
                  id="name"
                  value={editService.name}
                  onChange={(e) =>
                    setEditService({ ...editService, name: e.target.value })
                  }
                />
              </div>

              <div>
                <Label htmlFor="desc">Описание</Label>
                <Input
                  id="desc"
                  value={editService.description}
                  onChange={(e) =>
                    setEditService({
                      ...editService,
                      description: e.target.value
                    })
                  }
                />
              </div>

              <Button type="submit">Зберігти</Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
