import { cn } from "@/lib/utils";
import type { FormikProps } from "formik";
import type { ReactElement, TextareaHTMLAttributes } from "react";
import { NeonBackground } from "../neon-background";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  instance: FormikProps<any>;
  label: string;
  name: string;
}

export const TextArea = ({
  className,
  instance,
  label,
  name,
  ...props
}: TextAreaProps): ReactElement => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-zinc-50 text-base font-semibold">
        {label}
      </label>
      <NeonBackground className="flex rounded-md">
        <textarea
          name={name}
          onChange={instance.handleChange}
          className={cn(
            "px-3 py-2 rounded-md h-32 bg-zinc-900 text-zinc-50 w-full outline-none resize-none",
            className,
          )}
          {...props}
        />
      </NeonBackground>
      {instance.touched[name] ? (
        <span className="text-red-500 font-semibold">{instance.errors[name]?.toString()}</span>
      ) : (
        <div className="h-[21px]" />
      )}
    </div>
  );
};
