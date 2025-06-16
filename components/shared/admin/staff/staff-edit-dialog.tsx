"use client";

import { Staff } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { UploadButton } from "@/lib/uploadthings";

interface StaffEditDialogProps {
  open: boolean;
  setOpen: (state: boolean) => void;
  editStaff: Staff | null;
  setEditStaff: (service: Staff) => void;
  handleSave: () => void;
}

const StaffEditDialog = ({
  open,
  setOpen,
  editStaff,
  setEditStaff,
  handleSave
}: StaffEditDialogProps) => {
  //const image = form.watch('')
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">
            {editStaff?.id
              ? "Рeдагування картки майстра"
              : "Створення картки майстра"}
          </DialogTitle>
        </DialogHeader>

        {editStaff && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="flex flex-col gap-4"
          >
            <div>
              <Label htmlFor="name" className="mb-2">
                {"Ім'я"}
              </Label>
              <Input
                id="name"
                value={editStaff.name}
                onChange={(e) =>
                  setEditStaff({ ...editStaff, name: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="description_short" className="mb-2">
                Короткий опис
              </Label>
              <Input
                id="description_short"
                value={editStaff.description_short}
                onChange={(e) =>
                  setEditStaff({
                    ...editStaff,
                    description_short: e.target.value
                  })
                }
              />
            </div>

            <div>
              <Label htmlFor="desc" className="mb-2">
                Опис
              </Label>
              <Textarea
                id="desc"
                value={editStaff.description}
                onChange={(e) =>
                  setEditStaff({
                    ...editStaff,
                    description: e.target.value
                  })
                }
                rows={4}
                placeholder="Опис послуги..."
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex justify-start gap-2">
                <Label htmlFor="isArtDirector">Арт директор</Label>
                <Checkbox
                  id="isArtDirector"
                  checked={editStaff.isArtDirector}
                  onCheckedChange={(checked) => {
                    setEditStaff({
                      ...editStaff,
                      isArtDirector: Boolean(checked)
                    });
                  }}
                />
              </div>
              {!editStaff.isArtDirector && (
                <div className="flex justify-start gap-2">
                  <Label htmlFor="isSenior">Кваліфікація старший експерт</Label>
                  <Checkbox
                    id="isSenior"
                    checked={editStaff.isSenior}
                    onCheckedChange={(checked) =>
                      setEditStaff({
                        ...editStaff,
                        isSenior: Boolean(checked)
                      })
                    }
                  />
                </div>
              )}
            </div>

            <div className="flex justify-start gap-2">
              <Label htmlFor="desc">Фото</Label>
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  setEditStaff({
                    ...editStaff,
                    images: res[0].ufsUrl
                  });
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
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

export default StaffEditDialog;
