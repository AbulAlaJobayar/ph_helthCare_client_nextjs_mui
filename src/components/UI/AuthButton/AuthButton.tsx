import { getUserInfo, isLoggedIn, removedUser } from "@/services/authService";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
        const userInfo = getUserInfo();
        const loggedInUser = isLoggedIn();
        const router = useRouter();
        const handleLogout = () => {
          removedUser();
          router.refresh();
        };
  return (
    <>
       {loggedInUser ? (
          <Button onClick={handleLogout} color="error">
            LogOut
          </Button>
        ) : (
          <Button component={Link} href="/login">
            LogIn
          </Button>
        )}
    </>
  );
};

export default AuthButton;
