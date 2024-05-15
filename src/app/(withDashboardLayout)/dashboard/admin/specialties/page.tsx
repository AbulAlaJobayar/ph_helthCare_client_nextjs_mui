"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import SpecialtiesModel from "./components/SpecialtiesModel";
import { useState } from "react";
import {
  useDeleteSpecialtyMutation,
  useGetSpecialtyQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [deleteSpecialty] = useDeleteSpecialtyMutation();
  const { data, isLoading } = useGetSpecialtyQuery("");
  console.log(data);
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      console.log(res)
      if (res.id) {
        toast.success("specialty deleted successfully");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box my={2}>
            <Image src={row.icon} alt="icon" width={20} height={20} />
          </Box>
        );
      },
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>create specialties</Button>
        <SpecialtiesModel open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField placeholder="Search Specialty" />
      </Stack>
      {!isLoading ? (
        <Box>
          <DataGrid rows={data} columns={columns} />
        </Box>
      ) : (
        <h1>Loading..........</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
