import React from "react";

const Input = props => {
  const {
    type,
    value,
    id,
    name,
    errors,
    onChange,
    placeholder,
    label,
    classes
  } = props;
  return (
    <div>
      {/* <label htmlFor={id}>
        {label} */}
        <div>
          <input
            className={classes}
            type={type}
            value={value}
            id={id}
            name={name}
            onChange={ev => onChange && onChange(ev)}
            placeholder={placeholder}
            errors={errors}
          />
        </div>
      {/* </label> */}
      
    </div>
  );
};

export default Input;
