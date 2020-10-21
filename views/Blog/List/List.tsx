import { NextPage } from "next";
import React from "react";
import Link from "next/link";

type Props = {};

const BlogList: NextPage<Props, any> = () => {
  return (
    <>
      <div>welcome to my page !</div>
      <p>Look my daily</p>
      <Link href="/post/blog/diary">
        <button>Look</button>
      </Link>
    </>
  );
};

BlogList.getInitialProps = async () => {
  return {};
};

export default BlogList;