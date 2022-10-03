import React from "react";
import * as S from "./styles";

const Input = ({
  inputStyle = "borderNone",
  type = "text",
  name = "",
  onChange,
  inputRef,
  ...rest
}) => {
  const chanageHandler = (e) => {
    const { value } = e.target;
    onChange && onChange({ name, value });
  };
  return (
    <S.StyledInput
      inputStyle={inputStyle}
      type={type}
      name={name}
      onChange={chanageHandler}
      ref={inputRef}
      {...rest}
    />
  );
};

export default React.forwardRef(Input);
