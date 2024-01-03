package com.proyecto.proyectocalidad.Models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "DICCIONARY")
public class DiccionaryModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false, name = "ID_S")
    private Long id;

    @Column(name = "SANSCKRIT_S")
    private String  sansckrit;
    @Column(name = "SPANISH_S")
    private String  spanish;
    @Column(name = "ENGLISH_S")
    private String  english;
    @Column(name = "LINK")
    private String link;

    @Transient
    private String imagen;

    @JsonManagedReference
    @OneToMany(mappedBy = "diccionary", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DiccionaryWordModel> diccionaryWordModels;



    public DiccionaryModel() {
        diccionaryWordModels = new ArrayList<DiccionaryWordModel>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSansckrit() {
        return sansckrit;
    }

    public void setSansckrit(String sansckrit) {
        this.sansckrit = sansckrit;
    }

    public String getSpanish() {
        return spanish;
    }

    public void setSpanish(String spanish) {
        this.spanish = spanish;
    }

    public String getEnglish() {
        return english;
    }

    public void setEnglish(String english) {
        this.english = english;
    }

    public List<DiccionaryWordModel> getDiccionaryWordModels() {
        return diccionaryWordModels;
    }

    public void setDiccionaryWordModels(List<DiccionaryWordModel> diccionaryWordModels) {
        this.diccionaryWordModels = diccionaryWordModels;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
