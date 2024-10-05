import Header from "@/components/header/Header";
import React, { FC } from "react";

const layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default layout;
