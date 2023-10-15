import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ColorList from "./ColorList";
import ColorForm from "./ColorForm";
import Color from "./Color";
import NavBar from "./NavBar";

function Routes() {
    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
      };
    
      const [colors, setColor] = useState(initialColors);
    
      function addColor(color) {
        setColor(prevColors => ({ ...prevColors, ...color }));
      }

      function renderCurrentColor(props) {
        const { color } = props.match.params;
        const hex = colors[color];
        return <Color {...props} hex={hex} color={color} />;
      };

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors}/>
                </Route>
                <Route exact path="/colors/new">
                    <ColorForm addColor={addColor}/>
                </Route>
                <Route exact path="/colors/:color" render={renderCurrentColor}/>
                <Redirect to="/colors"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;