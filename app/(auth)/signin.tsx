import FormTextField from "@/components/FormTextField";
import { ArrowRight } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function signin() {
  const [step, setStep] = useState(1);
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(phonenumber);
  };
  const handleNext = () => {
    if (phonenumber) setStep(2);
  };

  const handleBack = () => setStep(1);

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
          <View className="flex-1 bg-white justify-start items-center px-5">
            <View className="p-5 gap-3">
              <FormTextField
                keyboardType="phone-pad"
                label="What's your phone number?"
                placeholder="Phone number"
                value={phonenumber}
                onChangeText={setPhonenumber}
              />
            </View>
          </View>
        </ScrollView>
        <View className="px-5 pb-10 gap-2">
          <Text className="font-nunito-regular text-gray-500 text-center">
            By tapping Continue, you are agreeing to{"\n"}our{" "}
            <Text className="text-gray-700 font-nunito-semibold">
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text className="text-gray-700 font-nunito-semibold">
              Privacy Policy
            </Text>
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
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
