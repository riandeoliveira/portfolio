import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { theme } from "styles/theme";

type LoadingProps = {
  isLoading: boolean;
};

export const LoadingBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(CircularProgress)`
  circle {
    color: ${theme.colors.cyan};
  }
`;

export const Iframe = styled.iframe<LoadingProps>`
  width: 100%;
  padding-bottom: 20px;
  height: 468px;
  display: ${(props) => (props.isLoading ? "none" : "block")};

  ${theme.animations.fade_in}
`;
