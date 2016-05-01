/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.services;

import eci.escuelaing.becaseciweb.entities.*;
import java.util.*;
import java.util.Date;
import org.springframework.stereotype.Service;

/**
 *
 * @author andres
 */
@Service
public class ServicesFacade {
    private static final ArrayList<Beca> BECAS=new ArrayList<>();
    private static final ArrayList<Estudiante> ESTUDIANTES=new ArrayList<>();
    private static final ArrayList<Opinion> OPINIONES=new ArrayList<>();
    private static final ArrayList<Organizacion> ORGANIZACIONES=new ArrayList<>();
    private static final ArrayList<OtorgacionBeca> OTORGACIONESBECAS=new ArrayList<>();
    private static final ArrayList<Postulacion> POSTULACIONES=new ArrayList<>();
    private static final ArrayList<ProgramaAcademico> PROGRAMASACADEMICOS=new ArrayList<>();
    private static final ArrayList<Proyecto> PROYECTOS=new ArrayList<>();

    public ServicesFacade() {
        //Datos ingresados automaticamente
        for (int i = 0; i < 20; i++) {
            BECAS.add(new Beca(i));
            ESTUDIANTES.add(new Estudiante(i, 210+i, "Nombre"+i, "Apellido"+i, 4));
            OPINIONES.add(new Opinion(i));
            PROYECTOS.add(new Proyecto(i, "Proyecto"+i));
            if(i%2==0){
                ORGANIZACIONES.add(new Organizacion(i, "Organizacion"+i, "Privada", "www.logo"+i+".com", "Slogan Org"+i));
                PROGRAMASACADEMICOS.add(new ProgramaAcademico(i, "Carrera"+i, 7400000, 10, 180, "Pregrado"));
                OTORGACIONESBECAS.add(new OtorgacionBeca(i));
                OtorgacionBeca actual=OTORGACIONESBECAS.get(OTORGACIONESBECAS.size()-1);
                actual.setEstado(Boolean.TRUE);
                actual.setFecha(new Date());
                actual.setQuienEsBecado(ESTUDIANTES);
                actual.setaBeca(BECAS.get(i));
            }else{
                ORGANIZACIONES.add(new Organizacion(i, "Organizacion"+i, "Publica", "www.logo"+i+".com", "Slogan Org"+i));
                PROGRAMASACADEMICOS.add(new ProgramaAcademico(i, "Carrera"+i, 7400000, 10, 180, "Posgrado"));
                POSTULACIONES.add(new Postulacion(i));
                Postulacion actual=POSTULACIONES.get(POSTULACIONES.size()-1);
                actual.setEstado(Boolean.FALSE);
                actual.setEstudianteQueRealiza(ESTUDIANTES.get(i));
                actual.setFechaPostulacion(new Date());
                actual.setaBeca(BECAS.get(i));
                PROYECTOS.get(PROYECTOS.size()-1).getOrgsPatrocinan().add(ORGANIZACIONES.get(ORGANIZACIONES.size()-1));
            }
        }
    }
    
    
    public List<Beca> getBecas(){
        return BECAS;
    }
    
    public List<Proyecto> getProyectos(){
        return PROYECTOS;
    }
    
    public List<Opinion> getOpiniones(){
        return OPINIONES;
    }
    
    public Beca getBeca(String idBeca){
        Beca ans=null;
        Integer id=Integer.parseInt(idBeca);
        for (Beca beca : BECAS) {
            if(Objects.equals(beca.getId(), id)){
                ans=beca;
                break;
            }
        }
        return ans;
    }
    
    public Proyecto getProyecto(String idProyecto){
        Proyecto ans=null;
        Integer id=Integer.parseInt(idProyecto);
        for (Proyecto proyecto : PROYECTOS) {
            if(Objects.equals(proyecto.getCodigo(), id)){
                ans=proyecto;
                break;
            }
        }
        return ans;
    }
    
    public List<Proyecto> getProyectosOrganizacion(String idOrganizacion){
        List<Proyecto> ans=new ArrayList<>();
        for (Proyecto proyecto : PROYECTOS) {
            ArrayList<Organizacion> orgs=proyecto.getOrgsPatrocinan();
            for (Organizacion org : orgs) {
                if(Objects.equals(org.getId(), Integer.parseInt(idOrganizacion))){
                    ans.add(proyecto);
                }
            }
        }
        return ans;
    }
    
    public List<Organizacion> getOrganizaciones(){
        return ORGANIZACIONES;
    }
}
