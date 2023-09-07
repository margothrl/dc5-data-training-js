// Transformation de la fonction calculerSomme en une fonction fléchée
const calculerSomme = (nombre1, nombre2) => {
  const somme = nombre1 + nombre2;
  return somme;
};

// Appel de la fonction avec des exemples de nombres
const resultat = calculerSomme(5, 3);
console.log("La somme est : " + resultat);
