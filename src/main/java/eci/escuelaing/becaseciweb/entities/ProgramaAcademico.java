/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.entities;

/**
 *
 * @author andres
 */
public class ProgramaAcademico {
    
    private Integer id;
    private String nombre;
    private Integer costo;
    private Integer duracion;
    private Integer creditos;
    private String tipo;

    public ProgramaAcademico(Integer id, String nombre, Integer costo, Integer duracion, Integer creditos, String tipo) {
        this.id=id;
        this.nombre = nombre;
        this.costo = costo;
        this.duracion = duracion;
        this.creditos = creditos;
        this.tipo = tipo;
    }

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

    public Integer getCosto() {
        return costo;
    }

    public void setCosto(Integer costo) {
        this.costo = costo;
    }

    public Integer getDuracion() {
        return duracion;
    }

    public void setDuracion(Integer duracion) {
        this.duracion = duracion;
    }

    public Integer getCreditos() {
        return creditos;
    }

    public void setCreditos(Integer creditos) {
        this.creditos = creditos;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }
    
    
    
}
