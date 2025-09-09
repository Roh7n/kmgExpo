import { useState } from "react";
import { TextInput } from "react-native-paper";

export default function CustomInputText({ label = "", ...rest }) {
  const [text, setText] = useState("");
  return (
    <TextInput
      mode="outlined"
      label={label}
      value={text}
      onChangeText={setText}
      style={{
        backgroundColor: "white",
      }}
      theme={{
        roundness: 20,
        colors: {
          primary: "black",
          outline: "black",
          onSurfaceVariant: "black",
        },
      }}
      {...rest}
    />
  );
}
