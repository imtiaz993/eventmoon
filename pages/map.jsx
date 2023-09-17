import MapContent from "contents/MapContent";

// layouts
import { BottomNavigationLayout } from "layouts";

// components
import { Seo } from "components";

export default function MapPage() {
  return (
    <>
      <Seo title="Event Moom | Map" />
      <MapContent />
    </>
  );
}

MapPage.getLayout = function getLayout(page) {
  return <BottomNavigationLayout>{page}</BottomNavigationLayout>;
};
