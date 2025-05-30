import InfoSection from "@/components/shared/info-section";
import Location from "@/components/shared/location";
import SocialLinks from "@/components/shared/social-links";
import CallButton from "@/components/ui/call-button";
import { getLocations } from "@/lib/actions/location.actions";

const Homepage = async () => {
  const locations = await getLocations();
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center flex-col gap-6 p-12 border-b-2">
        <h1 className="text-4xl font-bold">CREW-hub</h1>
        <p className="text-l text-center">
          Мережа барбершопів де працюють ті, хто знає, що таке чоловічий стиль.
        </p>
        <CallButton />
        <SocialLinks />
      </div>
      <InfoSection />
      <div className="pt-8 border-t-1 border-grey">
        <h2 className="text-xl font-bold">Де нас знайти:</h2>
        <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-3">
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
      </div>
    </div>
  );
};

export default Homepage;
