import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function App() {
  const [boxColor, setBoxColor] = useState("green");

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <ColorBoxComponent color={boxColor} />
      </View>

      <View>
        <View style={styles.buttonContainer}>
          <Button
            title="Green"
            color={"green"}
            onPress={() => setBoxColor("green")}
          />
          <Button
            title="Blue"
            color={"blue"}
            onPress={() => setBoxColor("blue")}
          />
        </View>
      </View>
    </View>
  );
}

const ColorBoxComponent = ({ color }) => {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "#989898",
        borderRadius: 5,
        backgroundColor: color,
        color: "white",
        marginBottom: 10,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
