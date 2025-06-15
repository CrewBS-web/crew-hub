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
import { Textarea } from "@/components/ui/textarea";

interface ServiceEditDialogProps {
  open: boolean;
  setOpen: (state: boolean) => void;
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
          <DialogTitle className="mb-4">
            {editService?.id ? "Рeдагування послуги" : "Створення послуги"}
          </DialogTitle>
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
              <Label htmlFor="name" className="mb-2">
                Назва послуги
              </Label>
              <Input
                id="name"
                value={editService.name}
                onChange={(e) =>
                  setEditService({ ...editService, name: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="desc" className="mb-2">
                Опис
              </Label>
              <Textarea
                id="desc"
                value={editService.description}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    description: e.target.value
                  })
                }
                rows={4}
                placeholder="Опис послуги..."
              />
            </div>
            <div>
              <Label htmlFor="duration" className="mb-2">
                Час в хвилинах
              </Label>
              <Input
                id="duration"
                type="number"
                value={editService.duration}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    duration: +e.target.value
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="price" className="mb-2">
                Ціна Expert
              </Label>
              <Input
                id="price"
                type="number"
                value={editService.price}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    price: +e.target.value
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="senior_price" className="mb-2">
                Ціна Senior
              </Label>
              <Input
                id="senior_price"
                type="number"
                value={editService.senior_price}
                onChange={(e) =>
                  setEditService({
                    ...editService,
                    senior_price: +e.target.value
                  })
                }
              />
            </div>
            <Button type="submit" className="mt-4">
              Зберігти
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ServiceEditDialog;
