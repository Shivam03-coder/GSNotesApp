import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Layout>
      <Box
        className="aboutPage"
        sx={{
          minHeight: "80vh",
          color: "white",
          backgroundColor: "#1c253d",
          py: 14,
          "@media (max-width:600px)": {
            mt: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Cinzel, serif;",
            textAlign: "center",
          }}
          variant="h4"
        >
          <span className="text-[cyan] mt-4" id="GsNotes"> GS NOTES.</span>
        </Typography>
        <p
          className="paragraphAbout"
          style={{
            textAlign: "center",
            marginTop: "28px",
            fontSize: "25px",
            color: "cyan",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          Hello Friends this side{" "}
          <span style={{ color: "#e108fc" }}>Shivam Anand</span>.I am currently
          persuing my
          <br />
          <span style={{ color: "#e108fc" }}> Bachelor in Technology</span>
          <br />
          I am Currently Learning Full Stack{" "}
          <br />
          <span style={{ color: "#e108fc" }}>Web-Development.</span>
          <br />
          This is a Notes and Book website.
          <br />
          Thank You.
        </p>
        <br />
        <p style={{ fontFamily: "sans-serif" }}>
          <h1
            style={{
              color: "#ee9313",
              textAlign: "center",
              marginTop: "22px",
              fontSize: "33px",
            }}
          >
            TRUST ME I AM AN ENGINNER.
          </h1>
        </p>
      </Box>
    </Layout>
  );
}

export default About;
