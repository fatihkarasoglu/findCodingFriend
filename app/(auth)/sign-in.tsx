import { ScrollView, View, Text, Image } from "react-native";
import { images } from "@/constants";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import OAuth from "@/components/OAuth";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const omSignInPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[225px]">
          <Image source={images.Welcoming10} className="z-0 w-full h-[225px]" />
          <Text className="text-xl text-black font-PoppinsSemiBold absolute -bottom-0 right-10">
            Hoş Geldin 👋
          </Text>
        </View>
        <View className="p-5">
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
            title="Giriş Yap"
            onPress={omSignInPress}
            className="mt-6"
          />
          <OAuth />
          <Link
            href="/sign-up"
            className="text-lg text-center text-general-200 mt-2"
          >
            <Text>Henüz bir hesabın yok mu? </Text>
            <Text className="text-primary-500">Kayıt Ol</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
