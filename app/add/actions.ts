"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const checkLoginStatus = async () => {
  const cookiesStore = cookies();

  const isLoggedIn = cookiesStore.get("auth");

  if (!isLoggedIn) {
    redirect("/");
  }
};

export default checkLoginStatus;
