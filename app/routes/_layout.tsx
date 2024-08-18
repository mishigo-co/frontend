import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";

export default function layout() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}
