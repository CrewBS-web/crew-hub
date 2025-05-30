import Header from "@/components/shared/header";
import Footer from "@/components/footer";
import NavBar from "@/components/shared/nav-bar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <NavBar />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
