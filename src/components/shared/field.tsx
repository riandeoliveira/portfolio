import { type ComponentProps, createContext, useContext } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/utils/cn";
import { GradientBackground } from "../backgrounds/gradient-background";

type FieldContextType = {
  hasErrors: boolean;
  isTouched: boolean;
};

const FieldContext = createContext<FieldContextType | undefined>(undefined);

export const useField = () => {
  const context = useContext(FieldContext);

  if (!context) {
    throw new Error("useField must be used within a Field.Root component");
  }

  return context;
};

type ButtonProps = ComponentProps<"button">;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <GradientBackground className="rounded-xl p-0.5">
      <button
        type="button"
        className={cn(
          "px-3 py-2 text-center rounded-xl items-center w-full font-bold text-base hover:bg-zinc-950 transition-colors cursor-pointer",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </GradientBackground>
  );
};

type ErrorMessageProps = ComponentProps<"span">;

const ErrorMessage = ({ children, className, ...props }: ErrorMessageProps) => {
  const { hasErrors, isTouched } = useField();
  const { t } = useI18n();

  return (
    <>
      {hasErrors && isTouched && (
        <span
          className={cn("text-red-500 text-sm font-semibold", className)}
          {...props}
        >
          {t(children as string)}
        </span>
      )}
    </>
  );
};

type InputProps = ComponentProps<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <GradientBackground className="rounded-md p-px">
      <input
        type="text"
        className={cn(
          "px-3 py-2 rounded-md bg-zinc-900 w-full outline-none",
          className,
        )}
        {...props}
      />
    </GradientBackground>
  );
};

type LabelProps = ComponentProps<"label">;

const Label = ({ children, className, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-base font-medium", className)}
      {...props}
    >
      {children}
    </label>
  );
};

type LinkProps = ComponentProps<"a"> & {
  containerClassName?: string;
};

const Link = ({
  children,
  className,
  containerClassName,
  ...props
}: LinkProps) => {
  return (
    <GradientBackground className={cn("", containerClassName)}>
      <a
        className={cn(
          "h-full w-full px-4 py-2 flex items-center justify-center rounded-xl font-semibold hover:bg-zinc-950 transition-colors max-s-480:text-sm",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </GradientBackground>
  );
};

type RootProps = ComponentProps<"div"> & Partial<FieldContextType>;

const Root = ({
  children,
  className,
  hasErrors = false,
  isTouched = false,
  ...props
}: RootProps) => {
  return (
    <FieldContext.Provider value={{ hasErrors, isTouched }}>
      <div className={cn("flex flex-col gap-1", className)} {...props}>
        {children}
      </div>
    </FieldContext.Provider>
  );
};

type TextAreaProps = ComponentProps<"textarea">;

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <GradientBackground className="rounded-md p-px flex">
      <textarea
        className={cn(
          "px-3 py-2 rounded-md h-32 bg-zinc-900 w-full outline-none resize-none",
          className,
        )}
        {...props}
      />
    </GradientBackground>
  );
};

export const Field = {
  Button,
  ErrorMessage,
  Input,
  Label,
  Link,
  Root,
  TextArea,
};
