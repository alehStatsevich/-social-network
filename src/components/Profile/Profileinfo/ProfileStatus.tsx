import React from "react";

//закоментированный в Profileinfo

class ProfileStatus extends React.Component <any> {
state={
    editMode: false,
    status: this.props.status
}
//setState асинхронный
activateEditMode=()=>{
    this.setState({editMode: true})
}
deactivateEditMode =() =>{
    this.setState({editMode: false});
    this.props.updateStatus(this.state.status);
}
    onStatusChange= (e:any) =>{
    this.setState({
        status: e.currentTarget.value
    })
}
componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
    if (prevProps.status !== this.props.status){
        this.setState({
            status:this.props.status
        })
    }
}

    render() {
    return <div>
        {!this.state.editMode &&
        <div>
            <span onDoubleClick={this.activateEditMode}>{!this.props.status || "----"}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
        </div>
        }
    </div>
}
}
export default ProfileStatus;
