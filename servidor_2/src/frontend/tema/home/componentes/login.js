import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';

class Login extends React.Component{
  constructor(props){
    super(props)
    this.state = {isLoginOpen: true, isRegisterOpen: false}
  }

  showLoginBox(){
    this.state({isLoginOpen:true ,isRegisterOpen:false})
  }

  showRegisterBox(){
    this.state({isRegisterOpen:true,isLoginOpen:false})
  }

render(){
  return(
    <div className="root-container">
      <div className="box-controller">
        <div className={"controller " + (this.state.isLoginOpen ? "selected-controller": "")}
        onClick={this.showLoginBox.bind(this)} >
          Login
        </div>
        <div className={"controller" + (this.state.isRegisterOpen ? "selected-controller": "")}
        onClick={this.showRegisterBox.bind(this)}>
            Registrarse
        </div>

      </div>
      <div className="box-container"></div>
      {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
    </div>
  )
}
}

class LoginBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  submitLogin(e){

  }

  render(){
    return(
    <div className="inner-container">
      <div className="box-header">
        Login
      </div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Nombre de ususario</label>
          <input type="text" name="username"  placeholder="nombre de usuario o email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password"  placeholder="Contraseña" />
        </div>
        <button type="button" className="login-button" onClick={this.submitLogin.bind(this)}>Login</button>
      </div>
    </div>
    )
  }
}

class RegisterBox extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }
  submitReg(e){
    
  }

  render(){
    return(
    <div className="inner-container">
      <div className="box-header">
        Registrarse
      </div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Nombre de ususario</label>
          <input type="text" name="username"  placeholder="nombre de usuario o email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password"  placeholder="Contraseña" />
        </div>
        <button type="button" className="login-button" onClick={this.submitReg.bind(this)}>Registrarse</button>
      </div>
    </div>
    )
  }
}