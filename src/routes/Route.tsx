import { MetadataArea } from "@/components/metadata-area";
import { ProjectContextProvider } from "@/contexts/project-context";
import type { ReactElement } from "react";
import { ToastContainer } from "react-toastify";

type RouteProps = {
  page: () => ReactElement;
};

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  return (
    <ProjectContextProvider>
      <MetadataArea />
      <ToastContainer
        theme="dark"
        toastClassName="!bg-zinc-900 !font-primary"
      />
      <Page />
    </ProjectContextProvider>
  );
};
