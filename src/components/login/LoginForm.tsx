import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import SocialLoginButtons from "./SocialLoginButtons";
import { useState } from "react";

//LoginForm component that renders the login form with username and password fields, a login button, and a link to register
const LoginForm = () => {
  //this state for password visibility
  const [showPassword, setShowPassword] = useState(false);

  // this states for input validation
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // this state for keep errors
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  // this function validate and check  email and password not empty
  const validateForm = () => {
    const newErrors = {
      userName: "",
      password: "",
    };
    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return !newErrors.userName && !newErrors.password;
  };

  // handle form submit data by calling validateform
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }
    //Now Just console log later add toast
    console.log("Form is valid");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          placeholder="Username"
          variant="outlined"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          error={Boolean(errors.userName)}
          helperText={errors.userName}
          size="small"
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 5,
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: 2,
              },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: "14px",
              padding: "13px 20px",
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 5,
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: 2,
              },
            },
            "& .MuiOutlinedInput-input": {
              fontSize: "14px",
              padding: "13px 20px",
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    sx={{
                      mr: 0.1,
                    }}
                    onClick={() => {
                      setShowPassword((prev) => !prev);
                    }}
                  >
                    {showPassword ? (
                      <Visibility fontSize="small" />
                    ) : (
                      <VisibilityOff fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 1,
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              cursor: "pointer",
              color: "text.primary",
            }}
          >
            Forgot Password?
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "primary.main",
            color: "#fff",
            borderRadius: 5,
            py: 1,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
        >
          Login
        </Button>
      </form>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 3,
        }}
      >
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#ddd" }} />

        <Typography sx={{ fontSize: 12, color: "text.primary" }}>
          or continue with
        </Typography>

        <Box sx={{ flex: 1, height: "1px", backgroundColor: "#ddd" }} />
      </Box>
      <SocialLoginButtons />

      <Typography
        sx={{
          textAlign: "center",
          fontSize: 12,
          mt: 9,
        }}
      >
        Not a member?{" "}
        <Box
          component="span"
          sx={{
            color: "secondary.main",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Register now
        </Box>
      </Typography>
    </Box>
  );
};

export default LoginForm;
