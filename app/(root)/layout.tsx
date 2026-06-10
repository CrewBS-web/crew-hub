import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import FabBook from "@/components/shared/book-popup/fab-book";
import Script from "next/script";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col mt-18">
      {/* ── ambient background orbs ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-[5%]  w-[700px] h-[700px] rounded-full bg-violet-300/15 dark:bg-violet-800/10 blur-[140px]" />
        <div className="absolute top-[35%]  right-[-8%] w-[550px] h-[550px] rounded-full bg-sky-300/15    dark:bg-sky-800/10    blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[25%] w-[500px] h-[500px] rounded-full bg-amber-200/15 dark:bg-amber-900/8   blur-[110px]" />
      </div>
      <Header />
      <NavBar />
      <main className="flex-1 wrapper flex-grow">{children}</main>
      <Footer />
      <Script id="alteg-widget-options" strategy="beforeInteractive">
        {`window.yWidgetSettings = window.yWidgetSettings || {}; window.yWidgetSettings.buttonAutoShow = false; window.widgetOptions = window.widgetOptions || {}; window.widgetOptions.buttonAutoShow = false;`}
      </Script>
      <Script
        src="https://w816066.alteg.io/widgetJS"
        strategy="afterInteractive"
        charSet="UTF-8"
      />
      <FabBook />
    </div>
  );
}
