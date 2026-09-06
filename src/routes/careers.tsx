import { Outlet, createFileRoute } from "@tanstack/react-router";

/** Layout for /careers and /careers/$slug — child routes render via Outlet. */
export const Route = createFileRoute("/careers")({
  component: CareersLayout,
});

function CareersLayout() {
  return <Outlet />;
}
