import { cn } from "@/lib/utils";
import type { FormikProps } from "formik";
import type { InputHTMLAttributes, ReactElement } from "react";
import { NeonBackground } from "../neon-background";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  instance: FormikProps<any>;
  label: string;
  name: string;
}

export const Input = ({ className, instance, label, name, ...props }: InputProps): ReactElement => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-zinc-50 text-base font-semibold">
        {label}
      </label>
      <NeonBackground className="rounded-md">
        <input
          type="text"
          name={name}
          onChange={instance.handleChange}
          className={cn(
            "px-3 py-2 rounded-md bg-zinc-900 text-zinc-50 w-full outline-none",
            className,
          )}
          {...props}
        />
      </NeonBackground>
      {instance.touched[name] && !!instance.errors[name] ? (
        <span className="text-red-500 font-semibold">{instance.errors[name]?.toString()}</span>
      ) : (
        <div className="h-[21px]" />
      )}
    </div>
  );
};
