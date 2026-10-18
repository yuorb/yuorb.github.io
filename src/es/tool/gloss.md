---
title: Sandbox en línea de glosas morfológicas de Ithkuil
icon: fas fa-cubes
category:
  - Herramientas
tag:
  - Ithkuil
  - Parser
---

# Sandbox en línea de glosas morfológicas de Ithkuil

Usa la herramienta interactiva de abajo para analizar y descomponer en tiempo real la estructura morfológica de cualquier palabra del Nuevo Ithkuil (admite el análisis de palabras sueltas y la visualización del AST):

<IthkuilSandbox />

::: info Nota
Esta herramienta funciona completamente en el navegador, gracias a la máquina de estados léxicos `@zsnout/ithkuil`.
:::

---

### 💡 Componente de glosas morfológicas en línea

Además del sandbox de arriba, los artículos de todo el sitio admiten de forma nativa el componente en línea `<IthkuilWord>`. Mientras lees:
* **Pasa el cursor** sobre cualquier palabra (por ejemplo, <IthkuilWord word="wetace" /> o <IthkuilWord word="itrutļalžá" />) para ver su desglose morfológico en vivo.
* **Haz clic** en la palabra para **copiar al instante** su Glosa Corta al portapapeles, útil para tomar notas rápidas y para debates en la comunidad.