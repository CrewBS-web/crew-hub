import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PenLineIcon } from "lucide-react";
import { getLocations } from "@/lib/actions/location.actions";
import Location from "../location";
import SocialLinks from "../social-links";
import CallButton from "@/components/ui/call-button";

const BookPopUp = async () => {
  const locations = await getLocations();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"long"} variant={"book"}>
          <PenLineIcon /> ЗАПИС
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col max-h-[90vh] gap-0">
        {/* Fixed Header */}
        <DialogHeader className="shrink-0 border-b-2 pb-4">
          <DialogTitle className="text-2xl">Запис</DialogTitle>
          <DialogDescription>
            Оберіть один із наших барбершопів, у який ви хочете завітати, або
            зв’яжіться з нами телефоном чи через соцмережі.
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="overflow-y-auto py-4 flex flex-col gap-3 flex-1">
          {locations.map((l, index) => (
            <Location
              key={index}
              name={l.name}
              mapLink={l.mapLink}
              address={l.address}
              reservationUrl={l.reservationUrl}
            />
          ))}
        </div>

        {/* Optional Fixed Footer */}
        <div className="flex justify-center border-t-2 pt-4 flex-col items-center gap-3">
          <CallButton />
          <SocialLinks />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookPopUp;
