import { Apple, Facebook, Google } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { loginWithGoogle } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const SocialLoginButtons = () => {
  const navigate = useNavigate();

  //this function handle Google Login implementation
  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      if (!user) {
        throw new Error("Google login failed");
      }
      navigate("/tokenPage");
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  const buttonStyle = {
    width: 38,
    height: 38,
    backgroundColor: "primary.main",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#222",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <IconButton sx={buttonStyle} onClick={handleGoogleLogin}>
        <Google fontSize="small" />
      </IconButton>

      <IconButton sx={buttonStyle}>
        <Apple fontSize="small" />
      </IconButton>

      <IconButton sx={buttonStyle}>
        <Facebook fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default SocialLoginButtons;
