'use client'
import { Box, Button } from "@mui/material";
import { useState } from "react";
import ScheduleModel from "./component/ScheduleModel";

const SchedulesPage = () => {
  const [modalOpen,setModelOpen]=useState(false)
  return (
    <Box>
     <Button onClick={()=>setModelOpen(true)}>Create Schedule</Button>
        <ScheduleModel open={modalOpen} setOpen={setModelOpen}/>
        </Box>
  );
};

export default SchedulesPage;