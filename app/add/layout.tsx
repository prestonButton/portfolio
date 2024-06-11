import checkLoginStatus from "../globalActions";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkLoginStatus();

  return <>{children}</>;
}
