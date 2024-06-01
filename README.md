# React tamplate

-- all comment :

-create vite : npm create vite@latest name-of-your-project -- --template react
-install route : npm install react-router-dom localforage match-sorter sort-by
-install tailwincss: npm install -D tailwindcss postcss autoprefixer

                     npx tailwindcss init -p

                      content: [
                    "./index.html",
                    "./src/**/*.{js,ts,jsx,tsx}",
                ],

                @tailwind base;
                @tailwind components;
                @tailwind utilities;
            
-Daisyui: npm i -D daisyui@latest

    module.exports = {
  //...
  plugins: [require("daisyui")],
}

-Proptype: npm install --save prop-types

        import PropTypes from 'prop-types'; // ES6
        var PropTypes = require('prop-types'); // ES5 with npm

-react tostify: npm install --save react-toastify
       yarn add react-toastify

-FIREBASE INSTALL : npm install firebase


