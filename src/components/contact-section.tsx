import type { ReactElement } from "react";
import { Input } from "./input";
import { TextArea } from "./text-area";

export const ContactSection = (): ReactElement => {
  return (
    <section className="flex justify-center bg-zinc-950 p-24">
      <p className="text-zinc-50 font-semibold text-4xl">
        Gostou do Que Viu? Então Entre em Contato!
      </p>
      <div className="w-[800px] flex flex-col">
        <form>
          <div>
            <label htmlFor="name" className="text-zinc-50">
              Nome
            </label>
            <Input type="text" name="name" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="email" className="text-zinc-50">
              E-mail
            </label>
            <Input type="email" name="email" placeholder="Seu e-mail" />
          </div>
          <div>
            <label htmlFor="message" className="text-zinc-50">
              Mensagem
            </label>
            <TextArea name="message" placeholder="Sua mensagem" />
          </div>
        </form>
      </div>
    </section>
  );
};
