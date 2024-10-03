import { useEffect } from "react";
import ReactGA from "react-ga4";
import Home from "./Home/Home";
import { useLocation } from "react-router-dom";

function App() {
  
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics using the Measurement ID
    ReactGA.initialize("G-E9L51EH672");

    // Send a pageview for the initial page load
    ReactGA.send("pageview");

    // Send a pageview whenever the URL changes
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
