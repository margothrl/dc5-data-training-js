function sommeTableau(tableau) {
    var somme = 0;
    for (var i = 0; i < tableau.length; i++) {
      somme += tableau[i];
    }
    return somme;
  }
  
  // Exemple d'utilisation de la fonction
  var tableau = [2, 4, 6, 8, 10];
  var resultat = sommeTableau(tableau);
  console.log("La somme des éléments du tableau est : " + resultat);
  