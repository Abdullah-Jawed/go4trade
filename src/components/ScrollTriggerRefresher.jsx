// ScrollTriggerRefresher.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresher() {
  const location = useLocation();

  useEffect(() => {
    // Delay the refresh slightly to let the DOM fully render
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      console.log("refreshed");
      
    }, 100); // You can adjust this delay as needed

    return () => clearTimeout(timeout);
  }, [location.pathname]); // Run on every route change

  return null;
}