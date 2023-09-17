import React from "react";

// components
import { Navbar, Seo } from "components";
import Content from "contents/ProfileContent";

const Profile = () => {
  return (
    <div>
      <Seo title="Event Moon | Profile" />
      <Navbar isMobHide />
      <Content />
    </div>
  );
};

export default Profile;
