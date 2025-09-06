// components/CustomProgressBar.tsx
import * as React from "react";
import { ProgressBar } from "react-native-paper";

type Props = {
  progress: number;
  color?: string;
  height?: number;
};

const CustomProgressBar = ({
  progress,
  color = "#fb7185",
  height = 12,
}: Props) => {
  return (
    <ProgressBar
      progress={progress}
      color={color}
      style={{ height, borderRadius: 10, backgroundColor: "#F1F1F1" }}
    />
  );
};

export default CustomProgressBar;
