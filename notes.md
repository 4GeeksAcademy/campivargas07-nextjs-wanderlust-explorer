# Wanderlust Explorer - Sprint Notes

## Progreso
- [x] Análisis inicial de requerimientos
- [x] Elaboración del plan de implementación (`implementation_plan.md`)
- [x] Esperando aprobación del plan para comenzar el desarrollo
- [x] Inicialización del proyecto y Dataset
- [x] Configuración de la UI base y Tailwind
- [x] Componentes: Navbar, SearchBar, FilterBar, ExperienceCard
- [x] Implementación del estado de Favoritos (React Context)
- [x] Páginas: Home, Explorador, Detalle, Favoritos, Perfil
- [x] Conexión de filtros a la URL y validación de prerrellenado

## Resumen de la Implementación

A continuación, te detallo cómo construimos Wanderlust Explorer para que tengas una idea clara de la arquitectura y las decisiones técnicas:

### 1. Dataset Simulado
Se creó un script generador temporal en NodeJS para construir el archivo estático `src/data/experiences.ts`. Este exporta un array constante de 100 objetos `Experience` (con títulos, destinos, categorías y placeholder de imágenes generados pseudo-aleatoriamente). Esto actúa como base de datos local y elimina la necesidad de montar un servidor o API real.

### 2. Gestión del Estado (Favoritos)
En vez de usar librerías externas (como Redux o Zustand), aprovechamos el ecosistema nativo de React creando `FavoritesContext.tsx`. 
- Un estado local `useState` almacena un array de *IDs* de experiencias.
- El contexto expone métodos como `toggleFavorite` y `isFavorite` mediante el hook `useFavorites`.
- El provider se insertó a nivel raíz (`src/app/layout.tsx`), asegurando que la lista de favoritos persista fluidamente mientras el usuario navega a través de las distintas páginas del App Router (sin necesidad de localStorage).

### 3. Filtros basados en URL (URL-Driven State)
Para permitir que las búsquedas se pudieran compartir mediante enlaces (ej. `?search=vela&category=Adventure`):
- Los componentes `SearchBar` y `FilterBar` interactúan de manera directa con los `searchParams` y `pathname` modificando la URL con el enrutador de Next.js (`router.push`).
- En lugar de sincronizar un estado local (lo que causa errores de rendereo en cascada o "syncing bugs"), ambos componentes toman su estado inicial/activo y su hidratación directamente desde la URL.
- El hook `useExperiences.ts` reacciona dinámicamente a los cambios en la URL extrayendo los parámetros y aplicando filtros sobre los 100 elementos de la base de datos local de manera optimizada (mediante `useMemo`).

### 4. Componentes y UI 
- Usamos Next.js App Router y TailwindCSS. Eliminamos fuentes predeterminadas y configuramos tipografía premium (*Inter*) para seguir las referencias de diseño (estilo Airbnb).
- **Navbar**: Barra pegajosa (sticky) con menú responsive. Contiene un contador de favoritos en tiempo real.
- **ExperienceCard**: El componente de tarjeta cuenta con un sistema de ratio visual premium, muestra destellos, puntuación y cuenta con el botón en forma de corazón que consulta su estado desde el Contexto.

### 5. Estructura de Rutas
- `/`: Inicio minimalista que invita a explorar.
- `/experiences`: Renderiza la cuadrícula de tarjetas, utilizando el custom hook para mostrar resultados filtrados. Contiene estados vacíos ("Empty State") si una combinación de filtros no produce resultados.
- `/experiences/[id]`: Al leer el parámetro dinámico `id`, busca la experiencia en el Dataset y presenta un detalle a gran escala.
- `/favorites`: Recicla `ExperienceCard` pero filtra el array completo de experiencias usando los IDs de nuestro Contexto.
- `/profile`: Un componente que representa una simulación de perfil consumiendo también el contador de favoritos en tiempo real.
