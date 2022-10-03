import React from "react";
import * as S from "./styles";

const ContentForm = ({ name = "", onChange, inputRef, ...rest }) => {
  const chanageHandler = (e) => {
    const { value } = e.target;
    onChange && onChange({ name, value });
  };
  return (
    <S.StyledForm
      name={name}
      onChange={chanageHandler}
      ref={inputRef}
      {...rest}
    />
  );
};

export default React.forwardRef(ContentForm);
