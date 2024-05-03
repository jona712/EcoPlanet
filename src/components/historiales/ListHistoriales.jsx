//import { useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
//Servicios
//import CanjeoMaterialesService from "../../services/CanjeoMaterialesService";

//Maquetacion
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

//Recursos

//import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import IconButton from "@mui/material/IconButton";
//import PersonIcon from "@mui/icons-material/Person";
//import PaidIcon from "@mui/icons-material/Paid";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
//import { useEffect, useState } from "react";
//import { Link, useParams } from "react-router-dom";

Historial.propTypes = { imagen: PropTypes.string.isRequired };
Historial.propTypes = { url: PropTypes.string.isRequired };
Historial.propTypes = { titulo: PropTypes.string.isRequired };

export function Historial({ imagen, url, titulo }) {
  return (
    <Grid>
      {/* Tipos de historial */}
      <Grid
        container
        sx={{ p: 2, display: "flex", justifyContent: "center" }}
        spacing={3}
      >
        {/* Canjeo materiales */}
        <Grid spacing={3}>
          <Card style={{ width: "280px" }}>
            <CardHeader
              sx={{
                p: 0,
                padding: "10px 0p",
                backgroundColor: "blue",
                color: "white",
              }}
              style={{ textAlign: "center", padding: "10px" }}
              title={titulo}
              subheader={<span style={{ color: "white" }}>{}</span>}
            />
            <CardContent>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imagen}
                  alt="imagen del material"
                  style={{
                    width: "300px",
                    height: "250px",
                    padding: "10px",
                  }}
                />
              </Box>

              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions
              sx={{
                backgroundColor: (theme) => theme.palette.action.focus,
                color: (theme) => theme.palette.common.white,
              }}
            >
              <IconButton
                component={Link}
                to={url}
                aria-label="Detalle"
                sx={{
                  fontSize: "15px",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "0",
                  },
                }}
              >
                <InfoIcon style={{ marginLeft: "5px" }} />
                Más información
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
