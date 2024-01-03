package com.proyecto.proyectocalidad.Controllers;

import com.proyecto.proyectocalidad.Models.DiccionaryModel;
import com.proyecto.proyectocalidad.Services.DiccionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/diccionary")
public class DiccionaryController {

    @Autowired
    private DiccionaryService diccionaryService;

    @GetMapping()
    public ArrayList<DiccionaryModel> obtenerPalabras(){
        return diccionaryService.obtenerPalabras();
    }
    @GetMapping("/imagenes")
    public ArrayList<DiccionaryModel> obtenerPalabrasConIamgenes(){
        return diccionaryService.obtenerPalabrasImagenes();
    }
}
