import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import image1 from "../../assets/images/loginpage/image1.svg";
import image2 from "../../assets/images/loginpage/image2.svg";
import image3 from "../../assets/images/loginpage/image3.svg";

import LoginImageContainer from "./LoginImageContainer";

// this is list of images and short description(description add as element not string)
const illustrations = [
  {
    image: image1,
    description: (
      <>
        Keep all your{" "}
        <Typography
          component="span"
          sx={{
            fontSize: "25px",
            color: "secondary.main",
          }}
        >
          tasks
        </Typography>{" "}
        organized in one place.
      </>
    ),
  },
  {
    image: image2,
    description: (
      <>
        Plan your work and complete your{" "}
        <Typography
          component="span"
          sx={{
            fontSize: "25px",
            color: "secondary.main",
          }}
        >
          {" "}
          goals
        </Typography>{" "}
        easily.
      </>
    ),
  },
  {
    image: image3,
    description: (
      <>
        Focus on what
        <Typography
          component="span"
          sx={{
            fontSize: "25px",
            color: "secondary.main",
          }}
        >
          {" "}
          matters
        </Typography>{" "}
        and stay on track.
      </>
    ),
  },
];

const LoginIllustration = () => {
  //this state for change images on login screen
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % illustrations.length);
    }, 5000); // after 5 seconds image change

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
      }}
    >
      <LoginImageContainer
        url={illustrations[index].image}
        alt="Login page images"
      />
      <Box sx={{ display: "flex", gap: 1 }}>
        {illustrations.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              width: i === index ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: i === index ? "primary.main" : "text.secondary",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
      <Typography
        sx={{
          color: "text.primary",
          fontSize: "18px",
        }}
      >
        {illustrations[index].description}
      </Typography>
    </Box>
  );
};

export default LoginIllustration;
