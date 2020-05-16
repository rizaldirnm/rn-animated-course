import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Svg, { Line, Path } from "react-native-svg";

import { StyleGuide } from "../components";

const { width } = Dimensions.get("window");
const size = width - 48;
const STROKE_WIDTH = 4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    width: size + STROKE_WIDTH,
    height: size + STROKE_WIDTH
  }
});

export default () => {
  const min = STROKE_WIDTH / 2;
  const max = min + size;
  const start = {
    x: min,
    y: max
  };
  const end = {
    x: max,
    y: min
  };
  const d = `M ${start.x} ${start.y} C 10 10, 50 50, ${end.x} ${end.y}`;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Svg style={StyleSheet.absoluteFill}>
          <Path
            fill="transparent"
            stroke="black"
            strokeWidth={STROKE_WIDTH}
            {...{ d }}
          />
        </Svg>
      </View>
    </View>
  );
};
