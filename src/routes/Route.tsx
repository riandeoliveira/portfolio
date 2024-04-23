import type { ReactElement } from "react";

interface RouteProps {
  page: () => ReactElement;
}

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  return <Page />;
};
