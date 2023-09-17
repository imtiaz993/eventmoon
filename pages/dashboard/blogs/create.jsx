import { AdminGuard } from "components";
import { SidebarLayout } from "layouts";
import { CreatePost as Content } from "contents/Dashboard";

function CreatePost() {
  return <Content />;
}

CreatePost.getLayout = function getLayout(page) {
  return (
    <AdminGuard>
      <SidebarLayout>{page}</SidebarLayout>
    </AdminGuard>
  );
};

export default CreatePost;
