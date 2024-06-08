import checkLoginStatus from "./actions";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkLoginStatus();

  return <>{children}</>;
}
