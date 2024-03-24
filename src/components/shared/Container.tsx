import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-2" style={{ maxWidth: "1250px", margin: "auto" }}>
      {children}
    </div>
  );
};

export default Container;
