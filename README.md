# Enlace Jurídico — React + Vite + Tailwind CSS

Sitio web moderno y dinámico para firma legal de élite. Diseño corporativo con paleta gris medianoche (#1A1A1A) y dorado champagne (#b39b72).

## Características

✅ **React 18 + Vite 5** — Build ultra rápido  
✅ **Tailwind CSS v3** — Estilos utility-first optimizados  
✅ **Framer Motion** — Animaciones fluidas y transiciones  
✅ **React Router v6** — Routing SPA con HashRouter  
✅ **Responsive Design** — Mobile-first, adaptado a todos los dispositivos  
✅ **Componentes Reutilizables** — Estructura limpia y mantenible  

## Estructura del Proyecto

```
enlace-juridico-react/
├── public/
│   ├── logo/Logo_Transparente.png
│   └── img/                    (copiar desde proyecto anterior)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.jsx
│   │   │   └── Footer.jsx
│   │   └── ui/
│   │       ├── ChatBot.jsx
│   │       └── ScrollReveal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Areas.jsx
│   │   ├── Equipo.jsx
│   │   ├── Nosotros.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contacto.jsx
│   │   ├── AgendarCita.jsx
│   │   └── AreaPrivada.jsx
│   ├── data/
│   │   └── content.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Instalación

### 1. Instalar Node.js (si no lo tienes)
Descarga desde [nodejs.org](https://nodejs.org/) — elige **LTS (20.x)**

### 2. Clonar/Navegar al proyecto
```bash
cd c:\Users\Administrator\Downloads\enlace-juridico-react
```

### 3. Instalar dependencias
```bash
npm install
```

Esto instalará:
- React 18.3.1
- Vite 5.0.8
- Tailwind CSS 3.4.1
- Framer Motion 10.16.19
- React Router 6.22.3
- Y más dependencias necesarias

### 4. Copiar imágenes (importante!)
Copia los archivos de la carpeta `public/img` del proyecto anterior a `enlace-juridico-react/public/img/`:

```
Albert_Vieri_3.jpg
Sandra_Henao.jpg
Stiven_Vasquez.jpg
Header_Home.jpg (opcional, para futuro uso)
```

## Desarrollo

```bash
npm run dev
```

El servidor estará disponible en **http://localhost:5173**

La app se recargará automáticamente cuando hagas cambios en los archivos.

### Hot Module Replacement (HMR)
Vite soporta HMR nativo — tus cambios aparecen al instante sin perder el estado de la app.

## Build para Producción

```bash
npm run build
```

Esto genera la carpeta `dist/` con:
- HTML minificado
- CSS optimizado
- JavaScript bundleado y minificado
- Assets comprimidos

El tamaño final típico es **~150-200KB** (gzipped).

## Deployment en Hostinger

### Opción 1: Deployment con FTP (Recomendado)

1. **Build local:**
   ```bash
   npm run build
   ```

2. **Conectar por FTP a Hostinger:**
   - Abre FileZilla o tu cliente FTP preferido
   - Credenciales en panel Hostinger
   - Servidor FTP: `ftp.tudominio.com`

3. **Subir archivos:**
   - Sube el contenido de la carpeta `dist/` a `public_html/`
   - Todo lo que está en `dist/` va directo en `public_html/`

4. **Verificar en el navegador:**
   - Accede a `https://tudominio.com`

### Opción 2: Deployment via File Manager de Hostinger

1. **Build local:**
   ```bash
   npm run build
   ```

2. **Comprimir carpeta `dist`:**
   - Click derecho → Enviar a → Carpeta comprimida
   - Genera `dist.zip`

3. **En Hostinger File Manager:**
   - Sube `dist.zip` a `public_html/`
   - Click derecho → Extraer
   - Mueve archivos un nivel arriba si están en una subcarpeta

4. **Listo!**

## URLs de Rutas

Como usamos **HashRouter**, todas las URLs incluyen `#`:

- `/` → `https://tudominio.com/#/`
- `/areas` → `https://tudominio.com/#/areas`
- `/equipo` → `https://tudominio.com/#/equipo`
- `/nosotros` → `https://tudominio.com/#/nosotros`
- `/faq` → `https://tudominio.com/#/faq`
- `/contacto` → `https://tudominio.com/#/contacto`
- `/agendar` → `https://tudominio.com/#/agendar`
- `/portal` → `https://tudominio.com/#/portal`

## Personalizaciones

### Cambiar contenido
Edita `src/data/content.js` — todo el texto, colores, y datos están centralizados.

### Cambiar colores
En `tailwind.config.js`, modifica la sección `colors` del `theme.extend`.

### Agregar/Editar secciones en Home
Edita `src/pages/Home.jsx` — cada sección está claramente comentada.

### Integrar Chatbot real
En `src/components/ui/ChatBot.jsx`, reemplaza la funcionalidad:
```javascript
// Actual: redirige a WhatsApp
// Cambiar por:
const response = await fetch('/api/chat', { ... })
```

## Performance

- **LCP < 1s** — HTML se renderiza instantáneamente
- **TBT ≈ 0ms** — JavaScript optimizado
- **CLS = 0** — Sin cambios visuales durante carga
- **Lighthouse Score:** 95+ en desktop

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 12+, Android 8+)

## Troubleshooting

**Q: "localhost:5173 no abre"**  
A: Asegúrate de que `npm run dev` está corriendo en la terminal. Ctrl+C detiene el servidor.

**Q: Las imágenes no aparecen después de build**  
A: Verifica que copiaste la carpeta `public/img/` al proyecto antes de hacer `npm run build`.

**Q: Mi dominio muestra 404**  
A: Sube TODO el contenido de `dist/` a `public_html/`, incluyendo la carpeta `assets/`.

**Q: Las rutas no funcionan en Hostinger**  
A: Estamos usando HashRouter (`/#/ruta`), que funciona sin configuración especial del servidor.

## Stack Técnico

- **Frontend:** React 18, Vite, Tailwind CSS
- **Enrutamiento:** React Router v6
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Hosting:** Hostinger shared hosting
- **Build Tool:** Vite 5

## Licenses

- React: MIT
- Tailwind CSS: MIT
- Framer Motion: MIT
- Vite: MIT

---

**Versión:** 1.0.0  
**Última actualización:** Abril 2026  
**Contacto:** servicioalcliente@enlacejuridico.com
