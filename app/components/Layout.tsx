interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex text-dark bg-light w-full min-h-screen px-32">
      {children}
    </main>
  );
};

export default Layout;
