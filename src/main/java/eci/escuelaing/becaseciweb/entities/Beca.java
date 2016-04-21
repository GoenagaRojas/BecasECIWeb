/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.entities;

import java.util.ArrayList;

/**
 *
 * @author andres
 */
public class Beca {
    
    private ArrayList<Postulacion> postulaciones;
    private Integer duracionSemestres;
    private ArrayList<ProgramaAcademico> otorgadaPara;
    private ArrayList<String> beneficios;
    private ArrayList<String> opciones;
    private ArrayList<String> condiciones;
    private ArrayList<Opinion> opiniones;
    private ArrayList<OtorgacionBeca> otorgadaA;

    public ArrayList<Postulacion> getPostulaciones() {
        return postulaciones;
    }

    public void setPostulaciones(ArrayList<Postulacion> postulaciones) {
        this.postulaciones = postulaciones;
    }

    public Integer getDuracionSemestres() {
        return duracionSemestres;
    }

    public void setDuracionSemestres(Integer duracionSemestres) {
        this.duracionSemestres = duracionSemestres;
    }

    public ArrayList<ProgramaAcademico> getOtorgadaPara() {
        return otorgadaPara;
    }

    public void setOtorgadaPara(ArrayList<ProgramaAcademico> otorgadaPara) {
        this.otorgadaPara = otorgadaPara;
    }

    public ArrayList<String> getBeneficios() {
        return beneficios;
    }

    public void setBeneficios(ArrayList<String> beneficios) {
        this.beneficios = beneficios;
    }

    public ArrayList<String> getOpciones() {
        return opciones;
    }

    public void setOpciones(ArrayList<String> opciones) {
        this.opciones = opciones;
    }

    public ArrayList<String> getCondiciones() {
        return condiciones;
    }

    public void setCondiciones(ArrayList<String> condiciones) {
        this.condiciones = condiciones;
    }

    public ArrayList<Opinion> getOpiniones() {
        return opiniones;
    }

    public void setOpiniones(ArrayList<Opinion> opiniones) {
        this.opiniones = opiniones;
    }

    public ArrayList<OtorgacionBeca> getOtorgadaA() {
        return otorgadaA;
    }

    public void setOtorgadaA(ArrayList<OtorgacionBeca> otorgadaA) {
        this.otorgadaA = otorgadaA;
    }
    
    
    
}
