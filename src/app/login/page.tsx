"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { userLogin } from "@/services/action/userLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/authService";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const validationSchema = z.object({
  email: z.string().email("please enter a valid email!"),
  password: z.string().min(5, "password must be at last 5 characters"),
});
const LoginPage = () => {
  const router = useRouter();
  const [error,setError]=useState()

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      console.log(res);
      if (res?.data?.accessToken) {
        storeUserInfo(res?.data?.accessToken);
        toast.success(res.message);
        router.push("/dashboard");
      } else {
        setError(res.message)
        toast.error(res?.message ? res?.message : "something went wrong");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            p: 4,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" height={50} width={50} />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>
          {
            error && (
              <Box>
                <Typography 
                sx={{
                  background:"red",
                  color:'white',
                  marginTop:"5px",
                  borderRadius:"2px",
                  padding:"1px"
                }}
                >
                  {error}
                </Typography>
                </Box>
            )
          }
          <Box>
            <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={6}>
                  <PHInput name="email" label="Email" size="small" />
                </Grid>
                <Grid item md={6}>
                  <PHInput name="password" label="Password" size="small" />
                </Grid>
              </Grid>
              <Typography
                my={2}
                textAlign={"end"}
                component="p"
                fontWeight={300}
              >
                Forgot Password?
              </Typography>
              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?{" "}
                <span style={{ color: "blue" }}>
                  <Link color="blue" href={"/register"}>
                    Create an account
                  </Link>
                </span>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
