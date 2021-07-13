import React from "react";

import {
  Wrapper,
  CarouselContainer,
  CarouselImages,
  CarouselItem,
  ArrowButton,
  PreviousButton,
  NextButton,
  Arrow,
  IndicatorStyled,
  IndicatorContainer,
  IndicatorDot,
  Image,
  //   IndicatorDot,
} from "./CarouselElements";

import styled from "styled-components";

const Gallery = ({ children }) => {
  const Indicator = ({ className, position, length, onIndicatorClick }) => (
    <IndicatorContainer className={className}>
      {Array.from({ length }, (value, index) => (
        <IndicatorDot
          key={index}
          isActive={position === index}
          onClick={() => onIndicatorClick(index)}
        />
      ))}
    </IndicatorContainer>
  );

  const IndicatorStyled = styled(Indicator)`
    display: flex;
  `;

  const { useState } = React;

  const [position, setPosition] = useState(0);
  const directions = {
    NEXT: "next",
    PREV: "previous",
  };

  const handlePreviousClick = () => {
    handleArrowClick(directions.PREVIOUS);
  };

  const handleNextClick = () => {
    handleArrowClick(directions.NEXT);
  };

  const handleArrowClick = (direction) => {
    let newPosition = 0;
    if (direction === directions.NEXT) {
      newPosition = position === children.length - 1 ? 0 : position + 1;
    } else {
      newPosition = position === 0 ? children.length - 1 : position - 1;
    }
    handleSlide(newPosition);
  };

  const handleSlide = (position) => {
    setPosition(position);
  };

  return (
    <Wrapper>
      <CarouselContainer hasMultipleImages={children.length > 1}>
        <CarouselImages position={position}>
          {children.map((child) => (
            <CarouselItem key={child.key}>{child}</CarouselItem>
          ))}
        </CarouselImages>
        <PreviousButton onClick={() => handlePreviousClick()}>
          <Arrow className="material-icons">chevron_left</Arrow>
        </PreviousButton>
        <NextButton onClick={() => handleNextClick()}>
          <Arrow className="material-icons">chevron_right</Arrow>
        </NextButton>
      </CarouselContainer>
      <IndicatorStyled
        length={children.length}
        position={position}
        onIndicatorClick={handleSlide}
      />
    </Wrapper>
  );
};

export default Gallery;
// const ImageComponent = ({ src }) => <Image src={src} />;

// ReactDOM.render(
// 	(
// 		<Gallery>
// 			<ImageComponent src="https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
// 			<ImageComponent src="https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
// 		</Gallery>
// 	),
// 	document.getElementById('root'),
// );
