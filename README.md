# Actividad 3: Modelado de Documentos y Relaciones en MongoDB con Mongoose

## Descripción

Proyecto desarrollado con **Node.js**, **TypeScript**, **Express** y **Mongoose** que implementa:

- Diseño de múltiples colecciones: **Anunciante**, **Categoria** y **Publicidad**
- Relaciones mediante **Referencias (ObjectId)** — `anuncianteId` y `categoriaId` en Publicidad
- Relaciones mediante **Documentos embebidos** — `estadisticas` dentro de Publicidad
- Comparación entre ambos enfoques
- Consultas con **populate** para resolver referencias

---

## Cuándo usar cada enfoque

| Enfoque | Cuándo usarlo | Ejemplo en este proyecto |
|---|---|---|
| **Referencia (ObjectId)** | La entidad tiene vida propia, se comparte entre varios documentos, se actualiza independientemente | `anuncianteId` → colección `Anunciante`; `categoriaId` → colección `Categoria` |
| **Documento embebido** | Los datos pertenecen solo a ese documento, siempre se leen juntos, no tienen sentido solos | `estadisticas` (vistas, clics) dentro de cada `Publicidad` |

---

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [MongoDB](https://www.mongodb.com/) corriendo localmente en el puerto `27017`
- npm

---

## Despliegue local (desde cero)

### 1. Clonar el repositorio

```bash
git clone <URL-del-repositorio>
cd ODM_Actividad_3_and_4
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/bd-ecommerce
PORT=3088
```

> Si no creas el `.env`, el proyecto usará esos mismos valores por defecto.

### 4. Iniciar en modo desarrollo

```bash
npm start
```

El servidor quedará disponible en: `http://localhost:3088`

### 5. Compilar y ejecutar en producción

```bash
npm run build
npm run start:prod
```

---

## Endpoints disponibles

Base URL: `http://localhost:3088`

---

### Anunciantes — `/api/anunciantes`

> Colección independiente referenciada desde Publicidad

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/anunciantes` | Crear un anunciante |
| GET | `/api/anunciantes` | Listar todos los anunciantes |
| PUT | `/api/anunciantes/:id` | Actualizar un anunciante |
| DELETE | `/api/anunciantes/:id` | Eliminar un anunciante |


---

### Categorías — `/api/categorias`

> Colección independiente referenciada desde Publicidad

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/categorias` | Crear una categoría |
| GET | `/api/categorias` | Listar todas las categorías |
| PUT | `/api/categorias/:id` | Actualizar una categoría |
| DELETE | `/api/categorias/:id` | Eliminar una categoría |


---

### Publicidades — `/api/publicidades`

> Colección principal con **referencias** a Anunciante/Categoria y **subdocumento embebido** estadisticas

#### CRUD básico

| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/publicidades` | Crear una publicidad |
| GET | `/api/publicidades` | Listar todas (sin populate) |
| PUT | `/api/publicidades/:id` | Actualizar una publicidad |
| DELETE | `/api/publicidades/:id` | Eliminar una publicidad |



---

#### Consultas con populate (resuelven las referencias ObjectId)

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/publicidades/populate` | Lista todas con datos completos de anunciante y categoría |
| GET | `/api/publicidades/:id/populate` | Una publicidad con referencias expandidas |
| GET | `/api/publicidades/anunciante/:id` | Publicidades de un anunciante (con populate) |
| GET | `/api/publicidades/categoria/:id` | Publicidades de una categoría (con populate) |


---

#### Operaciones sobre el documento embebido `estadisticas`

> Actualizan directamente el subdocumento embebido con `$inc`, sin populate

| Método | Ruta | Descripción | Body |
|---|---|---|---|
| PATCH | `/api/publicidades/:id/vista` | Incrementa `estadisticas.vistas` en 1 | ninguno |
| PATCH | `/api/publicidades/:id/clic` | Incrementa `estadisticas.clics` en 1 | ninguno |

---

## Flujo de uso recomendado

```
1. POST /api/anunciantes          → guarda el _id devuelto  (ej: "AAA...")
2. POST /api/categorias           → guarda el _id devuelto  (ej: "BBB...")
3. POST /api/publicidades         → usa anuncianteId: "AAA...", categoriaId: "BBB..."
                                    → guarda el _id devuelto (ej: "CCC...")
4. GET  /api/publicidades/populate           → anunciante y categoria como objetos completos
5. PATCH /api/publicidades/CCC.../vista      → estadisticas.vistas: 1  (embebido)
6. PATCH /api/publicidades/CCC.../clic       → estadisticas.clics: 1   (embebido)
7. GET  /api/publicidades/anunciante/AAA...  → todas las publicidades del anunciante
```
