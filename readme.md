"""
# Vuetify 2.7 Vue Webpack 5 Template

A minimal starter template for building applications with `Vuetify 2.7`, `Vue.js 2`, and `Webpack`. This template uses a custom `webpack.config.js` for advanced configuration.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- `Vuetify 2.7`: Fully integrated with Vuetify for Material Design components.
- `Vue Router`: Basic routing setup with Home and About pages.
- `Vuex`: State management included (optional).
- `Webpack`: Customizable build process with `webpack.config.js`.
- `SCSS Support`: Ready to use SCSS for global styles.
- Minimal Setup: Lightweight and easy to extend.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- `Node.js`: Version 12 or higher (recommended: v16.x). You can download it from [here](https://nodejs.org/).
- `npm` or `yarn`: Comes bundled with Node.js.

---

## Getting Started

Follow these steps to set up and run the project locally:

1. `Clone the Repository`:
   ```
   git clone https://github.com/wissemb11/vuetify-2.7-vue-webpack-template.git
   cd vuetify-2.7-vue-webpack-template
   ```

2. `Install Dependencies`:
   ```
   npm install
   ```

3. `Run the Development Server`:
   ```
   npm run serve
   ```
   Open your browser and navigate to [http://localhost:8080](http://localhost:8080).

4. `Build for Production`:
   To build the project for production, run:
   ```
   npm run build
   ```

---

## Project Structure

Here`s an overview of the project structure:

```
vuetify-2.7-vue-webpack-template/
├── package.json               # Project metadata and dependencies
├── readme.md                  # This file
├── src/                       # Source code
│   ├── App.vue                # Root component
│   ├── main.js                # Entry point
│   ├── plugins/               # Plugin configurations (e.g., Vuetify)
│   │   └── vuetify.js         # Vuetify plugin configuration
│   ├── router/                # Vue Router configuration
│   │   └── index.js           # Router setup
│   ├── store/                 # Vuex store configuration
│   │   └── index.js           # Store setup
│   |── public/
│   │   └── index.html         # HTML template for the app
│   └── views/                 # Page-level components (Home, About)
│       ├── About.vue          # About page
│       └── Home.vue           # Home page
├── webpack.config.js          # Webpack configuration
```

---

## Customization

### Adding New Pages
To add a new page:
1. Create a new `.vue` file in the `src/views/` directory.
2. Register the route in `src/router/index.js`.

Example:
```
// src/router/index.js
const routes = [
  { path: '/new-page', component: () => import('`@/views/NewPage.vue`'), name: 'NewPage' }
];
```

### Modifying Vuetify Theme
Edit the theme settings in `src/plugins/vuetify.js`:
```
export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
});
```

### Adjusting Webpack Configuration
The `webpack.config.js` file contains all the Webpack settings. You can modify loaders, plugins, and other options as needed.

Example:
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue`/,
        loader: 'vue-loader',
      },
      {
        test: /\.js`/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css`/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss`/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
```

---

## Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes. For major changes, please open an issue first to discuss what you`d like to change.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Vuetify](https://vuetifyjs.com/) - Material Design framework for Vue.js.
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework.
- [Webpack](https://webpack.js.org/) - Module bundler for modern web applications.
"""
