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
import java.sql.ResultSet;
import java.util.ArrayList;
import java.sql.SQLException;
import persistencia.ConexionDB;

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
    private ConexionDB conexion;

    public Medico() {
        this.conexion = new ConexionDB();
    }

    public Medico(String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String usuario, String contraseña, String fotoUsuario, String firma) {
        this.conexion = new ConexionDB();
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

    public boolean guardarMedico() {
        String sentencia = "INSERT INTO medico (primerNombre, segundoNombre, primerApellido, segundoApellido, usuario, contraseña, fotoUsuario, firma) "
                + "VALUES ('" + this.primerNombre + "','" + this.segundoNombre + "','" + this.primerApellido + "','" + this.segundoApellido + "','" + this.usuario + "','" + this.contraseña + "','" + this.fotoUsuario + "','" + this.firma + "');";

        return this.conexion.insertarBD(sentencia);
    }

    public ArrayList<Medico> listaMedicos() {
        ArrayList<Medico> listaMedicos = new ArrayList<>();
        String sentencia = "SELECT * FROM medico;";
        ResultSet rs = this.conexion.consultarBD(sentencia);
        Medico medico = new Medico();
        try {
            while (rs.next()) {
                medico.setPrimerNombre(rs.getString("primerNombre"));
                medico.setSegundoNombre(rs.getString("segundoNombre"));
                medico.setPrimerApellido(rs.getString("primerApellido"));
                medico.setSegundoApellido(rs.getString("segundoApellido"));
                medico.setUsuario(rs.getString("usuario"));
                medico.setContraseña(rs.getString("contraseña"));
                medico.setFotoUsuario(rs.getString("fotoUsuario"));
                medico.setFirma(rs.getString("firma"));
                listaMedicos.add(medico);
            }
        } catch (SQLException ex) {
            System.out.println("Error en la consulta a la bd: " + ex.getMessage());
        }
        return listaMedicos;
    }

    public Medico obtenerMedico() {
        String sentencia = "SELECT * FROM medico WHERE usuario = '" + this.usuario + "';";
        ResultSet rs = this.conexion.consultarBD(sentencia);
        try {
            if (rs.next()) {
                this.primerNombre = rs.getString("primerNombre");
                this.segundoNombre = rs.getString("segundoNombre");
                this.primerApellido = rs.getString("primerApellido");
                this.segundoApellido = rs.getString("segundoApellido");
                this.usuario = rs.getString("usuario");
                this.contraseña = rs.getString("contraseña");
                this.fotoUsuario = rs.getString("fotoUsuario");
                this.firma = rs.getString("firma");
                return this;
            } else {
                return null;
            }
        } catch (SQLException ex) {
            System.out.println("Error en la consulta a la bd: " + ex.getMessage());
            return null;
        }
    }
    
    public static void main(String[] args){
        Medico medico1 = new Medico("Damar", "Nicolas", "Rojas", "Chacón", "NicolasMedico", "1234", "foto1", "firma1");
        medico1.guardarMedico();
    }
}
