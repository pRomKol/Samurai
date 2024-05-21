import React from 'react';
import * as timers from "timers";

type PropsType = {
    status: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        debugger

        this.state.editMode = true
    }

    render() {
        return (
            <div>
                {this.state.editMode && <input value={this.props.status}/>}
                {!this.state.editMode && <span onDoubleClick={this.activateEditMode}> {this.props.status}</span>}
            </div>
        );
    }
}

