import { Box, Typography } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import LoginIllustration from "../components/login/LoginIllustration";

//LoginPage component that renders the login page with a form and an illustration
const LoginPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 0, md: 5 },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 450,
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Welcome back!
          </Typography>

          <Typography
            sx={{
              fontWeight: 300,
              textAlign: "center",
              color: "text.secondary",
              fontSize: 14,
              mb: 4,
            }}
          >
            Simplify your workflow and boost your productivity
            <br />
            with{" "}
            <Typography
              component="b"
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                color: "primary.secondary",
              }}
            >
              Tuga's App.
            </Typography>{" "}
            Get started for free.
          </Typography>

          <LoginForm />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            minHeight: 600,
            borderRadius: 4,
            backgroundColor: "#f6faf3",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <LoginIllustration />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
