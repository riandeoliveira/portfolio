import styled from "styled-components";

interface Theme {
  border?: string;
  bgColor?: string;
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;
  col?: string;
  hei?: string;
  margin?: string;
  padding?: string;
  rad?: string;
  wid?: string;
}

const handleCSSProperties = (
  border?: string,
  bgColor?: string,
  center?: boolean,
  centerX?: boolean,
  centerY?: boolean,
  col?: string,
  hei?: string,
  margin?: string,
  padding?: string,
  rad?: string,
  wid?: string
) => {
  const flex = "display: flex;";

  let centerAll;
  let centerAxisX;
  let centerAxisY;

  if (center)
    centerAll = flex + "align-items: center; justify-content: center;";
  if (centerX) centerAxisX = flex + "justify-content: center;";
  if (centerY) centerAxisY = flex + "align-items: center;";

  return `background-color: ${bgColor};
    border: ${border};
    border-radius: ${rad};
    color: ${col};
    height: ${hei};
    margin: ${margin};
    padding: ${padding};
    width: ${wid};
    ${centerAxisX || ""}
    ${centerAxisY || ""}
    ${centerAll || ""}
    `;
};

export const Container = styled.div<Theme>`
  ${({
    border,
    bgColor,
    center,
    centerX,
    centerY,
    col,
    hei,
    margin,
    padding,
    rad,
    wid,
  }) =>
    handleCSSProperties(
      border,
      bgColor,
      center,
      centerX,
      centerY,
      col,
      hei,
      margin,
      padding,
      rad,
      wid
    )}
`;

export const Title = styled.h1<Theme>`
  ${({
    border,
    bgColor,
    center,
    centerX,
    centerY,
    col,
    hei,
    margin,
    padding,
    rad,
    wid,
  }) =>
    handleCSSProperties(
      border,
      bgColor,
      center,
      centerX,
      centerY,
      col,
      hei,
      margin,
      padding,
      rad,
      wid
    )}
`;
