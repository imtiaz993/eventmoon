import { useRouter } from "next/router";
import { useEffect } from "react";

function DashboardBlogs() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/blogs/posts");
  }, [router]);
  return <div>Redirecting to /dashboard/blogs/posts</div>;
}

export default DashboardBlogs;
