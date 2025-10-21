# 🎯 PROMPT PARA AÑADIR PROYECTO AL PORTFOLIO

Copia y pega este prompt en tu editor de código con IA cuando quieras configurar un repositorio para que aparezca en tu portfolio:

---

## PROMPT PARA LA IA:

````
Necesito configurar este repositorio para que aparezca automáticamente en mi portfolio web.

Por favor, crea los siguientes archivos en la raíz del proyecto:

1. **Carpeta `.portfolio/` con:**

   a) Archivo `.portfolio/meta.json` con esta estructura:
   ```json
   {
     "publish": true,
     "title": "[GENERA UN TÍTULO DESCRIPTIVO BASADO EN EL PROYECTO]",
     "short": "[GENERA UNA DESCRIPCIÓN CORTA Y PROFESIONAL DE 1-2 LÍNEAS BASÁNDOTE EN EL README Y EL CÓDIGO]",
     "cover": "cover.jpg",
     "order": 10,
     "tags": ["[ELIGE LOS TAGS APROPIADOS DE LA LISTA ABAJO]"],
     "readmePath": "README.md"
   }
````

b) Un archivo `.portfolio/cover.jpg` - Si encuentras alguna imagen representativa en el proyecto, úsala - Si no, indícame qué tipo de imagen debería crear/buscar para este proyecto

**TAGS DISPONIBLES** (usa solo estos, en MAYÚSCULAS):

- "JAVA" - Para proyectos Java
- "SPRING" - Para Spring Boot
- "ANGULAR" - Para Angular
- "REACT" - Para React Native
- "KOTLIN" - Para Kotlin
- "FIREBASE" - Para Firebase
- "MAPS" - Para Google Maps
- "ANDROID" - Para Android
- "ROOM" - Para Room Database
- "TAILWIND" - Para Tailwind CSS
- "ASTRO" - Para Astro

**INSTRUCCIONES IMPORTANTES:**

1. Analiza el proyecto completo antes de generar el meta.json
2. El campo "title" debe ser descriptivo y profesional
3. El campo "short" debe resumir las características principales del proyecto en 1-2 líneas
4. Elige los tags que realmente se usan en el proyecto (máximo 3-4 tags)
5. El campo "order" determina la posición (menor número = aparece más arriba). Usa:
   - 1-5: Para proyectos principales/destacados
   - 6-10: Para proyectos importantes
   - 11-20: Para proyectos secundarios
   - 20+: Para proyectos menores/experimentales
6. Si el proyecto NO tiene README.md, créalo también

Después de crear los archivos, dame un resumen de:

- Qué título y descripción usaste
- Qué tags elegiste y por qué
- Qué tipo de imagen necesito para el cover.jpg

```

---

## EJEMPLO DE USO:

Abre el repositorio que quieres añadir a tu portfolio y pégale el prompt a tu IA. Ella analizará el proyecto y creará los archivos necesarios.

---

## PROMPT ALTERNATIVO (MÁS CORTO):

Si prefieres un prompt más directo:

```

Configura este proyecto para mi portfolio web:

1. Crea `.portfolio/meta.json` con:
   - publish: true
   - title: [título descriptivo]
   - short: [descripción 1-2 líneas]
   - cover: "cover.jpg"
   - order: [1-20 según importancia]
   - tags: [de esta lista: JAVA, SPRING, ANGULAR, REACT, KOTLIN, FIREBASE, MAPS, ANDROID, ROOM, TAILWIND, ASTRO]
   - readmePath: "README.md"

2. Analiza el proyecto y elige título, descripción y tags apropiados.
3. Dime qué tipo de imagen necesito para cover.jpg

¿Qué tags, título y descripción recomiendas basándote en el código?

````

---

## VERIFICACIÓN POST-CREACIÓN:

Después de que la IA cree los archivos, verifica:

✅ La carpeta `.portfolio/` existe en la raíz
✅ El archivo `meta.json` está bien formateado (JSON válido)
✅ Los tags están en MAYÚSCULAS y existen en la lista
✅ El campo "publish" está en `true`
✅ Tienes una imagen `cover.jpg` (o el nombre que pusiste en "cover")
✅ La imagen es formato JPG/PNG/WebP y pesa menos de 500KB

---

## PARA AÑADIR LA IMAGEN DE PORTADA:

Si no tienes una imagen, puedes:

1. **Captura de pantalla del proyecto funcionando** (recomendado)
2. **Mockup del diseño**
3. **Logo o hero image del proyecto**
4. **Composición con iconos de las tecnologías usadas**

Tamaño recomendado: **1200x630px** (ratio 16:9)
Peso máximo: **500KB**
Formato: JPG, PNG o WebP

---

## DESPUÉS DE CONFIGURAR:

1. Haz commit de los cambios:
   ```bash
   git add .portfolio/
   git commit -m "feat: Add portfolio configuration"
   git push
````

2. El proyecto aparecerá automáticamente en tu portfolio web en la próxima actualización (cuando hagas push al repositorio del portfolio o cuando se ejecute el cron de GitHub Actions).

---

## TIPS:

- **Orden de prioridad:** Usa números del 1-5 solo para tus mejores proyectos
- **Descripción corta:** Enfócate en el valor y las tecnologías clave, no en todos los detalles
- **Tags:** Máximo 3-4 tags, los más relevantes
- **Publish false:** Si aún no quieres que aparezca, pon `"publish": false` temporalmente
