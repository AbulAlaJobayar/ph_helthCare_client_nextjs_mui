import { Box, List, Stack, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import { drawerItems } from "../../../utils/drawerItems";
import { userRole } from "@/types";
import SideBarItems from "./SideBarItems";
import { getUserInfo } from "@/services/authService";
import { useEffect, useState } from "react";

const SideBar = () => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={1}
        py={1}
        mt={1}
      >
        <Image src={assets.svgs.logo} alt="logo" width={40} height={40} />
        <Typography variant="h6" component="h1">
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as userRole).map((item, index) => (
          <SideBarItems key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
