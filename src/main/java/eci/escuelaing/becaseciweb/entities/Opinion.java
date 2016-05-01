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
public class Opinion {
    
    private Integer id;
    private String titulo;
    private String opinion;
    private Estudiante quienOpina;
    private Beca sobreBeca;

    public Opinion(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    
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
