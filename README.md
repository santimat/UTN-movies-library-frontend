# 🎬 Biblioteca de Películas — Frontend

Una aplicación web completa de biblioteca de películas donde los usuarios pueden explorar, buscar, filtrar, reseñar y guardar películas en su lista personal. Desarrollada con React 19, TypeScript, Tailwind CSS v4 y Zustand. El backend es una API REST construida con Spring Boot (Java) y PostgreSQL (repositorio separado).

**Autores:** Santino Maturo & Guido Perroud

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Stack Tecnológico](#stack-tecnológico)
- [Funcionalidades](#funcionalidades)
- [Primeros Pasos](#primeros-pasos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Arquitectura y Patrones](#arquitectura-y-patrones)
- [Rutas](#rutas)
- [Integración con la API](#integración-con-la-api)
- [Estilos y Diseño](#estilos-y-diseño)
- [Referencia de Componentes](#referencia-de-componentes)
- [Despliegue](#despliegue)
- [Mejoras Futuras](#mejoras-futuras)

---

## Descripción General

Esta es una **aplicación de página única (SPA) con React** que funciona como el frontend de un sistema de biblioteca de películas. Los usuarios pueden:

- Explorar una cuadrícula responsiva de películas con pósters, calificaciones y metadatos
- Buscar películas por título en tiempo real con debounce
- Filtrar películas por género usando chips clickeables
- Ordenar películas por título, género, calificación o año de estreno
- Ver información detallada de una película incluyendo sinopsis, director, duración y plataformas de streaming
- Leer y escribir reseñas con calificaciones de estrellas
- Guardar películas en una lista personal ("Mi Lista")
- Obtener recomendaciones aleatorias de películas guardadas
- Autenticarse (iniciar sesión / registrarse) para acceder a funciones personalizadas

Los usuarios administradores tienen acceso a un panel protegido para gestionar películas (crear, editar, eliminar) y usuarios (cambiar roles).

La aplicación se comunica con una API backend (Spring Boot + Java + PostgreSQL) mediante peticiones HTTP y usa autenticación basada en sesiones con cookies HTTP-only.

---

## Stack Tecnológico

| Tecnología              | Propósito                                     |
| ----------------------- | --------------------------------------------- |
| **React 19**            | Framework de UI con React Compiler             |
| **TypeScript**          | JavaScript con tipos                          |
| **Vite**                | Herramienta de build y servidor de desarrollo |
| **Tailwind CSS v4**     | Framework de estilos utility-first            |
| **Zustand**             | Gestión de estado ligera                      |
| **React Router v7**     | Enrutamiento del lado del cliente             |
| **Sileo**               | Notificaciones toast                          |
| **tailwind-animations** | Utilidades de animación CSS                   |
| **Prettier**            | Formateo de código (con plugin Tailwind)      |
| **ESLint**              | Linting de código                             |

**Backend (repositorio separado):** Spring Boot, Java, Jakarta EE, PostgreSQL

---

## Funcionalidades

### 🏠 Página Principal — Exploración de Películas

- **Cuadrícula Responsiva de Películas** — Muestra tarjetas de películas en un layout CSS Grid que se adapta fluidamente de 1 a 3+ columnas según el breakpoint.
- **Tarjetas de Película** — Cada tarjeta muestra el póster de la película (en escala de grises, pasando a color al pasar el mouse), título, badges de género, año de estreno y badge de calificación.
- **Búsqueda en Tiempo Real** — Input de búsqueda con debounce (400ms) que filtra películas por título. Normaliza acentos para búsquedas flexibles. El término de búsqueda se almacena en la URL, haciéndolo compartible y marcable.
- **Filtros de Género** — Chips de géneros desplazables horizontalmente, obtenidos de la API. Haz clic en un chip para activar/desactivar ese filtro de género. Se pueden activar múltiples géneros simultáneamente.
- **Controles de Ordenamiento** — Dropdown para seleccionar el campo de orden (Título, Género, Calificación Promedio, Año) con un botón para alternar entre orden ascendente/descendente.
- **Paginación** — Botones de números de página con ventana deslizable que centra la página actual. Usa el formato de respuesta paginado de Spring Boot.
- **Estados de Carga y Vacío** — Spinner de carga animado durante las peticiones, y mensajes amigables cuando no hay películas que coincidan con los filtros.

### 🎥 Página de Detalle de Película

- **Vista Completa** — Póster grande con efecto de sombra difusa (blur duplicado detrás), título, año de estreno, badges de género, sinopsis, nombre del director, duración y calificación promedio.
- **Íconos de Plataformas** — Detecta automáticamente la plataforma de streaming (Netflix, HBO Max, Disney+) a partir de la URL de visualización y muestra el ícono correspondiente.
- **Enlace al Tráiler** — Enlace externo al tráiler de la película.
- **Enlace para Ver** — Enlace directo a la plataforma de streaming.
- **Agregar a Mi Lista** — Botón visible solo para usuarios autenticados. Se desactiva después de guardar la película.
- **Sección de Reseñas** — Muestra todas las reseñas de los usuarios con calificaciones de estrellas y comentarios. La reseña del usuario actual se resalta con un badge "Tu reseña".

### 📋 Mi Lista — Películas Guardadas

- **Lista Personal de Películas** — Los usuarios autenticados pueden guardar películas desde la página de detalle para tener una lista personal de favoritas.
- **Cuadrícula de Guardadas** — Vista de cuadrícula responsiva con las películas guardadas, usando el mismo estilo de tarjetas que la página principal.
- **Eliminar de la Lista** — Cada tarjeta tiene un botón de eliminar para quitar películas de la lista.
- **Recomendación Aleatoria** — Botón que muestra una película aleatoria de la lista del usuario en un modal, ideal para decidir qué ver.
- **Paginación** — Paginación separada para la lista de películas guardadas.

### ⭐ Reseñas

- **Lista de Reseñas** — Lista desplazable de todas las reseñas de una película, mostrando la inicial del nombre del usuario en un avatar de color, calificación de estrellas y comentario.
- **Formulario de Reseña** — Los usuarios autenticados pueden enviar una reseña con una calificación de 1-5 estrellas y un comentario de texto. El formulario se oculta si el usuario ya dejó una reseña.
- **Input de Calificación con Estrellas** — Selector interactivo de estrellas (1-5) con toggle (haz clic en la misma estrella para deseleccionar).
- **Una Reseña por Usuario** — El sistema verifica si el usuario ya dejó una reseña para la película y oculta el formulario si es así.

### 🔐 Autenticación

- **Iniciar Sesión** — Formulario de login con email y contraseña, casilla "Recordarme".
- **Registro** — Formulario de registro con nombre, email y contraseña. Detección de emails duplicados (error 409 en español).
- **Gestión de Sesiones** — Usa cookies HTTP-only (el backend establece la cookie). Al cargar la app, la sesión del usuario se restaura llamando a `GET /api/auth/me`.
- **UI Condicional** — La barra de navegación muestra botones de login/logout según el estado de autenticación. El botón "Agregar a Mi Lista" solo aparece para usuarios autenticados. El ícono de administrador solo aparece para usuarios con rol ADMIN.

### 🛡️ Protección de Rutas

- **GuardRoute** — Envuelve todas las rutas. Al montar, verifica si el usuario tiene una sesión activa. Si un usuario autenticado navega a `/auth`, se redirige a `/`.
- **AdminRoute** — Protege la ruta `/admin`. Llama a `GET /api/auth/admin` para verificar que el usuario tenga el rol `ADMIN`. Los usuarios no administradores son redirigidos a `/`.

### 📊 Panel de Administración

El panel de administración está completamente funcional con dos secciones principales:

#### Gestión de Películas (ABM)
- **Tabla de Películas** — Lista de películas con búsqueda y filtros de género.
- **Crear Película** — Formulario completo con campos: título, director, género (seleccionable con opción de crear nuevo género), año de estreno, duración, póster (subida con drag-and-drop y preview), sinopsis, URL del tráiler y URL de visualización.
- **Editar Película** — Mismo formulario pre-cargado con los datos existentes de la película.
- **Eliminar Película** — Confirmación de eliminación mediante diálogo de Sileo antes de borrar.
- **Subida de Póster** — Componente de drag-and-drop o click-to-upload con preview de imagen.

#### Gestión de Usuarios
- **Lista de Usuarios** — Vista de tarjetas con avatar, nombre, email y rol actual.
- **Búsqueda y Filtro** — Buscar usuarios por nombre y filtrar por rol (Admin/Regular).
- **Cambiar Roles** — Botones de toggle para cambiar el rol de un usuario entre Admin y Regular.

### 📱 Diseño Responsivo

- **Navegación de Escritorio** — Barra de navegación horizontal con enlaces, enlace al panel de administración (solo admin) y botón de login/logout.
- **Navegación Móvil** — Menú hamburguesa con overlay deslizante, backdrop blur, mostrando el nombre del usuario cuando está autenticado. Bloqueo del scroll del body al abrir el menú.
- **Hook de Media Query** — Hook personalizado `useMediaQuery` para detección de breakpoints responsivos (cambia a navegación móvil a 768px).
- **Layout Adaptivo** — La página de detalle de películas cambia de layout apilado a 2 columnas en `md:`.

### 🔔 Mejoras de UX

- **Notificaciones Toast** — Mensajes de éxito, error e información mostrados mediante la librería Sileo. Incluye toast de promesa para operaciones de eliminación con estados loading/success/error.
- **Spinners de Carga** — Icono animado de reproductor de cine con animación tada durante las peticiones a la API.
- **Estados de Error** — Mensajes de error amigables provenientes de la API en español (400, 401, 403, 404, 409, etc.).
- **Estados Vacíos** — Mensajes amigables cuando no hay datos disponibles (ej: "No se encontraron películas", "Aún no hay reviews").
- **Modal con Portal** — Sistema de modales que usa `createPortal` con backdrop blur y cierre al hacer clic fuera.

### 🎨 Estilo Visual

- **Estética Neo-Brutalista** — Sombras duras (`shadow-auth`), bordes gruesos, colores audaces.
- **Escala de Grises a Color** — Los pósters se muestran en escala de grises y pasan a color al pasar el mouse.
- **Texto en Mayúsculas** — La mayoría del texto UI está en mayúsculas para una sensación audaz y editorial.
- **Animaciones Escalonadas** — Las tarjetas de películas aparecen con un fade-in escalonado según su índice.
- **Fuentes Custom** — Space Grotesk para títulos/etiquetas, Geist para cuerpo de texto.
- **Micro-interacciones** — Hover con translate en botones, escala al hacer clic, rotación de flechas en dropdowns.

---

## Primeros Pasos

### Prerrequisitos

- **Node.js** — Versión 18 o superior (recomendado: última LTS)
- **pnpm** — Gestor de paquetes (el proyecto usa `pnpm-lock.yaml`)
- **Backend API** — El backend de Spring Boot debe estar ejecutándose (por defecto: `http://localhost:8091`)

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/<tu-org>/UTN-movies-library-frontend.git

# Navegar al directorio del proyecto
cd UTN-movies-library-frontend

# Instalar dependencias
pnpm install
```

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
VITE_API_URL=http://localhost:8091/api
```

| Variable       | Descripción                | Valor por defecto           |
| -------------- | -------------------------- | --------------------------- |
| `VITE_API_URL` | URL base de la API backend | `http://localhost:8091/api` |

### Ejecutar el Proyecto

```bash
# Iniciar el servidor de desarrollo
pnpm dev
```

La app estará disponible en `http://localhost:5173`. El servidor de desarrollo de Vite proxea las peticiones `/api` a `http://localhost:8091`.

```bash
# Build para producción
pnpm build

# Previsualizar el build de producción
pnpm preview
```

---

## Estructura del Proyecto

```
UTN-movies-library-frontend/
├── public/
│   └── favicon.svg                    # Favicon de la app
├── src/
│   ├── main.tsx                       # Punto de entrada de la aplicación
│   ├── App.tsx                        # Componente raíz con enrutamiento
│   ├── global.css                     # Estilos globales, Tailwind, fuentes custom
│   ├── assets/
│   │   └── fonts/
│   │       ├── Geist.woff2            # Fuente para cuerpo de texto
│   │       └── SpaceGrotesk.woff2     # Fuente para títulos/etiquetas
│   │
│   ├── features/                      # Módulos organizados por feature
│   │   ├── auth/                      # Feature de autenticación
│   │   │   ├── types.ts               # Tipos: User, AuthRequest, UserResponse
│   │   │   ├── store/
│   │   │   │   └── useAuthStore.ts    # Store Zustand de autenticación
│   │   │   ├── services/
│   │   │   │   └── authService.ts     # Llamadas API de autenticación
│   │   │   └── components/
│   │   │       ├── AuthForm.tsx        # Wrapper reutilizable de formulario
│   │   │       ├── AuthFormField.tsx   # Campo de formulario reutilizable
│   │   │       ├── AuthSubmitButton.tsx
│   │   │       ├── LoginForm.tsx       # Lógica del formulario de login
│   │   │       └── RegisterForm.tsx    # Lógica del formulario de registro
│   │   │
│   │   ├── movies/                    # Feature de películas
│   │   │   ├── types.ts               # Tipos: Movie, Genre, GetMoviesProps
│   │   │   ├── store/
│   │   │   │   └── useMoviesStore.ts  # Store Zustand de películas
│   │   │   ├── services/
│   │   │   │   └── movieService.ts    # Llamadas API de películas
│   │   │   ├── hooks/
│   │   │   │   ├── useMovies.ts       # Combina parámetros de búsqueda + store
│   │   │   │   ├── useSort.ts         # Hook de estado de ordenamiento
│   │   │   │   └── useMovieSearchParams.ts  # Gestión de parámetros de URL
│   │   │   └── components/
│   │   │       ├── FilterBar.tsx       # Barra de filtros compuesta
│   │   │       ├── GenreFilters.tsx    # Filtros de género por chips
│   │   │       ├── SearchInput.tsx     # Input de búsqueda con debounce
│   │   │       ├── SortSelect.tsx      # Dropdown de orden + toggle ASC/DESC
│   │   │       ├── Pagination.tsx      # Paginación con ventana deslizante
│   │   │       ├── MovieList.tsx       # Cuadrícula responsiva de tarjetas
│   │   │       ├── MovieCard.tsx       # Tarjeta individual de película
│   │   │       ├── MovieDetail.tsx     # Vista completa de detalle de película
│   │   │       └── MovieMetaItem.tsx   # Elemento de visualización de metadatos
│   │   │
│   │   ├── savedMovies/               # Feature de películas guardadas
│   │   │   ├── types.ts               # Tipos: SavedMovie
│   │   │   ├── store/
│   │   │   │   └── useSavedMoviesStore.ts  # Store Zustand de películas guardadas
│   │   │   ├── services/
│   │   │   │   └── savedMoviesService.ts   # Llamadas API
│   │   │   └── components/
│   │   │       ├── SavedMoviesList.tsx  # Cuadrícula de películas guardadas
│   │   │       └── RandomSavedMovie.tsx # Recomendación aleatoria en modal
│   │   │
│   │   ├── reviews/                   # Feature de reseñas
│   │   │   ├── types.ts               # Tipos: Review, ReviewRequest
│   │   │   ├── store/
│   │   │   │   └── useReviewsStore.ts # Store Zustand de reseñas
│   │   │   ├── services/
│   │   │   │   └── reviewService.ts   # Llamadas API de reseñas
│   │   │   └── components/
│   │   │       ├── MovieFeedback.tsx   # Contenedor de formulario + lista
│   │   │       ├── ReviewForm.tsx      # Formulario de envío de reseña
│   │   │       ├── ReviewList.tsx      # Lista de reseñas
│   │   │       ├── ReviewCard.tsx      # Tarjeta individual de reseña
│   │   │       ├── RatingInput.tsx     # Input de calificación con estrellas
│   │   │       └── Stars.tsx           # Visualización de estrellas (solo lectura)
│   │   │
│   │   ├── genres/                    # Feature de géneros
│   │   │   ├── store/
│   │   │   │   └── useGenresStore.ts  # Store Zustand de géneros
│   │   │   └── services/
│   │   │       └── genreService.ts    # Llamadas API de géneros
│   │   │
│   │   └── admin/                     # Feature de administración
│   │       ├── store/
│   │       │   ├── useUsersStore.ts          # Store de usuarios
│   │       │   └── useMovieManagementStore.ts # Store de formulario de películas
│   │       ├── services/
│   │       │   └── userService.ts     # Llamadas API de usuarios
│   │       └── components/
│   │           ├── MovieAdminPanel.tsx   # Panel de gestión de películas
│   │           ├── MoviesManagementList.tsx # Cuadrícula de películas admin
│   │           ├── MovieManagementCard.tsx  # Tarjeta con editar/eliminar
│   │           ├── MovieForm.tsx       # Formulario crear/editar película
│   │           ├── UploadFile.tsx      # Drag-and-drop para pósters
│   │           ├── GenreInput.tsx      # Selector de género con creación inline
│   │           ├── UserAdminPanel.tsx  # Panel de gestión de usuarios
│   │           ├── UsersManagementList.tsx # Cuadrícula de usuarios
│   │           └── UserCard.tsx        # Tarjeta de usuario con cambio de rol
│   │
│   ├── pages/                         # Componentes de página por ruta
│   │   ├── Home.tsx                   # Página principal (filtros + cuadrícula)
│   │   ├── Movie.tsx                  # Página de detalle de película
│   │   ├── SavedMovies.tsx            # Página de películas guardadas
│   │   ├── Auth.tsx                   # Página de Login + Registro
│   │   ├── Admin.tsx                  # Panel de administración
│   │   └── NotFound.tsx               # Página 404
│   │
│   ├── routes/                        # Guards de ruta y manejadores
│   │   ├── GuardRoute.tsx             # Guard de autenticación (verifica sesión)
│   │   ├── AdminRoute.tsx             # Guard de administrador (verifica rol)
│   │   └── Logout.tsx                 # Manejador de cierre de sesión
│   │
│   └── shared/                        # Código compartido/reutilizable
│       ├── types.ts                   # Tipos: SvgProps, SpringPageResponse, AppError
│       ├── hooks/
│       │   ├── useMediaQuery.ts       # Hook de breakpoints responsivos
│       │   ├── useFilters.ts          # Hook de filtros reutilizable
│       │   └── useModal.ts            # Hook del sistema de modales
│       ├── store/
│       │   └── useModalStore.ts       # Store global de modales
│       ├── utils/
│       │   ├── constants.ts           # Etiquetas de formularios, API_URL, tiempo de debounce
│       │   ├── checkMissingFields.ts  # Utilidad de validación de formularios
│       │   ├── handleFetchErrors.ts   # Manejador de errores de red/parseo
│       │   ├── handleResponseErrors.ts # Manejador de errores HTTP
│       │   └── dictionaries.ts        # Diccionarios de nombres de campos en español
│       └── components/
│           ├── layout/
│           │   ├── Layout.tsx         # Shell de página (Header + contenido + Footer)
│           │   ├── Header.tsx         # Header de la app con navegación
│           │   ├── Footer.tsx         # Footer de la app
│           │   └── navbar/
│           │       ├── types.ts       # Tipo HeaderNavItem
│           │       ├── NavBar.tsx     # Switcher de navegación responsiva
│           │       ├── DesktopNav.tsx  # Navegación de escritorio
│           │       ├── MobileNav.tsx   # Navegación hamburguesa móvil
│           │       └── NavBarActions.tsx # Botones auth-aware de la barra
│           ├── ui/
│           │   ├── Button.tsx         # Botón reutilizable
│           │   ├── ButtonLink.tsx     # Link con estilo de botón
│           │   ├── SubmitButton.tsx   # Botón de envío para formularios
│           │   ├── FormField.tsx      # Campo de formulario con label
│           │   ├── SearchInput.tsx    # Input de búsqueda con debounce
│           │   ├── GenreFilters.tsx   # Chips de filtros de género
│           │   ├── SortSelect.tsx     # Dropdown de ordenamiento
│           │   ├── Pagination.tsx     # Paginación con ventana deslizante
│           │   ├── Modal.tsx          # Modal con React Portal
│           │   ├── Loader.tsx         # Spinner de carga animado
│           │   └── RatingBadge.tsx    # Badge de calificación
│           └── icons/                 # 23 componentes de iconos SVG
│               ├── Add.tsx
│               ├── ArrowBack.tsx
│               ├── ArrowDown.tsx
│               ├── Burguer.tsx
│               ├── CameraOff.tsx
│               ├── CheckBox.tsx
│               ├── Close.tsx
│               ├── Disney.tsx
│               ├── Hbo.tsx
│               ├── Login.tsx
│               ├── Logout.tsx
│               ├── Movie.tsx
│               ├── Netflix.tsx
│               ├── Pen.tsx
│               ├── Play.tsx
│               ├── Random.tsx
│               ├── Search.tsx
│               ├── SortAscending.tsx
│               ├── SortDescending.tsx
│               ├── Star.tsx
│               ├── Tool.tsx
│               ├── Trash.tsx
│               └── Upload.tsx
├── .env                               # Variables de entorno (no se commitea)
├── .env.example                       # Plantilla de variables de entorno
├── index.html                         # Punto de entrada HTML
├── package.json                       # Manifest del proyecto
├── pnpm-lock.yaml                     # Archivo de lock
├── tsconfig.json                      # Configuración raíz de TypeScript
├── tsconfig.app.json                  # Configuración de TypeScript para la app
├── tsconfig.node.json                 # Configuración de TypeScript para Node
├── vite.config.ts                     # Configuración de Vite
├── eslint.config.js                   # Configuración plana de ESLint
├── .prettierrc                        # Configuración de Prettier
└── vercel.json                        # Configuración de despliegue SPA en Vercel
```

---

## Arquitectura y Patrones

### Estructura por Features

El código está organizado por **features** en lugar de por tipo de archivo. Cada feature (`auth`, `movies`, `savedMovies`, `reviews`, `admin`, `genres`) es un módulo autocontenido con:

- `types.ts` — Interfaces TypeScript para los modelos de datos de esa feature
- `store/` — Store de estado Zustand
- `services/` — Funciones de servicio API
- `hooks/` — Hooks personalizados específicos de la feature
- `components/` — Componentes UI de esa feature

El código compartido (layout, primitivos UI, iconos, utilidades) vive en `shared/`.

### Gestión de Estado

La app usa **Zustand** con siete stores independientes:

#### `useAuthStore`
- **Estado:** `user` (usuario actual o null), `error`, `loading`
- **Acciones:** `hydrateUser()` (restaurar sesión), `login()`, `register()`, `logout()`

#### `useMoviesStore`
- **Estado:** `movies[]`, `movie`, `genres[]`, flags de carga/error, datos de paginación
- **Acciones:** `fetchMovies(filters)`, `fetchMovieById(id)`, `createMovie()`, `updateMovie()`, `deleteMovie()`

#### `useSavedMoviesStore`
- **Estado:** `savedMovies[]`, `totalSavedMovies`, `randomSavedMovie`, datos de paginación
- **Acciones:** `fetchSavedMovies()`, `saveMovieInMyList()`, `fetchRandomSavedMovie()`, `deleteSavedMovie()`, `countSavedMovies()`

#### `useReviewsStore`
- **Estado:** `reviews[]`, flags de carga/error
- **Acciones:** `fetchReviews(movieId)`, `createReview(review)`, `isUserReview(userId)`

#### `useUsersStore`
- **Estado:** `users[]`, datos de paginación
- **Acciones:** `fetchUsers()`, `updateUserRole()`

#### `useGenresStore`
- **Estado:** `genres[]`, flags de carga/error
- **Acciones:** `fetchGenres()` (con caché), `createGenre()`

#### `useModalStore`
- **Estado:** `showModal`, `modalContent`
- **Acciones:** `openModal()`, `closeModal()`

Todos los stores usan `useShallow` de `zustand/shallow` para suscripciones selectivas al estado, evitando re-renders innecesarios.

### Flujo de Autenticación

```
Carga de la App
  └─ GuardRoute se monta
       └─ hydrateUser() → GET /api/auth/me (con cookies)
            ├─ Éxito → usuario almacenado en Zustand → la app se renderiza normalmente
            └─ Fallo → usuario = null → solo rutas públicas

Inicio de Sesión
  └─ LoginForm → POST /api/auth/login
       ├─ Éxito → usuario almacenado en Zustand → redirigir a /
       └─ Fallo → toast de error mostrado

Acceso Admin
  └─ AdminRoute se monta
       └─ hydrateUser('admin') → GET /api/auth/admin
            ├─ Rol ADMIN → renderizar página de admin
            └─ Otro rol → redirigir a /
```

- **Basado en sesiones:** Usa `credentials: 'include'` en las llamadas fetch. El backend establece cookies HTTP-only.
- **Sin tokens en localStorage:** El estado del usuario vive solo en Zustand (en memoria).

### Manejo de Errores

Un sistema de manejo de errores de dos capas se usa en todos los servicios API:

1. **`handleResponseErrors(response)`** — Verifica los códigos de estado HTTP y lanza objetos `AppError` estructurados con mensajes apropiados. Soporta overrides por endpoint (ej: mensajes personalizados para 401, 403, 404, 409).

2. **`handleFetchErrors(error)`** — Captura errores de red (`TypeError`), errores de parseo JSON (`SyntaxError`) y propaga objetos `AppError` conocidos. Retorna mensajes de error en español.

### Estado de Filtros en la URL

En la página principal, todo el estado de filtros (texto de búsqueda, género, campo de orden, orden, número de página) se almacena en **parámetros de búsqueda de la URL** mediante `useSearchParams()` de React Router. Esto significa:

- Los filtros son **compartibles** — copia la URL y alguien más ve los mismos resultados
- Los filtros son **marcables** — guarda la URL y vuelve a la misma vista
- Los filtros **persisten** al navegar entre páginas

### Carga Lazy y Code Splitting

Todos los componentes de página y algunos sub-componentes se cargan mediante `React.lazy()` con `import()` dinámico:

- Todas las páginas: `Home`, `Movie`, `SavedMovies`, `Auth`, `Admin`, `NotFound`, `Logout`
- Componentes de navegación responsiva: `DesktopNav`, `MobileNav`
- Componentes de admin: `MovieAdminPanel`, `UserAdminPanel`

Esto reduce el tamaño del bundle inicial y mejora los tiempos de carga. Además, el proyecto usa **React Compiler** (`babel-plugin-react-compiler`) para memoización automática.

### Caché Optimista

- `fetchMovieById` primero verifica el array `movies` en memoria antes de hacer una llamada API
- `fetchGenres` omite la llamada API si los géneros ya están cargados

---

## Rutas

| Ruta              | Componente      | Auth Requerida | Descripción                                                             |
| ----------------- | --------------- | -------------- | ----------------------------------------------------------------------- |
| `/`               | `Home`          | No             | Cuadrícula de películas con filtros, búsqueda y orden                   |
| `/movie/:id`      | `Movie`         | No             | Página de detalle de película con reseñas                               |
| `/my-list`        | `SavedMovies`   | Sí             | Lista personal de películas guardadas con recomendación aleatoria       |
| `/auth`           | `Auth`          | No             | Formularios de login y registro (redirige a `/` si ya está autenticado) |
| `/admin`          | `Admin`         | Sí (ADMIN)     | Panel de administración con gestión de películas y usuarios             |
| `/logout`         | `Logout`        | No             | Ejecuta el cierre de sesión y redirige a `/`                            |
| `*`               | `NotFound`      | No             | Página 404 ("Escena no encontrada")                                     |

**Protecciones de Ruta:**

- `GuardRoute` — Envuelve todas las rutas. Verifica la sesión al montar y redirige a los usuarios autenticados fuera de `/auth`.
- `AdminRoute` — Envuelve la ruta `/admin`. Verifica el rol ADMIN.

---

## Integración con la API

**URL Base:** Configurada mediante `VITE_API_URL` (por defecto: `http://localhost:8091/api`)

El servidor de desarrollo de Vite proxea las peticiones `/api` al backend en `http://localhost:8091`.

### Endpoints

#### Autenticación

| Método | Endpoint             | Auth | Descripción                                    |
| ------ | -------------------- | ---- | ---------------------------------------------- |
| POST   | `/api/auth/register` | No   | Registrar un nuevo usuario                     |
| POST   | `/api/auth/login`    | No   | Iniciar sesión (se establece cookie de sesión) |
| POST   | `/api/auth/logout`   | Sí   | Limpiar sesión                                 |
| GET    | `/api/auth/me`       | Sí   | Obtener usuario actual desde la sesión         |
| GET    | `/api/auth/admin`    | Sí   | Verificar rol de administrador                 |

#### Películas

| Método | Endpoint                                                  | Auth | Descripción                                    |
| ------ | --------------------------------------------------------- | ---- | ---------------------------------------------- |
| GET    | `/api/movies?genre=&sortBy=&sortOrder=&searchText=&page=` | No   | Lista paginada de películas con filtros        |
| GET    | `/api/movies/:id`                                         | No   | Detalle de una película                        |
| POST   | `/api/movies`                                             | Sí (ADMIN) | Crear película (FormData multipart)      |
| PUT    | `/api/movies/:id`                                         | Sí (ADMIN) | Editar película (FormData multipart)      |
| DELETE | `/api/movies/:id`                                         | Sí (ADMIN) | Eliminar película                         |

#### Géneros

| Método | Endpoint     | Auth | Descripción                    |
| ------ | ------------ | ---- | ------------------------------ |
| GET    | `/api/genres` | No   | Todos los géneros disponibles  |
| POST   | `/api/genres` | Sí (ADMIN) | Crear un nuevo género    |

#### Reseñas

| Método | Endpoint                    | Auth | Descripción                          |
| ------ | --------------------------- | ---- | ------------------------------------ |
| GET    | `/api/reviews?movieId=`     | No   | Reseñas de una película              |
| POST   | `/api/reviews`              | Sí   | Enviar una nueva reseña              |

#### Películas Guardadas

| Método | Endpoint                           | Auth | Descripción                              |
| ------ | ---------------------------------- | ---- | ---------------------------------------- |
| GET    | `/api/savedmovies?searchText=&genre=&page=&size=` | Sí | Películas guardadas del usuario |
| GET    | `/api/savedmovies/random`          | Sí   | Película aleatoria de la lista           |
| POST   | `/api/savedmovies`                 | Sí   | Guardar una película                     |
| DELETE | `/api/savedmovies/:movieId`        | Sí   | Eliminar de la lista                     |
| GET    | `/api/savedmovies/count`           | Sí   | Total de películas guardadas             |

#### Usuarios (Admin)

| Método | Endpoint              | Auth | Descripción                    |
| ------ | --------------------- | ---- | ------------------------------ |
| GET    | `/api/users?page=&role=&size=` | Sí (ADMIN) | Lista paginada de usuarios |
| PATCH  | `/api/users/:userId`  | Sí (ADMIN) | Cambiar rol de usuario     |

### Formato de Respuesta

La API usa el formato de respuesta paginada de Spring Boot:

```json
{
  "content": [...],
  "page": {
    "size": 10,
    "number": 0,
    "totalElements": 100,
    "totalPages": 10
  }
}
```

---

## Estilos y Diseño

### Tailwind CSS v4

El proyecto usa **Tailwind CSS v4** con el plugin `@tailwindcss/vite`. Los valores personalizados del tema se definen mediante la directiva `@theme` en `global.css`:

| Token       | Valor               | Uso                    |
| ----------- | ------------------- | ---------------------- |
| `primary`   | `#1a1a1a`           | Fondo oscuro, texto    |
| `secondary` | `#bc1a14`           | Acento rojo, botones   |
| `tertiary`  | `#0055ff`           | Acento azul, enlaces   |
| `neutral`   | `#4a4a4a`           | Gris, texto secundario |
| `headline`  | Space Grotesk       | Títulos, etiquetas     |
| `body`      | Geist               | Cuerpo de texto        |
| `auth`      | 5px 5px 2px #1d1d1d | Sombra dura            |

### Lenguaje de Diseño

- **Estética Neo-Brutalista** — Sombras duras, bordes gruesos (2-4px), colores audaces
- **Escala de Grises a Color** — Los pósters se muestran en escala de grises y pasan a color al pasar el mouse
- **Texto en Mayúsculas** — La mayoría del texto UI está en mayúsculas para una sensación audaz y editorial
- **Animaciones Escalonadas** — Las tarjetas de películas aparecen con un fade-in escalonado según su índice
- **Fuentes Custom** — Space Grotesk para títulos/etiquetas, Geist para cuerpo de texto (cargadas como woff2)
- **Micro-interacciones** — Hover con translate en botones (`hover:-translate-x-0.5 hover:-translate-y-0.5`), escala al hacer clic (`active:scale-95`)

---

## Referencia de Componentes

### Componentes de Layout

| Componente   | Ubicación                                        | Descripción                                  |
| ------------ | ------------------------------------------------ | -------------------------------------------- |
| `Layout`     | `shared/components/layout/Layout.tsx`            | Shell de página: Header + contenido + Footer |
| `Header`     | `shared/components/layout/Header.tsx`            | Título de la app + NavBar responsiva         |
| `Footer`     | `shared/components/layout/Footer.tsx`            | Footer de copyright                          |
| `NavBar`     | `shared/components/layout/navbar/NavBar.tsx`     | Alterna entre DesktopNav y MobileNav         |
| `DesktopNav` | `shared/components/layout/navbar/DesktopNav.tsx` | Links de navegación horizontales             |
| `MobileNav`  | `shared/components/layout/navbar/MobileNav.tsx`  | Menú hamburguesa con overlay deslizante      |
| `NavBarActions` | `shared/components/layout/navbar/NavBarActions.tsx` | Botones auth-aware (Login/Logout/Admin) |

### Primitivos UI

| Componente     | Ubicación                              | Descripción                                     |
| -------------- | -------------------------------------- | ----------------------------------------------- |
| `Button`       | `shared/components/ui/Button.tsx`      | Botón con estilos hover/active y sombra 3D      |
| `ButtonLink`   | `shared/components/ui/ButtonLink.tsx`  | Link con estilo de botón de React Router        |
| `SubmitButton` | `shared/components/ui/SubmitButton.tsx` | Botón de envío fullWidth para formularios      |
| `FormField`    | `shared/components/ui/FormField.tsx`   | Campo de formulario con label y focus styling   |
| `SearchInput`  | `shared/components/ui/SearchInput.tsx` | Input de búsqueda con debounce y normalización  |
| `GenreFilters` | `shared/components/ui/GenreFilters.tsx` | Chips de filtros de género desplazables         |
| `SortSelect`   | `shared/components/ui/SortSelect.tsx`  | Dropdown de orden + toggle ASC/DESC             |
| `Pagination`   | `shared/components/ui/Pagination.tsx`  | Botones de página con ventana deslizante        |
| `Modal`        | `shared/components/ui/Modal.tsx`       | Modal con React Portal y backdrop blur          |
| `Loader`       | `shared/components/ui/Loader.tsx`      | Spinner animado de reproductor de cine          |
| `RatingBadge`  | `shared/components/ui/RatingBadge.tsx` | Badge de calificación posicionado absolutamente |

### Componentes de Películas

| Componente      | Ubicación                                      | Descripción                                           |
| --------------- | ---------------------------------------------- | ----------------------------------------------------- |
| `FilterBar`     | `features/movies/components/FilterBar.tsx`     | Compuesto: SearchInput + SortSelect + GenreFilters    |
| `SearchInput`   | `features/movies/components/SearchInput.tsx`   | Búsqueda con debounce y sincronización con URL        |
| `SortSelect`    | `features/movies/components/SortSelect.tsx`    | Dropdown de campo de orden + toggle ASC/DESC          |
| `GenreFilters`  | `features/movies/components/GenreFilters.tsx`  | Chips de filtros de género desplazables               |
| `Pagination`    | `features/movies/components/Pagination.tsx`    | Paginación con números de página                      |
| `MovieList`     | `features/movies/components/MovieList.tsx`     | Cuadrícula responsiva de MovieCards                   |
| `MovieCard`     | `features/movies/components/MovieCard.tsx`     | Tarjeta con póster, título, género, año, calificación |
| `MovieDetail`   | `features/movies/components/MovieDetail.tsx`   | Vista completa de detalle de película                 |
| `MovieMetaItem` | `features/movies/components/MovieMetaItem.tsx` | Visualización de metadatos label-valor                |

### Componentes de Reseñas

| Componente      | Ubicación                                       | Descripción                                      |
| --------------- | ----------------------------------------------- | ------------------------------------------------ |
| `MovieFeedback` | `features/reviews/components/MovieFeedback.tsx` | Contenedor de formulario + lista de reseñas      |
| `ReviewForm`    | `features/reviews/components/ReviewForm.tsx`    | Envío de calificación con estrellas + comentario |
| `ReviewList`    | `features/reviews/components/ReviewList.tsx`    | Lista de reseñas de una película                 |
| `ReviewCard`    | `features/reviews/components/ReviewCard.tsx`    | Tarjeta individual de reseña con avatar          |
| `RatingInput`   | `features/reviews/components/RatingInput.tsx`   | Selector interactivo de estrellas (1-5)          |
| `Stars`         | `features/reviews/components/Stars.tsx`         | Visualización de estrellas de solo lectura       |

### Componentes de Películas Guardadas

| Componente        | Ubicación                                              | Descripción                                  |
| ----------------- | ------------------------------------------------------ | -------------------------------------------- |
| `SavedMoviesList` | `features/savedMovies/components/SavedMoviesList.tsx` | Cuadrícula de películas guardadas            |
| `RandomSavedMovie`| `features/savedMovies/components/RandomSavedMovie.tsx`| Contenido del modal de recomendación aleatoria|

### Componentes de Autenticación

| Componente         | Ubicación                                       | Descripción                       |
| ------------------ | ----------------------------------------------- | --------------------------------- |
| `AuthForm`         | `features/auth/components/AuthForm.tsx`         | Wrapper genérico de formulario    |
| `AuthFormField`    | `features/auth/components/AuthFormField.tsx`    | Campo de formulario con etiqueta  |
| `AuthSubmitButton` | `features/auth/components/AuthSubmitButton.tsx` | Botón de envío estilizado         |
| `LoginForm`        | `features/auth/components/LoginForm.tsx`        | Lógica del formulario de login    |
| `RegisterForm`     | `features/auth/components/RegisterForm.tsx`     | Lógica del formulario de registro |

### Componentes de Administración

| Componente              | Ubicación                                                    | Descripción                                    |
| ----------------------- | ------------------------------------------------------------ | ---------------------------------------------- |
| `MovieAdminPanel`       | `features/admin/components/MovieAdminPanel.tsx`              | Panel de gestión de películas                  |
| `MoviesManagementList`  | `features/admin/components/MoviesManagementList.tsx`         | Cuadrícula animada de películas admin          |
| `MovieManagementCard`   | `features/admin/components/MovieManagementCard.tsx`          | Tarjeta con editar/eliminar                    |
| `MovieForm`             | `features/admin/components/MovieForm.tsx`                    | Formulario crear/editar película completa      |
| `UploadFile`            | `features/admin/components/UploadFile.tsx`                   | Drag-and-drop para pósters con preview         |
| `GenreInput`            | `features/admin/components/GenreInput.tsx`                   | Selector de género con creación inline         |
| `UserAdminPanel`        | `features/admin/components/UserAdminPanel.tsx`               | Panel de gestión de usuarios                   |
| `UsersManagementList`   | `features/admin/components/UsersManagementList.tsx`          | Cuadrícula de tarjetas de usuario              |
| `UserCard`              | `features/admin/components/UserCard.tsx`                     | Tarjeta de usuario con cambio de rol           |

### Iconos

23 componentes de iconos SVG en `shared/components/icons/`, todos aceptando props `width`, `height` y `className`:
`Add`, `ArrowBack`, `ArrowDown`, `Burguer`, `CameraOff`, `CheckBox`, `Close`, `Disney`, `Hbo`, `Login`, `Logout`, `Movie`, `Netflix`, `Pen`, `Play`, `Random`, `Search`, `SortAscending`, `SortDescending`, `Star`, `Tool`, `Trash`, `Upload`

---

## Despliegue

El proyecto está configurado para despliegue en **Vercel**:

- `vercel.json` incluye una reescritura catch-all a `index.html` para soporte de enrutamiento SPA
- Las variables de entorno deben configurarse en el panel de control de Vercel

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Mejoras Futuras

- [ ] **Vistas Modal de Películas** — Usando `createPortal` para modales de detalle de películas desde la cuadrícula
- [ ] **Búsqueda Mejorada** — Búsqueda basada en palabras clave para mejores resultados
- [ ] **Búsqueda de Películas Guardadas** — Búsqueda por título dentro de la lista personal
- [ ] **AdminPanel responsivo** — Tabla de admin amigable en móvil
- [ ] **Historial de Reseñas** — Página para ver todas las reseñas propias

---

## Licencia

Este proyecto fue creado como parte del plan de estudios de la UTN (Universidad Tecnológica Nacional).
