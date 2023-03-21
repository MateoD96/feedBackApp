import { useState } from "react";

function useActive(active = false) {
  const [open, setActive] = useState(active);

  const fnOpen = () => setActive(true);
  const fnClose = () => setActive(false);

  return {
    fnOpen,
    fnClose,
    open,
  };
}

export default useActive;
