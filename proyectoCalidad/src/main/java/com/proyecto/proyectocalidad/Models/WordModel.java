package com.proyecto.proyectocalidad.Models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "WORD")
public class WordModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false, name = "ID_W")

    private Long id;

    @Column(name = "SANS_WORD")
    private String  sans_word;
    @Column(name = "SPANISH_W")
    private String  spanish_w;
    @Column(name = "ENGLISH_W")
    private String  english_w;


    @OneToMany(mappedBy = "word", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<DiccionaryWordModel> diccionaryWordModels;



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSans_word() {
        return sans_word;
    }

    public void setSans_word(String sans_word) {
        this.sans_word = sans_word;
    }

    public String getSpanish_w() {
        return spanish_w;
    }

    public void setSpanish_w(String spanish_w) {
        this.spanish_w = spanish_w;
    }

    public String getEnglish_w() {
        return english_w;
    }

    public void setEnglish_w(String english_w) {
        this.english_w = english_w;
    }

    public List<DiccionaryWordModel> getDiccionaryWordModels() {
        return diccionaryWordModels;
    }

    public void setDiccionaryWordModels(List<DiccionaryWordModel> diccionaryWordModels) {
        this.diccionaryWordModels = diccionaryWordModels;
    }
}
