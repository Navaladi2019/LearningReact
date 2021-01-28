import React from 'react'
import faker from "faker";
import ApprovalCard from "./ApprovalCard";


const CommentDetail = (props) => {
    console.log(props);
    return (
       
       
            <div className="comment">
            <ApprovalCard >
                <a href="/" className="avatar">
                    <img alt="img" src={faker.image.avatar()} />
                </a>
                <div className="content">
                <a href="/" className="author"> {props.author}</a>
                    <div className="metadata">
                    <span className="date"> {props.timeAgo}</span>
                    </div>
                <div className="text">{props.comment}</div>
                </div>
                </ApprovalCard>
            </div>
        

    );
}

export default CommentDetail;