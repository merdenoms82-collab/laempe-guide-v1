import { useEffect, useState } from "react";

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#/, "").trim();
  return hash || "home";
}

function getHashFromRoute(route) {
  return route === "home" ? "" : route;
}

export default function useHashRoute() {
  const [route, setRouteState] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRouteState(getRouteFromHash());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const setRoute = (nextRoute) => {
    const safeRoute = nextRoute || "home";
    const nextHash = getHashFromRoute(safeRoute);

    if (nextHash) {
      window.location.hash = nextHash;
    } else {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
      setRouteState("home");
      return;
    }

    setRouteState(safeRoute);
  };

  return {
    route,
    setRoute,
  };
}