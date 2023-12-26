import { FC, HTMLAttributes } from "react";
import cls from "./Toggle.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface ToggleProps {
  className?: string;
  size: "large" | "small";
  status: "on" | "off";
}

const Toggle: FC<ToggleProps> = (props) => {
  const { className, size, status, ...additional } = props;
  return (
    <div
      className={classNames(cls.Toggle, {}, [
        cls[className],
        cls[size],
        cls[status],
      ])}
      {...additional}
    >
      <label className={classNames(cls.inner)}>
        <input type="checkbox" checked={status === 'on'} className={classNames(cls.input)} />
        <span className={classNames(cls.clider)}></span>
      </label>
    </div>
  );
};

export default Toggle;
