import { Box, Divider, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <>
      <Box
        className="Footer"
        sx={{
          textAlign: "center",
          backgroundColor: "#101224",
          padding: "2px",
          color: "black",
          fontFamily: "monospace",
        }}
      >
        <Box
          sx={{
            mt: 2,
            mb: 1,
            // backgroundColor:"#101224",
            display: "flex",
            gap: "6%",
            justifyContent: "center",
            "& a:hover": {
              color: "#0000FF",
              transform: "scale(1.3,1.3)",
              transition: "all 400ms",
            },
          }}
        >
          <a href="https://twitter.com/ShivamA02580516" className="href">
            <i
              className="bi bi-twitter"
              style={{ color: "#0000FF", fontSize: "32px" }}
            ></i>
          </a>
          <a href="https://m.facebook.com/" className="href">
            <i
              class="bi bi-linkedin"
              style={{ color: "#0E86D4", fontSize: "32px" }}
            ></i>
          </a>
          <a href="https://github.com/Shivam03-coder" className="href">
            <i
              className="bi bi-github"
              style={{ color: "#ee9313", fontSize: "32px" }}
            ></i>
          </a>
          <a
            href="https://instagram.com/_shivam_anand__?igshid=YTQwZjQ0NmI0OA=="
            className="href"
          >
            <i
              className="bi bi-instagram"
              style={{ color: "#FA26A0", fontSize: "32px" }}
            ></i>
          </a>
        </Box>
        <Divider sx={{ color: "black" }} />
      </Box>
    </>
  );
}

export default Footer;
