//en estas líneas creamos las fechas 
miFechaActual = new Date() 
miFechaPasada = new Date(1998,4,23)

//en estas líneas imprimimos las fechas. 
document.write (miFechaActual) 
document.write ("<br>") 
document.write (miFechaPasada)

//extraemos el año de las dos fechas 
anoActual = miFechaActual.getFullYear() 
anoPasado = miFechaPasada.getFullYear()

//Escribimos en año en la página 
document.write("<br>El año actual es: " + anoActual) 
document.write("<br>El año pasado es: " + anoPasado)

//cambiamos el año en la fecha actual 
miFechaActual.setFullYear(2005)

//extraemos el día mes y año 
dia = miFechaActual.getDate() 
mes = parseInt(miFechaActual.getMonth()) + 1
ano = miFechaActual.getFullYear()

//escribimos la fecha en un formato legible 
document.write("<br>")
document.write(dia + "/" + mes + "/" + ano)
