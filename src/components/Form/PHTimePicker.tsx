import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { IDatePicker } from "./PHDatePicker";
import { LabelOffRounded } from "@mui/icons-material";

const PHTimePicker = ({
  name,
  label,
  fullWidth = true,
  required,
  size = "small",
  sx,
}: IDatePicker) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopTimePicker
              {...field}
              label={label}
              value={value|| Date.now()}
              timezone="system"
              onChange={(time) => onChange(time)}
              slotProps={{
                textField:{
                  required:required,
                  size:size,
                  sx:{
                    ...sx
                  },
                  variant:"outlined",
                  fullWidth:fullWidth
                }
              }}
            />
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default PHTimePicker;
