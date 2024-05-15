"use server";
export const registerPatient = async (formData: FormData) => {
  console.log(formData)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache:"no-cache"
    }
  );
  const data =await res.json();
  return data;
};
