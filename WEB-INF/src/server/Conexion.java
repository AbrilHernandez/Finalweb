/**
 * Created by NandoLizola on 15/05/2017.
 */

import javax.swing.*;
import java.sql.Connection;
import java.sql.DriverManager;

public class Conexion {
    public Connection conectar(){
        Connection con=null;
        try{
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String url = "jdbc:sqlserver://localhost:1433;databaseName=InfraWebFinal";
            con = DriverManager.getConnection(url, "sa", "lNando.0622");
        }
        catch(Exception ex){
            JOptionPane.showMessageDialog(null, "Error en la Conexión con la BD "+ex.getMessage(), "Error", JOptionPane.ERROR_MESSAGE);
            con=null;
        }
        return con;
    }
}