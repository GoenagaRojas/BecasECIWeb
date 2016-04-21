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
public class OtorgacionBeca {
    
    private Date fecha;
    private Boolean estado;
    private Beca aBeca;
    private ArrayList<Estudiante> quienEsBecado;

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Boolean getEstado() {
        return estado;
    }

    public void setEstado(Boolean estado) {
        this.estado = estado;
    }

    public Beca getaBeca() {
        return aBeca;
    }

    public void setaBeca(Beca aBeca) {
        this.aBeca = aBeca;
    }

    public ArrayList<Estudiante> getQuienEsBecado() {
        return quienEsBecado;
    }

    public void setQuienEsBecado(ArrayList<Estudiante> quienEsBecado) {
        this.quienEsBecado = quienEsBecado;
    }
    
    
    
}
