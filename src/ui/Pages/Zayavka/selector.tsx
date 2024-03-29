import * as React from "react";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import { useState } from "react";

const marks = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
  {
    value: 6,
  },
  {
    value: 7,
  },
];

const PrettoSlider = styled(Slider)({
  color: "primary",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "blue",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function CustomizedSlider() {
  let [value, setValue] = React.useState(0);
  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  return (
    <Box sx={{ width: 320 }}>
      <Typography gutterBottom>
        Добавить часы к смене ? <br></br> + {value}{" "}
        {value === 1
          ? "час"
          : value === 2
          ? "часа"
          : value === 3
          ? "часа"
          : value === 4
          ? "часа"
          : "часов"}
      </Typography>
      <PrettoSlider
        // valueLabelDisplay="on"
        aria-label="Выберете кол-во часов"
        defaultValue={0}
        marks={marks}
        max={8}
        onChange={handleChange}
      />
    </Box>
  );
}
