// components
import { TextArea } from "components";

const Description = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Description</h2>
      <p>
        Add more details to your event like your schedule, sponsors, or featured
        guests
      </p>
      <TextArea
        name="summary"
        id="summary"
        label="Summary"
        placeholder="Write Summary"
        maxLength={140}
        value={formData.summary}
        setValue={(e) => {
          setFormData((prev) => {
            return { ...prev, summary: e };
          });
        }}
      />
      <TextArea
        name="description"
        id="description"
        label="Description"
        placeholder="Write Description"
        rows={15}
        maxLength={5000}
        value={formData.description}
        setValue={(e) => {
          setFormData((prev) => {
            return { ...prev, description: e };
          });
        }}
      />
    </div>
  );
};

export default Description;
