import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

type ComponentWithChildren = {
  children: ReactNode;
};

export type AnchorElementProps = AnchorHTMLAttributes<HTMLAnchorElement>;
export type ButtonElementProps = ButtonHTMLAttributes<HTMLButtonElement> & ComponentWithChildren;
export type DivElementProps = HTMLAttributes<HTMLDivElement> & ComponentWithChildren;
export type HeadingElementProps = HTMLAttributes<HTMLHeadingElement> & ComponentWithChildren;
export type InputElementProps = InputHTMLAttributes<HTMLInputElement>;
export type LabelElementProps = LabelHTMLAttributes<HTMLLabelElement> & ComponentWithChildren;
export type ParagraphElementProps = HTMLAttributes<HTMLParagraphElement> & ComponentWithChildren;
export type SpanElementProps = HTMLAttributes<HTMLSpanElement> & ComponentWithChildren;
export type TextAreaElementProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
