package com.proyecto.proyectocalidad.Constantes;

public enum Rutas {
    IMAGENES("https://s3-calidad-software.s3.us-east-2.amazonaws.com/calidad/Proyecto/");

    private final String ruta;

    Rutas(String ruta) {
        this.ruta = ruta;
    }

    public String getRuta() {
        return ruta;
    }
}
