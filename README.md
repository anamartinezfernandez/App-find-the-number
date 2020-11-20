# Aplicación web desarrollada con JavaScript de "Adivinar el número".

El juego consiste en que el programa genera un número al azar entre 1 y 100, y la jugadora tiene que adivinarlo. El juego da pistas sobre si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos hasta que al final la jugadora acierta el número.
LA aplicación ha sido maquetada con **HTML y CSS** y su interactividad implementada con **JavaScript**.

1. Funcionamiento:
En el campo input de la parte superior, la jugadora introduce un número y da al botón de Prueba. Debajo, en el apartado de Pista aparecen los siguientes textos:

* Al arrancar la página: "Escribe el número y dale a "prueba"."
* Cuando la jugadora introduzca un número mayor que el aleatorio y pulse en Prueba: "Demasiado alto".
* Cuando la jugadora introduzca un número menor que el aleatorio y pulse en Prueba: "Demasiado bajo".
* Cuando la jugadora introduzca un número igual que el aleatorio y pulse en Prueba: "¡¡¡Has ganado, campeona!!!"
* Cuando la jugadora no introduzca un número válido y pulse en Prueba: "El número debe estar entre 1 y 100."
* En la parte inferior debe aparecer el número de veces que se ha pulsado el botón Prueba (intentos).

2. Pasos para realizar el juego:
Para realizar una versión sencilla del juego se han realizado las siguientes funcionalidades desde JavaScript:

* Crear una maquetación mínima con el input, el botón, el espacio para pistas y el espacio para el contador de intentos.
* Generar un número aleatorio con la ayuda de Math.random y Math.ceil.
* Mostrar en consola el número aleatorio generado para poder saber qué número se ha generado y poder hacer pruebas.
* Al pulsar el botón de Prueba, acceder al contenido del input y mostrarlo en la consola.
* Comparar el número que la jugadora ha escrito en el input con el número aleatorio, y pintar las pistas correspondientes en la pantalla.
* Actualizar el contador de intentos cada vez que la jugadora pruebe.

3. Bonus
* Cuando la jugadora acierta el número, aparece un botón para volver a jugar que reseteará el formulario.
