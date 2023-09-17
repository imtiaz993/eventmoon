import MainEventImage from "./MainEventImage";
import Description from "./Description";

const SecondView = ({ formData, setFormData }) => {
  return (
    <>
      <MainEventImage formData={formData} setFormData={setFormData} />
      <hr />
      <Description formData={formData} setFormData={setFormData} />
    </>
  );
};

export default SecondView;
