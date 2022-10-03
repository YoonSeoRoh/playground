import React, { useState } from "react";
import * as S from "./styles";

export default function DropDownMenu(props) {
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
}
