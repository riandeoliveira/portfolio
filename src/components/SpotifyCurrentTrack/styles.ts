import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

export const Iframe = styled.iframe`
  width: 320px;
  height: 100px;
  pointer-events: none;
`;
