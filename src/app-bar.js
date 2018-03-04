import React, {Component} from "react";
import styled from "styled-components";
import {colors, spacing} from "./global-styles";

const color = colors.material;

const AppBarElm = styled.header`
    padding: ${spacing};
    color: ${color.primary};
    background-color: ${color.background};
    border-bottom: 1px solid ${color.primary};
`;

class AppBar extends Component {
    render() {
        return (
            <AppBarElm>
                <h1>Git Flows</h1>
            </AppBarElm>
        )
    }
}

export default AppBar;