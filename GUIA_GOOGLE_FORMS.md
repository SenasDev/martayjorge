# 📋 Guía: Configurar Google Forms para tu Web de Boda

Esta guía te explica paso a paso cómo crear los formularios de Google y conectarlos con tu web.

## 🎯 ¿Qué vamos a hacer?

Crear **2 Google Forms** que se conectarán automáticamente a **Google Sheets**:
1. **Formulario de RSVP** - Para confirmaciones de asistencia
2. **Formulario de Alérgenos** - Para restricciones alimentarias

---

## 📝 Paso 1: Crear el Formulario de RSVP

### 1.1 Crear el formulario

1. Ve a [Google Forms](https://forms.google.com)
2. Haz clic en **"+ Blank"** (formulario en blanco)
3. Ponle título: **"Boda Marta & Jorge - Confirmación de Asistencia"**
4. Descripción: **"Por favor confirma tu asistencia a nuestra boda"**

### 1.2 Añadir los campos

Crea exactamente estos 3 campos (en este orden):

#### Campo 1: Nombre Completo
- **Tipo**: Respuesta corta
- **Pregunta**: "Nombre Completo"
- **Obligatorio**: ✅ Sí

#### Campo 2: Número de invitados
- **Tipo**: Opción múltiple (radio buttons)
- **Pregunta**: "Número de invitados"
- **Opciones**:
  - 1 Persona
  - 2 Personas
  - 3 Personas (Familia)
  - 4 Personas (Familia)
- **Obligatorio**: ✅ Sí

#### Campo 3: Asistencia
- **Tipo**: Opción múltiple (radio buttons)
- **Pregunta**: "¿Asistirás a la boda?"
- **Opciones**:
  - Sí, asistiré
  - No podré asistir
- **Obligatorio**: ✅ Sí

### 1.3 Vincular a Google Sheets

1. En el formulario, haz clic en la pestaña **"Respuestas"**
2. Haz clic en el icono de **Google Sheets** (verde)
3. Selecciona **"Crear una hoja de cálculo nueva"**
4. Ponle nombre: **"Respuestas RSVP Boda"**
5. Haz clic en **"Crear"**

✅ Ahora tienes un Google Sheet vinculado que recibirá todas las respuestas automáticamente.

---

## 🍽️ Paso 2: Crear el Formulario de Alérgenos

### 2.1 Crear el formulario

1. Ve a [Google Forms](https://forms.google.com)
2. Haz clic en **"+ Blank"**
3. Título: **"Boda Marta & Jorge - Alérgenos y Restricciones"**
4. Descripción: **"Información importante para el catering"**

### 2.2 Añadir los campos

#### Campo 1: Nombre del invitado
- **Tipo**: Respuesta corta
- **Pregunta**: "Nombre del invitado"
- **Obligatorio**: ✅ Sí

#### Campo 2: Restricciones alimentarias
- **Tipo**: Casillas de verificación (checkboxes)
- **Pregunta**: "Selecciona restricciones alimentarias"
- **Opciones**:
  - Vegetariano
  - Vegano
  - Sin Gluten
  - Sin Lactosa
  - Sin Frutos Secos
  - Sin Marisco
- **Obligatorio**: ❌ No

#### Campo 3: Notas adicionales
- **Tipo**: Párrafo
- **Pregunta**: "Notas Adicionales"
- **Descripción**: "Detalles específicos sobre alergias o intolerancias"
- **Obligatorio**: ❌ No

### 2.3 Vincular a Google Sheets

1. Pestaña **"Respuestas"** → Icono de **Google Sheets**
2. **"Crear una hoja de cálculo nueva"**
3. Nombre: **"Respuestas Alérgenos Boda"**
4. **"Crear"**

---

## 🔑 Paso 3: Obtener los IDs de los Formularios

Ahora necesitas obtener los IDs de cada campo para conectarlos con tu web.

### 3.1 Obtener la URL de envío (formResponse)

**Para el Formulario de RSVP:**

1. Abre el formulario de RSVP
2. Haz clic en **"Vista previa"** (icono del ojo) en la esquina superior derecha
3. Se abrirá una nueva pestaña con el formulario
4. Haz clic derecho en la página → **"Inspeccionar"** (o presiona F12)
5. En el inspector, busca la etiqueta `<form>`
6. Busca el atributo `action="..."`
7. Copia la URL completa que termina en `/formResponse`

**Ejemplo:**
```
https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse
```

**Repite lo mismo para el Formulario de Alérgenos.**

### 3.2 Obtener los IDs de los campos (entry.XXXXX)

Hay dos métodos. Te recomiendo el **Método 1** (más fácil):

#### Método 1: Usar "Obtener enlace rellenado previamente"

1. En el formulario (modo edición), haz clic en los **tres puntos** (⋮) arriba a la derecha
2. Selecciona **"Obtener enlace rellenado previamente"**
3. Rellena cada campo con un valor de prueba:
   - Nombre: "Test"
   - Número de invitados: "1 Persona"
   - Asistencia: "Sí, asistiré"
4. Haz clic en **"Obtener enlace"**
5. Copia el enlace generado
6. Pégalo en un editor de texto

El enlace tendrá este formato:
```
https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.1234567890=Test&entry.9876543210=1+Persona&entry.5555555555=S%C3%AD%2C+asistir%C3%A9
```

Los números después de `entry.` son los IDs que necesitas:
- `entry.1234567890` → ID del campo "Nombre"
- `entry.9876543210` → ID del campo "Número de invitados"
- `entry.5555555555` → ID del campo "Asistencia"

#### Método 2: Inspeccionar el HTML (alternativo)

1. Abre la vista previa del formulario
2. Inspecciona cada campo (clic derecho → Inspeccionar)
3. Busca el atributo `name="entry.XXXXXXXXXX"`

---

## 💻 Paso 4: Actualizar el Código

Ahora que tienes todos los IDs, actualiza el archivo `components/RsvpSection.tsx`:

### 4.1 Abrir el archivo

```bash
# Abre el archivo en tu editor
code components/RsvpSection.tsx
```

### 4.2 Buscar la sección FORM_CONFIG (líneas 10-28)

Verás esto:

```typescript
const FORM_CONFIG = {
  RSVP: {
    actionUrl: "https://docs.google.com/forms/d/e/YOUR_RSVP_FORM_ID/formResponse", 
    fields: {
      name: "entry.1234567890",
      guests: "entry.1029384756",
      attendance: "entry.5647382910"
    }
  },
  ALLERGENS: {
    actionUrl: "https://docs.google.com/forms/d/e/YOUR_ALLERGEN_FORM_ID/formResponse",
    fields: {
      name: "entry.9988776655",
      restrictions: "entry.4433221100",
      notes: "entry.1122334455"
    }
  }
};
```

### 4.3 Reemplazar con tus valores reales

**Ejemplo con valores reales:**

```typescript
const FORM_CONFIG = {
  RSVP: {
    // ⬇️ Pega aquí la URL de formResponse del formulario RSVP
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/formResponse", 
    fields: {
      name: "entry.123456789",        // ⬅️ ID del campo "Nombre Completo"
      guests: "entry.987654321",      // ⬅️ ID del campo "Número de invitados"
      attendance: "entry.555555555"   // ⬅️ ID del campo "Asistencia"
    }
  },
  ALLERGENS: {
    // ⬇️ Pega aquí la URL de formResponse del formulario Alérgenos
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY/formResponse",
    fields: {
      name: "entry.111111111",        // ⬅️ ID del campo "Nombre del invitado"
      restrictions: "entry.222222222", // ⬅️ ID del campo "Restricciones" (checkboxes)
      notes: "entry.333333333"        // ⬅️ ID del campo "Notas Adicionales"
    }
  }
};
```

### 4.4 Guardar el archivo

Guarda los cambios (Ctrl+S o Cmd+S).

---

## ✅ Paso 5: Probar que Funciona

### 5.1 Ejecutar el servidor local

```bash
npm install
npm run dev
```

### 5.2 Abrir en el navegador

Abre [http://localhost:5173](http://localhost:5173)

### 5.3 Probar el formulario

1. Navega a la sección **"¿Nos acompañas?"**
2. Rellena el formulario de RSVP
3. Haz clic en **"Confirmar Asistencia"**
4. Deberías ver el mensaje **"¡Recibido!"**

### 5.4 Verificar en Google Sheets

1. Abre tu Google Sheet de respuestas RSVP
2. Deberías ver una nueva fila con los datos que enviaste
3. Repite lo mismo con el formulario de Alérgenos

---

## 🎨 Personalización Adicional (Opcional)

### Cambiar el número de cuenta bancaria

En `RsvpSection.tsx`, línea 262, cambia:

```typescript
<span className="...">ESXX XXXX XXXX XXXX XXXX</span>
```

Por tu número de cuenta real (IBAN).

### Cambiar los colores de la web

En `index.html`, líneas 26-34, puedes personalizar los colores:

```javascript
colors: {
  brand: {
    cream: '#FDFBF7',    // Fondo principal
    beige: '#F4F1EA',    // Fondo secundario
    gold: '#D6C096',     // Color dorado principal
    goldDark: '#B39B72', // Dorado oscuro
    text: '#8A8175',     // Texto secundario
    stone: '#595045',    // Texto principal
  }
}
```

---

## 🚨 Solución de Problemas

### ❌ "No se envían los datos"

**Causa**: IDs incorrectos o URL mal copiada.

**Solución**:
1. Verifica que la URL termine en `/formResponse` (no `/viewform`)
2. Comprueba que los IDs coincidan exactamente (incluyendo `entry.`)
3. Asegúrate de no tener espacios extra

### ❌ "Error de CORS"

**Causa**: Esto es normal con Google Forms.

**Solución**: El código ya usa `mode: 'no-cors'`, que es la forma correcta. Google Forms no devuelve confirmación, pero los datos SÍ se guardan.

### ❌ "Los checkboxes no se envían"

**Causa**: Google Forms espera múltiples valores para checkboxes.

**Solución**: El código ya está configurado correctamente. Asegúrate de que el campo sea tipo "Casillas de verificación" en Google Forms.

---

## 📚 Recursos Adicionales

- [Documentación de Google Forms](https://support.google.com/docs/answer/6281888)
- [Cómo vincular Forms a Sheets](https://support.google.com/docs/answer/2917686)

---

## ✨ ¡Listo!

Ahora tu web de boda está completamente funcional y conectada a Google Sheets. Todos los invitados que confirmen su asistencia o envíen información de alérgenos aparecerán automáticamente en tus hojas de cálculo.

**¿Necesitas ayuda?** Revisa la sección de solución de problemas o contacta conmigo.
