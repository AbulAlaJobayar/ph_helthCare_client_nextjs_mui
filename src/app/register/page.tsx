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
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/action/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/action/userLogin";
import { storeUserInfo } from "@/services/authService";
import PHForm from "@/components/Form/PHForm";
import PHInput from "@/components/Form/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
const patientValidationSchema = z.object({
  name: z.string().min(1, "please provide your name"),
  email: z.string().email(),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "please provide a valid phone number"),
  address: z.string().min(1, "please provide email address"),
});
export const validationSchema = z.object({
  password: z.string().min(5, "password must be at last 5 character"),
  patient: patientValidationSchema,
});

const defaultValues={
  password:"",
  patient:{
    name:"",
    email:"",
    contactNumber:"",
    address:""
  }
}
const SignUp = () => {
  const [error,setError]=useState()
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    console.log("from values", values);
    const data = modifyPayload(values);
    console.log(data);
    try {
      const res = await registerPatient(data);
      
      if (res?.data?.id) {
        toast.success(res.message);
        const result = await userLogin({
          email: values.patient.email,
          password: values.password,
        });
        console.log(result);
        if (result?.data?.accessToken) {
          storeUserInfo(result?.data?.accessToken);
          router.push("/dashboard");
        }
      } else {
        setError(res?.message ? res?.message : "something went wrong")
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
                Patient Register
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
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <PHInput
                    label="Name"
                    size="small"
                    fullWidth={true}
                    name="patient.name"
                  />
                </Grid>

                <Grid item md={6}>
                  <PHInput
                    label="Email"
                    size="small"
                    fullWidth={true}
                    name="patient.email"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Password"
                    size="small"
                    fullWidth={true}
                    name="password"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Contact Number"
                    size="small"
                    fullWidth={true}
                    name="patient.contactNumber"
                  />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                    label="Address"
                    size="small"
                    fullWidth={true}
                    name="patient.address"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
              >
                Register
              </Button>
              <Typography component="p" fontWeight={300}>
                Do you already have an account?{" "}
                <span style={{ color: "blue" }}>
                  <Link color="blue" href={"/login"}>
                    Login
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

export default SignUp;
