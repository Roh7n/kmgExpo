import BackAction from "@/components/BackAction";
import CustomInputText from "@/components/InputText";
import CustomProgressBar from "@/components/ProgressBar";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function StepWizard() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <BackAction />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerClassName="flex-grow"
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full px-8 mt-10">
            <CustomProgressBar progress={0.5} />
          </View>

          <View className="px-8 mt-10">
            <Text className="font-nunito-extrabold text-gray-800 text-2xl">
              It is never too late to fall in love
            </Text>
          </View>

          <View className="px-8 mt-1">
            <Text className="font-nunito-bold text-gray-500 text-base">
              Sign up to discover meaningful connections —{"\n"}
              or maybe just a really great date.
            </Text>
          </View>

          <View className="px-8 mt-8 gap-4">
            <CustomInputText label="First Name" />
            <CustomInputText label="Last Name" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
