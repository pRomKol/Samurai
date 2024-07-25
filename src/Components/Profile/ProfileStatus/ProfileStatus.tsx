import React, {ChangeEvent} from 'react';
import * as timers from "timers";


type PropsType = {
    status: string
    updateStatus:(status: string)=>void
}

export class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>)=>{
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {

        return (
            <div>
                {this.state.editMode && <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}/>}
                {!this.state.editMode &&
                    <span  onDoubleClick={this.activateEditMode}> {this.state.status || 'status'}</span>}
            </div>
        );
    }
}

