# 💍 Boda Marta & Jorge - Web de Invitación

Web elegante y moderna para la boda de Marta y Jorge, con confirmación de asistencia integrada con Google Forms.

## ✨ Características

- 🎨 Diseño premium con colores elegantes (champagne, dorado, beige)
- 📱 Completamente responsive (móvil, tablet, desktop)
- 📋 Formulario de confirmación de asistencia (RSVP)
- 🍽️ Formulario de restricciones alimentarias y alérgenos
- 📅 Integración con Google Calendar y Apple Calendar
- 🎵 Reproductor de música flotante
- 💬 Widget de WhatsApp para contacto directo
- 📊 Datos guardados automáticamente en Google Sheets

## 🚀 Ejecutar Localmente

**Requisitos:** Node.js (v18 o superior)

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## 📋 Configurar Google Forms

**IMPORTANTE:** Antes de usar la web en producción, debes configurar los Google Forms.

Sigue la guía completa en: **[GUIA_GOOGLE_FORMS.md](./GUIA_GOOGLE_FORMS.md)**

### Resumen rápido:

1. Crear 2 Google Forms (RSVP y Alérgenos)
2. Vincularlos a Google Sheets
3. Obtener los IDs de los campos
4. Actualizar `components/RsvpSection.tsx` con tus IDs

## 🏗️ Estructura del Proyecto

```
martayjorge/
├── components/           # Componentes React
│   ├── Navbar.tsx       # Barra de navegación
│   ├── HeroSection.tsx  # Sección principal con nombres
│   ├── SaveTheDate.tsx  # Fecha de la boda
│   ├── DetailsSection.tsx  # Detalles del evento
│   ├── GallerySection.tsx  # Galería de fotos
│   ├── RsvpSection.tsx     # Formularios RSVP
│   ├── Footer.tsx          # Pie de página
│   ├── MusicPlayer.tsx     # Reproductor de música
│   └── WhatsAppWidget.tsx  # Widget de WhatsApp
├── App.tsx              # Componente principal
├── index.html           # HTML base con estilos
├── types.ts             # Tipos TypeScript
└── GUIA_GOOGLE_FORMS.md # Guía de configuración

```

## 🎨 Personalización

### Cambiar colores

Edita `index.html` (líneas 26-34):

```javascript
colors: {
  brand: {
    cream: '#FDFBF7',    // Fondo principal
    gold: '#D6C096',     // Color dorado
    stone: '#595045',    // Texto principal
  }
}
```

### Cambiar datos de la boda

Edita `components/DetailsSection.tsx` para cambiar:
- Fecha y hora
- Ubicación
- Dirección
- Timeline del evento

### Cambiar número de cuenta

Edita `components/RsvpSection.tsx` (línea 262):

```typescript
<span>ESXX XXXX XXXX XXXX XXXX</span>
```

## 📦 Compilar para Producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`.

## 🌐 Desplegar

Puedes desplegar en:
- **Vercel**: `vercel deploy`
- **Netlify**: Arrastra la carpeta `dist/`
- **GitHub Pages**: Configura GitHub Actions

## 🛠️ Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Google Forms API
- Google Sheets

## 📝 Licencia

Proyecto personal para la boda de Marta y Jorge.

---

**¿Necesitas ayuda?** Revisa [GUIA_GOOGLE_FORMS.md](./GUIA_GOOGLE_FORMS.md) o contacta con el desarrollador.
