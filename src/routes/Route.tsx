import type { ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
