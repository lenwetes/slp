# Reglas del Proyecto - SLP Soluciones Informáticas

Este archivo contiene las reglas y restricciones obligatorias para todos los agentes y desarrolladores que trabajen en este repositorio.

## 🛠️ Stack Tecnológico Autorizado (Estricto)
- **Next.js 15**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Framer Motion**
- **Lucide React**
- **React Hook Form**
- **Zod**

> [!IMPORTANT]
> **No sustituir ninguna tecnología.** No está permitido usar Bootstrap, Material UI, Ant Design, plantillas preconfiguradas ni instalar dependencias no autorizadas.

---

## 📐 Estructura de Directorios del Proyecto
La estructura de archivos de `slp-web/` debe seguir este esquema exacto:
- `app/` (contiene layouts, páginas principales, configuración de robots/sitemap)
- `components/` (subcarpetas: `ui/`, `layout/`, `navigation/`, `buttons/`, `cards/`, `forms/`, `icons/`, `animations/`)
- `sections/` (subcarpetas independientes para cada sección: `Hero/`, `About/`, `Services/`, `Process/`, `WhyChooseUs/`, `FAQ/`, `Blog/`, `CTA/`, `Contact/`, `Footer/`)
- `content/` (fuente única de verdad para textos: `company.ts`, `services.ts`, `faq.ts`, `blog.ts`, `contact.ts`)
- `public/` (imágenes, logos, iconos y fuentes en subcarpetas dedicadas)
- `hooks/`, `lib/`, `types/`, `config/`, `styles/`, `docs/`, `ai/`

### Reglas de Organización:
1. **Responsabilidad Única**: Cada componente debe tener una única responsabilidad.
2. **Independencia**: Cada sección de la página debe ser autónoma.
3. **No Duplicidad**: Reutilizar componentes antes de escribir código ad-hoc.
4. **Localización de Recursos**: Todo texto debe provenir de `content/`. Todo recurso visual debe provenir de `public/`.
5. **TypeScript Estricto**: Sin excepciones de tipo `any` injustificadas y tipado explícito.

---

## 🚫 Reglas Supremas de Gobernanza (No Improvisación)
- **Prohibido improvisar o simplificar**: Cumplir exactamente las especificaciones aprobadas en los documentos de diseño.
- **Sin Cambios No Autorizados**: No modificar el diseño, contenido o arquitectura sin previa aprobación.
- **Detenerse ante la Ambigüedad**: Si un requisito no está claro, detenerse inmediatamente y solicitar instrucciones al usuario.

---

## 🧠 Protocolo de Memoria y Continuidad de Sesión
Para optimizar el uso de tokens y mantener consistencia entre sesiones:
- **No confiar en la memoria del chat**: Registrar toda decisión arquitectónica en los archivos de estado físico.
- **Flujo de Inicio**: Leer siempre `PROJECT_STATE.md` y `CURRENT_TASK.md` antes de comenzar.
- **Prioridad de Lectura**:
  1. `PROJECT_STATE.md`
  2. `CURRENT_TASK.md`
  3. `CONTEXT_SUMMARY.md`
  4. `DECISION_LOG.md`
  5. Archivos de código/documentos específicos
- **Flujo de Cierre (Obligatorio)**:
  1. Actualizar `PROJECT_STATE.md` y `CHANGELOG.md`.
  2. Registrar cambios en `DECISION_LOG.md` (si los hubiera).
  3. Regenerar `CONTEXT_SUMMARY.md` ($\le$ 300 palabras).
  4. Completar `HANDOFF_TEMPLATE.md`.
