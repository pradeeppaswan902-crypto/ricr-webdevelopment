import React, { useState } from "react";
import ResturantSideBar from "../../components/ResturantDashboard/ResturantSideBar";
import ResturantOverview from "../../components/ResturantDashboard/ResturantOverview"; // example component
import ResturantProfile from "../../components/ResturantDashboard/ResturantProfile"; // example
import ResturantOrders from "../../components/ResturantDashboard/ResturantOrders"; // example

const ResturantDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-full h-[90vh] flex">
      {/* Sidebar */}
      <div
        className={`bg-[var(--color-background)] transition-all duration-300 ${
          isCollapsed ? "w-[5%]" : "w-[20%]"
        }`}
      >
        <ResturantSideBar
          active={active}
          setActive={setActive}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "w-[95%]" : "w-[80%]"
        }`}
      >
        {active === "overview" && <ResturantOverview />}
        {active === "profile" && <ResturantProfile />}
        {active === "orders" && <ResturantOrders />}
        {active ===""}
      </div>
    </div>
  );
};

export default ResturantDashboard;
