# Testing Puppeteer

Este proyecto utiliza Puppeteer para la automatización del navegador y Jest para las pruebas. Sigue las instrucciones a continuación para configurar el entorno y ejecutar el proyecto.

## Requisitos

- Node.js (https://nodejs.org/) instalado en tu sistema.

## Configuración del Proyecto

1. Clona el repositorio:

   ```
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

## Ejecutar Pruebas

Para ejecutar las pruebas, usa el siguiente comando:

```
npm test
```

## Scripts de NPM

- `npm test`: Ejecuta todas las pruebas usando Jest.
- `npm run start`: Inicia la aplicación (si aplicable).

## Estructura del Proyecto

```
📁 Testing-puppeteer
├── 📄 .gitignore
├── 📄 jest.config.js
├── 📄 jsconfig.json
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
├── 📄 babel.config.js
├── 📁 src
│   ├── 📁 data
│   │   └── 📄 data.json
│   ├── 📁 models
│   │   └── 📁 common
│   │       └── 📄 LoginModel.ts
│   ├── 📁 page
│   │   └── 📁 common
│   │       └── 📁 login
│   │           └── 📄 LoginPage.js
│   │   └── 📁 SiteAdministration
│   │       └── 📁 Appearance
│   │       └── 📁 Courses
│   │           └── 📁 RestoreCourse
│   │               └── 📄 restore_course_page.js
│   │       └── 📁 Extensions
│   │       └── 📁 General
│   │       └── 📁 Modules
│   │       └── 📁 Ratings
│   │       └── 📁 Server
│   │       └── 📄 site_admin_page.js
│   │       └── 📁 Users
│   └── 📁 utils
│       └── 📄 AuthService.ts
├── 📁 tests
│   └── 📁 login
│       └── 📄 login.test.js
│   └── 📁 SiteAdministration
│       └── 📁 Appearance
│       └── 📁 Courses
│           └── 📄 restoreCourse.test.js
│       └── 📁 Extensions
│       └── 📁 General
│       └── 📁 Modules
│       └── 📁 Ratings
│       └── 📁 Server
│       └── 📁 Users
```

## Dependencias

Las dependencias del proyecto se gestionan a través de `package.json` y `package-lock.json`. No edites manualmente estos archivos; en su lugar, usa `npm install` para gestionar las dependencias.

## Crear un Entorno Virtual

Si deseas aislar las dependencias de tu proyecto, puedes usar herramientas como `nvm` (Node Version Manager) para manejar diferentes versiones de Node.js en tu sistema.

## Contribuir

Si deseas contribuir al proyecto, por favor sigue las siguientes pautas:

1. Crea un fork del repositorio.
2. Crea una rama con una descripción significativa de tu función (`git checkout -b nombre-rama`).
3. Realiza tus cambios.
4. Realiza un commit de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`).
5. Empuja la rama (`git push origin nombre-rama`).
6. Crea un Pull Request.

¡Gracias por contribuir!

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
