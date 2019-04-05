import React, { Component } from 'react';
import Toast from './Toast'
import logo from '../assets/logo.png';
import empty_icon from '../assets/empty-icon.png';

import api from '../api'
import User from "./User";
import Statistics from "./Statistics";

class App extends Component {

  state = {
    users: [],

    timeLapsed: 0,

    toastVisible: false,
    toastMessage: ''
  };

  showToast = (message) => {
    this.setState({toastVisible: true, toastMessage: message}
      , () => {
        window.setTimeout(() =>
            this.setState({toastVisible: false})
          , 2000)
      })
  };

  updateUsers = () => {
    const startTime = new Date();
    api.users.getUsers()
      .then( response => {
          const endTime = new Date();
          const timeLapsed = Math.round((endTime - startTime));
          this.setState({
            users: response.data,
            timeLapsed: timeLapsed
          });
          this.showToast("Se actualizaron los usuarios con exito")

        }
      )
      .catch( err => {
        this.showToast("Hubó un error al actualizar los usuarios")
      })
  };



  render() {
    const {users, timeLapsed, toastVisible, toastMessage} = this.state;

    function renderPosts(){
      if(users.length > 0) {
        return (
          users.map(user => <User key={user.id} user={user} />)
        )
      }
      else {
        return (
          <img src={empty_icon} className="small-icon" alt="empty icon" />
        )
      }
    }

    const renderStatistics = () => {
      if(users.length > 0) {
        return (
          <Statistics timeLapsed={timeLapsed} usersLength={users.length} />
        )
      }
      else {
        return (
          <button onClick={this.updateUsers} className="mb3">
            Actualizar
          </button>
        )
      }
    };

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="mb1">
            Prueba Técnica :: Usuarios
          </h1>
        </header>

        <div className="App-container">
          {renderStatistics()}
          {renderPosts()}
        </div>

        <img src={logo} className="logo" alt="logo" />

        <Toast message={toastMessage} visible={toastVisible} />

      </div>
    );
  }
}

export default App;
