import "./scss/app.scss";
import React from "react";
import WeatherData from "./components/WeatherData";
import { ThemeProvider } from "./providers/ThemeProvides";
import Layout from "./components/Layout";

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <Layout>
          <WeatherData />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
