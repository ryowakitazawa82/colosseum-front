import { Avatar, Button } from "@material-ui/core";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   (async () => {
  //     if (await isLoggedIn()) {
  //       navigate("/dashboard/home");
  //     }
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const signInAdmin = async () => {
    navigate("/dashboard/home");
  };

  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
        display="flex"
        height="100vh"
        sx={{
          backgroundColor: "#6C676E",
        }}
      >
        <Card sx={{ maxWidth: 345, padding: 8 }}>
          <Typography gutterBottom variant="h5" component="div">
            COLOSSEUM
          </Typography>
          <Button
            variant="outlined"
            color="default"
            startIcon={
              <Avatar
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                }
              />
            }
            style={{
              width: "100%",
              marginTop: "24px",
              padding: "12px",
              border: "1px solid #CCCCCC",
              boxShadow: "0px 0px 4px -6px rgba(0,0,0,0.6)",
            }}
            onClick={signInAdmin}
          >
            Googleでログイン
          </Button>
        </Card>
      </Grid>
    </>
  );
};

export default Login;
