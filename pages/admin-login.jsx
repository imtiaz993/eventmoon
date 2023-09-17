import { useRouter } from "next/router";

// components
import { AdminLogin as Content } from "contents/Dashboard";

function AdminLoginPage() {
  const { query } = useRouter();

  return <Content backTo={query.backTo || "/dashboard"} />;
}

export default AdminLoginPage;
