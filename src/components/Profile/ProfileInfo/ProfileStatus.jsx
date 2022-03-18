import React from 'react'


class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
      this.props.putProfileStatus(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value 
    });
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
    
  }

  render() {

    return (
      <>
      {this.props.status ? !this.state.editMode ?
        <div>
        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
      </div>
        :
      <div>
        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
      </div>
        :
      <div>
        <input/>
      </div>
      } 
      </>
    )
  }
}

// const NewStatusForm = () => {
//   return (
//     <form>
//       <Field component='input' name='newStatus' onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
//     </form>
//   )
// }



export default ProfileStatus