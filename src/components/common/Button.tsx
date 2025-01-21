import clsx from "clsx";
import type { FC, ReactNode, MouseEvent } from "react";

interface Props {
  children: ReactNode;
  color?: "#2271D1" | "#fff";
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  type?: "button" | "reset" | "submit";
}
const Button: FC<Props> = ({
  children,
  color = "#fff",
  onClick,
  type = "button",
}) => {
  return (
    <button
      className={clsx(
        `w-[180px] h-[54px] text-[${color}] border-[3px] border-solid border-[${color}]`,
        "text-[2rem] font-semibold rounded-[15px]"
      )}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
