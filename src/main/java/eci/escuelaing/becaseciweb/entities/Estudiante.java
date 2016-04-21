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
public class Estudiante {
    private Integer id;
    private Integer codigo;
    private String nombre;
    private String apellido;
    private String estudioPregrado;
    private String estudioPosgrado;
    private String correo;
    private ProgramaAcademico carrera;
    private Float promedio;
    private Integer semestre;
    private Integer estrato;
    private Proyecto proyectoParticipa;
    private ArrayList<Opinion> opiniones;
    private ArrayList<Postulacion> postulaciones;
    private OtorgacionBeca becadoA;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEstudioPregrado() {
        return estudioPregrado;
    }

    public void setEstudioPregrado(String estudioPregrado) {
        this.estudioPregrado = estudioPregrado;
    }

    public String getEstudioPosgrado() {
        return estudioPosgrado;
    }

    public void setEstudioPosgrado(String estudioPosgrado) {
        this.estudioPosgrado = estudioPosgrado;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public ProgramaAcademico getCarrera() {
        return carrera;
    }

    public void setCarrera(ProgramaAcademico carrera) {
        this.carrera = carrera;
    }

    public Float getPromedio() {
        return promedio;
    }

    public void setPromedio(Float promedio) {
        this.promedio = promedio;
    }

    public Integer getSemestre() {
        return semestre;
    }

    public void setSemestre(Integer semestre) {
        this.semestre = semestre;
    }

    public Integer getEstrato() {
        return estrato;
    }

    public void setEstrato(Integer estrato) {
        this.estrato = estrato;
    }

    public Proyecto getProyectoParticipa() {
        return proyectoParticipa;
    }

    public void setProyectoParticipa(Proyecto proyectoParticipa) {
        this.proyectoParticipa = proyectoParticipa;
    }

    public ArrayList<Opinion> getOpiniones() {
        return opiniones;
    }

    public void setOpiniones(ArrayList<Opinion> opiniones) {
        this.opiniones = opiniones;
    }

    public ArrayList<Postulacion> getPostulaciones() {
        return postulaciones;
    }

    public void setPostulaciones(ArrayList<Postulacion> postulaciones) {
        this.postulaciones = postulaciones;
    }

    public OtorgacionBeca getBecadoA() {
        return becadoA;
    }

    public void setBecadoA(OtorgacionBeca becadoA) {
        this.becadoA = becadoA;
    }
    
    
    
}
