import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sparkles } from "lucide-react";
import {
  KidsFadeUp,
  KidsPhoto
} from "@/components/shared/kids/kids-reveal";
import {
  KidsDoodleField,
  KidsDoodleRow
} from "@/components/shared/kids/kids-doodles";
import KidsBookButton from "@/components/shared/kids/kids-book-button";
import {
  KIDS_FEATURES,
  KIDS_LOCATION,
  KIDS_SERVICES
} from "@/lib/constants/kids";

export const metadata: Metadata = {
  title: "CREW kids — дитячий барбершоп",
  description:
    "Маленькі клієнти. Великий стиль. Дитячі стрижки з турботою, увагою до деталей та любов’ю до своєї справи."
};

const photoClass = "relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg";

const KidsPage = () => {
  return (
    <div className="relative isolate mx-auto flex max-w-5xl flex-col gap-16 py-4 md:gap-20">
      {/* ─── HERO ─── */}
      <KidsFadeUp className="relative flex flex-col items-center gap-4 text-center">
        <KidsDoodleField
          className="inset-0 hidden md:block"
          items={[
            { icon: "bear", x: "2%", y: "0%", size: 120, rotate: -12 },
            { icon: "star", x: "22%", y: "60%", size: 56, rotate: 14, accent: true, delay: 0.3 },
            { icon: "heart", x: "3%", y: "68%", size: 60, rotate: -16, accent: true, delay: 0.5 },
            { icon: "cat", x: "82%", y: "0%", size: 110, rotate: 10, delay: 0.2 },
            { icon: "paw", x: "76%", y: "62%", size: 70, rotate: 18, accent: true, delay: 0.4 },
            { icon: "star", x: "94%", y: "58%", size: 44, rotate: -10, accent: true, delay: 0.6 }
          ]}
        />
        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          Crew <span className="text-amber-400">kids</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
          Маленькі клієнти. Великий стиль.
        </p>
      </KidsFadeUp>
      <KidsDoodleRow icons={["bear", "star", "cat"]} />

      {/* ─── 1: photo left, intro text ─── */}
      <section className="relative flow-root">
        <KidsDoodleField
          className="bottom-0 right-0 hidden h-[40%] w-[54%] md:block"
          items={[
            { icon: "cat", x: "6%", y: "8%", size: 110, rotate: -8 },
            { icon: "star", x: "40%", y: "55%", size: 56, rotate: 12, accent: true, delay: 0.3 },
            { icon: "bear", x: "62%", y: "6%", size: 120, rotate: 10, delay: 0.15 },
            { icon: "heart", x: "22%", y: "62%", size: 60, rotate: -16, accent: true, delay: 0.5 },
            { icon: "paw", x: "84%", y: "62%", size: 60, rotate: 18, accent: true, delay: 0.4 }
          ]}
        />
        <KidsPhoto side="left">
          <div className={photoClass}>
            <Image
              src="/images/kids/kids-haircut.jpg"
              alt="Дитяча стрижка в CREW kids"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </KidsPhoto>
        <KidsFadeUp>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Стрижемо стильно.
            <br />
            Піклуємося по-дитячому.
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            Дитячі стрижки з турботою, увагою до деталей та любов’ю до своєї
            справи.
          </p>
        </KidsFadeUp>
        <KidsFadeUp delay={0.15}>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Наші майстри вміють знайти підхід до кожного малюка: без сліз і
            стресу, у веселій атмосфері та з мультиками. Щоб і дитина, і батьки
            йшли від нас із посмішкою.
          </p>
        </KidsFadeUp>
      </section>
      <KidsDoodleRow icons={["rabbit", "heart", "fish"]} />

      {/* ─── 2: photo right, features ─── */}
      <section className="relative flow-root">
        <KidsDoodleField
          className="bottom-0 left-0 hidden h-[44%] w-[54%] md:block"
          items={[
            { icon: "rabbit", x: "4%", y: "6%", size: 120, rotate: -8 },
            { icon: "paw", x: "44%", y: "50%", size: 66, rotate: 18, accent: true, delay: 0.3 },
            { icon: "fish", x: "56%", y: "4%", size: 110, rotate: 12, delay: 0.2 },
            { icon: "star", x: "22%", y: "72%", size: 52, rotate: -10, accent: true, delay: 0.5 },
            { icon: "cloud", x: "72%", y: "58%", size: 90, rotate: 0, delay: 0.4 }
          ]}
        />
        <KidsPhoto side="right">
          <div className={photoClass}>
            <Image
              src="/images/kids/kids-balloons.jpg"
              alt="Діти з кульками CREW kids"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </KidsPhoto>
        <KidsFadeUp>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Чому обирають нас
          </h2>
        </KidsFadeUp>
        <ul className="flex flex-col gap-4">
          {KIDS_FEATURES.map((feature, i) => (
            <li key={feature}>
              <KidsFadeUp delay={i * 0.1} className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 shrink-0 text-amber-400" />
                <span className="text-xl font-medium">{feature}</span>
              </KidsFadeUp>
            </li>
          ))}
        </ul>
      </section>
      <KidsDoodleRow icons={["cloud", "paw", "bear"]} />

      {/* ─── 3: photo left, services ─── */}
      <section className="relative flow-root">
        <KidsDoodleField
          className="bottom-0 right-0 hidden h-[28%] w-[54%] md:block"
          items={[
            { icon: "cloud", x: "4%", y: "10%", size: 100, rotate: 0 },
            { icon: "star", x: "40%", y: "40%", size: 54, rotate: 12, accent: true, delay: 0.3 },
            { icon: "cat", x: "62%", y: "0%", size: 100, rotate: 8, delay: 0.2 },
            { icon: "heart", x: "90%", y: "50%", size: 50, rotate: -12, accent: true, delay: 0.5 }
          ]}
        />
        <KidsPhoto side="left">
          <div className={photoClass}>
            <Image
              src="/images/kids/kids-wash.jpg"
              alt="Діти в барбершопі CREW kids"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </KidsPhoto>
        <KidsFadeUp>
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Послуги</h2>
        </KidsFadeUp>
        <ul className="flex flex-col">
          {KIDS_SERVICES.map((service, i) => (
            <li key={service.name}>
              <KidsFadeUp
                delay={i * 0.1}
                className="flex items-baseline justify-between gap-4 border-b border-black/10 py-4 dark:border-white/15"
              >
                <span className="text-lg">{service.name}</span>
                <span className="whitespace-nowrap text-lg font-semibold">
                  {service.price} грн
                </span>
              </KidsFadeUp>
            </li>
          ))}
        </ul>
        <KidsFadeUp delay={0.3} className="mt-8 flex justify-center md:justify-start">
          <KidsBookButton />
        </KidsFadeUp>
      </section>
      <KidsDoodleRow icons={["fish", "star", "rabbit"]} />

      {/* ─── LOCATION ─── */}
      <KidsFadeUp className="relative flex flex-col gap-4">
        <KidsDoodleField
          className="right-0 top-0 hidden h-24 w-1/2 md:block"
          items={[
            { icon: "bear", x: "20%", y: "-10%", size: 90, rotate: 10 },
            { icon: "heart", x: "58%", y: "30%", size: 50, rotate: -14, accent: true, delay: 0.3 },
            { icon: "rabbit", x: "76%", y: "-20%", size: 90, rotate: -6, delay: 0.2 }
          ]}
        />
        <h2 className="text-3xl font-bold md:text-4xl">Де нас знайти</h2>
        <Link
          href={KIDS_LOCATION.mapLink}
          target="_blank"
          className="flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground"
        >
          <MapPin className="h-5 w-5" /> {KIDS_LOCATION.address}
        </Link>
        <div className="overflow-hidden rounded-2xl border shadow-md">
          <iframe
            title="CREW kids на карті"
            src={KIDS_LOCATION.mapEmbed}
            className="h-80 w-full md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </KidsFadeUp>
    </div>
  );
};

export default KidsPage;
