import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { SBox, SInner, SSection } from "./style";
import ApplePodcast from "./component/ApplePodcast";

type Props = {};

const Boke: NextPage<Props, any> = ({ }) => {
  return (
    <div>
      <NextSeo title="音播" />
      <div style={{ textAlign: 'center', fontSize: '27px', maxWidth: '1200px' }}>
        <p>播客客户端页面模拟</p>
      </div>
      <SSection>
        <SBox>
          <form action="">
            <label htmlFor="" style={{ fontSize: '18px', paddingBottom: '10px' }}>从 RSS Feed 读取播客节目信息 </label>
            <SInner>
              <input placeholder="请输入 RSS Feed URL" type="text" name="url" style={{ width: '400px', marginRight: '10px' }} />
              <button>提交</button>
            </SInner>
          </form>
        </SBox>
      </SSection>
      <SSection>
        <SBox>
          <form action="">
            <label htmlFor="">节目名称</label>
            <SInner>
              <input placeholder="请输入节目名称" type="text" />
            </SInner>
            <label htmlFor="">封面图</label>
            <SInner>
              <input placeholder="请输入封面图 URL" type="text" />
            </SInner>
            <SInner ><img src="" alt="" /></SInner>
            <label htmlFor="">节目介绍</label>
            <SInner>
              <textarea name="" id="" cols={50} rows={10} placeholder="请输入节目介绍"></textarea>
            </SInner>
            <label htmlFor="">创作者信息</label>
            <SInner>
              <input placeholder="请输入创作者信息" type="text" />
            </SInner>
            <label htmlFor="">播客分类</label>
            <SInner>
              <input placeholder="请输入播客分类" type="text" name="" id="" />
            </SInner>
          </form>
        </SBox>
        <SBox>
          <div style={{ padding: '0 30px 10px 30px', textAlign: 'center' }}>
            <div className="chooseBox">
              <button>苹果播客</button>
              <button>小宇宙</button>
            </div>
          </div>
          <ApplePodcast />
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
