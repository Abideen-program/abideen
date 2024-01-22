import { LayoutProps } from "@/types";

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`w-full h-full inline-block bg-light dark:bg-dark p-8 lg:px-32 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
