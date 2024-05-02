import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

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
      </Container>
    </Box>
  );
};

export default Footer;
