import { createContext, useState } from "react";
import Card from "./Card";
import Container from "./Container";
import "../App.css";
import ReactSwitch from "react-switch";
import Text from "./Text";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  function changeBackground(e) {
    e.target.style.background = 'red';
  }

  function returnBackground(e) {
    e.target.style.background = 'blue';
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Container>
          <div className="nav">
            <Text as="h2"> Social media Dashboard</Text>

            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} ></ReactSwitch>
            <label>{theme === "light" ? "Light mode" : "Dark Mode"}</label>
          </div>
          <div className="Group" onMouseEnter={changeBackground} onMouseLeave={returnBackground} >
            <Card>
              <Text as="h1"> 1987</Text>
              <Text as="h3"> FOLLOWERS</Text>
              <Text as="h4"> 12 Today</Text>
            </Card>

            <Card>
              <Text as="h1"> 1044</Text>
              <Text as="h3"> FOLLOWERS</Text>
              <Text as="h4"> 99 Today</Text>
            </Card>
            <Card>
              <Text as="h1"> 11K</Text>
              <Text as="h3"> FOLLOWERS</Text>
              <Text as="h4"> 1099 Today</Text>
            </Card>
            <Card>
              <Text as="h1"> 8239</Text>
              <Text as="h3"> FOLLOWERS</Text>
              <Text as="h4"> 144 Today</Text>
            </Card>
          </div>
          <Text as="h2"> Overview - Today</Text>
          <div className="GroupSmall" onMouseEnter={changeBackground} onMouseLeave={returnBackground} >
            <Card>
              <Text as="h4"> Page views</Text>
              <Text as="h2"> 87</Text>
            </Card>
            <Card>
              <Text as="h4"> Likes</Text>
              <Text as="h2"> 52</Text>
            </Card>
            <Card>
              <Text as="h4"> Likes</Text>
              <Text as="h2"> 5462</Text>
            </Card>
            <Card>
              <Text as="h4"> Profile views</Text>
              <Text as="h2"> 52k</Text>
            </Card>
          </div>
          <div className="GroupSmall" onMouseEnter={changeBackground} onMouseLeave={returnBackground} >
            <Card>
              <Text as="h4"> Page views</Text>
              <Text as="h2"> 87</Text>
            </Card>
            <Card>
              <Text as="h4"> Likes</Text>
              <Text as="h2"> 52</Text>
            </Card>
            <Card>
              <Text as="h4"> Likes</Text>
              <Text as="h2"> 5462</Text>
            </Card>
            <Card>
              <Text as="h4"> Profile views</Text>
              <Text as="h2"> 52k</Text>
            </Card>
          </div>
        </Container>


      </div>
    </ThemeContext.Provider>
  );
}

export default App;
