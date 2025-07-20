import React from 'react';

const RecipeInfo = () => {
  const recipe = {
    title: "Спагетти Карбонара",
    author: "Джулия Чайлд",
    category: "Итальянская кухня",
    cookingTime: "30 минут",
    ingredients: [
      "400 г спагетти",
      "200 г панчетты или гуанчиале",
      "4 яичных желтка",
      "50 г пармезана",
      "Свежемолотый чёрный перец",
      "Соль"
    ],
    steps: [
      "Вскипятите воду для пасты, добавьте соль.",
      "Обжарьте панчетту до хрустящего состояния.",
      "Взбейте желтки с тёртым пармезаном и перцем.",
      "Отварите пасту al dente, сохраните немного воды.",
      "Смешайте пасту с панчеттой, затем с яичной смесью.",
      "Добавьте немного воды от пасты для создания крема."
    ],
    tips: "Подавайте сразу же, пока соус не загустел.",
    imageUrl: "https://media.istockphoto.com/id/1142391463/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D1%81%D1%82%D0%B0-%D0%BA%D0%B0%D1%80%D0%B1%D0%BE%D0%BD%D0%B0%D1%80%D0%B0.jpg?s=2048x2048&w=is&k=20&c=-souqndoxxuctxdsoQ3Gd3UPutS0FyNsNfF7OWT00yw=",
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>{recipe.title}</h1>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src={recipe.imageUrl} 
          alt={recipe.title}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '400px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
    />
  </div>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px' 
      }}>
        <h2 style={{ color: '#34495e' }}>Основная информация</h2>
        <p><strong>Автор рецепта:</strong> {recipe.author}</p>
        <p><strong>Категория:</strong> {recipe.category}</p>
        <p><strong>Время приготовления:</strong> {recipe.cookingTime}</p>
      </div>
      
      <div style={{ 
        backgroundColor: '#e8f4f8', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#34495e' }}>Ингредиенты</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} style={{ 
              padding: '8px', 
              marginBottom: '5px', 
              backgroundColor: '#fff', 
              borderRadius: '4px',
              borderLeft: '4px solid #1DB954'
            }}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      
      <div style={{ 
        backgroundColor: '#f0f8ff', 
        padding: '20px', 
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h2 style={{ color: '#34495e' }}>Шаги приготовления</h2>
        <ol style={{ paddingLeft: '20px' }}>
          {recipe.steps.map((step, index) => (
            <li key={index} style={{ 
              padding: '10px', 
              marginBottom: '10px', 
              backgroundColor: '#fff', 
              borderRadius: '4px'
            }}>
              {step}
            </li>
          ))}
        </ol>
      </div>
      
      {recipe.tips && (
        <div style={{ 
          backgroundColor: '#fff8e1', 
          padding: '20px', 
          borderRadius: '8px',
          borderLeft: '5px solid #ffc107'
        }}>
          <h3 style={{ color: '#34495e', marginTop: 0 }}>👨‍🍳 Совет шеф-повара</h3>
          <p>{recipe.tips}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;