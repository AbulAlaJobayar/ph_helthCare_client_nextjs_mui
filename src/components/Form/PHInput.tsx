import { SxProps, TextField } from "@mui/material";
import { Controller,  useFormContext } from "react-hook-form";
type TInputProps = {
  name: string;
  label?: string;
  size?: "small" | "medium";
  type?: string;
  fullWidth?: boolean;
  required?:boolean;
  sx?:SxProps
};
const PHInput = ({
  name,
  label,
  size = "small",
  type = "text",
  fullWidth,
  required,
  sx
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field,fieldState:{error} }) => (
        <TextField
          {...field}
          sx={{...sx}}
          label={label}
          type={type}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          required={required}
          placeholder={label}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default PHInput;
