import React, { forwardRef, useEffect, useState } from "react";
import { CheckboxProps, CheckboxStyleProps } from "./Checkbox.types";
import { IconCheck } from "@tabler/icons-react";
import { useTheme } from "../ThemeProvider/ThemeProvider";
import styled from "styled-components";

const getSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return 0.875;
    case "medium":
      return 1;
    case "large":
      return 1.25;
  }
  return 1;
};

const StyledCheckbox = styled.span<CheckboxStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  "&:hover": {
    background: ${(props) =>
      props.$colorGradient[props.$color ?? "info"].accentScale[1]};
  }
  & input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    margin: 0;
  }
  & input[type="checkbox"] + span {
    width: ${(props) => getSize(props.$size)}rem;
    height: ${(props) => getSize(props.$size)}rem;
    border: 1.5px solid
      ${(props) => props.$colorGradient[props.$color ?? "info"].accentScale[8]};
    border-radius: 0.25rem;
    position: relative;

    & svg {
      width: 100%;
      height: 100%;
      background-color: ${(props) =>
        props.$colorGradient[props.$color ?? "info"].accentScale[8]};
      color: ${(props) =>
        props.$colorGradient[props.$color ?? "info"].accentContrast};
      border-radius: 0.15rem;
    }
  }
  & input[type="checkbox"]:focus + span {
    outline: 1px solid
      ${(props) => props.$colorGradient[props.$color ?? "info"].accentScale[8]};
    outline-offset: 1px;
  }
`;

const Checkbox = forwardRef(
  (
    {
      id,
      value,
      size = "medium",
      color = "primary",
      checked,
      disabled,
      label,
      name,
      className,
      style,

      //Events
      onChange,
      ...props
    }: CheckboxProps,
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    const _ref = (ref ?? innerRef) as React.RefObject<HTMLInputElement>;
    const [isChecked, setIsChecked] = useState(checked ?? false);

    const colorPalette = useTheme().theme.colorPalette;

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
      <StyledCheckbox
        role="checkbox"
        aria-checked={isChecked}
        $size={size}
        $colorGradient={colorPalette}
        $color={color}
        // className={`${classNames["ste-checkbox"]} ${className}`}
        {...props}
      >
        <input
          ref={_ref}
          checked={isChecked}
          type="checkbox"
          name={name}
          onChange={_onChange}
        />
        <span>{isChecked && <IconCheck />}</span>
      </StyledCheckbox>
    );
  }
);

export default Checkbox;
