import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  width: 50%;
`;

export const CarouselContainer = styled.div`
  position: relative;

  ${({ hasMultipleImages }) => {
    if (hasMultipleImages) {
      return `
					&:before {
						background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
						position: absolute;
						left: 0;
						height: 100%;
						width: 48px;
						content: "";
						z-index: 2;
					}

					&:after {
						background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
						position: absolute;
						right: 0;
						top: 0;
						height: 100%;
						width: 48px;
						content: "";
						z-index: 2;
			}`;
    }
    return null;
  }};
`;

export const CarouselImages = styled.div.attrs({
  style: ({ position }) => ({
    transform: `translateX(${position * -100}%)`,
  }),
})`
  display: flex;
  transition: transform 0.45s ease;
`;

export const CarouselItem = styled.div`
  flex: 1 0 100%;
  overflow: hidden;
  height: 100%;
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  cursor: pointer;
  top: calc(50% - 0.5 * 3rem);
  padding: 0;
  display: flex;
  justify-content: center;
  z-index: 3;
`;

export const PreviousButton = styled(ArrowButton)`
  left: 0;
`;

export const NextButton = styled(ArrowButton)`
  right: 0;
`;

export const Arrow = styled.i`
  font-size: 5rem;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const IndicatorDot = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${({ isActive }) => (isActive ? "black" : "grey")};
  transition: background 450ms ease;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
