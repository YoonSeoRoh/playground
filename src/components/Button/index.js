import React from "react";
import * as S from "./styles";

const Button = ({
  children,
  type = "button",
  disabled,
  onClick,
  buttonStyle,
  textSize,
  ...rest
}) => {
  console.log("버튼 렌더링 됨");
  return (
    <S.StyledButton
      type={type}
      disabled={disabled}
      onClick={onClick}
      buttonStyle={buttonStyle}
      textSize={textSize}
      {...rest}
    >
      {children}
    </S.StyledButton>
  );
};

export default React.memo(Button);
