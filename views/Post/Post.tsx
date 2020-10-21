import React from "react";
import { NextPage } from "next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  content: string;
  data: {
    title: string;
    date: Date;
  };
};

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Page: NextPage<Props, any> = ({ content, data = {} }) => {
  return (
    <>
      <div>This is my article !</div>
      <div>
        {content === undefined && (
          <h2>错误，未找到！</h2>
        )}
        {content !== undefined && (
          <div>
            <h1>{data.title}</h1>
            <span>{new Date(data.date).toLocaleDateString()}
            </span>
            <article>
              <ReactMarkdown
                escapeHtml={true}
                source={content}
                renderers={{ code: CodeBlock }}
              />
            </article>
          </div>
        )}
      </div>

    </>
  );
};

Page.getInitialProps = async (context) => {
  // 1. 获取 Slug
  const { slug, category } = context.query;

  // 2. 获取语言
  const { lng = "zh-CN" } = context.req as any || {};

  // 3. markdown to json 
  try {
    const fileData = await import(`../../_posts/${category}/${lng}/${slug}.md`);
    const { data, content } = matter(fileData.default);
    return {
      namespacesRequired: ["common"],
      data,
      content,
    };
  } catch (error) {
    return {
      namespacesRequired: ["common"],
      content: undefined,
    };
  }
};

export default Page as any;