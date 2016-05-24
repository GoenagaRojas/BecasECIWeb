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
            BECAS.get(i).setNombre("Beca "+i);
            Beca bactual=BECAS.get(i);
            bactual.setDuracionSemestres(10);
            for (int j = 0; j < 10; j++) {
                bactual.getBeneficios().add("Beneficio "+j);
                bactual.getOpciones().add("Opción "+j);
                bactual.getCondiciones().add("Condición "+j);
            }
            ESTUDIANTES.add(new Estudiante(i, 210+i, "Nombre"+i, "Apellido"+i, 4));
            Opinion op = new Opinion(i);
            op.setTitulo("Titulo Opinion "+i);
            op.setOpinion("Cuerpo Opinion "+i);
            op.setAutor(ESTUDIANTES.get(i));
            op.setBeca(BECAS.get(i));
            OPINIONES.add(op);
            Proyecto p=new Proyecto(i, "Proyecto"+i);
            p.setObjetivo("Objetivo Proyecto "+i);
            p.setTema("Tema Proyecto "+i);
            p.setFechaInicio(new Date());
            p.setFechaFin(new Date());
            PROYECTOS.add(p);
            if(i%2==0){
                ORGANIZACIONES.add(new Organizacion(i, "Organizacion"+i, "Privada", "www.logo"+i+".com", "Slogan Org"+i));
                PROGRAMASACADEMICOS.add(new ProgramaAcademico(i, "Carrera"+i, 7400000, 10, 180, "Pregrado"));
                OTORGACIONESBECAS.add(new OtorgacionBeca(i));
                OtorgacionBeca actual=OTORGACIONESBECAS.get(OTORGACIONESBECAS.size()-1);
                actual.setEstado(Boolean.TRUE);
                actual.setFecha(new Date());
                ESTUDIANTES.get(i).setBecadoA(actual);
                BECAS.get(i).getOtorgadaA().add(actual);
            }else{
                ORGANIZACIONES.add(new Organizacion(i, "Organizacion"+i, "Publica", "www.logo"+i+".com", "Slogan Org"+i));
                PROGRAMASACADEMICOS.add(new ProgramaAcademico(i, "Carrera"+i, 7400000, 10, 180, "Posgrado"));
                POSTULACIONES.add(new Postulacion(i));
                Postulacion actual=POSTULACIONES.get(POSTULACIONES.size()-1);
                actual.setEstado(Boolean.FALSE);
                actual.setFechaPostulacion(new Date());
                actual.setPostulado(ESTUDIANTES.get(i));
                actual.setaBeca(BECAS.get(i));
                for (int pro=0; pro<PROYECTOS.size();pro++) {
                    ORGANIZACIONES.get(i).getProyectoPatrocina().add(p);
                }
            }
            ORGANIZACIONES.get(i).setDirSedePpal("Carrera "+i+" # "+(i+1));
            ESTUDIANTES.get(i).setCarrera(PROGRAMASACADEMICOS.get(i));
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
        for (Organizacion org : ORGANIZACIONES) {
            if(org.getId()==Integer.parseInt(idOrganizacion)){
                ans=org.getProyectoPatrocina();
                break;
            }
        }
        return ans;
    }
    
    public List<Opinion> getOpinionesBeca(String idBeca){
        List<Opinion> ans = new ArrayList<>();
        for (Opinion op : OPINIONES) {
            if(op.getBeca().getId()==Integer.parseInt(idBeca)){
                ans.add(op);
            }
        }
        return ans;
    }
    
    public List<Postulacion> getPostulacionesBeca(String idBeca){
        List<Postulacion> ans = new ArrayList<>();
        for (Postulacion po : POSTULACIONES) {
            if(po.getaBeca().getId()==Integer.parseInt(idBeca)){
                ans.add(po);
            }
        }
        return ans;
    }
    
    public List<Organizacion> getOrganizaciones(){
        return ORGANIZACIONES;
    }
    
    public void addProyecto(Proyecto proyecto, String idOrg){
        Boolean found=false;
        if(proyecto.getCodigo()==null){
            proyecto.setCodigo(PROYECTOS.size());
            PROYECTOS.add(proyecto);
            found=true;
        }
        for (int i = 0; i < PROYECTOS.size()&&!found; i++) {
            if(Objects.equals(PROYECTOS.get(i).getCodigo(), proyecto.getCodigo())){
                PROYECTOS.add(i, proyecto);
                found=true;
            }
        }
        if(found){
            for (Organizacion org : ORGANIZACIONES) {
                if(org.getId()==Integer.parseInt(idOrg)){
                    org.getProyectoPatrocina().add(proyecto);
                    break;
                }
            }
        }
    }
    
    public void addBeca(Beca beca){
        Boolean found=false;
        if(beca.getId()==null){
            beca.setId(BECAS.size());
            BECAS.add(beca);
            found=true;
        }
        for (int i = 0; i < BECAS.size()&&!found; i++) {
            if(Objects.equals(BECAS.get(i).getId(), beca.getId())){
                BECAS.add(i, beca);
                found=true;
            }
        }
    }
    
    public void addOpinion(String titulo, String cuerpo, String idEst, String idBeca){
        Opinion nueva=new Opinion(OPINIONES.size());
        nueva.setTitulo(titulo);
        nueva.setOpinion(cuerpo);
        for (Estudiante es : ESTUDIANTES) {
            if(es.getId()==Integer.parseInt(idEst)){
                nueva.setAutor(es);
                break;
            }
        }
        for (Beca beca : BECAS) {
            if(beca.getId()==Integer.parseInt(idBeca)){
                nueva.setBeca(beca);
                break;
            }
        }
        OPINIONES.add(nueva);
    }
    
    public Boolean idEstudianteValido(String id){
        Boolean ans=false;
        for (Estudiante es : ESTUDIANTES) {
            if(es.getId()==Integer.parseInt(id)){
                ans=true;
            }
        }
        return ans;
    }
    
    public Boolean idOrganizacionValido(String id){
        Boolean ans=false;
        for (Organizacion org : ORGANIZACIONES) {
            if(org.getId()==Integer.parseInt(id)){
                ans=true;
            }
        }
        return ans;
    }
    
    public void estudianteAplicaBeca(String idEst, String idBeca){
        Boolean found=false;
        for (Postulacion p : POSTULACIONES) {
            if((p.getPostulado().getId()==Integer.parseInt(idEst))&&(p.getaBeca().getId()==Integer.parseInt(idBeca))){
                found=true;
                break;
            }
        }
        if(!found){
            Postulacion nueva=new Postulacion(POSTULACIONES.size());
            nueva.setEstado(false);
            nueva.setFechaPostulacion(new Date());
            nueva.setPostulado(getEstudiante(idEst));
            nueva.setaBeca(getBeca(idBeca));
            POSTULACIONES.add(nueva);
        }
    }
    
    public void estudianteAplicaProyecto(String idEst, String idProyecto){
        for (Estudiante es : ESTUDIANTES) {
            if(es.getId()==Integer.parseInt(idEst)){
                for (Proyecto pro : PROYECTOS) {
                    if(pro.getCodigo()==Integer.parseInt(idProyecto)){
                        pro.getParticipan().add(es);
                        break;
                    }
                }
                break;
            }
        }
    }
    
    public List<Proyecto> proyectosEstudiante(String idEst){
        List<Proyecto> ans=new ArrayList<>();
        for (Proyecto p : PROYECTOS) {
            for (Estudiante es : p.getParticipan()) {
                if(Objects.equals(es.getCodigo(), Integer.parseInt(idEst))){
                    ans.add(p);
                }
            }
        }
        return ans;
    }
    
    public List<Postulacion> postulacionesEstudiante(String idEst){
        List<Postulacion> ans= new ArrayList<>();
        for (Postulacion p : POSTULACIONES) {
            if(Objects.equals(p.getPostulado().getId(), Integer.parseInt(idEst))){
                ans.add(p);
            }
        }
        return ans;
    }
    
    public Estudiante getEstudiante(String id){
        Estudiante ans= null;
        for (Estudiante es : ESTUDIANTES) {
            if(es.getId()==Integer.parseInt(id)){
                ans=es;
                break;
            }
        }
        return ans;
    }
    
    public List<Postulacion> getPostulaciones(){
        return POSTULACIONES;
    }
    
    public void addBeneficioBeca(String idBeca, String beneficio){
        for (Beca beca : BECAS) {
            if(beca.getId()==Integer.parseInt(idBeca)){
                beca.getBeneficios().add(beneficio);
                break;
            }
        }
    }
    
    public void addCondicionBeca(String idBeca, String condicion){
        for (Beca beca : BECAS) {
            if(beca.getId()==Integer.parseInt(idBeca)){
                beca.getCondiciones().add(condicion);
                break;
            }
        }
    }
    
    public void addOpcionBeca(String idBeca, String opcion){
        for (Beca beca : BECAS) {
            if(beca.getId()==Integer.parseInt(idBeca)){
                beca.getOpciones().add(opcion);
                break;
            }
        }
    }
}
