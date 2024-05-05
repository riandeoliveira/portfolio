import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ToastContainer } from "react-toastify";
import type { ReactElement } from "react";

interface RouteProps {
  page: () => ReactElement;
}

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  return (
    <>
      <ToastContainer toastClassName="bg-zinc-900 text-zinc-50" />
      <Page />
    </>
  );
};
