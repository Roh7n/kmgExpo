import BackAction from "@/components/BackAction";
import CustomInputText from "@/components/InputText";
import CustomProgressBar from "@/components/ProgressBar";
import { ArrowRight } from "lucide-react-native";
import React, { JSX, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
}

interface StepContent {
  title: string;
  subtitle: string;
  fields: JSX.Element;
}

type FormField = keyof FormData;

export default function StepWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
  });

  const totalSteps = 3;
  const progress = currentStep / totalSteps;

  const updateFormData = (field: FormField, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("form submitted!", formData);
  };

  const getStepContent = (): StepContent | null => {
    switch (currentStep) {
      case 1:
        return {
          title: "It is never too late to fall in love",
          subtitle:
            "Sign up to discover meaningful connections —\nor maybe just a really great date.",
          fields: (
            <>
              <CustomInputText
                label="First Name"
                value={formData.firstName}
                onChangeText={(text: string) =>
                  updateFormData("firstName", text)
                }
              />
              <CustomInputText
                label="Last Name"
                value={formData.lastName}
                onChangeText={(text: string) =>
                  updateFormData("lastName", text)
                }
              />
            </>
          ),
        };

      case 2:
        return {
          title: "Let's get your contact details",
          subtitle: "We'll need these to keep you updated about your matches.",
          fields: (
            <>
              <CustomInputText
                label="Email Address"
                value={formData.email}
                onChangeText={(text: string) => updateFormData("email", text)}
                keyboardType="email-address"
              />
              <CustomInputText
                label="Phone Number"
                value={formData.phone}
                onChangeText={(text: string) => updateFormData("phone", text)}
                keyboardType="phone-pad"
              />
            </>
          ),
        };

      case 3:
        return {
          title: "Tell us about yourself",
          subtitle: "Help us find your perfect match with some basic info.",
          fields: (
            <>
              <CustomInputText
                label="Age"
                value={formData.age}
                onChangeText={(text: string) => updateFormData("age", text)}
                keyboardType="numeric"
              />
              <CustomInputText
                label="Gender"
                value={formData.gender}
                onChangeText={(text: string) => updateFormData("gender", text)}
                // multiline
              />
            </>
          ),
        };

      default:
        return null;
    }
  };

  const stepContent = getStepContent();

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
            <CustomProgressBar progress={progress} />
          </View>

          <View className="px-8 mt-4">
            <Text className="font-nunito-medium text-gray-400 text-sm">
              Step {currentStep} of {totalSteps}
            </Text>
          </View>

          <View className="px-8 mt-6">
            <Text className="font-nunito-extrabold text-gray-800 text-2xl">
              {stepContent?.title}
            </Text>
          </View>

          <View className="h-11 px-8 mt-1">
            <Text className="font-nunito-bold text-gray-500 text-base">
              {stepContent?.subtitle}
            </Text>
          </View>

          <View className="px-8 mt-8 gap-4">{stepContent?.fields}</View>
        </ScrollView>

        <View className="px-8 mb-10 gap-3">
          {currentStep < totalSteps ? (
            <TouchableOpacity
              onPress={goToNextStep}
              className="bg-rose-400 py-4 rounded-full "
            >
              <View className="flex flex-row items-center justify-center gap-2">
                <Text className="text-black font-nunito-extrabold text-lg">
                  Continue
                </Text>
                <ArrowRight color="black" size={15} strokeWidth={4} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-green-500 py-4 rounded-full"
            >
              <View className="flex flex-row items-center justify-center gap-2">
                <Text className="text-black text-center font-nunito-extrabold text-lg">
                  Complete Registration
                </Text>
                <ArrowRight color="black" size={15} strokeWidth={4} />
              </View>
            </TouchableOpacity>
          )}

          {currentStep > 1 && (
            <TouchableOpacity
              onPress={goToPreviousStep}
              className="border border-gray-300 py-4 -mb-9 rounded-full"
            >
              <Text className="text-black text-center font-nunito-extrabold text-lg">
                Back
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
