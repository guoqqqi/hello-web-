import { NextPage } from "next";
import React from "react"

type Props = {};

const Blog: NextPage<Props, any> = () => {
    return(
        <div>welcome to my page !</div>
    );
};

Blog.getInitialProps = async () => {
    return{};
};

export default Blog;