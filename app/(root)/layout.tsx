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
