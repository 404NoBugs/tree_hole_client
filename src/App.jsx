import logo from './logo.svg';
import './App.css';
import React from "react";
import MyHeader from './components/Header'
import MyContent from "./components/Content"
import {Container, Content, Header} from "rsuite";
class App extends React.Component{
    //初始化状态
    state = {
        posts:[],//users初始值为数组
        err:''
    }
    //更新state
    updateAppState = (stateObj)=>{
        this.setState(stateObj)
    }
    //渲染App
    render() {
      return (
          <Container>
              <Header><MyHeader updateAppState={this.updateAppState}/></Header>
              <Content><MyContent posts={this.state.posts}/></Content>
          </Container>

      )
  }
}
export default App;
