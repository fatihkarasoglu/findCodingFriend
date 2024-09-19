import { ScrollView, View, Text, Image } from "react-native";
import { images } from "@/constants";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[300px]">
          <Image source={images.Welcoming10} className="z-0 w-full h-[300px]" />
          <Text className="text-xl text-black font-PoppinsSemiBold absolute -bottom-0 left-5">
            Hesap Oluştur
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Ad"
            placeholder="Adınız"
            icon={icons.person}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
