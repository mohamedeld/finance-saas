import { Header } from "@/components/Header";

type RootLayoutProps = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
