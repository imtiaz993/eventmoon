import BasicInfo from "./BasicInfo/BasicInfo";
import Location from "./Location";
import DateAndTime from "./DateAndTime";

const FirstView = ({ formData, setFormData }) => {
  return (
    <>
      <BasicInfo formData={formData} setFormData={setFormData} />
      <hr />
      <Location formData={formData} setFormData={setFormData} />
      <hr />
      <DateAndTime formData={formData} setFormData={setFormData} />
    </>
  );
};

export default FirstView;
