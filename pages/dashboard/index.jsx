import { AdminGuard } from "components";
import { SidebarLayout } from "layouts";

function DashboardHome() {
  return <div>Dahsboard Home</div>;
}

DashboardHome.getLayout = function getLayout(page) {
  return (
    <AdminGuard>
      <SidebarLayout>{page}</SidebarLayout>
    </AdminGuard>
  );
};

export default DashboardHome;
