import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { PageNotFound } from "./components/Home/PageNotFound";
import { Home } from "./components/home/home";
import { ListMateriales } from "./components/material/ListMateriales";
import { DetalleMaterial } from "./components/material/DetalleMaterial";
import { ListCentrosAcopio } from "./components/centrosAcopio/ListCentroAcopio";
import { DetalleCentroAcopio } from "./components/centrosAcopio/DetalleCentroAcopio";
import { Historial } from "./components/historiales/ListHistoriales";
import { ListCanjeoMateriales } from "./components/canjeoMateriales/ListCanjeoMateriales";
import { DetalleCanjeoMateriales } from "./components/canjeoMateriales/DetalleCanjeoMateriales";
import { ListCanjeoMaterialesByAdmin } from "./components/canjeoMateriales/ListCanjeoMaterialesByAdmin";

//Recursos
import ReciclarImage from "./assets/images/reciclar-image.jpg";
import CuponImage from "./assets/images/cupon-image.png";
import centroAcopioCanjeo from "./assets/images/centroAcopioCanjeo.jpg";

import { Grid, Typography } from "@mui/material";

let tipoUsuario = 3;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/material",
    element: <ListMateriales />,
  },
  {
    path: "/detalle-material/:id",
    element: <DetalleMaterial />,
  },
  {
    path: "/centroAcopio",
    element: <ListCentrosAcopio />,
  },
  {
    path: "/detalle-centroacopio/:id",
    element: <DetalleCentroAcopio />,
  },
  {
    path: "/historial",
    element: (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        style={{ justifyContent: "center" }}
        spacing={3}
      >
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          fontFamily="monospace"
          borderBottom="1px solid green"
          gutterBottom
        >
          Historiales
        </Typography>

        <Grid style={{ display: "flex", justifyContent: "center" }}>
          {tipoUsuario == 3 ? ( //3 es para cliente
            <>
              <Historial
                imagen={ReciclarImage}
                url={"/canjeosmateriales"}
                titulo={"Historial de Canjes de Materiales"}
              />{" "}
              {/*historial material cliente */}
              <Historial
                imagen={CuponImage}
                url={"/canjeosmateriales"}
                titulo={"Historial de Canjes de cupones"}
              />{" "}
              {/* historial cupones cliente */}
            </>
          ) : tipoUsuario == 2 ? ( // es para admin del centro
            <Historial
              imagen={centroAcopioCanjeo}
              url={"/canjeosmaterialesByAdmin"}
              titulo={"Historial de Canjes del Centro de acopio"}
            /> /* Historial de canjeos en centro acopio  */
          ) : null}
        </Grid>
      </Grid>
    ),
  },
  {
    path: "/canjeosmateriales",
    element: <ListCanjeoMateriales idUsuario={1} />, //cartas de los canjeos
  },
  {
    path: "/detalle-canjeoMateriales/:id",
    element: <DetalleCanjeoMateriales />,
  },
  {
    path: "/canjeosmaterialesByAdmin",
    element: <ListCanjeoMaterialesByAdmin idUsuario={2} />,
  },
  {
    path: "/detalle-canjeoMaterialesByAdmin/:id",
    element: <DetalleCanjeoMateriales />,
  },
]);

export default function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}
