import { Text, TextInput, View } from "react-native";

export default function FormTextField({
  label = "",
  placeholder = "",
  ...rest
}) {
  return (
    <View>
      {label && <Text className="font-nunito-black text-3xl ">{label}</Text>}
      <TextInput
        className="font-nunito-semibold border border-gray-400 rounded-xl w-full h-15 px-4 mt-2 text-base"
        placeholder={placeholder}
        autoCapitalize="none"
        {...rest}
      />
    </View>
  );
}
