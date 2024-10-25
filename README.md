# PokeAPI Vue 3 App

A Vue 3 application that interacts with the PokeAPI to display Pokémon data. This app provides users with a responsive, user-friendly interface for browsing Pokémon details, searching by name, and viewing individual stats and types.



#### Demo

A live demo is available at [arodriguez-pokeapi.vercel.app](https://arodriguez-pokeapi.vercel.app/)


##### Features
- **Pokémon Search**: Search for any Pokémon by name.
- **Detailed Information**: View individual Pokémon details such as types, stats, and images.
- **Responsive Design**: Mobile-first approach for smooth viewing on all devices.
- **Lazy Loading**: Loads data incrementally for efficient performance.
- **Error Handling**: Displays user-friendly messages for API errors.

##### Technologies Used
- **Vue 3**: JavaScript framework for building UI.
- **Vite**: Development environment for fast builds and optimized bundles.
- **Fetch API**: For handling API requests.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

> **Note**: You’ll need Node.js 16+ to run this project.

<br/>

#### Installation

##### 1. Clone the repository:
```bash
git clone https://github.com/your-username/pokeapi-vue-app.git
cd pokeapi-vue-app
```

##### 2. Install dependencies:
```bash
npm install
```

##### 3. Environment Variables
To connect to the PokeAPI, create a .env file at the root of the project with the following:
```env
VITE_API_URL=https://pokeapi.co/api/v2
```

##### 4. Start the development server
```bash
npm run dev
```
<br/>

##### Project Structure
```
├── public/
│   └── favicon.ico         # App favicon
├── src/
│   ├── assets/             # App assets (images, fonts, etc.)
│   ├── components/         # Reusable components
│   ├── views/              # Page-level components
│   ├── router/             # App routes
│   ├── store/              # State management
│   ├── App.vue             # Root component
│   └── main.js             # App entry point
└── README.md               # Project documentation
```

<br/>

#### API Endpoints

This app uses the PokeAPI v2, you can check the docs [here](https://pokeapi.co/docs/v2)

<br/>

#### Build and Deployment
```bash
npm run build
```

<br/>

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.