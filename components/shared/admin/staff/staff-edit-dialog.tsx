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

import Image from "next/image";

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
              <Label htmlFor="slug" className="mb-2">
                slug
              </Label>
              <Input
                id="slug"
                value={editStaff.slug || ""}
                onChange={(e) =>
                  setEditStaff({ ...editStaff, slug: e.target.value })
                }
                placeholder="unique-slug"
              />
            </div>

            <div>
              <Label htmlFor="reserve_link" className="mb-2">
                Посилання для запису
              </Label>
              <Input
                id="reserve_link"
                value={editStaff.reserve_link || ""}
                onChange={(e) =>
                  setEditStaff({ ...editStaff, reserve_link: e.target.value })
                }
                placeholder="https://..."
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
                placeholder="Опис майстра"
              />
            </div>
            <div className="flex gap-4 items-center flex-wrap">
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
                  <Label htmlFor="isSenior">Старший експерт</Label>
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
              {!editStaff.isArtDirector && !editStaff.isSenior && (
                <div className="flex justify-start gap-2">
                  <Label htmlFor="isBarber">Барбер</Label>
                  <Checkbox
                    id="isBarber"
                    checked={editStaff.isBarber}
                    onCheckedChange={(checked) =>
                      setEditStaff({
                        ...editStaff,
                        isBarber: Boolean(checked)
                      })
                    }
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col justify-start gap-2">
              {" "}
              <Label htmlFor="staff-image">Фото</Label>
              <div className="flex flex-col justify-center items-center border-gray border-2 p-4 gap-2 rounded-lg">
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
                  appearance={{
                    button:
                      "bg-black dark:bg-white text-white dark:text-black rounded-md px-4 py-2 cursor-pointer"
                  }}
                  content={{
                    button: ({ isUploading }) =>
                      isUploading ? "Завантаження..." : "Оберіть файл"
                  }}
                />
                {editStaff.images && (
                  <div className="relative w-48 h-48 mb-4 border rounded-md overflow-hidden">
                    <Image
                      src={editStaff.images}
                      alt="Перегляд"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      priority
                    />
                  </div>
                )}
              </div>
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
