import FormTextField from "@/components/FormTextField";
import { router, useLocalSearchParams } from "expo-router";
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
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";

export default function password() {
  const [password, setPassword] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [isOtpMode, SetIsOtpMode] = React.useState(false);
  const { flow } = useLocalSearchParams();

  const toggleMode = () => {
    SetIsOtpMode(!isOtpMode);
    setPassword("");
    setOtp("");
  };

  const handleContinue = () => {
    if (flow === "signup") {
      router.push("/stepWizard");
    }
  };

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
            {!isOtpMode ? (
              <FormTextField
                label="Enter your password"
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
              />
            ) : (
              <View className="gap-3">
                <Text className="font-nunito-black text-3xl ">
                  Enter OTP code
                </Text>
                <OtpInput
                  numberOfDigits={6}
                  autoFocus={false}
                  onTextChange={(text) => setOtp(text)}
                />
              </View>
            )}

            <TouchableOpacity
              onPress={toggleMode}
              className="bg-black py-4 px-6 rounded-full self-center mt-6"
            >
              <View>
                <Text className="text-white font-nunito-extrabold text-sm ">
                  {isOtpMode ? " Sign in with password" : "Sign in with OTP"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View className="px-5 pb-10 gap-2">
          <TouchableOpacity
            onPress={handleContinue}
            className="bg-rose-400 py-4 rounded-full"
          >
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
