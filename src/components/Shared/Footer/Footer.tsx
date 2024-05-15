import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import facebook from "@/assets/landing_page/facebook.png";
import instagram from "@/assets/landing_page/instagram.png";
import twitter from "@/assets/landing_page/twitter.png";
import linkedin from "@/assets/landing_page/linkedin.png";
import Image from "next/image";
const Footer = () => {
  return (
    <Box bgcolor="rgb(17 26 34)" py={5}>
      <Container>
        <Stack
          direction="row"
          justifyContent="center"
          gap={4}
          alignItems="center"
        >
          <Typography component={Link} href="/consultation" color="white">
            Consultation
          </Typography>
          <Typography component={Link} href="/health-plans" color="white">
            Health Plans
          </Typography>
          <Typography component={Link} href="/medicine" color="white">
            Medicine
          </Typography>
          <Typography component={Link} href="/diagnostics" color="white">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/ngos" color="white">
            NGOs
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} direction={"row"} gap={2} py={3}>
          <Typography component={Link} href={"/facebook"}>
            <Image src={facebook} width={30} height={30} alt="facebook" />
          </Typography>
          <Typography component={Link} href={"/facebook"}>
            <Image src={instagram} width={30} height={30} alt="facebook" />
          </Typography>
          <Typography component={Link} href={"/facebook"}>
            <Image src={twitter} width={30} height={30} alt="facebook" />
          </Typography>
          <Typography component={Link} href={"/facebook"}>
            <Image src={linkedin} width={30} height={30} alt="facebook" />
          </Typography>
        </Stack>
        <div className=" border-b-[1px] border-dashed"></div>
        <Stack
          py={3}
          alignItems="center"
          justifyContent={"space-between"}
          direction={"row"}
        >
          <Typography component={"p"} color={"white"}>
            &copy;2024 PH Health Care. All Right Reserved
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            color={"white"}
            fontWeight={600}
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health care
          </Typography>
          <Typography component={"p"} color={"white"}>
            privacy policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
