import React from 'react';
import {Switch,HashRouter, Route} from "react-router-dom";
import {Layout,Menu} from "antd";

import Index from "./pages/Index/Index";
import Article from './pages/Article/Article';
 
const { Header, Footer, Content } = Layout;

class App extends React.Component {
	render(){
		return (
			<div>
				<Header>

				</Header>
				<Content>
					<HashRouter>
						<Switch>
							<Route path="/article" component={Article} />
							<Route path="/" extac component={Index} />
						</Switch>
					</HashRouter>
				</Content>
				<Footer>
					<div style={{maxWidth:"100%",margin:"0 auto",textAlign:"center",backgroundColor:"black"}}>
						aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
					</div>
				</Footer>
			</div>
		);
	} 
}

export default App;
