import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { SBox, SInner, SSection } from "./style";
import ApplePodcast from "./component/ApplePodcast";
import Microcosm from "./component/Microcosm";
import { getJSON } from "jquery";

type Props = {};

const Boke: NextPage<Props, any> = ({ }) => {
  const [value, setValue] = useState("苹果播客");
  const [showData, setShowData] = useState({});
  const [fetchUrl, setFetchUrl] = useState('');

  useEffect(() => {
    const url = decodeURIComponent(location.href);
    let obj = {};
    if (url.indexOf('rss_url') === -1 && url.indexOf('list_name') !== -1) {
      const urlsplit = url.split('?');
      let par = urlsplit[1].split('&');
      for (let i = 0; i < par.length; i++) {
        let p = par[i].split('=');
        obj[p[0]] = p[1];
        setShowData(obj);
        console.log(obj);
      }
    } else {
      const urlsplit = url.split('?');
      if (urlsplit[1] !== undefined) {
        let par = urlsplit[1].split('&');
        let p = par[0].split('=');
        setFetchUrl(p[1]);
        console.log(p[1]);

        fetch(p[1]).then((res) => {
          res.text().then((rssXml) => {
            var domParser = new DOMParser();
            let doc = domParser.parseFromString(rssXml, 'text/html');
            console.log(doc, 'doc');
            var feedUrl = doc.querySelector('[type="application/rss+xml"]');
            console.log(feedUrl);
            return setShowData({
              list_name: feedUrl.querySelector('title').innerText || feedUrl.getElementsByTagName('itunes:title')[0].innerHTML,
              list_desc: feedUrl.getElementsByTagName('description')[0].innerHTML || feedUrl.getElementsByTagName('content:encoded')[0].innerHTML,
              list_URL: feedUrl.getElementsByTagName('itunes:image')[0].outerHTML.match(/<itunes:image href="(\S*)"/)[1],
              list_info: feedUrl.getElementsByTagName('itunes:author')[0].innerHTML,
              list_type: feedUrl.getElementsByTagName('itunes:category')[0].lastElementChild.innerHTML.match(/<itunes:category text="(\S*)"/)[1],
            });
          })
        }).catch(() => alert("RSS Feed 解析失败，请重新提交"));
      }
    };
  }, []);

  return (
    <div>
      <NextSeo title="音播" />
      <div style={{ textAlign: 'center', fontSize: '27px', maxWidth: '1200px', margin: '0 auto' }}>
        <p>播客客户端页面模拟</p>
      </div>
      <SSection>
        <SBox>
          <form id="form" action="" method="get" >
            <label htmlFor="" style={{ fontSize: '18px', paddingBottom: '10px' }}>从 RSS Feed 读取播客节目信息 </label>
            <SInner>
              <input placeholder="请输入 RSS Feed URL" type="text" name="rss_url" style={{ width: '400px', marginRight: '10px' }} />
              <button>提交</button>
            </SInner>
          </form>
        </SBox>
      </SSection>
      <SSection>
        <SBox>
          <form id="form2" name="form2" action="" method="get">
            <label htmlFor="form2">节目名称</label>
            <SInner>
              <input name="list_name" placeholder="请输入节目名称" type="json" />
            </SInner>
            <label htmlFor="form2">封面图</label>
            <SInner>
              <input name="list_URL" placeholder="请输入封面图 URL" />
            </SInner>
            <SInner ><img src="" alt="" /></SInner>
            <label htmlFor="form2">节目介绍</label>
            <SInner>
              <textarea name="list_desc" id="节目介绍" cols={50} rows={10} placeholder="请输入节目介绍"></textarea>
            </SInner>
            <label htmlFor="form2">创作者信息</label>
            <SInner>
              <input name="list_info" placeholder="请输入创作者信息" type="text" />
            </SInner>
            <label htmlFor="form2">播客分类</label>
            <SInner>
              <input name="list_type" placeholder="请输入播客分类" type="text" />
            </SInner>
            <input type="submit" />
          </form>
        </SBox>
        <SBox>
          <div style={{ padding: '0 30px 10px 30px', textAlign: 'center' }}>
            <div className="chooseBox">
              <button onClick={() => setValue("苹果播客")}>苹果播客</button>
              <button onClick={() => setValue("小宇宙")}>小宇宙</button>
            </div>
          </div>
          {value === "苹果播客" ? <ApplePodcast list={showData} /> : <Microcosm list={showData} />}
        </SBox>
      </SSection>
    </div>
  );
};

Boke.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};

export default Boke;
