import { Box, Paper, Typography } from "@mui/material";

// this function show access token after login ,But should change it when go Production
function AccessTokenPage() {
  const accessToken = sessionStorage.getItem("accessToken");

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3, maxWidth: 700, mx: "auto" }}>
        <Typography variant="h5" gutterBottom>
          Access Token
        </Typography>

        <Typography
          sx={{
            p: 2,
            bgcolor: "#f5f5f5",
            borderRadius: 1,
            wordBreak: "break-all",
            fontFamily: "monospace",
            fontSize: 14,
          }}
        >
          {accessToken || "No access token found"}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, color: "#d12323" }}>
          This token is displayed for assignment purposes only. Displaying
          access tokens like this is not secure in production.
        </Typography>
      </Paper>
    </Box>
  );
}

export default AccessTokenPage;
