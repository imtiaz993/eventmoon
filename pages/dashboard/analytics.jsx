import { AdminGuard } from "components";
import { SidebarLayout } from "layouts";

function AnalyticsPage() {
  return <div>Analytics Page</div>;
}

AnalyticsPage.getLayout = function getLayout(page) {
  return (
    <AdminGuard>
      <SidebarLayout>{page}</SidebarLayout>
    </AdminGuard>
  );
};

export default AnalyticsPage;
