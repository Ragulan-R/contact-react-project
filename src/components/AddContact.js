import React from 'react'

class AddContact extends React.Component {
  state = {
    name: '',
    email: '',
  }

  add = (e) => {
    e.preventDefault()
    if (this.state.name === '' || this.state.email === '') {
      alert('all fields are mandatory')
      return
    }
    this.props.addContactHandler(this.state)
    // handler we pass from the app component as prop and pass the state because it containts the name and email
    console.log(this.state)
    // after hitting submit you can see the name in both addcontact and app.js
    this.setState({ name: '', email: '' })
    // clears the name and email after submit
  }

  render() {
    return (
      <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
          {/* run add function on the submit */}
          <div className='field'>
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='name'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className='field'>
            <label>Email</label>
            <input
              type='text'
              name='email'
              placeholder='email'
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <button className='ui button blue'>Add</button>
        </form>
      </div>
    )
  }
}

export default AddContact
