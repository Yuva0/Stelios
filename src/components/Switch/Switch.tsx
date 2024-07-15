import React, { forwardRef, useState, useEffect } from "react";
import { SwitchProps } from "./Switch.types";
import useSwitchStyles from "./Switch.styles";

const Switch = forwardRef(
  (
    {
      id,
      value,
      size = "medium",
      color,
      checked,
      disabled,
      label,
      name,
      className,
      style,

      // Events
      onChange,
      ...props
    }: SwitchProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isChecked, setIsChecked] = useState(checked ?? false);
    const classNames = useSwitchStyles({
      checked: isChecked,
      disabled,
      size: "medium",
      color,
    });

    useEffect(() => {
      setIsChecked(checked ?? false);
    }, [checked]);

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked((prev) => {
        return !prev;
      });
      onChange && onChange(event);
    };

    return (
      <span
        role="switch"
        aria-checked={isChecked}
        className={`${classNames["ste-switch"]} ${classNames} ${className}`}
        {...props}
      >
        <input
          ref={_ref}
          type="checkbox"
          checked={isChecked}
          name={name}
          onChange={_onChange}
        />
        <span>
          <span
            className={`${classNames["ste-switch-content"]} ${isChecked ? "ste-switch-content-selected" : "ste-switch-content-unselected"}`}
          ></span>
        </span>
      </span>
    );
  }
);

export default Switch;
