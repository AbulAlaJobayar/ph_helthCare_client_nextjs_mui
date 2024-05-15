import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};
export type userRole = keyof typeof USER_ROLE;
export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}
export type TResponseSuccessType = {
  data: any;
  meta: IMeta;
};
export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage[];
};
type IGenericErrorMessage = {
  path: string | number;
  message: string;
};
export const Gender = ["MALE", "FEMALE"];
