# Prompt 1: ChatGPT

Como programador web necesito una página web con la lógica en Javascript que invierta el orden de una cadena de texto. 
Por ejemplo, si introducimos "AI4Devs" debería devolver "sveD4IA"
El código debe estar organizado en 2 ficheros: index.html con el código HTML y CSS y un fichero script.js con el código Javascript

La página HTML debe tener el siguiente diseño, aplicando Responsive:
- Título "Reverse String"
- Input para la entrada del texto por parte del usuario
- Botón "Reverse" en color de fondo azul y letras blancas con un emoji "flechas en sentido antihorario"
- Espacio donde irá el texto resultado, inicialmente oculto
- Botón "Copy" en color de fondo gris y letras blancas con un emoji "portapapeles", inicialmente oculto

Al pulsar el botón "Reverse" se calculará el resultado y se mostrará en el espacio texto resultado y se mostrará el botón Copy.

Cuando se pulse el botón Copy se copiará al portapapeles el resultado y aparecerá un popup "Texto copiado!"

## Comentarios sobre el código generado
- El idioma ha puesto "es" en vez de "en", aunque en el prompt se indicó que mostrase "Texto copiado!"


# Prompt 2 para corregir el idioma
Puedes hacer que la aplicación sea todo en inglés?

## Comentarios sobre el código generado
Correcto, ha traducido las cadenas en castellano al inglés y aplicado el "lang" al HTML correctamente sin tocar nada más.


# Prompt 3 para refactorizar script.js y crear algunos test

Podrías refactorizar script.js para usar funciones y poderlas testear? Generar también algunos test para estas funciones

## Comentarios

En el código generado se lanzan los test directamente, lo que causa que se visualice el resultado del test al acceder al índice.

Además, al no haber pedido separar lógica de negocio de la presentación, las funciones extraídas y sus test contienen ambas.


# Prompt 4: Separar lógica de negocio de la presentación

El objetivo del refactor era separar la lógica de negocio de la presentación, por lo que las funciones creadas no deberían tocar diseño, solo la lógica. 
Los test solo deben comprobar la lógica de negocio.

## Comentarios

Ahora ya no se muestra el resultado de los test y ha separado las lógicas correctamente, pero sigue ejecutando los test en el HTML principal.


# Prompt definitivo

Como programador web necesito una página web con la lógica en Javascript que invierta el orden de una cadena de texto. 
Por ejemplo, si introducimos "AI4Devs" debería devolver "sveD4IA"
El código debe estar organizado en 2 ficheros: index.html con el código HTML y CSS y un fichero script.js con el código Javascript

La página HTML debe tener el siguiente diseño, aplicando Responsive:
- Título "Reverse String"
- Input para la entrada del texto por parte del usuario
- Botón "Reverse" en color de fondo azul y letras blancas con un emoji "flechas en sentido antihorario"
- Espacio donde irá el texto resultado, inicialmente oculto
- Botón "Copy" en color de fondo gris y letras blancas con un emoji "portapapeles", inicialmente oculto

Al pulsar el botón "Reverse" se calculará el resultado y se mostrará en el espacio texto resultado y se mostrará el botón Copy.

Cuando se pulse el botón Copy se copiará al portapapeles el resultado y aparecerá un popup "Text copied!"

El idioma de la página debe ser inglés.

La lógica de negocio y presentación deben estar separadas en el fichero Javascript.

Debe incluir tests para la lógica de negocio.

## Comentarios
Ahora si parece correcto con todo lo anterior
