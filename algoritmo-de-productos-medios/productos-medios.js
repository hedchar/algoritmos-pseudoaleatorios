let x = [];
let y = [];
let r = [];
let semillaX1 = 5226;
let semillaX2 = 5829;    ;

let i,nVeces;

consultandoDigits();

function consultandoDigits()
{
    if (!(semillaX1.toString().length >= 4 && semillaX2.toString().length >= 4))
        console.log("El números Xo y X1 tiene que tener mas de tres dígitos");
    else
        ejecutando(i,y,x);
}

function ejecutando(i, y, x)
{
    x[0] = semillaX1;
    x[1] = semillaX2;

    document.write("<table>")
    document.write("<tr><th> Num </th>");
    document.write("<th> X[0] </th>");
    document.write("<th> X[1] </th> ");
    document.write("<th> Y[0]</th>");
    document.write("<th> r[0]</th> </tr>");

    for ( i = 0; i <= 4; i++ )
    {
        y[i] = x[i] * x[i+1];
        let valoresDigits = extraerCentro(y[i].toString());

        x[i+2] = parseInt(extraerCentro(y[i].toString()));
        y[i+1] = x[i+1] * x[i+2];
        let num = i + 1;
        r[i] = (x[i+2] / Math.pow(10,valoresDigits.length)).toString();

        document.write("<tr><td>" + num + " </td>");
        document.write("<td>" + x[i] + " </td>");
        document.write("<td>" + x[i+1] + " </td> ");
        document.write("<td>" + y[i] + " </td>");
        document.write("<td>" + r[i] + " </td> </tr>");

    }
    document.write("</table>")

}
// Yo = Xo * X1
// Y1 = X1 * X2
// Y2 = X2 * X3
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