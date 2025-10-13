import React from "react";
import Svg, { G, Polygon, Rect } from "react-native-svg";


export const HalfHeartIcon = ({ size = 40, color = "red" }) => {
  // Scale factor to fit your size prop
  const scale = size / 100; // original viewBox width is 100

  return (
    <Svg
      width={size}
      height={(125 * scale)} // maintain aspect ratio (viewBox height is 125)
      viewBox="0 0 100 125"
    >
      <G fill={color}>
        <Rect x="56.429" y="5" width="25.714" height="12.857" />
        <Rect x="82.143" y="17.857" width="12.857" height="38.571" />
        <Rect x="69.286" y="56.429" width="12.857" height="12.857" />
        <Polygon points="56.429,17.857 43.571,17.857 43.571,5 17.857,5 17.857,17.857 5,17.857 5,56.429 17.857,56.429 17.857,69.286 30.714,69.286 30.714,82.143 43.571,82.143 43.571,95 56.429,95 56.429,82.143 69.286,82.143 69.286,69.286 56.429,69.286" />
      </G>
    </Svg>
  );
};
