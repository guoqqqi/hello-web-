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
      <Link href="/post/blog/dairy">
        <button>Look</button>
      </Link>
      <p>My learn web travel</p>
      <Link href="/post/blog/learn-web">
        <button>Go</button>
      </Link>
      <Link href="/post/blog/business-support">
        <button>Go business-support</button>
      </Link>
      <Link href="/post/blog/apisix-vs-api7">
        <button>Go apisix-vs-api7</button>
      </Link>
      <Link href="/post/blog/form-api7-trial">
        <button>Go form-api7-trial</button>
      </Link>
      <Link href="/post/blog/business-support">
        <button>Go form-api7-trial</button>
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