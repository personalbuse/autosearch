# AutoSearch

AutoSearch es una extensión sencilla para el navegador que permite buscar rápidamente cualquier texto seleccionado en una nueva pestaña.

## ¿Qué hace?

La extensión detecta cuando seleccionas texto en una página web y, al presionar una combinación de teclas, abre automáticamente una nueva pestaña con una búsqueda en Google usando ese texto.

Esto evita tener que copiar, abrir una pestaña nueva y pegar manualmente.

## ¿Cómo funciona?

1. Seleccionas cualquier texto en una página web.
2. Presionas el atajo de teclado configurado (por defecto: `Ctrl + Shift + F`).
3. Se abre una nueva pestaña con los resultados de búsqueda.

## Archivos del proyecto

* `manifest.json`: configuración principal de la extensión.
* `background.js`: contiene la lógica que detecta el atajo de teclado y realiza la búsqueda.

## Cómo instalar

1. Descarga o clona este repositorio.
2. Abre el navegador y entra a:

   ```
   chrome://extensions/
   ```

   o en Brave:

   ```
   brave://extensions/
   ```
3. Activa el **modo desarrollador**.
4. Haz clic en **Cargar descomprimida**.
5. Selecciona la carpeta del proyecto.

## Configurar el atajo

Puedes cambiar la combinación de teclas en:

```
chrome://extensions/shortcuts
```

o en Brave:

```
brave://extensions/shortcuts
```

## Notas importantes

* Solo funciona en páginas web normales (no en páginas internas del navegador).
* Debes tener texto seleccionado para que funcione.
* Si haces cambios en el código, debes recargar la extensión.

## Uso recomendado

Es útil para:

* Buscar definiciones rápidamente
* Investigar términos técnicos
* Ahorrar tiempo al navegar

---

Proyecto simple, pensado para mejorar la productividad al navegar.
