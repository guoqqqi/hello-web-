import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

type Props = {};

const ApplePodcast: NextPage<Props, any> = ({ }) => {
  return (
    <div>
      <NextSeo title="苹果播客" />
      <div style={{width: '414px', height: '841px', backgroundColor: 'black', margin: '0 auto'}}></div>
    </div>
  );
};

ApplePodcast.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};

export default ApplePodcast;
