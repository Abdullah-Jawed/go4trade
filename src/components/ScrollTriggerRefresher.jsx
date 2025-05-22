// ScrollTriggerRefresher.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresher() {
    const location = useLocation();

    useEffect(() => {
        const handleRefresh = () => {
            ScrollTrigger.refresh();
            console.log("refreshed");

        };

        if (document.readyState === "complete") {
            const timeout = setTimeout(() => {
                handleRefresh();
            }, 800);
        } else {
            window.addEventListener("load", handleRefresh);
        }

        return () => {
            window.removeEventListener("load", handleRefresh);
        };
    }, [location.pathname]);

    return null;
}