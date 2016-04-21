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
public class Organizacion {
    private String nombre;
    private String tOrganizacion;
    private String urlLogo;
    private String slogan;
    private ArrayList<Integer> telefono;
    private ArrayList<String> urlPagOficial;
    private ArrayList<String> correo;
    private String dirSedePpal;
    private ArrayList<Proyecto> proyectoPatrocina;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String gettOrganizacion() {
        return tOrganizacion;
    }

    public void settOrganizacion(String tOrganizacion) {
        this.tOrganizacion = tOrganizacion;
    }

    public String getUrlLogo() {
        return urlLogo;
    }

    public void setUrlLogo(String urlLogo) {
        this.urlLogo = urlLogo;
    }

    public String getSlogan() {
        return slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    public ArrayList<Integer> getTelefono() {
        return telefono;
    }

    public void setTelefono(ArrayList<Integer> telefono) {
        this.telefono = telefono;
    }

    public ArrayList<String> getUrlPagOficial() {
        return urlPagOficial;
    }

    public void setUrlPagOficial(ArrayList<String> urlPagOficial) {
        this.urlPagOficial = urlPagOficial;
    }

    public ArrayList<String> getCorreo() {
        return correo;
    }

    public void setCorreo(ArrayList<String> correo) {
        this.correo = correo;
    }

    public String getDirSedePpal() {
        return dirSedePpal;
    }

    public void setDirSedePpal(String dirSedePpal) {
        this.dirSedePpal = dirSedePpal;
    }

    public ArrayList<Proyecto> getProyectoPatrocina() {
        return proyectoPatrocina;
    }

    public void setProyectoPatrocina(ArrayList<Proyecto> proyectoPatrocina) {
        this.proyectoPatrocina = proyectoPatrocina;
    }
    
    
    
}
