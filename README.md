# Decision Plan — LAB v0.1.0

Laboratorio independiente basado en el motor de Decision Plan v5.13.3.

## Instalación
1. Crear repositorio público nuevo `decision-plan-lab` en GitHub (no subir estos archivos al repositorio `decision-plan`).
2. Subir a la raíz los archivos de este ZIP.
3. Settings → Pages → Deploy from a branch → `main` / `(root)`.
4. Abrir `https://f4zhm68w64-tech.github.io/decision-plan-lab/`.

## Identificación y aislamiento
- Cabecera violeta `🧪 LAB`, aviso persistente.
- IndexedDB `DecisionPlanLabDB` / clave `decision_planner_lab_v1`.
- localStorage `dplab_*`, cache `decision-plan-lab-*`, Service Worker en `/decision-plan-lab/`.
- El borrado general está deshabilitado.
- No importar backups de producción al LAB. Usar solo datos ficticios.
- Aunque GitHub Pages comparte origen para los repositorios de una cuenta, el laboratorio separa explícitamente todos los identificadores de almacenamiento.

## Pruebas y reporte
Pulsar `Ejecutar pruebas` y después `Exportar resultados JSON`. Enviar el JSON descargado para analizar resultados.
Las 12 pruebas iniciales usan fixtures en memoria, no escriben en IndexedDB ni alteran datos reales. **No constituyen pruebas E2E**; en próximas iteraciones agregar casos de navegación y persistencia específicos.

## Seguridad de despliegue
Nunca reemplazar archivos del repositorio de producción con este ZIP. El ZIP LAB no modifica producción automáticamente.
