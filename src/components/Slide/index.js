import React from "react";
import Slider from "react-slick";

import * as S from "./styles";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/slide2.jpg";
import Slide3 from "../../assets/slide3.jpg";
import Slide4 from "../../assets/slide4.jpg";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, //한 화면에 보여질 컨텐츠
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠
    arrows: false, //옆으로 이동하는 화살표 표시 여부
    autoplay: true, //자동 스크롤
    autoplaySpeed: 4000, //자동 스크롤 속도
  };
  return (
    <S.SlideContainer>
      <Slider {...settings}>
        <S.Slide>
          <img src={Slide1} alt="slide1" />
        </S.Slide>
        <S.Slide>
          <img src={Slide2} alt="slide2" />
        </S.Slide>
        <S.Slide>
          <img src={Slide3} alt="slide3" />
        </S.Slide>
        <S.Slide>
          <img src={Slide4} alt="slide4" />
        </S.Slide>
      </Slider>
    </S.SlideContainer>
  );
};

export default React.memo(Slide);
