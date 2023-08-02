import React from "react";
import { SessionProvider } from "next-auth/react";

interface ReactProps {
  children: React.ReactNode;
}

export const Provider = ({ children }: ReactProps) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
};
