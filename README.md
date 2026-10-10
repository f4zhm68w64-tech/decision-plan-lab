# Decision Plan LAB 1.0 — batería integral
Motor de producción v5.13.3, aislado. **NO subir a `decision-plan`**.

## Publicación
Subir los cinco archivos únicamente al repositorio `decision-plan-lab`. En la web, pulsar «Ejecutar batería completa» y «Exportar resultados JSON».

## Cobertura
36 escenarios: funciones y flujos de Ideas, ítems, tags, puntajes, rutas, ruleta, clonación, editor, referencias, persistencia y seguridad básica de aislamiento.
La prueba 36 (scroll visual real) se informa como SKIP, no como PASS ni FAIL. Las pruebas de backup 31/32 son de disponibilidad de funciones, **no** verifican aún un round-trip cifrado completo. La prueba 29 verifica la presencia de CSS, no su representación visual. El resto ejecuta lógica real con fixtures.

## Aislamiento
No usar datos reales ni importar backups de producción. Fixtures en memoria, restauración de claves LAB al finalizar y base IndexedDB temporal. El LAB no modifica la base de producción.

## Interpretación
PASS significa que el escenario específico pasó; no certifica la aplicación completa. FAIL incluye esperado, observado y stack. SKIP requiere automatización adicional. No se ha ejecutado todavía esta batería en Safari.
