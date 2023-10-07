import React from "react";
import {
  TouchableWithoutFeedback,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Keyboard,
  Text,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import image from "../../assets/regist_BG.jpg";
import LoginForm from "../components/LoginForm";
import PhotoBox from "../components/PhotoBox";

const Login = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.form}>
              <PhotoBox />
              <Text style={styles.title}>Увійти</Text>
              <LoginForm />
              <Text
                style={styles.toLogin}
                onPress={() => navigation.navigate("Registration")}
              >
                Немає акаунту? <Text style={styles.line}>Зареєструватися</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  form: {
    position: "relative",
    width: "100%",
    height: 546,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",

    marginTop: 92,
  },
  toLogin: {
    color: "#1B4371",
    textAlign: "center",
    marginTop: 16,
  },
  line: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});

export default Login;
