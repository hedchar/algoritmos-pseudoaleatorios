let x = [];
let y = [];
let r = [];
const a = 6965;
let semillaX0 = 9803;
let i, nVeces;

consultandoDigits();

function consultandoDigits()
{
    if (!(semillaX0.toString().length >= 4 && a.toString().length >= 4))
        console.log("El número a y Xo tiene que tener mas de tres dígitos");
    else
        ejecutando(i,y,x);
}

function ejecutando(i, y, x)
{
    x[0] = semillaX0;

    document.write("<table>")
    document.write("<tr><th> Num </th>");
    document.write("<th> a </th>");
    document.write("<th> X[0] </th>");
    document.write("<th> Y[0]</th>");
    document.write("<th> r[0]</th> </tr>");

    for ( i = 0; i <= 4; i++ )
    {
        y[i] = a * x[i];
        let valoresDigits = extraerCentro(y[i].toString());
        console.log(valoresDigits.length);
        x[i+1] = parseInt(extraerCentro(y[i].toString()));
        r[i] = x[i+1] / Math.pow(10,valoresDigits.length);
        let num = i +1;

        document.write("<tr><td>" + num + " </td>");
        document.write("<td>" + a + "</td>");
        document.write("<td>" + x[i] + "</td>");
        document.write("<td>" + y[i] + "</td>");
        document.write("<td>" + r[i] + "</td></tr>");
    }
}
// Yo = a * X0
// Y1 = a * X1
// Y2 = a * X2
// ...

// si X1, X1+n, ... es par o impar no importa,
// ejemplo '1234567' (impar) -> centro de 4 digits '2345';
// se supone que si es impar se agrega un cero a la izquierda como: '01234567'
// ejemplo '01234567' (par) -> centro de 4 digits '2345';
// sin embargo, ambos (par e impar) darán el mismo resultado -> '2345'

function extraerCentro(cadena)
{
    let medio = Math.floor(cadena.length / 2);
    return cadena.substr(medio - 2, 4);
}