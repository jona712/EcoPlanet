import { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  Input,
  Table,
  TableCell,
  TableRow,
} from "@mui/material";

export function Home() {
  const [imagen, setImagen] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImagen(file);
  };

  const handleImageUpload = async (event) => {
    event.preventDefault();
    // Verificar si se seleccionó una imagen
    if (!imagen) {
      alert("Por favor, selecciona una imagen.");
      return;
    }
    // Crear un objeto FormData y agregar la imagen
    const formData = new FormData();
    formData.append("imagen", imagen);
    try {
      // Realizar la solicitud POST a uploadFiles.php
      const response = await fetch(
        "C:/xampp/htdocs/apiEcoPlanet/uploads/uploadsFiles.php",
        {
          method: "POST",
          body: formData,
        }
      );
      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        const data = await response.json();
        console.log("Respuesta de la API:", data);
        // Puedes manejar la respuesta de la API aquí, por ejemplo, mostrar un mensaje al usuario
      } else {
        console.error(
          "Error en la solicitud:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error.message);
    }
  };

  return (
    <Container
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      maxWidth="sm"
    >
      {/* ... tu código existente ... */}
      <form onSubmit={handleImageUpload} encType="multipart/form-data">
        <Table>
          <TableRow>
            <TableCell>
              <FormControl>
                <Input type="file" onChange={handleImageChange} />
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} style={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" type="submit">
                Enviar Imagen
              </Button>
            </TableCell>
          </TableRow>
        </Table>
      </form>
    </Container>
  );
}
