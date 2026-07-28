# CONTEXT_SUMMARY.md
# Resumen de Contexto — SLP Soluciones Informáticas

**Fecha:** 2026-07-28 | **Sesión:** Hero Section v0.5.0 Premium (Stripe / Linear Level)

## Qué es el proyecto
Web corporativa premium para SLP Soluciones Informáticas (Colombia). Enfoque en desarrollo de software, IA empresarial, soporte técnico, videovigilancia IP y redes.

## Cambios Realizados en la Sesión Actual (v0.5.0)
1. **Rediseño completo de la Hero Section**:
   - Layout 40% izquierda (textos estáticos, CTAs y métricas) y 60% derecha (escenario visual 3D dinámico).
   - Eliminadas las imágenes estáticas/fotografías del slider.
2. **7 Dashboards 3D Interactivos en JSX/SVG puro** (`sections/Hero/ServiceDashboards.tsx`):
   - **Desarrollo de Software**: Editor IDE con TypeScript, autocompletado y mini terminal.
   - **IA Software**: Interface de Chatbot RAG con análisis de datos en tiempo real.
   - **Soporte Técnico**: Monitor de salud del servidor (CPU, RAM, discos, parches).
   - **Videovigilancia**: Grid CCTV 4K con 4 cámaras live y escaneo.
   - **Redes**: Mapa interactivo SVG de topología de red con nodos pulsantes.
   - **Consultoría**: Dashboard analítico con curva SVG de ROI (+340%).
   - **Venta de Equipos**: Ficha técnica de hardware de alto rendimiento.
3. **Efectos Visuales Cinematográficos**:
   - Transiciones zoom/blur/scale al cambiar de servicio.
   - Aura de luz contextual que cambia de color dinámicamente según el servicio activo (Azul, Púrpura, Cyan, Dorado).
   - Parallax 3D de inclinación por movimiento del mouse (`useSpring`, `rotateX/Y`).
   - Mapeo de métricas flotantes glassmorphism personalizadas por servicio.
   - Temporizador visual de 7 segundos con autoplay y pausa en hover.
4. **Verificación de Calidad**:
   - Compilación de TypeScript (`npx tsc --noEmit`): **0 errores**.
   - Generación estática Next.js (`npm run build`): **5/5 páginas exitosas**.

## Estado actual
🟢 Hero Section v0.5.0 integrada con arquitectura 40/60 y 7 dashboards 3D. Sistema listo y verificado.
