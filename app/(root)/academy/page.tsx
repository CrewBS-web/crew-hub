import SocialLinks from "@/components/shared/social-links";
import CallButton from "@/components/ui/call-button";

const Academy = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 p-8">
      <h1 className="text-2xl font-bold">Сторінка в розробці</h1>
      <p>
        За інформацією про навчання зателефонуйте нам або напишить в соц.
        мережах
      </p>
      <CallButton />
      <SocialLinks />
    </div>
  );
};

export default Academy;
