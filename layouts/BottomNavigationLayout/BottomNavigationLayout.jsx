import { useNoScroll } from "hooks";
import { useState, useEffect } from "react";

// components
import { BottomBar, Notification } from "components";

const BottomNavigationLayout = ({ children }) => {
  const [isMobView, setIsMobView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    listenToResize();

    window.addEventListener("resize", listenToResize);

    return () => window.removeEventListener("resize", listenToResize);
  }, []);

  const listenToResize = () => {
    if (window.innerWidth < 640) setIsMobView(true);
    else {
      if (isMobView) setIsMobView(false);
    }
  };

  useNoScroll(isOpen);

  return (
    <div>
      {children}
      {isMobView && <BottomBar openNotifications={() => setIsOpen(true)} />}
      {isMobView && (
        <Notification isOpen={isOpen} setIsOpen={setIsOpen} isMobView />
      )}
    </div>
  );
};

export default BottomNavigationLayout;
