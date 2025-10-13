# <3 React Native 8-bit Heart Rating <3

a **retro-inspired** interactive **React Native rating component** built with **animated state transitions, gesture detection**, and supports **half-heart precision**. 

designed to be integrated into Windows-95/early internet inspired UIs. easily adapt to a star rating component with your own 8-bit svgs. 

---

## highlights

**supports half star ratings** switching between empty, half and full hearts 
accordingly 

**touch-based half-heart detection** with `GestureResponderEvent` logic.  

**animated API integration** for fluid transitions between rating states.  

**lightweight and dependency-free**, reliant only on core React Native APIs. 

**customize** with your favourite 8-bit SVG icons

---

## installation

```bash
npm install github:chloechartrand/react-native-heart-rating
# or
yarn add github:chloechartrand/react-native-heart-rating
```

---

## usage 

**props**

| Prop | Type | Default | Description |
|------|------|----------|-------------|
| `rating` | `number` | `0` | The current rating value (supports halves, e.g. `3.5`). If omitted, starts at `0`. |
| `onRatingChange` | `(rating: number) => void` | `undefined` | Callback fired when the user taps or changes the rating. Returns the new value (can be 0.5 increments). |


**example with states** for API integration 

```tsx
import React, { useState } from "react";
import { View } from "react-native";
import { HeartRating } from "react-native-heart-rating";

export default function App() {
  const [rating, setRating] = useState(3.5);

  return (
    <View>
      <HeartRating rating={rating} onRatingChange={setRating} />
    </View>
  );
}
```

**example with custom icons** assumes width of 24

```tsx
import { StarEmpty, StarHalf, StarFull } from "../icons";

<HeartRating
  rating={rating}
  onRatingChange={setRating}
  icons={{
    empty: <StarEmpty />,
    half: <StarHalf />,
    full: <StarFull />,
  }}
/>
```

---
