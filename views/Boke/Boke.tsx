import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

type Props = {};

const Boke: NextPage<Props, any> = ({ }) => {
  return (
    <div>
      <NextSeo title="音播" />
      <div>
        <p>播客客户端页面模拟</p>
      </div>
    </div>
  );
};

Boke.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};

export default Boke;
