import PHDatePicker from "@/components/Form/PHDatePicker";
import PHForm from "@/components/Form/PHForm";
import PHTimePicker from "@/components/Form/PHTimePicker";
import PHModal from "@/components/Shared/PHModal/PHModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormetter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ScheduleModel = ({ open, setOpen }: TProps) => {
const [createSchedule]=useCreateScheduleMutation()

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);

    try {
      const res = await createSchedule(values);
      if (res?.data.length) {
        toast.success("Schedule Created Successfully");
        setOpen(false)
      }
      else{
        console.log(res)
        toast.error("something went wrong");
        setOpen(false)
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <PHModal open={open} setOpen={setOpen} title="Create Schedule">
      <PHForm onSubmit={handleFormSubmit}>
        <Grid
          container
          spacing={2}
          sx={{
            width: "400px",
          }}
        >
          <Grid item md={12}>
            <PHDatePicker name="startDate" label="StartDate" />
          </Grid>
          <Grid item md={12}>
            <PHDatePicker name="endDate" label="EndDate" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="startTime" label="StartTime" />
          </Grid>
          <Grid item md={6}>
            <PHTimePicker name="endTime" label="EndTime" />
          </Grid>
        </Grid>
        <Button
          sx={{
            mt: 2,
          }}
          type="submit"
        >
          create
        </Button>
      </PHForm>
    </PHModal>
  );
};

export default ScheduleModel;
