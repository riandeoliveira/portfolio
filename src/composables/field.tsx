import { NeonBackground } from "@/components/neon-background";
import { useI18n } from "@/hooks/use-i18n";
import { cn } from "@/lib/utils";
import type {
  AnchorElementProps,
  ButtonElementProps,
  DivElementProps,
  InputElementProps,
  LabelElementProps,
  SpanElementProps,
  TextAreaElementProps,
} from "@/types/element";
import type { TranslationKeys } from "@/types/i18n";
import { type ReactElement, createContext, useContext } from "react";

type FieldContextType = {
  hasErrors: boolean;
  isTouched: boolean;
};

const FieldContext = createContext<FieldContextType | undefined>(undefined);

export const useField = (): FieldContextType => {
  const context = useContext(FieldContext);

  if (context === undefined) {
    throw new Error("useField must be used within a Field.Root component");
  }

  return context;
};

const Button = ({
  children,
  className,
  ...props
}: ButtonElementProps): ReactElement => {
  return (
    <NeonBackground>
      <button
        type="button"
        className={cn(
          "px-3 py-2 text-center rounded-xl items-center w-full font-semibold text-base hover:bg-zinc-950 transition-colors",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </NeonBackground>
  );
};

const ErrorMessage = ({
  children,
  className,
  ...props
}: SpanElementProps): ReactElement => {
  const { hasErrors, isTouched } = useField();
  const { t } = useI18n();

  return (
    <>
      {hasErrors && isTouched ? (
        <span
          className={cn("text-red-500 font-semibold", className)}
          {...props}
        >
          {t(children as TranslationKeys)}
        </span>
      ) : (
        <div className="h-6" />
      )}
    </>
  );
};

const Input = ({ className, ...props }: InputElementProps): ReactElement => {
  return (
    <NeonBackground className="rounded-md">
      <input
        type="text"
        className={cn(
          "px-3 py-2 rounded-md bg-zinc-900 w-full outline-none",
          className,
        )}
        {...props}
      />
    </NeonBackground>
  );
};

const Label = ({
  children,
  className,
  htmlFor,
  ...props
}: LabelElementProps): ReactElement => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("text-base font-semibold", className)}
      {...props}
    >
      {children}
    </label>
  );
};

type LinkProps = AnchorElementProps & {
  containerClassName?: string;
};

const Link = ({
  children,
  className,
  containerClassName,
  ...props
}: LinkProps): ReactElement => {
  return (
    <NeonBackground className={cn("", containerClassName)}>
      <a
        className={cn(
          "h-full w-full px-4 py-2 flex items-center justify-center rounded-xl font-semibold hover:bg-zinc-950 transition-colors mobile-l:text-sm",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    </NeonBackground>
  );
};

type RootProps = DivElementProps & Partial<FieldContextType>;

const Root = ({
  children,
  className,
  hasErrors = false,
  isTouched = false,
  ...props
}: RootProps): ReactElement => {
  return (
    <FieldContext.Provider value={{ hasErrors, isTouched }}>
      <div className={cn("flex flex-col gap-1", className)} {...props}>
        {children}
      </div>
    </FieldContext.Provider>
  );
};

const TextArea = ({
  className,
  ...props
}: TextAreaElementProps): ReactElement => {
  return (
    <NeonBackground className="rounded-md flex">
      <textarea
        className={cn(
          "px-3 py-2 rounded-md h-32 bg-zinc-900 w-full outline-none resize-none",
          className,
        )}
        {...props}
      />
    </NeonBackground>
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
