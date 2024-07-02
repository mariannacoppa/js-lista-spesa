// creo array contentente la lista della spesa
const ingredients = ['guanciale', 'peperoni', 'pasta', 'olive', 'controfiletto', 'quaglie', 'insalata', 'pollo', 'gamberi', 'pomodori', 'melanzane'];
// recupero l'elemento che deve contenere la lista
const lista_spesa = document.getElementById('lista_spesa');
// dichiaro e inizializzo la variabile contatore
let i = 0;
// creo il ciclo while inserendo la condizione di fine ciclo
while (i < ingredients.length) {
    // creo nuovo list item
    const li = document.createElement('li');
    // inserisco il test nel list item
    li.innerText = ingredients[i];

}