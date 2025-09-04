import FormTextField from "@/components/FormTextField";
import { router } from "expo-router";
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

export default function signup() {
  const [phonenumber, setPhonenumber] = useState("");

  const handleContinue = () => {
    if (phonenumber.length === 10) {
      router.push({
        pathname: "/(auth)/passwordOtp",
        params: { flow: "signup" },
      });
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
          <View className="flex-1 bg-white justify-start items-center px-5">
            <FormTextField
              keyboardType="phone-pad"
              label="What's your phone number?"
              placeholder="Phone number"
              value={phonenumber}
              onChangeText={setPhonenumber}
            />
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
