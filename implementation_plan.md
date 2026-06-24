# Wanderlust Explorer - Implementation Plan

Este plan detalla la arquitectura y los pasos para construir el MVP de Wanderlust Explorer cumpliendo con todos los requerimientos técnicos y de diseño.

## Design References
Nos inspiraremos en plataformas de viajes modernas conocidas por su interfaz limpia y premium:
1. **Airbnb Experiences**: Tarjetas con bordes redondeados, imágenes amplias, tipografía sans-serif limpia (Inter/Roboto), y un sistema de filtrado horizontal muy sutil.
2. **GetYourGuide**: Fuerte énfasis en la barra de búsqueda y filtros combinados (Destino + Categoría) con un diseño que invita a la acción inmediata.
3. **Tripadvisor**: Sistema claro para el "Guardado" (icono de corazón superpuesto a la imagen en la esquina superior derecha) y calificaciones destacadas.

*Estas referencias se añadirán al README.md del proyecto.*

## Arquitectura de Estado
**Restricción principal:** "No uses ninguna librería externa de gestión de estado. Todo el estado debe vivir en el useState nativo de React y pasarse mediante props o custom hooks."

Dado que usamos Next.js App Router y la lista de favoritos debe sobrevivir entre navegaciones (de `/experiences` a `/favorites` o `/profile`), la solución más idiomática sin librerías externas es usar un **React Context** respaldado por `useState` en un `Client Component` a nivel raíz (ej. `FavoritesProvider`). Esto permite que los componentes hijos accedan al estado de favoritos mediante un custom hook (`useFavorites`), cumpliendo con la regla de no usar Redux/Zustand.

## Proposed Changes

---

### Setup y Dataset

#### [NEW] `src/data/experiences.ts`
Generaré un array estático de 100 objetos simulando una base de datos real con campos: `id`, `title`, `description`, `category` (Adventure, Culture, Food, Wellness, Nature), `destination` (Ciudad, País), `price`, `rating`, `imageUrl`. Expondrá también el tipo `Experience`.

#### [MODIFY] `README.md`
Añadiré la sección "## Design References" solicitada.

#### [NEW] `notes.md` (Raíz del proyecto)
Crearé un archivo de registro del sprint.

---

### Componentes Core (UI & Filters)

#### [NEW] `src/components/Navbar.tsx`
Barra de navegación responsiva, presente en todas las páginas. Usará `usePathname` para resaltar la ruta activa.

#### [NEW] `src/components/ExperienceCard.tsx`
Tarjeta visual de la experiencia. Mostrará imagen, título, destino, precio, rating y un botón de "favorito" (corazón). Recibirá la función de toggle a través del hook/contexto.

#### [NEW] `src/components/SearchBar.tsx`
Input de texto. Actualizará la URL (query parameter `search`) de forma reactiva, sincronizándose con la navegación.

#### [NEW] `src/components/FilterBar.tsx`
Contendrá dropdowns/botones para `category` y `destination`. Actualizará la URL sin recargar la página.

---

### Páginas

#### [MODIFY] `src/app/layout.tsx` y `src/app/globals.css`
Añadiremos estilos base (fuentes, Tailwind config) y envolveremos los children en un provider de estado de favoritos y la Navbar.
Crearemos `src/context/FavoritesContext.tsx` para alojar el `useState` global.

#### [MODIFY] `src/app/page.tsx` (Home)
Hero section premium (glassmorphism, tipografía moderna) con un botón principal hacia `/experiences`.

#### [NEW] `src/app/experiences/page.tsx`
La vista principal del explorador. Leerá los `searchParams` y renderizará la lista filtrada de experiencias. Mostrará un estado vacío si no hay resultados.

#### [NEW] `src/app/experiences/[id]/page.tsx`
Página de detalle. Buscará el ID en el dataset local y mostrará la información completa.

#### [NEW] `src/app/favorites/page.tsx`
Renderizará la cuadrícula de experiencias pero filtrada por los IDs almacenados en el estado local de favoritos.

#### [NEW] `src/app/profile/page.tsx`
Página estática simulando un usuario, mostrando el total de "Experiencias guardadas" leyendo desde el estado local de favoritos.

## Verification Plan

### Manual Verification
1. Navegaremos a `/experiences` y probaremos la barra de búsqueda (ej. buscar "vela").
2. Seleccionaremos categorías y destinos; validaremos que la URL se actualice correctamente (ej. `?search=vela&category=Adventure`).
3. Recargaremos la página con query params en la URL para comprobar que el estado de los filtros inicializa correctamente.
4. Haremos click en los íconos de "corazón" y navegaremos a `/favorites` para confirmar que el estado se comparte entre páginas sin perderse (durante la misma sesión, sin persistencia en localStorage).
5. Comprobaremos el diseño general en modo escritorio y simulando modo móvil en el explorador.
