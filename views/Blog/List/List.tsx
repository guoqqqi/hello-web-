import { NextPage } from "next";
import React from "react";
import Link from "next/link";

import { SDetail, SSection } from "../style";

type Props = {};

const BlogList: NextPage<Props> = () => {
  return (
    <>
      <main>Path: </main>
      <SSection>
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
        </SDetail>
        <br />
      </SSection>
    </>
  );
};

BlogList.getInitialProps = async () => {
  return {};
};

export default BlogList;