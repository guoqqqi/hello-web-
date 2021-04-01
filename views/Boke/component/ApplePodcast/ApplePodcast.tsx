import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { STop, SSection, SSection2, SSection3, SSection4 } from "./style"

type Props = {};

const ApplePodcast: NextPage<Props, any> = ({ }) => {
  return (
    <div>
      <NextSeo title="苹果播客" />
      <div style={{ width: '414px', height: '841px', backgroundColor: 'black', margin: '0 auto' }}>
        <STop>
          <div style={{ display: 'flex', alignItems: 'center', width: '70%' }}>
            <p>00:00</p>
            <svg height="14" width="14" fill="#FFF" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g><path d="M66.5,98c-1.4,0-2.8-0.7-3.5-2L47.7,70.5l-29,6.7c-1.7,0.4-3.5-0.4-4.4-1.9c-0.9-1.5-0.8-3.5,0.4-4.8L71.2,5 c1.2-1.3,3.1-1.8,4.7-1.1c1.6,0.7,2.6,2.4,2.5,4.1l-7.9,86.2c-0.2,1.8-1.4,3.2-3.2,3.6C67.1,98,66.8,98,66.5,98z M49.7,61.8 c1.4,0,2.8,0.7,3.5,2L63.5,81l5.6-61l-40,46.4l19.6-4.5C49,61.8,49.3,61.8,49.7,61.8z"></path></g></svg>
          </div>
          <div style={{ width: '30%', float: 'right', textAlign: 'right' }}>
            <div style={{ backgroundColor: 'black' }}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#ffffff"><path d="M130.72,6.88v158.24h34.4v-158.24zM89.44,44.72v120.4h34.4v-120.4zM48.16,82.56v82.56h34.4v-82.56zM6.88,120.4v44.72h34.4v-44.72z"></path></g><path d="" fill="none"></path></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#ffffff"><path d="M86,24.08c-31.16156,0 -60.75094,11.94594 -83.3125,33.62063l-2.4725,2.37844l19.0275,19.83375l2.49938,-2.37844c17.40156,-16.71625 40.23187,-25.93438 64.25812,-25.93438c24.02625,0 46.85656,9.21813 64.27156,25.93438l2.48594,2.37844l19.04094,-19.83375l-2.48594,-2.39188c-22.56156,-21.67469 -52.15094,-33.60719 -83.3125,-33.60719zM86,65.36c-20.47875,0 -39.92281,7.8475 -54.74437,22.09125l-2.48594,2.37844l19.12156,19.92781l2.48594,-2.39187c9.70188,-9.33906 22.36,-14.48563 35.62281,-14.48563c13.26281,0 25.92094,5.14656 35.62281,14.48563l2.48594,2.39187l19.12156,-19.92781l-2.4725,-2.37844c-14.835,-14.24375 -34.27906,-22.09125 -54.75781,-22.09125zM86,106.64c-9.7825,0 -19.08125,3.74906 -26.17625,10.57531l-2.4725,2.37844l28.64875,29.84469l28.64875,-29.84469l-2.4725,-2.37844c-7.095,-6.82625 -16.39375,-10.57531 -26.17625,-10.57531z"></path></g></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="18" height="18"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g id="original-icon" fill="#ffffff"><path d="M22.93333,40.13333c-9.43116,0 -17.2,7.76884 -17.2,17.2v51.6c0,9.43116 7.76884,17.2 17.2,17.2h114.66667c9.43116,0 17.2,-7.76884 17.2,-17.2v-51.6c0,-9.43116 -7.76884,-17.2 -17.2,-17.2zM22.93333,51.6h114.66667c3.23951,0 5.73333,2.49383 5.73333,5.73333v51.6c0,3.23951 -2.49383,5.73333 -5.73333,5.73333h-114.66667c-3.23951,0 -5.73333,-2.49383 -5.73333,-5.73333v-51.6c0,-3.23951 2.49383,-5.73333 5.73333,-5.73333zM28.66667,63.06667v40.13333h103.2v-40.13333zM160.53333,68.8v28.66667h5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-17.2c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z"></path></g></g></svg>
            </div>
          </div>
        </STop>
        <SSection>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="16" height="16"
            viewBox="0 0 172 172"
            fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#9b59b6"><path d="M116.45833,9.63021l-64.5,71.66667l-4.25521,4.70313l4.25521,4.70313l64.5,71.66667l10.75,-9.40625l-60.24479,-66.96354l60.24479,-66.96354z"></path></g></g></svg>
          <p>Search</p>
        </SSection>
        <SSection>
          <div className="left"><img src="" alt="" /></div>
          <div className="right">
            <h1>世界莫名其妙物语</h1>
            <p>世界莫名其妙物语</p>
            <div>
              <button className="button1">SUBSCRIBE</button>
              <button className='button2'>···</button>
            </div>
          </div>
        </SSection>
        <SSection2>
          <div>
            <p>5.0 ★★★★★</p>
            <span>28 Ratings</span>
          </div>
          <div>
            <p>2020-2021</p>
            <span>Comedy Interviews</span>
          </div>
        </SSection2>
        <SSection3>
          <input type="checkbox" name="toggle" id="toggle" style={{ display: "none" }} />
          <p>干货和笑点不能两全？这么想可就大错特错了！三名美少女段子手组成了相声天团，每周一每周一每周一每周一每周一每周一每周一每周一每周一每周一每周一每周一</p>
          <label htmlFor="toggle"></label>
        </SSection3>
        <SSection4>
          <h1>Episodes</h1>
          <div className="card">
            <div>
              <span>MONDAY</span>
              <h2>EP40世界人民看漫画！</h2>
              <div className="cardInner">
                <p>漫画是什么？敦煌莫高窟和清明上河图算漫画吗？哪部11世纪的“写实”漫画作品同时...</p>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="36" height="36"
                  viewBox="0 0 172 172"
                  fill=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#9b59b6"><path d="M79.12,30.96v48.16h-48.16v13.76h48.16v48.16h13.76v-48.16h48.16v-13.76h-48.16v-48.16z"></path></g></g></g></svg>
              </div>
              <div className="cardBottom">
                <p>Detials</p>
                <span>1 hr 1 min</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <span>MONDAY</span>
              <h2>EP40世界人民看漫画！</h2>
              <div className="cardInner">
                <p>漫画是什么？敦煌莫高窟和清明上河图算漫画吗？哪部11世纪的“写实”漫画作品同时...</p>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="36" height="36"
                  viewBox="0 0 172 172"
                  fill=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#9b59b6"><path d="M79.12,30.96v48.16h-48.16v13.76h48.16v48.16h13.76v-48.16h48.16v-13.76h-48.16v-48.16z"></path></g></g></g></svg>
              </div>
              <div className="cardBottom">
                <p>Detials</p>
                <span>1 hr 1 min</span>
              </div>
            </div>
          </div>
        </SSection4>
      </div>
    </div>
  );
};

ApplePodcast.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};

export default ApplePodcast;
