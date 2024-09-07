import React from "react";
import { Outlet } from "react-router-dom";
import { TopBar } from "../navigation/TopBar";
import { BottomBar } from "./BottomBar";

export const Layout = () => (
  <>
    <TopBar />
    <Outlet />
    <BottomBar />
  </>
);
