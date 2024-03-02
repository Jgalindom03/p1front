import { h } from 'preact';

const Page = () => {
  const imageClasses = [
    'imagenvirus1',
    'imagenvirus2',
    'imagenvirus3',
    'imagenvirus4',
    'imagenvirus5',
    'imagenvirus6'
  ];

  // Función para generar una posición aleatoria sin superponerse
  const getRandomPosition = (index) => {
    const positions = [
      { top: '0vh', left: '70vw' },
      { top: '5vh', left: '10vw' },
      { top: '25vh', left: '50vw' },
      { top: '55vh', left: '30vw' },
      { top: '50vh', left: '70vw' },
      { top: '55vh', left: '0vw' }
    ];
    
    return positions[index % positions.length]; // Cicla entre las posiciones predefinidas
  };

  return (
    <body class="imagenvirus">
      <div>
        {imageClasses.map((imageClass, index) => (
          <div
            key={index}
            className={imageClass}
            style={{
              width: '450px',
              height: '450px',
              position: 'absolute',
              ...getRandomPosition(index), // Aplicar  posición predefinida según el índice
            }}
          >
          </div>
        ))}
      </div>
    </body>
  );
};

export default Page;
