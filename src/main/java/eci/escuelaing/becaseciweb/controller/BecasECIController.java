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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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
}
