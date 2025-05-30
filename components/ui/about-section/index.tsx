import Image from "next/image";

interface HeroOverlayProps {
  imageUrl: string;
  title: string;
  text: string;
  position?: "left" | "right"; // для десктопа
}

const HeroOverlay: React.FC<HeroOverlayProps> = ({
  imageUrl,
  title,
  text,
  position = "left"
}) => {
  const isLeft = position === "left";

  return (
    <div className="w-full">
      {/* --- MOBILE: Картинка сверху --- */}
      <div className="sm:hidden px-4">
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover [mask-image:linear-gradient(to_bottom,black,transparent)]"
            priority
          />

          {/* Мягкий градиент внизу — будто уходит в фон */}
          {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent via-white to-white dark:via-neutral-900 dark:to-neutral-900" /> */}
        </div>

        {/* Текст — слегка налазит на градиент */}
        <div className="-mt-16 px-2 relative z-10 dark:text-white text-black">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-base">{text}</p>
        </div>
      </div>
      {/* --- DESKTOP: Картинка + затемнение + текст сбоку --- */}
      <div className="hidden sm:block relative w-full h-[600px] overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />

        {/* Основной градиент слева или справа */}
        <div
          className={`
            sm:hidden
            absolute inset-0 z-10
            bg-gradient-to-${isLeft ? "r" : "l"}
            from-black/80 via-black/50 to-transparent
          `}
        />

        {/* Тёмная область под текстом — только половина */}
        <div
          className={`
            absolute top-0 bottom-0 z-20 w-full
            ${isLeft ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l"}
           from-black/90 via-black/70 to-black/0
         `}
        />

        {/* Текст поверх */}
        <div className="absolute inset-0 z-30 flex items-center px-12">
          <div
            className={`w-1/2 l:w-1-3 text-white ${
              isLeft ? "text-left" : "text-right ml-auto"
            }`}
          >
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            <p className="text-lg">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay;
