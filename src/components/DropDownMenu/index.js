import React, { useState } from "react";
import * as S from "./styles";

const DropDownMenu = (props) => {
  console.log("드롭메뉴 렌더링");
  const [data, setData] = useState("");

  const handleDataChange = (e) => {
    setData(e.target.value);
    props.getData(e.target.value);
  };

  return (
    <section>
      <S.Select onChange={handleDataChange} selected={data}>
        {props.data.map((option) => (
          <option key={parseInt(option.id)} value={option.title}>
            {option.title}
          </option>
        ))}
      </S.Select>
    </section>
  );
};

export default React.memo(DropDownMenu);
