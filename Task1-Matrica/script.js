

function sumirajSusjede(broj)
{
    var matrica=[
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
        [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        ];
    
    var intBroj=parseInt(document.getElementById(broj).value);

    var suma=0,susjedi;
    for(var i=0;i<matrica.length;i++)
    {
        for(var j=0;j<matrica.length;j++)
        {
            if(intBroj==matrica[i][j])
            {
                if ((i==0&&j<=9)||(i<=9&&j==0)||(i<=9&&j==9)||(i==9&&j<=9)) {
                    document.getElementById("text").innerHTML+="Broj >"+intBroj+"< nema sve susjede!";
                    
                }
                else
                {
                suma+=matrica[i][j]+matrica[i+1][j+1]+matrica[i-1][j-1]+matrica[i+1][j-1]+
                matrica[i-1][j+1]+matrica[i+1][j]+matrica[i][j+1]+matrica[i-1][j]+matrica[i][j-1];
                
                susjedi=matrica[i+1][j+1]+","+matrica[i-1][j-1]+","+matrica[i+1][j-1]+","+
                matrica[i-1][j+1]+","+matrica[i+1][j]+","+matrica[i][j+1]+","+matrica[i-1][j]+","+matrica[i][j-1];
                
                document.getElementById("text").innerHTML+="Brojevi koji okružuju broj "+intBroj+" su: "+susjedi+". Suma ovih brojeva je: "+(suma-intBroj)+" Na ovu sumu se dodaje broj koji se proslijedio funkciji ("+intBroj+") i to nam daje rezultat: "+suma+'<br>';
                
                }
            }
        }
    }
    
    
    
}




