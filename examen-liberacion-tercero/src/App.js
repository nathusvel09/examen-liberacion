import React from 'react';
import './App.css';
import Recipe from './components/Recipe';
import { useState } from 'react';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = {
    platoPaceño: {
      name: 'Plato Paceño',
      ingredients: ['Choclo', 'Queso', 'Habas', 'Papas', 'Carne'],
      instructions: 'Lavar bien la haba sin pelar y sin sacar de la cáscara y colocar en una olla con agua y hacer hervir (mejor si es en olla a presión)Lavar la papa y no pelar, mejor si es papá con cáscara roja, colocar en una olla con agua (mejor si es en olla a presión) Para el choclo o maíz 🌽, en una olla mejor si es a presión, 2 litros de agua y agregar azúcar, 2 cucharas y media por litro de agua. Una vez que el agua esté hirviendo recién colocar el maíz o choclo, y hacer cocer por lo menos 40 minutos Para la carne, yo lo ablando con papaya, colocando una capa de papaya y luego al sartén con salsa soya, pimienta, y comino al gusto, cocinar a fuego lento o mínimo para que salga jugo de la carne Con el mismo jugo de la carne, cocinar dos tiras de queso ',
    },
    chairo: {
      name: 'Chairo',
      ingredients: ['Chuño', 'Carne de res', 'Zanahoria', 'Apio', 'Maíz'],
      instructions: 'Chuño Listo: La noche anterior, pon el chuño a remojar. Al día siguiente, pélalo, májalo un poco y lávalo varias veces. Esto es para que el chairo no quede agrio. Cocinando las Carnes: Echa el agua en una olla grande y caliéntala. Cuando esté un poco calentita, mete la carne de vaca y la chalona. Antes de que hierva, quita la espuma que salga y echa la sal. Déjalo cocinar a fuego no muy fuerte como por una hora.  Agrega los Vegetales: Ahora tira las habas, arvejas, zanahorias y papas en el caldo. Deja que hierva unos 15 minutos. Luego, ponle el chuño y después de 5 minutos, agrega el maíz y el trigo mote. Cocina todo hasta que las papas estén suaves.  Salsa Rápida: En una sartén, calienta el aceite y fríe la cebolla hasta que esté doradita. Échale el ají colorado, comino, orégano y pimienta. Dales una buena mezclada y luego súmalos al chairo. Deja que todo hierva juntito unos 10 minutos.  Últimos Toques: Apaga el fuego y añade la cebolla verde, perejil, orégano y hierbabuena. Revuelve bien.  Hora de Servir: Sirve el chairo en platos y asegúrate de poner un trozo de carne de vaca y de chalona en cada uno. Si ves que está muy espeso, añade un poco más de caldo o agua caliente. ¡Listo para comer!',
    },
    anticucho: {
      name: 'Anticucho',
      ingredients: ['Corazón de res', 'Papa', 'Ají', 'Cebolla', 'Ajo'],
      instructions: 'Lava, retira las venas del corazón. Corta en cubos de 1 1/2 pulgadas.  En un tazón, combina el ají panca, ajo, vinagre, orégano (frotado entre las yemas de los dedos), aceite, sal, pimienta y comino en polvo. Agrega el corazón cortado en cubos y marínalo unas tres horas. Prepara la mezcla para barnizar. Haz una brochita con envolturas de maíz frescas.  Calienta la parrilla eléctrica o de carbón a fuego medio (grill). Ya marinados, ensarta 3 ó 4 cubos de corazón en los palitos de anticucho. Cocina los anticuchos en la parrilla hasta que se doren, mientras se van barnizando con la marinada restante. Usa la brochita de envolturas de maíz. Los anticuchos deben quedar jugosos por dentro, pero no crudos ni secos.  Sírvelos acompañados de rodajas de papas doradas, de choclo, y con salsa de ají.',
    }
  };

  return (
    <div className="App">
      <div className="menu-container">
        <h1>Recetas Típicas de La Paz</h1>
        <div className="menu">
          <button onClick={() => setSelectedRecipe(recipes.platoPaceño)}>Plato Paceño</button>
          <button onClick={() => setSelectedRecipe(recipes.chairo)}>Chairo</button>
          <button onClick={() => setSelectedRecipe(recipes.anticucho)}>Anticucho</button>
        </div>
        {selectedRecipe && <Recipe recipe={selectedRecipe} />}
      </div>
    </div>
  );
}

export default App;
