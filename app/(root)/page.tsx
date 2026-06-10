import InfoSection from "@/components/shared/info-section";
import Logo from "@/components/shared/logo";
import ContactSection from "@/components/shared/contact-section";
import { getStaff } from "@/lib/actions/staff.actions";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HomeStatsStrip from "@/components/shared/home-stats-strip";
import HomeStaffPreview from "@/components/shared/home-staff-preview";

const Homepage = async () => {
  const staff = await getStaff();

  return (
    <div className="flex flex-col gap-0">
      {/* ─── HERO ────────────────────────────────────────────────── */}
      <section className="relative -mx-5 md:-mx-10 -mt-5 md:mt-0 overflow-hidden min-h-[90vh] md:min-h-[420px] flex items-center justify-center md:rounded-lg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_60%]"
        >
          <source src="/images/crew-info-vid.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
          <Logo height={160} width={160} fixColor={true} />
          <p className="text-base md:text-xl text-white/80 max-w-lg font-light tracking-widest uppercase">
            Мережа барбершопів де працюють ті, хто знає, що таке чоловічий стиль
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40 text-lg">
          ↓
        </div>
      </section>

      {/* ─── STATS STRIP ─────────────────────────────────────────── */}
      <HomeStatsStrip />

      {/* ─── CONTACT CTA ─────────────────────────────────────────── */}
      <div className="py-6">
        <ContactSection />
      </div>

      {/* ─── INFO SECTIONS ───────────────────────────────────────── */}
      <div className="py-8">
        <InfoSection />
      </div>

      {/* ─── STAFF PREVIEW ───────────────────────────────────────── */}
      {staff.length > 0 && (
        <section className="py-12 px-6 md:px-10 mt-8 border-t border-white/10 relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/info-section/info-section-bg-2.jpg" alt="" fill className="object-cover scale-110" style={{ filter: "blur(14px)" }} />
            <div className="absolute inset-0 bg-white/65 dark:bg-black/45" />
          </div>
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">Наша команда</h2>
            <Link
              href="/staff"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Всі майстри <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <HomeStaffPreview staff={staff} />
        </section>
      )}

      {/* ─── MOOD GALLERY ────────────────────────────────────────── */}
      <section className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Атмосфера</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
          {[
            { src: "/images/info-section/info-section-bg-1.jpg", tall: true },
            { src: "/images/info-section/info-section-bg-2.jpg", tall: false },
            { src: "/images/info-section/info-section-bg-3.jpg", tall: false },
            { src: "/images/info-section/info-section-bg-1-b.jpg", tall: false },
            { src: "/images/info-section/info-section-bg.jpg", tall: false },
            { src: "/images/articles/article-b-1.jpg", tall: false },
          ].map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm group"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={item.src}
                alt="Crew atmosphere"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
