import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
