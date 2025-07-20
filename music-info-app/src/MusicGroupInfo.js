import React from 'react';

const MusicGroupInfo = () => {
  const song = {
    title: "Bad And Boujee",
    artist: "UncleFlexxx",
    genre: "Rap",
    duration: "2:20",
    imageUrl: "https://avatars.yandex.net/get-music-content/13911897/0a2c7cb5.p.10602327/m1000x1000",
    listenUrl:"https://zvuk.com/track/144651922?utm_referrer=https%3A%2F%2Fzvuk.com%2Ftrack%2F144651922%3Futm_referrer%3Dhttps%253a%252f%252fwww.google.com%252f"
  };

  const handleListenClick = () => {
    window.open(song.listenUrl, '_blank'); 
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      <h1 style={{ color: '#2c3e50', textAlign: 'center' }}>{song.title}</h1>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px' 
      }}>
        <h2 style={{ color: '#34495e' }}>Основная информация</h2>
        <p><strong>Исполнитель:</strong> {song.artist}</p>
        <p><strong>Жанр:</strong> {song.genre}</p>
        <p><strong>Длительность:</strong> {song.duration}</p>
      </div>
      
       <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <img 
            src={song.imageUrl} 
            alt={`Обложка ${song.title}`}
            style={{ 
              maxWidth: '300px', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>

         <button
          onClick={handleListenClick}
          style={{
            backgroundColor: '#1DB954', // Зелёный цвет как у Spotify
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '24px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: '#1ED760' // Более светлый оттенок при наведении
            }
          }}
        >
          Слушать
        </button>
      </div>
  );
};

export default MusicGroupInfo;