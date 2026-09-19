import { Box } from "@mui/material";

interface LoginImageContainerProps {
  url: string;
  alt?: string;
}

//This components take image url and alt show in fixed hight and width
const LoginImageContainer = ({
  url,
  alt = "Login image",
}: LoginImageContainerProps) => {
  return (
    <Box
      component="img"
      src={url}
      alt={alt}
      sx={{
        width: 400,
        height: 300,
        objectFit: "contain",
        display: "block",
      }}
    />
  );
};

export default LoginImageContainer;
