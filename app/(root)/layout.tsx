import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import NavBar from "@/components/shared/nav-bar";
import FabBook from "@/components/shared/book-popup/fab-book";
import BookPopupContent from "@/components/shared/book-popup/popup-content";

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
      <FabBook>
        <BookPopupContent />
      </FabBook>
    </div>
  );
}
