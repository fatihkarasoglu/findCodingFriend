import { ScrollView, View, Text, Image } from "react-native";
import { images } from "@/constants";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const omSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[225px]">
          <Image source={images.Welcoming10} className="z-0 w-full h-[225px]" />
          <Text className="text-xl text-black font-PoppinsSemiBold absolute -bottom-0 right-16">
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
          <InputField
            label="Email"
            placeholder="Email adresiniz"
            icon={icons.email}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Parola"
            placeholder="Parolanız"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />

          <CustomButton
            title="Kayıt Ol"
            onPress={omSignUpPress}
            className="mt-6"
          />
          <OAuth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-2"
          >
            <Text>Zaten bir hesabınız var mı? </Text>
            <Text className="text-primary-500">Giriş Yap</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
