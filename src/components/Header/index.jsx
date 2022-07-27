import './index.css'
import React, {useState} from "react";
import {Affix, Message, Nav, Navbar, useToaster} from "rsuite";
import {FaRedoAlt, FaUserCircle} from "react-icons/fa"
import axios from "axios";
const RefreshSuccess=(
    <Message showIcon type="success">
        刷新成功
    </Message>
)
 class header extends React.Component{
     getPosts = ()=>{
         //获取用户的输入(连续解构赋值+重命名)
         // const {keyWordElement:{value:keyWord}} = this
         //发送请求前通知App更新状态
         // this.props.updateAppState({isFirst:false,isLoading:true})
         //发送网络请求
         axios.get(`http://localhost:8080/getPost?count=100`).then(
             response => {
                 //请求成功后通知App更新状态
                 console.log("发送请求")
                 console.log(response.data)
                 this.props.updateAppState({posts:response.data})
             },
             error => {
                 //请求失败后通知App更新状态
                 this.props.updateAppState({err:error.message})
             }
         )
     }
     constructor(props) {
         super(props);
         this.getPosts();
     }
     render() {
         return(
             <div>
                 <Affix>
                     <Navbar>
                         <Navbar.Brand href="#">树洞</Navbar.Brand>
                         <Nav pullRight>
                             <Nav.Item icon={<FaRedoAlt/>} onClick={this.getPosts}></Nav.Item>
                             <Nav.Item icon={<FaUserCircle/>}>登录</Nav.Item>
                         </Nav>
                     </Navbar>
                 </Affix>
             </div>
         )
     }


}


export default header