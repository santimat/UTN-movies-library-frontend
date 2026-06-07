import { PenIcon } from '@/shared/components/icons/Pen';
import { TrashIcon } from '@/shared/components/icons/Trash';
import '@/features/admin/components/MovieAdminPanel.css';

const moviesMockup = [
  {
    id: 1,
    title: 'Spiderman 2',
    director: 'Sam Raimi',
    releaseYear: 2004,
    genre: 'Action',
    rating: 7.3,
  },
  {
    id: 2,
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    releaseYear: 2008,
    genre: 'Action',
    rating: 9.0,
  },
  {
    id: 3,
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
  },
];

export function MovieAdminPanel() {
  return (
    // esas clases son para que quede centrado el contenido si te molestan eliminá el div al pingo
    <div className="flex h-full items-center justify-center">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Genero</th>
            <th>Año</th>
            <th>Rating</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {moviesMockup.map((movie) => (
            <tr key={`movie-${movie.id}`}>
              <th>{movie.title}</th>
              <td>{movie.genre}</td>
              <td>{movie.releaseYear}</td>
              <td>{movie.rating}/10</td>
              <td className="table-button">
                <button>
                  <PenIcon />
                </button>
                <button>
                  <TrashIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// - Levantá el entorno con pnpm dev en la terminal del editor
// - Vas a ver el componente renderizado en /admin

// TODO
// [x] Iterar sobre moviesMockup y mostrar cada película en una tabla
// [ ] Al hacer hover (poner el mouse encima del elemento) sobre el icono de editar debe tener un background azul
// [ ] Al hacer hover (poner el mouse encima del elemento) sobre el icono de eliminar debe tener un background rojo
// [ ] Al hacer hover en cada fila esta debe tener un background con menos opacidad
// [ ] Te agradeceria si los centras los botones en actions

// TIPS
// - Los estilos css ponelos en el styles.css de la carpeta MovieAdminPanel (ya está importada)
// - Vas a necesitar importar los icons Pen y Trash de @/icons (si no entendes lo del @/icons preguntale a claude por import aliases)
// - Hacelo en desktop despues vemos el responsive tranca, porque tengo que pedirle el diseño a stitch fajshdjs
// - Preguntale a claude como haces para que colapsen los bordes de la tabla (es con css)
// - El texto ponelo todo en español el codigo en ingles

// si te sale algun error que dice "eslint" no le des bola

// PALETA DE COLORES
// #1a1a1a; -> negro
// #e63b2e; -> rojo
// #0055ff; -> azul
// #4a4a4a; -> gris
