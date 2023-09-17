import Content from "contents/SearchContent";

// layouts
import { BottomNavigationLayout } from "layouts";

// components
import { Seo } from "components";

export default function Search() {
  return (
    <>
      <Seo title="Event Moon | Search" />
      <Content />
    </>
  );
}

Search.getLayout = function getLayout(page) {
  return <BottomNavigationLayout>{page}</BottomNavigationLayout>;
};
