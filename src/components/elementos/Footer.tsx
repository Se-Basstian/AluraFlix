import clsx from "clsx";
import type { FC } from "react";
import logoAluraFlix from "../../assets/images/logo-AluraFlix.png";

const Footer: FC = () => {
  return (
    <footer
      className={clsx(
        "w-full h-[125px] bg-[#151a1f]",
        "border-b-0 border-t-4 border-[#2271D1]",
        "flex justify-center items-center m430:hidden"
      )}
    >
      <img
        className={clsx("w-[168px] h-[40px] m610:w-80px m610:h-[28px]")}
        src={logoAluraFlix}
        alt="Log de AluraFlix"
      />
    </footer>
  );
};

export default Footer;
