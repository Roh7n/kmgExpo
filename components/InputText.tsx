import { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";

export default function CustomInputText({ label = "", ...rest }) {
  const [text, setText] = useState("");
  return (
    <TextInput
      mode="outlined"
      label={
        <Text
          style={{ fontSize: 14, fontFamily: "Nunito-Bold", marginLeft: 10 }}
        >
          {label}
        </Text>
      }
      value={text}
      onChangeText={setText}
      style={{
        backgroundColor: "white",
      }}
      theme={{
        roundness: 12,
        colors: {
          primary: "black",
          outline: "black",
          onSurface: "black",
          text: "black",
        },
      }}
      {...rest}
    />
  );
}
