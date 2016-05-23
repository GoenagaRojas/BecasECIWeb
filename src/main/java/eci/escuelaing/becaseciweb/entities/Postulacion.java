/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.entities;

import java.util.Date;

/**
 *
 * @author andres
 */
public class Postulacion {
    
    private Integer id;
    private Date fechaPostulacion;
    private Boolean estado;
    private Beca aBeca;
    private Estudiante postulado;

    public Beca getaBeca() {
        return aBeca;
    }

    public void setaBeca(Beca aBeca) {
        this.aBeca = aBeca;
    }

    public Estudiante getPostulado() {
        return postulado;
    }

    public void setPostulado(Estudiante postulado) {
        this.postulado = postulado;
    }
    
    public Postulacion(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
    public Date getFechaPostulacion() {
        return fechaPostulacion;
    }

    public void setFechaPostulacion(Date fechaPostulacion) {
        this.fechaPostulacion = fechaPostulacion;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }
}
