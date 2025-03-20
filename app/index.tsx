import { Text, View, TouchableOpacity, useColorScheme } from "react-native";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  const addOne = () => {
    !started ? setStarted(true) : ""
    setCount(count + 1)
  }

  const minusOne = () => {
    !started ? setStarted(true) : ""
    setCount(count - 1)
  }

  const square = () => {
    !started ? setStarted(true) : ""
    setCount(count * count)
  }

  const divideByPi = () => {
    !started ? setStarted(true) : ""
    setCount(count / Math.PI)
  }

  const round = () => {
    !started ? setStarted(true) : ""

    setCount(Math.round(count))
  }

  const nothing = () => {
    !started ? setStarted(true) : ""
    return
  }

  const reset = () => {
    setCount(0)
    setStarted(false)
  }

  let theme = useColorScheme()
  const isDarkMode = theme === "dark"
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isDarkMode ? "black" : "white",

      }}
    >
      <Text style={{ color: isDarkMode ? "white" : "black", fontWeight: "bold", fontSize: 45, textAlign: "center", padding: 20 }}>{count}</Text>
      {!started && (
        <View>
          <Text style={{ color: isDarkMode ? "white" : "black", fontWeight: "600", fontSize: 37, textAlign: "center" }}>
            This is my first app.
          </Text>
          <Text style={{ color: isDarkMode ? "white" : "black", fontWeight: "600", fontSize: 37, textAlign: "center" }}>
            It has a button.
          </Text>
        </View>
      )}

      <View style={{ flexDirection: "row", display: "flex", gap: 4 }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={addOne} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>+1</Text></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={nothing} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>This one does (almost) nothing</Text></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={minusOne} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>-1</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", display: "flex", gap: 4 }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={square} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>Square</Text></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={divideByPi} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>/ 3.14</Text></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={round} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>Round</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", display: "flex", gap: 4 }}>
        <TouchableOpacity
          style={{
            backgroundColor: isDarkMode ? "white" : "black",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={reset} ><Text style={{ color: isDarkMode ? "black" : "white", fontWeight: "bold" }}>Reset</Text></TouchableOpacity>
      </View>


    </View >
  );
}