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
public class Opinion {
    
    private String titulo;
    private String opinion;
    private Estudiante quienOpina;
    private Beca sobreBeca;

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getOpinion() {
        return opinion;
    }

    public void setOpinion(String opinion) {
        this.opinion = opinion;
    }

    public Estudiante getQuienOpina() {
        return quienOpina;
    }

    public void setQuienOpina(Estudiante quienOpina) {
        this.quienOpina = quienOpina;
    }

    public Beca getSobreBeca() {
        return sobreBeca;
    }

    public void setSobreBeca(Beca sobreBeca) {
        this.sobreBeca = sobreBeca;
    }
    
    
}
