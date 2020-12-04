import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { SDetail, SSection } from "../style";

type Props = {};

const BlogList: NextPage<Props, any> = () => {
  // const [url, setUrl] = useState("0");
  // console.log(url);
  // useEffect(()=>{
  //   const url = window.location.href;
  //   const loc = url.substring(url.lastIndexOf('/')+1, url.length);
  //   console.log(url);
  //   const newUrl =(window.location.port+"/zh/"+loc);
  // });
  
  return (
    <>
      <main>Path: </main>
      <Link href={"zh"+location.pathname}>
      asd</Link>
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

BlogList.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default BlogList;