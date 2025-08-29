import {
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { getLocations } from "@/lib/actions/location.actions";
import Location from "../location";
import SocialLinks from "../social-links";
import CallButton from "@/components/ui/call-button";

// Server component: only renders the inner content of the booking dialog
const BookPopupContent = async () => {
  const locations = await getLocations();

  return (
    <>
      <DialogHeader className="shrink-0 border-b-2 pb-4">
        <DialogTitle className="text-2xl">Запис</DialogTitle>
        <DialogDescription>
          Оберіть один із наших барбершопів, у який ви хочете завітати, або
          зв’яжіться з нами телефоном чи через соцмережі.
        </DialogDescription>
      </DialogHeader>

      <div className="overflow-y-auto py-4 flex-1 grid grid-cols-2 gap-1.5 items-start">
        {locations.map((l, index) => (
          <Location
            key={index}
            name={l.name}
            mapLink={l.mapLink}
            address={l.address}
            reservationUrl={l.reservationUrl}
            compact
            noHoverAction
            className="place-self-start overflow-hidden"
            style={{ maxHeight: 172 }}
          />
        ))}
      </div>

      <div className="flex justify-center border-t-2 pt-4 flex-col items-center gap-3">
        <CallButton />
        <SocialLinks />
      </div>
    </>
  );
};

export default BookPopupContent;
