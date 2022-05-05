# LOGSYS SOLVER API

Este proyecto es la api del proyecto base de LOGSYS SOLVER

## Primeros pasos

### `npm install`

El primer paso es intalar las dependencias necesarias para el funcionamiento del proyecto.\
Debes ejecutar el comando `npm install` o `npm i` en la ruta raíz del proyecto.

`npm` es el sistema que maneja los paquetes de node. La configuracion en tu archivo package.json le sirve se base
### `archivo .env`
Si exploras el código podras notar que existe se importan unas variables de un archivo .env para la conexion a la base de datos. Esta medida de seguridad evita que tengas contraseñas expuestas.\
Debes crear un archivo y solo colocar `.env` como su nombre y colocar el nombre de la variable seguido de su valor como en el siguiente ejemplo\
`DB_USER=username`\
`DB_PASSWORD=pwdusuario`\
De esta forma para cada variable pero con tus credenciales de acceso y solo una variable por renglon y sin comas al final.

### `npm start`

Finalizada la instalacion de dependencias y la configuracion de tus variables de entorno debes ejecutar el comando `npm start` el cual iniciará la api. Si la conexión es exitosa, podras ver un mensaje que lo indica en la consola.