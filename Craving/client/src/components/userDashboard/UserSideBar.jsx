import React, { useState } from "react";
import { TbChartTreemap } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { TbTransactionRupee } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const UserSideBar = ({ active, setActive }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`h-90 transition-all duration-300 bg-(--color-background) shadow-md
      ${open ? "w-[270px]" : "w-[60px]"} p-3`}
    >
      <div className="text-xl font-bold flex items-center gap-2 mb-4">
        <span onClick={() => setOpen(!open)} className="cursor-pointer">
          <MdMenu />
        </span>
        {open && "User Dashboard"}
      </div>

      <hr />

      <div className="grid gap-3 mt-4">
        <button
          onClick={() => setActive("overview")}
          className={`flex items-center gap-3 p-3 rounded-xl
          ${
            active === "overview"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <TbChartTreemap />
          {open && "Overview"}
        </button>

        <button
          onClick={() => setActive("profile")}
          className={`flex items-center gap-3 p-3 rounded-xl
          ${
            active === "profile"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <ImProfile />
          {open && "Profile"}
        </button>

        <button
          onClick={() => setActive("orders")}
          className={`flex items-center gap-3 p-3 rounded-xl
          ${
            active === "orders"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <TiShoppingCart />
          {open && "Orders"}
        </button>

        <button
          onClick={() => setActive("transactions")}
          className={`flex items-center gap-3 p-3 rounded-xl
          ${
            active === "transactions"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <TbTransactionRupee />
          {open && "Transactions"}
        </button>

        <button
          onClick={() => setActive("helpdesk")}
          className={`flex items-center gap-3 p-3 rounded-xl
          ${
            active === "helpdesk"
              ? "bg-(--color-secondary) text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <RiCustomerService2Fill />
          {open && "Help Desk"}
        </button>
      </div>
    </div>
  );
};

export default UserSideBar;
