import React from "react";
import { NextPage } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
  data: {
    title: string;
    data: Date;
  };
};

const Page: NextPage<Props, any> = ({ content, data = {} }) => {
  return (
    <>
      <div>This is my article !</div>

    </>
  );
};

Page.getInitialProps = async (context) => {
  return {};
};

export default Page;