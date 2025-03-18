import type { ReactElement } from "react";
import { ToastContainer } from "react-toastify";

interface RouteProps {
  page: () => ReactElement;
}

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  return (
    <>
      <ToastContainer toastClassName="bg-zinc-900" />
      <Page />
    </>
  );
};
