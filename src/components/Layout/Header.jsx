import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoImage from "../../assets/images/Logo.png";
import UsuarioService from "../../services/UsuarioService";
import { useParams } from "react-router-dom";

const pages = ["Procesos", "Mantenimientos", "Reportes", "Acerca de"];
//const settings = ["Perfil", "Cupones", "Historial", "Cerrar sesión"];

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState(null);

  const handleOpenMenu = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuType(null);
  };

  //Se resive como parametro desde el login
  const params = useParams();
  // Resultado de consumo del API, respuesta
  const [data, setData] = useState(null);
  // Error del API
  const [error, setError] = useState("");
  // Booleano para establecer si se ha recibido respuesta
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //Lista de peliculas del API
    UsuarioService.getUsuarioById(1)
      .then((response) => {
        setData(response.data.results[0]);
        setError(response.error);
        setLoaded(true);
        console.log(response.data.results);
      })
      .catch((error) => {
        if (error instanceof SyntaxError) {
          console.log(error);
          setError(error);
          setLoaded(false);
          throw new Error("Respuesta no válida del servidor");
        }
      });
  }, [params.id]);

  if (!loaded) return <Typography>Cargando...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <AppBar position="static" sx={{ backgroundColor: "green" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={LogoImage}
            alt="Logo"
            style={{ width: "45px", height: "auto", marginRight: "5px" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EcoPlanet
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => handleOpenMenu(event, "Nav")}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl) && menuType === "Nav"}
              onClose={handleCloseMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={(event) => handleOpenMenu(event, page)}
                  sx={{
                    my: 2,
                    color: "black",
                    "&:hover": {
                      backgroundColor: "#689f38",
                    },
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", marginleft: "10px" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={(event) => handleOpenMenu(event, page)}
                sx={{
                  my: 2,
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#689f38",
                  },
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip
              title={data.nombre}
              color="white"
              fontFamily="monospace"
              marginleft="5px"
              textalign="center"
            >
              <IconButton
                onClick={(event) => handleOpenMenu(event, "User")}
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-user"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl) && menuType === "User"}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  component="a"
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "green",
                    textTransform: "uppercase",
                  }}
                  textAlign="center"
                >
                  Perfil
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  component="a"
                  href=""
                  style={{
                    textDecoration: "none",
                    color: "green",
                    textTransform: "uppercase",
                  }}
                  textAlign="center"
                >
                  Cupones
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  component="a"
                  href="/historial "
                  style={{
                    textDecoration: "none",
                    color: "green",
                    textTransform: "uppercase",
                  }}
                  aria-label="Detalle"
                >
                  <Typography>Historial</Typography>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Typography
                  component="a"
                  href="/historial/"
                  style={{
                    textDecoration: "none",
                    color: "green",
                    textTransform: "uppercase",
                  }}
                  textAlign="center"
                >
                  Cerrar sesión
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar-procesos"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl) && menuType === "Procesos"}
            onClose={handleCloseMenu}
          >
            <MenuItem component="a" href="/material/" onClick={handleCloseMenu}>
              <Typography>Materiales</Typography>
            </MenuItem>

            <MenuItem
              component="a"
              href="/centroAcopio/"
              onClick={handleCloseMenu}
            >
              <Typography textalign="center">Centros de acopio</Typography>
            </MenuItem>

            <MenuItem component="a" href="" onClick={handleCloseMenu}>
              <Typography textalign="center">Canjear</Typography>
            </MenuItem>
          </Menu>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar-mantenimiento"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl) && menuType === "Mantenimientos"}
            onClose={handleCloseMenu}
          >
            <MenuItem component="a" href="/material/" onClick={handleCloseMenu}>
              <Typography textalign="center">Materiales</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Typography textalign="center">Usuarios</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Typography textalign="center">Centros</Typography>
            </MenuItem>
          </Menu>

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar-reportes"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl) && menuType === "Reportes"}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={handleCloseMenu}>
              <Typography textalign="center">Reporte 1</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Typography textalign="center">Reporte 2</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <Typography textalign="center">Reporte 3</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
