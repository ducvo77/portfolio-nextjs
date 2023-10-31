interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <main className={`flex text-dark bg-light w-full px-32 ${className}`}>
      {children}
    </main>
  );
};

export default MainLayout;
