import React from "react";
import * as S from "./styles";

const Input = ({
  inputStyle,
  type = "text",
  name = "",
  onChange,
  inputRef,
  ...rest
}) => {
  console.log("인풋 렌더링");
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
