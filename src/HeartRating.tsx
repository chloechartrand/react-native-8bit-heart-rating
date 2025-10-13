import React, { useEffect, useRef, useState } from "react";
import { Animated, GestureResponderEvent, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { EmptyHeartIcon } from "../icons/EmptyHeart";
import { HalfHeartIcon } from "../icons/HalfHeart";
import { HeartIcon } from "../icons/Heart";

type HeartRatingProps = {
  rating?: number;
  onRatingChange?: (rating: number) => void;
};

export default function HeartRating({ rating, onRatingChange }: HeartRatingProps) {
  const [internalRating, setInternalRating] = useState(rating ?? 0);
  const animatedValue = useRef(new Animated.Value(rating ?? 0)).current;

  useEffect(() => {
    if (rating !== undefined && rating !== internalRating) {
      setInternalRating(rating);
      Animated.timing(animatedValue, {
        toValue: rating,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }, [rating]);

  const updateRating = (newRating: number) => {
    const clamped = Math.max(0, Math.min(5, newRating));
    setInternalRating(clamped);
    onRatingChange?.(clamped);
    Animated.timing(animatedValue, {
      toValue: clamped,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const handlePress = (event: GestureResponderEvent, heartIndex: number) => {
    const { locationX } = event.nativeEvent;
    // assume heart width is ~24px; threshold = half of icon width
    const halfWidth = 12;
    const isLeftHalf = locationX < halfWidth;
    const newRating = isLeftHalf ? heartIndex - 0.5 : heartIndex;
    updateRating(newRating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {[1, 2, 3, 4, 5].map((i) => {
          let Icon;
          const diff = internalRating - i;
          if (diff >= 0) Icon = HeartIcon;
          else if (diff >= -0.5) Icon = HalfHeartIcon;
          else Icon = EmptyHeartIcon;

          return (
            <TouchableWithoutFeedback key={i} onPress={(e) => handlePress(e, i)}>
              <View style={styles.iconWrapper}>
                <Icon />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  iconWrapper: {
    marginHorizontal: 4,
  },
});
