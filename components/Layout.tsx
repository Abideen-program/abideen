import { LayoutProps } from "@/types";

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`w-full h-full inline-block bg-light p-32 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
