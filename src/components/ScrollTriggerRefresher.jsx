import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresher() {
  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Run after all images, fonts, etc. are fully loaded
    if (document.readyState === "complete") {
      handleRefresh();
    } else {
      window.addEventListener("load", handleRefresh);
    }

    return () => {
      window.removeEventListener("load", handleRefresh);
    };
  }, []);

  return null; // This component doesn't render anything
}