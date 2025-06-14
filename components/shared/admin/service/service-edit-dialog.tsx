import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Service } from "@/types";

interface ServiceEditDialogProps {
  open: boolean;
  setOpen: () => void;
  editService: Service | null;
  setEditService: (service: Service) => void;
  handleSave: () => void;
}

const ServiceEditDialog = ({
  open,
  setOpen,
  editService,
  setEditService,
  handleSave
}: ServiceEditDialogProps) => {
  return (
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
  );
};

export default ServiceEditDialog;
