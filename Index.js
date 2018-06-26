function convertUnit(){

var a = prompt('Tapez valeur à convertir sans l\'unité');
var b = prompt('En quelle unité?');
var c = prompt('Tapez la seconde valeur (si il y\'en a une) sans l\'unité');
var d = prompt('En quelle unité?');
var e = '';


/*On a d'abord un if si les unité sont les mêmes au cas ou on connait nos deux valeurs et on veut juste le facteur*/
if ( b == d ){
    var e = a/c;
    alert('Le facteur est donc : ' + e);
}
/*Puis si on veut convertir puis avoir la valeur */
else if( b == 'pce' && d == 'kg'){
    /*Comme 3 Kilo valent 1 pieces*/
    var facteur = (1*1)/3;
    var f = a/facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'pce' && d == 'g' ){
    /*Comme 1 pce = 3kg et 1kg = 1000g*/
    var facteur = (1*1)/3000;
    var f = a/facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'pce' && d == 'cs' ){
    /*Comme 1pce = 3000g et 1cs = 20g alors 1pce = 150cs*/
    var facteur = (1*1)/150;
    var f = a/facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'kg' && d == 'pce' ){
    var facteur = (1*1)/3;
    var f = a*facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'kg' && d == 'g' ){
    var facteur = (1*1)/1000;
    var f = a/facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'kg' && d == 'cs' ){
    var facteur = (1*1)/50;
    var f = a/facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'g' && d == 'pce' ){
    var facteur = (1*1)/3000;
    var f = a*facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'g' && d == 'kg' ){
    var facteur = (1*1)/1000;
    var f = a*facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'g' && d == 'cs' ){
    var facteur = (1*1)/20;
    var f = a*facteur;
    alert( a + b + (' vaut ') + f + d );
}
else if( b == 'cs' && d == 'g' ){
    var facteur = (1*1)/20;
    var f = a/facteur;
    alert( a + b + (' vaut ') + f + d );
}
else if( b == 'cs' && d == 'kg' ){
    var facteur = (1*1)/50;
    var f = a*facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else if( b == 'cs' && d == 'pce' ){
    var facteur = (1*1)/150;
    var f = a*facteur;
    alert( a + b + (' vaut ') + f + d + ' et le facteur est ' + facteur);
}
else{}

}
convertUnit();
