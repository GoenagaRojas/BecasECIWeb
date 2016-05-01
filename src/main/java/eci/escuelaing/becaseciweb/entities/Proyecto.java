/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.entities;

import java.util.ArrayList;
import java.util.Date;

/**
 *
 * @author andres
 */
public class Proyecto {
    
    private Integer codigo;
    private String nombre;
    private Date fechaInicio;
    private Date fechaFin;
    private String tema;
    private ArrayList<String> areaDeConocimiento=new ArrayList<>();
    private String objetivo;
    private ArrayList<Organizacion> orgsPatrocinan=new ArrayList<>();
    private ArrayList<Estudiante> participan=new ArrayList<>();

    public Proyecto(Integer codigo, String nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
    
    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public ArrayList<String> getAreaDeConocimiento() {
        return areaDeConocimiento;
    }

    public void setAreaDeConocimiento(ArrayList<String> areaDeConocimiento) {
        this.areaDeConocimiento = areaDeConocimiento;
    }

    public String getObjetivo() {
        return objetivo;
    }

    public void setObjetivo(String objetivo) {
        this.objetivo = objetivo;
    }

    public ArrayList<Organizacion> getOrgsPatrocinan() {
        return orgsPatrocinan;
    }

    public void setOrgsPatrocinan(ArrayList<Organizacion> orgsPatrocinan) {
        this.orgsPatrocinan = orgsPatrocinan;
    }

    public ArrayList<Estudiante> getParticipan() {
        return participan;
    }

    public void setParticipan(ArrayList<Estudiante> participan) {
        this.participan = participan;
    }
    
    
    
}
