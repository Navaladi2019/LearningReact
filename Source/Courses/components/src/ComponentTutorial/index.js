import  React  from "react";
import ReactDOM   from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";


const App = ()=>{

    return (
        <div className = "ui container comments">
            <CommentDetail author={faker.name.firstName()} timeAgo="Today At 4" comment= "Nice blog Post!"/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today At 5" comment="ok"/>
            <CommentDetail author={faker.name.firstName()} timeAgo="Today At 6" comment="Good"/>
        </div>

    );
}

//ReactDOM.render(<App/>,document.querySelector('#root'));