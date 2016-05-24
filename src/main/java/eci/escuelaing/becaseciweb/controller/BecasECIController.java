/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.controller;

import com.google.gson.Gson;
import eci.escuelaing.becaseciweb.entities.Beca;
import eci.escuelaing.becaseciweb.entities.Estudiante;
import eci.escuelaing.becaseciweb.entities.Opinion;
import eci.escuelaing.becaseciweb.entities.Organizacion;
import eci.escuelaing.becaseciweb.entities.Postulacion;
import eci.escuelaing.becaseciweb.entities.Proyecto;
import eci.escuelaing.becaseciweb.services.ServicesFacade;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

/**
 *
 * @author andres
 */
@RestController
@RequestMapping("/becasECI")
public class BecasECIController {
    @Autowired
    ServicesFacade services;
    
    
    @RequestMapping(value ="/check", method = RequestMethod.GET)
    public String check(){
        return "APP FUNCIONA!!";
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public Set<Beca> getAllBecas(){
        return new HashSet<>(services.getBecas());
    }
    
    @RequestMapping(value = "/proyectos", method = RequestMethod.GET)
    public Set<Proyecto> getAllProyectos(){
        return new HashSet<>(services.getProyectos());
    }
    
    @RequestMapping(value = "/organizaciones", method = RequestMethod.GET)
    public Set<Organizacion> getAllOrganizaciones(){
        return new HashSet<>(services.getOrganizaciones());
    }
    
    @RequestMapping(value = "/opiniones", method = RequestMethod.GET)
    public Set<Opinion> getAllOpiniones(){
        return new HashSet<>(services.getOpiniones());
    }
    
    
    @RequestMapping(value = "/{idbeca}", method = RequestMethod.GET)
    public Beca getABeca(@PathVariable("idbeca") String idbeca){
        return services.getBeca(idbeca);
    }
    
    @RequestMapping(value = "proyecto/{idproyecto}", method = RequestMethod.GET)
    public Proyecto getAProyecto(@PathVariable("idproyecto") String idproyecto){
        return services.getProyecto(idproyecto);
    }
    
    @RequestMapping(value = "/proyecto", method = RequestMethod.GET)
    public @ResponseBody Set<Proyecto> getProyectosOrganizacion(@RequestParam(value="idOrg", required=true) String id){
        return new HashSet<>(services.getProyectosOrganizacion(id));
    }
    
    @RequestMapping(value = "/postulacion", method = RequestMethod.GET)
    public @ResponseBody Set<Postulacion> getPostulacionesBeca(@RequestParam(value="idBeca", required=true) String id){
        return new HashSet<>(services.getPostulacionesBeca(id));
    }
    
    @RequestMapping(value = "/opinion", method = RequestMethod.GET)
    public @ResponseBody Set<Opinion> getOpinionesBeca(@RequestParam(value="idBeca", required=true) String id){
        return new HashSet<>(services.getOpinionesBeca(id));
    }
    
    @RequestMapping(value = "/proyecto",method = RequestMethod.POST)
    public ResponseEntity<?> postProyecto(@RequestParam(value = "newP", required = true) String newP, @RequestParam(value = "idOrg", required = true) String idOrg){
        Gson gson = new Gson();
        Proyecto nuevo= gson.fromJson(newP, Proyecto.class);
        services.addProyecto(nuevo, idOrg);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postBeca(@RequestParam(value = "beca", required = true) String b){
        Gson gson = new Gson();
        Beca beca = gson.fromJson(b, Beca.class);
        services.addBeca(beca);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/opinion",method = RequestMethod.POST)
    public ResponseEntity<?> postOpinion(@RequestParam(value = "titulo", required = true) String titulo, @RequestParam(value = "cuerpo", required = true) String cuerpo, @RequestParam(value = "idEst", required = true) String idEst, @RequestParam(value = "idBeca", required = true) String idBeca){
        services.addOpinion(titulo, cuerpo, idEst, idBeca);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "estudiante/{id}", method = RequestMethod.GET)
    public Boolean idEstValido(@PathVariable("id") String id){
        return services.idEstudianteValido(id);
    }
    
    @RequestMapping(value = "organizacion/{id}", method = RequestMethod.GET)
    public Boolean idOrgValido(@PathVariable("id") String id){
        return services.idOrganizacionValido(id);
    } 
    
    @RequestMapping(value = "estudiante/proyecto", method = RequestMethod.GET)
    public @ResponseBody Set<Proyecto> getProyectosEstudiante(@RequestParam(value="idEst", required=true) String id){
        return new HashSet<>(services.proyectosEstudiante(id));
    }
    
    @RequestMapping(value = "/postulaciones", method = RequestMethod.GET)
    public @ResponseBody Set<Postulacion> getPostulacionesEstudiante(@RequestParam(value="idEst", required=true) String id){
        List<Postulacion> ans=new ArrayList<>();
        if(Integer.parseInt(id)==-1){
            ans=services.getPostulaciones();
        }else{
            ans=services.postulacionesEstudiante(id);
        }
        return new HashSet<>(ans);
    }
    
    @RequestMapping(value = "/postulacion",method = RequestMethod.POST)
    public ResponseEntity<?> postPostulacionBeca(@RequestParam(value = "idEst", required = true) String idEst, @RequestParam(value = "idBeca", required = true) String idBeca){
        services.estudianteAplicaBeca(idEst, idBeca);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/aplicacion",method = RequestMethod.POST)
    public ResponseEntity<?> postPostulacionProyecto(@RequestParam(value = "idEst", required = true) String idEst, @RequestParam(value = "idProyecto", required = true) String idProyecto){
        services.estudianteAplicaProyecto(idEst, idProyecto);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/estudiante", method = RequestMethod.GET)
    public @ResponseBody Estudiante getEstudiante(@RequestParam(value="idEst", required=true) String id){
        return services.getEstudiante(id);
    }
    
    @RequestMapping(value = "/beneficio",method = RequestMethod.POST)
    public ResponseEntity<?> postBeneficioBeca(@RequestParam(value = "idBeca", required = true) String idBeca, @RequestParam(value = "beneficio", required = true) String beneficio){
        services.addBeneficioBeca(idBeca, beneficio);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/opcion",method = RequestMethod.POST)
    public ResponseEntity<?> postOpcionBeca(@RequestParam(value = "idBeca", required = true) String idBeca, @RequestParam(value = "opcion", required = true) String opcion){
        services.addOpcionBeca(idBeca, opcion);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/condicion",method = RequestMethod.POST)
    public ResponseEntity<?> postCondicionBeca(@RequestParam(value = "idBeca", required = true) String idBeca, @RequestParam(value = "condicion", required = true) String condicion){
        services.addCondicionBeca(idBeca, condicion);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
