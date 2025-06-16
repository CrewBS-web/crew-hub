import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Location } from "@/types";
import { Textarea } from "@/components/ui/textarea";

interface LocationEditDialogProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  editLocation: Location | null;
  setEditLocation: (location: Location) => void;
  handleSave: () => void;
}

const LocationEditDialog = ({
  open,
  setOpen,
  editLocation,
  setEditLocation,
  handleSave
}: LocationEditDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">
            {editLocation?.id ? "Рeдагування локації" : "Створення локації"}
          </DialogTitle>
        </DialogHeader>

        {editLocation && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="name" className="mb-2">
                Назва локації
              </Label>
              <Input
                id="name"
                value={editLocation.name}
                onChange={(e) =>
                  setEditLocation({ ...editLocation, name: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="address" className="mb-2">
                Адреса
              </Label>
              <Textarea
                id="address"
                value={editLocation.address}
                onChange={(e) =>
                  setEditLocation({
                    ...editLocation,
                    address: e.target.value
                  })
                }
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="mapLink" className="mb-2">
                Посилання на мапу
              </Label>
              <Input
                id="mapLink"
                value={editLocation.mapLink}
                onChange={(e) =>
                  setEditLocation({
                    ...editLocation,
                    mapLink: e.target.value
                  })
                }
              />
            </div>
            <div>
              <Label htmlFor="reservationUrl" className="mb-2">
                Посилання на запис
              </Label>
              <Input
                id="reservationUrl"
                value={editLocation.reservationUrl}
                onChange={(e) =>
                  setEditLocation({
                    ...editLocation,
                    reservationUrl: e.target.value
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

export default LocationEditDialog;
