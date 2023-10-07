import { Image, StyleSheet, View } from "react-native";
import AddSvg from "../../assets/add.png";

const PhotoBox = () => {
  return (
    <View style={styles.photoBox}>
      <View style={styles.photo}>
        <Image source={AddSvg} style={styles.icon} />
      </View>
    </View>
  );
};

export default PhotoBox;

const styles = StyleSheet.create({
  photoBox: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateY: -60 }],
    width: "100%",
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",

    borderRadius: 16,
  },
  icon: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
});
