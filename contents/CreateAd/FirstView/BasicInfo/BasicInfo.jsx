import classNames from "classnames/bind";

// components
import { ControlGroup, TwoColumns } from "../../components";
import { Input } from "components";
import Select from "react-select";

// styles
import styles from "./BasicInfo.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const BasicInfo = ({ formData, setFormData }) => {
  const [tags,setTags]=useState()
  const typeOptions = [
    { value: "Entertainment", label: "Entertainment" },
    { value: "Live Music", label: "Live Music" },
    { value: "Activities", label: "Activities" },
    { value: "Family", label: "Family" },
    { value: "Business", label: "Business" },
    { value: "Tech", label: "Tech" },
    { value: "Games", label: "Games" },
    { value: "Health", label: "Health" },
    { value: "Virtual", label: "Virtual" },
    { value: "Sports", label: "Sports" },
    { value: "Party", label: "Party" },
  ];

  const categoryOptions = [
    { value: "Category one", label: "Category one" },
    { value: "Category two", label: "Category two" },
    { value: "Category three", label: "Category three" },
    { value: "Category four", label: "Category four" },
    { value: "Category five", label: "Category five" },
    { value: "Category six", label: "Category six" },
  ];

  const handleDeleteTag=(id)=>{
    const updatedTags=formData.tags.filter((item,index)=>index!==id)
    setFormData((prev) => {
      return { ...prev, tags:updatedTags};
    });
  }

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "var(--color-gray-light)",
      border: "none",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "rgba(0, 0, 0, 0.4)",
      opacity: 0.5,
    }),
  };

  return (
    <div className={cx("basic-info")}>
      <h2>Select your AD goal</h2>
      <p>
        Name your AD and tell event-goers why they should come. Add details
        that highlight what makes it unique.
      </p>
      <Input
        inputWrapperClass={cx("inputWrapperClass")}
        label="AD Title"
        id="title"
        name="title"
        type="text"
        placeholder="Advertisement title"
        value={formData.adTitle}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, adTitle: e.target.value };
          });
        }}
      />
      <Input
        inputWrapperClass={cx("inputWrapperClass")}
        label="Product / Business Name"
        id="productBusiness"
        name="productBusiness"
        type="text"
        placeholder="Product or Business Name"
        value={formData.productBusiness}
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, productBusiness: e.target.value };
          });
        }}
      />
      <TwoColumns>
        <Input
          label="Type"
          inputEl={Select}
          placeholder="Select Type"
          options={typeOptions}
          styles={selectStyles}
          id="type"
          name="type"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              neutral50: "red", // Placeholder color
            },
          })}
          defaultPadding
          value={formData.type}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, type: e };
            });
          }}
        />
        <Input
          label="Select Category"
          inputEl={Select}
          placeholder="Select Category"
          options={categoryOptions}
          styles={selectStyles}
          id="category"
          name="category"
          defaultPadding
          value={formData.category}
          onChange={(e) => {
            setFormData((prev) => {
              return { ...prev, category: e };
            });
          }}
        />
      </TwoColumns>
      <ControlGroup>
        <label htmlFor="tags">Tags</label>
        <p>
          Improve discoverability of your event by adding tags relevant to the
          subject matter.
        </p>
        <div  className={cx('tags-wrapper')}>
        {formData.tags && formData.tags.map((item,index)=>(
          <p key={index} className={cx('tag')}>{item.tag} <span className={cx('removeTag')} onClick={()=>{handleDeleteTag(index)}}>X</span></p> 
        ))}
        </div>
        <div className={cx("add-tag")}>
          <input
            disabled={formData.tags.length===5}
            id="tags"
            name="tags"
            type="text"
            placeholder="Press enter to add tag"
            onChange={(e)=>{setTags(e.target.value)}}
            value={tags}
          />
          <button
          disabled={formData.tags.length===5}
          onClick={()=>{
          if(tags){
            setFormData((prev) => {
              return { ...prev, tags:[ ...prev.tags, {tag:tags}]};
            });
            setTags('')
          }
          
          }}>Add</button>
        </div>
      </ControlGroup>
    </div>
  );
};

export default BasicInfo;
