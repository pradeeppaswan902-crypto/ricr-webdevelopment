import React, { useState } from "react";
import UserSideBar from "../../components/userDashboard/UserSideBar";
import UserOverview from "../../components/userDashboard/userOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrders from "../../components/userDashboard/UserOrders";

import UserHelpDesk from "../../components/userDashboard/UserHelpDesk";
import UserTransactions from "../../components/userDashboard/UserTransactions";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="bg-(--color-background) w-2/10">
          <UserSideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-amber-700 w-8/10">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions/>}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;

