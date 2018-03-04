import React, {Component} from "react";
import styled from "styled-components";
import {spacing} from "./global-styles";

const AppContentElm = styled.main`
    padding: ${spacing};
`;

class AppContent extends Component {
    render() {
        return (
            <AppContentElm>
                Content
            </AppContentElm>
        )
    }
}

export default AppContent;