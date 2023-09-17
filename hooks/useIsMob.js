import { useState, useEffect } from "react";

export function useIsMob(_breakpoint = 640) {
  const [isMob, setIsMob] = useState(false);

  function handleResize() {
    setIsMob(window.innerWidth <= _breakpoint);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMob;
}
