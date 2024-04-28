import personalCertificate from "@/assets/images/personal-certificate.png";
import teamCertificate from "@/assets/images/team-certificate.png";
import type { ReactElement } from "react";

export const CertificatesSection = (): ReactElement => {
  return (
    <section>
      <div className="flex">
        <img src={teamCertificate} alt="" width={512} height={360.59} />
        <img src={personalCertificate} alt="" width={512} height={360.59} />
      </div>
    </section>
  );
};
