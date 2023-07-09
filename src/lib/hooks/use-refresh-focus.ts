// src/app/components/refresh-on-focus.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useRefreshOnFocus() {
  const { refresh } = useRouter();

  useEffect(() => {
    const onFocus = () => {
      refresh();
    };

    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, [refresh]);

  return null;
}

export default useRefreshOnFocus;
