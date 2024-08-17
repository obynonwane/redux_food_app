import { StyleSheet, View, Text } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
