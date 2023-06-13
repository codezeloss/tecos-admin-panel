import { Outlet } from "react-router-dom";

interface Props {
  title: string;
}

function LayoutDashPage({ title }: Props) {
  return (
    <main>
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <Outlet />
    </main>
  );
}

export default LayoutDashPage;
