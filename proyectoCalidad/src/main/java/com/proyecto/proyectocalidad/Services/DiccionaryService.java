package com.proyecto.proyectocalidad.Services;

import com.proyecto.proyectocalidad.Constantes.Rutas;
import com.proyecto.proyectocalidad.Models.DiccionaryModel;
import com.proyecto.proyectocalidad.Repositories.DiccionaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Base64;

@Service
public class DiccionaryService {

    @Autowired
    private DiccionaryRepository diccionaryRepository;
    public ArrayList<DiccionaryModel> obtenerPalabras() {
        return (ArrayList<DiccionaryModel>) diccionaryRepository.findAll();
    }


    private byte[] obtenerBytesImagen(Long id) throws IOException {

        /*Path path = Paths.get(Rutas.IMAGENES.getRuta() + id + ".jpg");

        if (!Files.exists(path)) {
            // Manejar la situación cuando la imagen no existe
            return new byte[0];
        }


        return Files.readAllBytes(path.toAbsolutePath());*/

        return new byte[0];
    }

    public ArrayList<DiccionaryModel> obtenerPalabrasImagenes() {
        ArrayList<DiccionaryModel> posiciones = (ArrayList<DiccionaryModel>) diccionaryRepository.findAll();

        for (DiccionaryModel diccionaryModel : posiciones) {
            try {
                byte[] imagenBytes = obtenerBytesImagen(diccionaryModel.getId_s());
                String imagenBase64 = Base64.getEncoder().encodeToString(imagenBytes);
                diccionaryModel.setImagen(imagenBase64);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

        return posiciones;
    }
}
