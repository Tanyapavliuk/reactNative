import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const RegistrForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!login || !email || !password) {
      return;
    }
    console.log(`${login}, ${email}, ${password}`);
    navigation.navigate("Home");
  };

  const styles = StyleSheet.create({
    input: {
      position: "relative",
      width: 343,
      height: 50,
      borderColor: "#E8E8E8",
      borderWidth: 1,
      borderRadius: 13,
      backgroundColor: "#F6F6F6",

      fontSize: 16,
      padding: 16,
      color: "#000",
    },
    form: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 32,
    },
    button: {
      width: 343,
      padding: 16,
      backgroundColor: "#FF6C00",
      borderRadius: 100,

      marginTop: 43,
    },
  });
  return (
    <View>
      <KeyboardAvoidingView // визначаємо ОС та налаштовуємо поведінку клавіатури
        style={styles.form}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder="Логін"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Адреса електронної пошти"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Pressable style={styles.button} onPressIn={handleSubmit}>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Зареєстуватися
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegistrForm;
