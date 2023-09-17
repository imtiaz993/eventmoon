import classNames from "classnames/bind";

// styles
import styles from "../styles.module.scss";

// components
import { CustomSelect } from "../components";
import { Input } from "components";

// assets
import Search from "../../../svgs/Search";

const cx = classNames.bind(styles);

const Location = ({ formData, setFormData }) => {
  return (
    <div className={cx("location")}>
      <h2>Location</h2>
      <p>
        Help people in the area discover your event and let attendees know where
        to show up.
      </p>
      <CustomSelect
        selected={formData.locationDetails}
        onChange={(val) => {
          setFormData((prev) => {
            return { ...prev, locationDetails: val };
          });
        }}
        options={["Local", "Global"]}
      />
        <Input
          inputWrapperClass={cx("inputWrapperClass")}
          label={`${formData.locationDetails} Location`}
          Prefix={<Search />}
          id="venue-location"
          name="location"
          type="search"
          placeholder="Search Location"
        />
    </div>
  );
};

export default Location;
