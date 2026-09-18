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
        p: { xs: 2, md: 4 },
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
              fontWeight: 700,
              textAlign: "center",
              mb: 1,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Welcome back!
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "text.secondary",
              fontSize: 13,
              mb: 4,
            }}
          >
            Simplify your workflow and boost your productivity
            <br />
            with <b>Tuga's App.</b> Get started for free.
          </Typography>

          <LoginForm />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            minHeight: 600,
            borderRadius: 4,
            backgroundColor: "#f4f8f2",
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
