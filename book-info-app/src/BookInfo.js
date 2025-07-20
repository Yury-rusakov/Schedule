import React from 'react';

const BookInfo = () => {
    const book = {
        title: "Мастер и Маргарита",
        author: "Михаил Афанасьевич Булгаков",
        genre: "Роман",
        pages: 384,
        reviews: [
            "Один из величайших романов XX века, сочетающий мистику, сатиру и философскую глубину.",
            "Блестящее произведение, где переплетаются реальность и фантастика.",
            "Книга, которую можно перечитывать бесконечно, каждый раз находя новые смыслы."
        ]
    };

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h1 style={{ color: '#2c3e50', textAlign:'center'}}>{book.title}</h1>

            <div style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px'
            }}>
                <h2 style={{color: '#34495e'}}>Основная информация</h2>
                <p><strong>Автор:</strong>{book.author}</p>
                <p><strong>Жанр:</strong>{book.genre}</p>
                <p><strong>Количество страниц:</strong>{book.pages}</p>
            </div>

            <div style={{
                backgroundColor: '#e8f4f8',
                padding: '20px',
                borderRadius: '8px'
            }}>
                <h2 style={{color: '#34495e'}}>Рецензии</h2>
                <ul style={{listStyleType: 'none',padding: 0}}>
                    {book.reviews.map((review,index) => (
                        <li key={index} style={{
                            padding: '10px',
                            marginBottom: '10px',
                            backgroundColor: '#fff',
                            borderRadius: '4px'
                        }}>
                            {review}
                        </li>
                    ))}
                </ul>
            </div>
            </div>
    );
    };
    
    export default BookInfo;