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
    
    private Date fechaPostulacion;
    private Boolean estado;
    private Estudiante estudianteQueRealiza;
    private Beca aBeca;

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

    public Estudiante getEstudianteQueRealiza() {
        return estudianteQueRealiza;
    }

    public void setEstudianteQueRealiza(Estudiante estudianteQueRealiza) {
        this.estudianteQueRealiza = estudianteQueRealiza;
    }

    public Beca getaBeca() {
        return aBeca;
    }

    public void setaBeca(Beca aBeca) {
        this.aBeca = aBeca;
    }
    
    
    
    
}
