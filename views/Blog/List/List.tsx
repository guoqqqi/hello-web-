import { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Boil from "../../../component/BoilingVerdict";

type Props = {};


const BlogList: NextPage<Props, any> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Boil />
        <p>Click {count} times</p>
        <button onClick={() => setCount(count + 1)} >
          Click me
        </button>
      </div>
      <br />
      <div>welcome to my page !</div>
      <p>Look my daily</p>
      <Link href="/post/blog/diary">
        <button>Look</button>
      </Link>
      <p>My learn web travel</p>
      <Link href="/post/blog/learn-web">
        <button>Go</button>
      </Link>
    </>
  );
};

BlogList.getInitialProps = async () => {
  return {};
};

export default BlogList;