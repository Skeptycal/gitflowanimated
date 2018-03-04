import React, {Component} from "react";

export default (WrappedFlow) => {

    return class extends Component {

        handleBranch = () => {
        };

        handleCommit = () => {

        };

        handleMerge = () => {

        };

        handleTag = () => {

        };

        render() {
            return (
                <WrappedFlow
                    projet={this.state}
                    onBranch={this.handleBranch}
                    onCommit={this.handleCommit}
                    onMerge={this.handleMerge}
                    onTag={this.handleTag}
                />
            )
        }
    }

};