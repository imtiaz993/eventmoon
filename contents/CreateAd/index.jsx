import classNames from "classnames/bind";
import { createElement, useState } from "react";

// components
import { Navbar, Section } from "components";
import FirstView from "./FirstView/FirstView";
import SecondView from "./SecondView/SecondView";
// import ThirdView from "./ThirdView/ThirdView";

// styles
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const views = [FirstView, SecondView];

const CreateAdContent = () => {
  const [viewIndex, setViewIndex] = useState(0);
  const [formData, setFormData] = useState({
    adTitle: "",
    productBusiness: "",
    type: "",
    category: "",
    tags: [],
    locationDetails:"Local",
    locationName: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    isDisplayStartTime: false,
    timeZone: "",
    eventImage: "",
    summary: "",
    description: "",
  });


  const nextView = () => {
    setViewIndex((v) => {
      if (v + 1 < views?.length) return v + 1;
      else return v;
    });
  };

  const previousView = () => {
    setViewIndex((v) => {
      if (v - 1 >= 0) return v - 1;
      else return v;
    });
  };

  const handleSubmit=()=>{
    console.log(formData)
  }

  return (
    <>
      <Navbar />
      <Section wrapperClass={cx("section-wrapper")}>
        <div className={cx("create-event-root")}>
          {createElement(views[viewIndex], { formData, setFormData })}
          <div className={cx("navigation")}>
            <button className={cx("btn-secondary")} onClick={previousView}>
              {viewIndex !== 0 ? "Back" : "Cancel"}
            </button>
            <button className={cx("btn-primary")}   onClick={viewIndex !== views?.length - 1 ? nextView : handleSubmit}>
              {viewIndex !== views?.length - 1 ? "Next" : "Publish"}
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CreateAdContent;
