import React from 'react';
import {
	Router as BrowserRouter,
	Switch,
	Route
	} from 'react-router-dom'
const SERVER= 'http://localhost:8000'
class  App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			token: null,
			username:''
		}
		//this.onSubmit=this.onSubmit.bind(this)
	}

	onUserChange= ( event) =>{
		this.setState({username: event.target.value})
	}
	onLogin =  (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		const object = {};
		data.forEach(function(value, key){
   		 object[key] = value;
		});
		const json = JSON.stringify(object);
		console.log(json);
		fetch(SERVER+ '/login', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: json,
		})
		.then(res =>{
			if(!res.ok){throw Error(res.statusText) }
			return res.json()
		})
		.then(res => {
			this.setState({token: res.token}) 
			console.log(this.state.token);
		})
		.catch(err => console.log(err));
	}



	onGetSecret =  (event) => {
		event.preventDefault();
		fetch(SERVER+ '/', {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' +this.state.token , 
			},
			//mode: 'cors'
		})
		.then(res => res.json())
		.then(res => {
			console.log(res);
		});	
	}


	render(){
 
		return (
  	  <div className="App">
				<Login 
					onSubmit={this.onLogin} 
					onUserChange={this.onUserChange}
			/>
				<GetIndex onSubmit={this.onGetSecret}/>
  		</div>
		);
	}
}

class Login extends React.Component{
	render(){
		return(
			<form onSubmit= {this.props.onSubmit}>
			Username	
			<input
					type='text'
					name='username'
					value={this.props.username}
				/>
			Passowrd
			<input
					type='password'
					name='password'
					value={this.props.password}
				/>
				<input
					type='submit'
					value='Login' />
			</form>
)	}
}

class GetIndex extends React.Component{
	render(){
		return(
			<form onSubmit= {this.props.onSubmit}>
				<input
					type='submit'
					value='GetIndex' />
			</form>
)	}
}


export default App;

