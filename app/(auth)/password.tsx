import FormTextField from "@/components/FormTextField";
import { ArrowRight } from "lucide-react-native";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function password() {
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerClassName="flex-grow pt-60"
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 bg-white justify-start items-center px-5 ">
            <FormTextField
              label="Enter your password"
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity className="bg-black py-4 px-6 rounded-full self-center mt-5">
              <View className="flex flex-row items-center justify-center gap-2">
                <Text className="text-white font-nunito-extrabold text-sm">
                  Sign in with OTP
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View className="px-5 pb-10 gap-2">
          <TouchableOpacity className="bg-rose-400 py-4 rounded-full">
            <View className="flex flex-row items-center justify-center gap-2">
              <Text className="text-black font-nunito-extrabold text-lg">
                Continue
              </Text>
              <ArrowRight color="black" size={15} strokeWidth={4} />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
