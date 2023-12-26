import { FC, HTMLAttributes } from "react";
import cls from "./Toggle.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ToggleProps {
  className?: string;
  size: "large" | "small";
  status: "on" | "off";
  onClick: () => void;
}

const Toggle: FC<ToggleProps> = (props) => {
  const { className, size, status, onClick, ...additional } = props;
  return (
    <div
      className={classNames(cls.Toggle, {}, [
        cls[className],
        cls[size],
        cls[status],
      ])}
      {...additional}
      onClick={onClick}
    >
      <span className={classNames(cls.slider, {}, [cls[status], cls[size]])}></span>
    </div>
  );
};

export default Toggle;
