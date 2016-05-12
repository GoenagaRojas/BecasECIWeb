/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package eci.escuelaing.becaseciweb.controller;

import eci.escuelaing.becaseciweb.entities.Beca;
import eci.escuelaing.becaseciweb.entities.Opinion;
import eci.escuelaing.becaseciweb.entities.Organizacion;
import eci.escuelaing.becaseciweb.entities.Proyecto;
import eci.escuelaing.becaseciweb.services.ServicesFacade;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    
    @RequestMapping(value = "/proyecto", method = RequestMethod.POST)
    public ResponseEntity<?> postProyecto(@RequestBody Proyecto p){
        services.addProyecto(p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> postBeca(@RequestBody Beca b){
        services.addBeca(b);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    
    @RequestMapping(value = "/opinion",method = RequestMethod.POST)
    public ResponseEntity<?> postOpinion(@RequestBody Opinion o){
        services.addOpinion(o);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
