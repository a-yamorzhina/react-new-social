import React from "react";
import s from "./Post.module.css";


const Post = (props) => {
  return (

          <div className={s.post}>
            <img alt='avatar' src='https://lh3.googleusercontent.com/proxy/GuawMkNcV8xxRl8FMtM1jp8i20TvRcHdftJmPxJij-Yk6uIZClmBbWNNYRXzSn5x2a5JLoco-Q1O6Q5qM2EtpKujLtVGVJ-7KgweByCF9i_kSMei8kPEsRMQweuC12xuN6ohyqiu54aiccU'/>
            {props.message}
            <span>Like {props.count}</span>
          </div>

  )
};

export default Post;
