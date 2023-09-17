import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { AdminAuthContext } from "context/AdminAuthContext";

export default function AdminGuard({ children }) {
  const { isAuthenticated, isInitialized } = useContext(AdminAuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!isInitialized) return;

    if (!isAuthenticated) {
      router.push({
        pathname: "/admin-login",
        query: { backTo: router.pathname },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInitialized]);

  if (!isAuthenticated) return null;

  return <React.Fragment>{children}</React.Fragment>;
}
