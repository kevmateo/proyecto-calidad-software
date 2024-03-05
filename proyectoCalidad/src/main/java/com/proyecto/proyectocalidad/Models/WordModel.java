package com.proyecto.proyectocalidad.Models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "WORD")
public class WordModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true,nullable = false, name = "ID_W")

    private Long id_w;

    @Column(name = "SANS_WORD")
    private String  sans_word;
    @Column(name = "SPANISH_W")
    private String  spanish_w;
    @Column(name = "ENGLISH_W")
    private String  english_w;





    public Long getId_w() {
        return id_w;
    }

    public void setId_w(Long id_w) {
        this.id_w = id_w;
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

}
