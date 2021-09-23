/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package logica;

/**
 *
 * @author Nicolás Rojas
 */
public class Medico {

    private int idMedico;
    private String primerNombre;
    private String segundoNombre;
    private String primerApellido;
    private String segundoApellido;
    private String usuario;
    private String contraseña;
    private String fotoUsuario;
    private String firma;
    
    public Medico(){
    }

    public Medico(String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String usuario, String contraseña, String fotoUsuario, String firma) {
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.fotoUsuario = fotoUsuario;
        this.firma = firma;
    }

    public int getIdMedico() {
        return idMedico;
    }

    public String getPrimerNombre() {
        return primerNombre;
    }

    public String getSegundoNombre() {
        return segundoNombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public String getUsuario() {
        return usuario;
    }

    public String getContraseña() {
        return contraseña;
    }

    public String getFotoUsuario() {
        return fotoUsuario;
    }

    public String getFirma() {
        return firma;
    }

    public void setIdMedico(int idMedico) {
        this.idMedico = idMedico;
    }

    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    public void setSegundoNombre(String segundoNombre) {
        this.segundoNombre = segundoNombre;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public void setFotoUsuario(String fotoUsuario) {
        this.fotoUsuario = fotoUsuario;
    }

    public void setFirma(String firma) {
        this.firma = firma;
    }
    
    public void crearMedico(){
        
    }
    
}
