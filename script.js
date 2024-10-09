<!DOCTYPE html>
<html lang="en">
<head>
  

</body>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylde.css">
    <title>Formulario de Registro</title>
</head>
<body>
    <section class="form-register">

        <h4>FORMULARIO DE REGISTRO ITH</h4>

        <input class="control" type="text" name="numero de control" id="numero de control" placeholder="Numero de control">
        <input class="control" type="text" name="apellido paterno" id="apellido paterno" placeholder="Apellido Paterno">
        <input class="control" type="text" name="apellido materno" id="apellido materno" placeholder="Apellido materno">
        <input class="control" type="text" name="nombres" id="nombres" placeholder="Ingrese el nombre">
        <input class="control" type="text" name="sexo" id="sexo" placeholder="sexo">
        <input class="control" type="text" name="fecha de nacimiento" id="fecha de nacimiento" placeholder=" Fecha de nacimiento">
        <input class="control" type="email" name="correo" id="correo" placeholder="Correo Electronico">
        <input class="control" type="text" name="celular" id="celular" placeholder=" Numero de Celular">
        <input class="control" type="text" name="direccion" id="direccion" placeholder="Direccion">
        <input class="control" type="text" name="periodo " id="periodo" placeholder="Periodo en el que Ingreso">
        <input class="control" type="text" name="carrera" id="carrera" placeholder="Carrera">

       

        <input class="boton" type="submit" value="Registrar">

        

        <p><a href="#">¿Ya tengo cuenta?</a></p>
       
    </section>
   
   
    <style>
        
body{
    background-image: url(fondo.png);
    margin: 0;  
    padding: 0;
  
    box-sizing: border-box;
  }
  
  .form-register{
  
      width: 400px;
      background: #072e55;
      padding: 100px;
      margin: auto;
      margin-top: 100px;
      border-radius: 10px;
      font-family: ´calibri´;
      color: rgb(255, 255, 255);
      box-shadow: 7px 13px 37px #000;
  }
   
  .form-register h4 {
      font-size: 22px;
      margin-bottom: 20px;
      text-align: center;
  
  }

  .control{
      width: 100%;
      background: #ffffff;
      padding: 10px;
      border-bottom: 4px;
      margin-bottom: 16px;
      border: 1pxpx solid #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      text-align: center;
  }

  .form-register p {
    color: aliceblue;
    text-align: center;
    font-size: 18px;
  }

  .form-register .boton {
width: 80%;
text-align: center;
background: #abc9e7;
border: none;
padding: 7px;
color: aliceblue;
margin: 10px 0;
font-size: 16px;


  }
    </style>
    
</body>
</html>