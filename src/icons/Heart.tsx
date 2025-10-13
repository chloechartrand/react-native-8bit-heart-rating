import React from "react";
import Svg, { Polygon } from "react-native-svg";

export const HeartIcon = ({ size = 40, color = "red" }) => {
  const scale = size / 100; // original viewBox width is 100

  return (
    <Svg
      width={size}
      height={125 * scale} // maintain aspect ratio (viewBox height is 125)
      viewBox="0 0 100 125"
    >
      <Polygon
        points="95,17.857 82.143,17.857 82.143,5 56.429,5 56.429,17.857 43.571,17.857 43.571,5 17.857,5 17.857,17.857 5,17.857 5,56.429 17.857,56.429 17.857,69.286 30.714,69.286 30.714,82.143 43.571,82.143 43.571,95 56.429,95 56.429,82.143 69.286,82.143 69.286,69.286 82.143,69.286 82.143,56.429 95,56.429"
        fill={color}
      />
    </Svg>
  );
};
