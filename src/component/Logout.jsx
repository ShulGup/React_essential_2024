import { redirect } from "react-router";

export function authLogout() {
  localStorage.removeItem("token");
  redirect("/");
}
