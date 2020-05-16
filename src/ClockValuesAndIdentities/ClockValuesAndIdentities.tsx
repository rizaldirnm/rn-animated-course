import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import {} from "react-native-redash";
import { Button, Card, cards } from "../components";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const {Value, Clock, add, eq, useCode, cond, interpolate, Extrapolate, startClock, set, not} = Animated;

export default () => {
  const clock = new Clock()
  const startAnimation = new Value(0)
  const startTime = new Value(0)
  const duration = 1000
  const endTime = add(startTime, duration)
  const from = new Value(1)
  const to = new Value(0)
  const opacity = interpolate(clock, {
    inputRange: [startTime, endTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP
  })
  useCode(() => [cond(eq(startAnimation, 1), [
    startClock(clock),
    set(startTime, clock),
    set(from, not(to)),
    set(to, not(to)),
    set(startAnimation, 0)
  ])], [clock, from, startAnimation, startTime, to])

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{ opacity }}>
          <Card card={cards[0]} />
        </Animated.View>
      </View>
      <Button
        label="toggle"
        primary
        onPress={() => startAnimation.setValue(1)}
      />
    </View>
  );
};
