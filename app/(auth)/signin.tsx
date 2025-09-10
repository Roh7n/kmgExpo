import BackAction from "@/components/BackAction";
import FormTextField from "@/components/FormTextField";
import { router } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function signin() {
  const [phoneNumber, setPhonenumber] = useState("");

  const handleContinue = () => {
    Keyboard.dismiss();
    router.push({
      pathname: "/(auth)/passwordOtp",
      params: { flow: "signin" },
    });
  };

  const isValidPhone = phoneNumber.length === 10;

  return (
    <SafeAreaView className="bg-white flex-1 ">
      <View>
        <BackAction />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerClassName="flex-grow"
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center items-center px-8">
            <FormTextField
              keyboardType="phone-pad"
              label="What's your phone number?"
              placeholder="Phone number"
              value={phoneNumber}
              onChangeText={setPhonenumber}
            />
          </View>
        </ScrollView>
        <View className="px-8 pb-10 gap-2">
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
            className={`py-4 rounded-full ${
              isValidPhone ? "bg-rose-400" : "bg-gray-300"
            }`}
            disabled={!isValidPhone}
          >
            <View className="flex flex-row items-center justify-center gap-2">
              <Text
                className={`font-nunito-extrabold text-lg ${
                  isValidPhone ? "text-black" : "text-gray-500"
                }`}
              >
                Continue
              </Text>
              <ArrowRight
                color={isValidPhone ? "black" : "#6B7280"}
                size={15}
                strokeWidth={4}
              />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
