import { colors } from "@/styles/colors";
import { DragHandleIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React, { CSSProperties, useState } from "react";

const AddTask: React.FC<{
  style?: CSSProperties;
  containerStyle?: CSSProperties;
  onEnterPressed?: (text: string) => void;
}> = ({ style, containerStyle, onEnterPressed, ...rest }) => {
  const [text, setText] = useState<string>("");
  return (
    <InputGroup
      style={containerStyle}
      borderColor={colors.dividerColor}
      borderRadius={8}
      background={colors.dividerColor}
      {...rest}
    >
      <InputLeftElement
        pointerEvents="none"
        children={<DragHandleIcon color="gray.300" />}
      />
      <Input
        type="text"
        style={{
          ...style,
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onEnterPressed && onEnterPressed(text);
            setText("");
          }
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        color={colors.textColor}
        placeholder="Add a task..."
      />
    </InputGroup>
  );
};

export default AddTask;
