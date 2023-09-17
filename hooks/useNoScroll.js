import { useEffect } from "react";

function disableScroll() {
  document.body.classList.add("no-scroll");
}

function enableScroll() {
  document.body.classList.remove("no-scroll");
}

const useNoScroll = (value) => {
  useEffect(() => {
    if (value) disableScroll();
    else enableScroll();
    return enableScroll;
  }, [value]);
};

export default useNoScroll;
