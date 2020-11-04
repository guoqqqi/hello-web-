import { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import Boil from "../../../component/BoilingVerdict";

import { SDetail } from "../style";

type Props = {};


const BlogList: NextPage<Props, any> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <SDetail>
      <div>welcome to my page !</div>
      <p>Look my daily</p>
      <Link href="/post/blog/diary">
        <button>Look</button>
      </Link>
      <p>My learn web travel</p>
      <Link href="/post/blog/learn-web">
        <button>Go</button>
      </Link>
      </SDetail>
      <br />
      <div>
        <Boil />
        <p>Click {count} times</p>
        <button onClick={() => setCount(count + 1)} >
          Click me
        </button>
      </div>
    </>
  );
};

BlogList.getInitialProps = async () => {
  return {};
};

export default BlogList;