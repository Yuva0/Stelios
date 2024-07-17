import React, { useState } from "react";
import { RadioGroupProps } from "./RadioGroup.types";
import useRadioGroupStyles from "./RadioGroup.styles";
import Text from "../Text/Text";
import { getIncrementalGeneratedId } from "../../helpers/Utilities";

const RadioGroup = ({
  name,
  value,
  size = "medium",
  color,
  disabled,
  children,
  label,
  orientation = "vertical",
  // Events
  onChange,
}: RadioGroupProps) => {
  const [finalName, setFinalName] = React.useState(name);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const classNames = useRadioGroupStyles({orientation});
  const [focusedIndex, setFocusedIndex] = useState<number>(selectedIndex ?? 0);

  React.useEffect(() => {
    if (!name) {
      setFinalName("radio-" + getIncrementalGeneratedId());
    }
  }, [name]);

  const [filteredChildren, setFilteredChildren] = useState<
    React.ReactNode | React.ReactNode[]
  >(null);

  const _getSelectedIndex = (index?: number) => {
    setSelectedIndex(index ?? 0);
    setFocusedIndex(index ?? 0);
  };

  const Label = label ? (
    typeof label === "string" ? (
      <Text variant="label" size="large">
        {label}
      </Text>
    ) : (
      label
    )
  ) : null;

  React.useEffect(() => {
    setFilteredChildren(() => {
      if (!children) return null;
      return React.Children.map(children, (child, index) => {
        if (!child) return null;
        if (React.isValidElement(child) && child.type) {
          const childElement = child as React.ReactElement;
          const childType = childElement.type;
          if (
            (childType as React.ComponentType<any>).name === "Radio" ||
            (childType as React.ComponentType<any>).name === "FormControlLabel"
          ) {
            return React.cloneElement(childElement, {
              name: finalName,
              index,
              selected: selectedIndex === index,
              ...(!childElement.props.size && size && { size }),
              ...(!childElement.props.color && color && { color }),
              ...(!childElement.props.disabled && disabled && { disabled }),
              focused: focusedIndex === index,
              getSelectedIndex: _getSelectedIndex,
            });
          }
        } else {
          console.error(
            `RadioGroup: Invalid child ${child} supplied, expected a Radio or FormControlLabel component`
          );
        }
      });
    });
  }, [
    finalName,
    value,
    size,
    color,
    disabled,
    children,
    selectedIndex,
    focusedIndex,
  ]);

  return (
    <div role="radiogroup" className={classNames["ste-radio-group"]}>
      {Label}
      {filteredChildren}
    </div>
  );
};

export default RadioGroup;