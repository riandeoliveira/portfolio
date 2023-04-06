import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiWhatsapp,
} from "react-icons/si";
import AvatarImage from "../../public/assets/images/avatar.svg";

export const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between">
      <div className="flex gap-10">
        <div>
          <AvatarImage className="avatar-image" />
          <div className="w-32 h-32 shadow-neon rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-2xl">Rian Dias de Oliveira</h1>
          <h2 className="font-light text-xl">Desenvolvedor Web</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex">
          <a
            href="https://github.com/riandeoliveira"
            rel="external"
            target="_blank"
            className="w-8 h-8 bg-purple-alpha rounded-md flex justify-center items-center cursor-pointer"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/riandeoliveira/"
            rel="external"
            target="_blank"
            className="w-8 h-8 bg-purple-alpha rounded-md flex justify-center items-center cursor-pointer"
          >
            <SiLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/_MrBachelor_"
            rel="external"
            target="_blank"
            className="w-8 h-8 bg-purple-alpha rounded-md flex justify-center items-center cursor-pointer"
          >
            <SiTwitter size={24} />
          </a>
          <a
            href="https://wa.me/5551991852873"
            rel="external"
            target="_blank"
            className="w-8 h-8 bg-purple-alpha rounded-md flex justify-center items-center cursor-pointer"
          >
            <SiWhatsapp size={24} />
          </a>
          <a
            href="mailto:riandiasdeoliveira2001@gmail.com"
            rel="external"
            target="_blank"
            className="w-8 h-8 bg-purple-alpha rounded-md flex justify-center items-center cursor-pointer"
          >
            <SiGmail size={24} />
          </a>
          <a
            href="https://www.instagram.com/rian.deoliveira/"
            rel="external"
            target="_blank"
            className="w-8 h-8 bg-purple-alpha rounded-md flex justify-center items-center cursor-pointer"
          >
            <SiInstagram size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};
