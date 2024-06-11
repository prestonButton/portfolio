import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import checkLoginStatus from "./globalActions";

const Page = async () => {
  await checkLoginStatus();

  const loginAction = async (formData: FormData) => {
    "use server";

    const cookiesStore = cookies();

    const rawFormData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const username = rawFormData.username;
    const password = rawFormData.password;

    //implement more robust authentication here
    console.table(rawFormData);
    if (username && password) {
      cookiesStore.set("auth", "true");
    }

    //On successful auth
    redirect("/add");
  };
  return (
    <form
      action={loginAction}
      autoComplete="off"
      className="flex flex-col gap-2 p-4 w-72"
    >
      <label htmlFor="username" className="flex flex-col text-sm">
        Username
        <input
          id="username"
          name="username"
          type="text"
          className="bg-transparent border border-gray-700 p-2 focus:outline-none"
        />
      </label>
      <label htmlFor="password" className="flex flex-col text-sm">
        Password
        <input
          id="password"
          name="password"
          type="password"
          className="bg-transparent border border-gray-700 p-2 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="bg-gray-700 px-3 py-2 active:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
};

export default Page;
