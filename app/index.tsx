import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function signin() {
  const [phonenumber, setPhonenumber] = useState("");

  const handleLogin = () => {
    console.log(phonenumber);
  };

  return (
    <SafeAreaView className="bg-white h-full ">
      <ScrollView contentContainerClassName="h-full">
        <View className="flex-1 bg-white justify-center items-center px-5">
          <View className="w-48 h-80 border-4 border-gray-600 rounded-3xl mb-10 justify-center items-center">
            <View className="w-20 h-20 border-2 bg-rose-400 rounded-xl overflow-hidden">
              <Image className="w-full h-full" />
            </View>
          </View>

          <View className="items-center mb-10 gap-4">
            <View className="flex-row items-center gap-2">
              <Image
                source={require("../assets/images/icon.png")}
                className="w-16 h-16"
              />
              <Text className="font-nunito-black text-black text-5xl p-2">
                Mirash
              </Text>
            </View>
            <Text className="font-nunito-bold text-gray-500 text-2xl text-center mt-2">
              It is never too late to{"\n"}fall in love
            </Text>
          </View>
          <Link href="/signup" asChild>
            <TouchableOpacity className="bg-rose-400  py-4 rounded-full w-2/3 mb-4">
              <Text className="text-black text-center font-nunito-extrabold">
                Create an account
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/signin" asChild>
            <TouchableOpacity className="bg-white py-4 rounded-full w-2/3 mb-4">
              <Text className="text-black text-center font-nunito-extrabold">
                Sign in
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
