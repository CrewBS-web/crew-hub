import { getLocations } from "@/lib/actions/location.actions";

import InfoSection from "@/components/shared/info-section";
import Location from "@/components/shared/location";
import Logo from "@/components/shared/logo";
import ContactSection from "@/components/shared/contact-section";

const Homepage = async () => {
  const locations = await getLocations();
  return (
    <div className="flex flex-col gap-12">
      <div className="relative overflow-hidden rounded-lg min-h-96">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute top-0 left-0 w-full h-full object-cover z-0
            scale-[1.1] md:scale-[1] xl:scale-[1]
            object-[center_60%]
            rounded-lg
          "
        >
          <source src="/images/crew-info-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45 z-10  min-h-96" />
        <div className="relative z-10 flex items-center justify-center flex-col gap-6 p-12 bg-black/50 min-h-96">
          <Logo height={208} width={208} fixColor={true} />
          <p className="text-lg text-center font-semibold text-white">
            Мережа барбершопів де працюють ті, хто знає, що таке чоловічий
            стиль.
          </p>
        </div>
      </div>
      <ContactSection />
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
