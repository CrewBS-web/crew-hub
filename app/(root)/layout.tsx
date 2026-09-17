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
      {/* ── ambient background orbs ──
          Radial gradients instead of `filter: blur()` — large-radius CSS
          blur tanks frame rate on older iOS/WebKit; a gradient fade gives a
          similar soft glow at a fraction of the render cost. */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] left-[5%]  w-[700px] h-[700px] rounded-full bg-radial from-violet-300/25 to-violet-300/0 dark:from-violet-800/15 dark:to-violet-800/0" />
        <div className="absolute top-[35%]  right-[-8%] w-[550px] h-[550px] rounded-full bg-radial from-sky-300/25    to-sky-300/0    dark:from-sky-800/15    dark:to-sky-800/0" />
        <div className="absolute bottom-[-5%] left-[25%] w-[500px] h-[500px] rounded-full bg-radial from-amber-200/25 to-amber-200/0 dark:from-amber-900/12 dark:to-amber-900/0" />
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
