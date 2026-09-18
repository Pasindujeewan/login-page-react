import { Apple, Facebook, Google } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialLoginButtons = () => {
  const buttonStyle = {
    width: 38,
    height: 38,
    backgroundColor: "#000",
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
      <IconButton sx={buttonStyle}>
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
