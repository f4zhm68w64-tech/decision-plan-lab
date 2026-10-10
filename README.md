# Decision Plan LAB v0.2.0
Motor basado en producción v5.13.3. **No subir a producción**.

## Publicación
Actualizar únicamente el repositorio `decision-plan-lab` con los cinco archivos del ZIP. Mantener `decision-plan` intacto.

## Aislamiento
Base de datos LAB `DecisionPlanLabDB`, clave `decision_planner_lab_v1`; sesiones `dplab_*`; caché `decision-plan-lab-*`; SW de la ruta `/decision-plan-lab/`.
Los tests usan fixtures ficticios en memoria, restauran las claves LAB modificadas y utilizan una base temporal independiente para comprobar IndexedDB. No se accede a `DecisionPlanDB` ni a los datos de producción.

## Pruebas
19 verificaciones, incluidas pruebas de ejecución Plan→Idea→Plan, retorno a ítems, resoluciones omitidas entre planes, ruleta, clonado y persistencia de base temporal.
**La prueba 19 se marca como SKIP / pendiente:** scroll del editor requiere automatización E2E real. No significa que se haya observado un fallo en el editor.
Los resultados incluyen `expected`, `actual` y `error` (stack cuando aplica), además de resumen y versión. Exportar JSON desde LAB y compartirlo para diagnóstico.

Las pruebas son de integración en la aplicación, pero no sustituyen navegación E2E en Safari. No importar backups reales al laboratorio.
