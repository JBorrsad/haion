# 📖 EJEMPLO PRÁCTICO DE CONFIGURACIÓN

## Ejemplo con tu proyecto DogTracker (PMDM_DEIN_FINAL)

Así es como debería verse la configuración en ese repositorio:

### Estructura de archivos:

```
PMDM_DEIN_FINAL/
├── .portfolio/
│   ├── meta.json
│   └── cover.jpg          ← Captura de pantalla de la app
├── app/
├── gradle/
├── README.md
└── ...
```

### Contenido de `.portfolio/meta.json`:

```json
{
  "publish": true,
  "title": "DogTracker - Sistema de Monitorización de Mascotas",
  "short": "Aplicación Android para monitoreo GPS en tiempo real de mascotas con geofencing, notificaciones push y gestión de perfiles. Desarrollada con Kotlin y Firebase.",
  "cover": "cover.jpg",
  "order": 2,
  "tags": ["KOTLIN", "ANDROID", "FIREBASE", "MAPS"],
  "readmePath": "README.md"
}
```

### Imagen `cover.jpg`:

- Captura de pantalla de la interfaz principal de la app
- O composición con varias pantallas
- Tamaño: 1200x630px
- Formato: JPG

---

## Ejemplo con tu Portfolio (que ya está configurado)

### `.portfolio/meta.json`:

```json
{
  "publish": true,
  "title": "Mi Portfolio Web",
  "short": "Portfolio personal desarrollado con Astro 5 y TypeScript. Sitio web moderno y responsive con modo oscuro/claro, optimización de imágenes y CI/CD.",
  "cover": "cover.jpg",
  "order": 1,
  "tags": ["ASTRO", "TAILWIND"],
  "readmePath": "README.md"
}
```

---

## Ejemplo: Proyecto E-commerce con Spring Boot

Si tuvieras un proyecto de e-commerce, así debería verse:

### `.portfolio/meta.json`:

```json
{
  "publish": true,
  "title": "E-commerce Full Stack con Spring Boot",
  "short": "Plataforma de comercio electrónico con gestión de usuarios, carrito de compras, sistema de pagos y panel administrativo. Arquitectura limpia y principios SOLID.",
  "cover": "cover.jpg",
  "order": 5,
  "tags": ["JAVA", "SPRING"],
  "readmePath": "README.md"
}
```

---

## ⚠️ ERRORES COMUNES A EVITAR:

❌ **MAL:**

```json
{
  "tags": ["kotlin", "android"] // ← Tags en minúsculas
}
```

✅ **BIEN:**

```json
{
  "tags": ["KOTLIN", "ANDROID"] // ← Tags en MAYÚSCULAS
}
```

---

❌ **MAL:**

```json
{
  "tags": ["React", "Vue", "Next", "TypeScript", "Node"] // ← Demasiados tags y algunos no existen
}
```

✅ **BIEN:**

```json
{
  "tags": ["REACT", "TAILWIND"] // ← Máximo 3-4 tags de la lista permitida
}
```

---

❌ **MAL:**

```json
{
  "short": "Este es mi proyecto donde implementé un sistema completo de autenticación con JWT, base de datos PostgreSQL, ORM Hibernate, arquitectura en capas, patrones de diseño, API REST completa con documentación Swagger..."
}
```

✅ **BIEN:**

```json
{
  "short": "Sistema de autenticación JWT con arquitectura en capas, API REST y documentación Swagger. Base de datos PostgreSQL con Hibernate."
}
```

---

## 📊 GUÍA DE ORDEN (ORDER):

```
1-3   → Proyectos PRINCIPALES (tu mejor trabajo)
4-7   → Proyectos IMPORTANTES (trabajo sólido)
8-15  → Proyectos SECUNDARIOS (buenos ejemplos)
16-20 → Proyectos MENORES (prácticas, experimentales)
20+   → Proyectos ANTIGUOS (para referencia)
```

### Ejemplo de orden para tus proyectos:

1. **Portfolio Web** - Tu carta de presentación
2. **DogTracker** - Proyecto completo y funcional
3. **E-commerce Spring Boot** - Demuestra backend skills
4. **Dashboard Angular** - Demuestra frontend skills
5. **App React Native** - Proyecto mobile adicional
6. **Proyectos de prácticas** - Código de aprendizaje

---

## 🎨 CONSEJOS PARA LA IMAGEN DE PORTADA:

### Para aplicaciones web:

- Captura de pantalla de la página principal en desktop
- Mockup en dispositivo (usa mockup.io o similar)
- Hero section + captura de funcionalidad clave

### Para aplicaciones móviles:

- Mockup en dispositivo móvil
- Composición con 2-3 pantallas clave
- Usa herramientas como: MockuPhone, Shotsnapp, o Figma

### Para APIs/Backend:

- Diagrama de arquitectura
- Captura de documentación Swagger/Postman
- Dashboard o panel de administración

### Herramientas recomendadas:

- **Mockup:** shotsnapp.com, mockuphone.com
- **Screenshots:** ShareX, Lightshot, Snipping Tool
- **Edición:** Figma, Canva, Photoshop
- **Compresión:** tinypng.com, squoosh.app

---

## ✅ CHECKLIST FINAL:

Antes de hacer commit, verifica:

- [ ] Carpeta `.portfolio/` en la raíz del repositorio
- [ ] Archivo `meta.json` con JSON válido
- [ ] Campo `publish: true`
- [ ] Tags en MAYÚSCULAS de la lista permitida
- [ ] Descripción corta y profesional (1-2 líneas)
- [ ] Orden apropiado (1-20)
- [ ] Imagen `cover.jpg` (o .png) presente
- [ ] Imagen optimizada (<500KB)
- [ ] Imagen en formato correcto (JPG/PNG/WebP)
- [ ] README.md actualizado (si es necesario)

---

## 🚀 DESPUÉS DE CONFIGURAR:

```bash
# Añadir archivos
git add .portfolio/

# Commit
git commit -m "feat: Add portfolio configuration"

# Push al repositorio
git push origin main
```

**¡Y listo!** Tu proyecto aparecerá automáticamente en tu portfolio web en la próxima actualización. 🎉
