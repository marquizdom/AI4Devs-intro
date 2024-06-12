
Chatbot utilizado: ChatGPT (https://chatgpt.com/)

Prompt #1
=========
Crea una página web con javascript que invierta el orden de una cadena de texto, ejemplo AI4Devs debe devolver sveD4IA. Debes tener en cuenta lo siguiente:

Interface de usuario:
1. La página debe tener el título en color negro: Reverse String
2. Un campo de texto para que el usuario digite lo que desee
3. Debajo del campo de texto colocar un boton de fondo azul y dentro de este, el texto Reverse en color blanco y al lado del texto el ícono refresh
4. Debajo del botón anterior un texto de solo lectura que muestre el resultado de la frase digitada por el usuario de manera invertida y en color negro
5. Debajo del resultado anterior un botón de fondo gris y dentro de este, el texto Copy en color blanco y al lado del texto el ícono copy.

Funcionalidad
1. Al preseionar el botón con el texto Reverse, se debe mostrar en el texto de solo lectura la frase invertida
2. Al presionar el botón Copy se debe copiar el texto invertido al portapepeles.
3. La función para invertir el texto debe estar en el archivo script.js
4. La página web estará en el archivo index.html
5. Tanto index.html como script.js están en la misma carpeta.

Semilla:
Usa la siguiente estructura base para el archivo index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>    
</head>
<body>
<script src="script.js"></script>
</body>
</html>

Prompt #2
=========
Gracias, ahora haz lo siguiente:

1. Ubica todos los objetos alineados a la izquierda
2. Deja todos los textos en negrita y un poco más grandes
3. Deja el fondo del botón Reverse con un color azul más claro
4. Deja el fondo del botón Copy con un gris un poco más oscuro
5. El mensaje al copiar el texto debe decir "Texto copiado" y debajo el texto que se ha copiado

Prompt #3
=========
1. El botón Reverse tiene un fondo demasiado claro, hazlo de azul un poco más oscuro
2. Aumenta todos los textos alrededor de un 25% de su tamaño
3. El cuadro de texto donde digita el usaurio debe quedar con las esquinas curvas como de uno o dos milímetros

Prompt #4
=========
haz las siguientes mejoras:

1. Si el usuario pulsa ENTER estando dentro del cuadro de texto se debe ejecutar el botón Reverse
2. Si el usuario, en cualquier parte del navegador, presiona la combinación de teclas CONTROL+C (no se incluye el símbolo +) se debe ejecutar el botón Copy