import AdminNavBar from "@/components/shared/admin/nav-bar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <AdminNavBar />
      <main className="flex-1 wrapper">{children}</main>
    </div>
  );
}
