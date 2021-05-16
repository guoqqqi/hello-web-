import React, { useEffect } from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { STop, SSection, SSection2, SSection3, SSection4, SFooter, SFooterIcon } from "./style"

type Props = {
  list?: data
};

type data = {
  list_name?: string;
  list_URL?: string;
  list_desc?: string;
  list_info?: string;
  list_type?: string;
}

const ApplePodcast: NextPage<Props, any> = ({ list }) => {
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
                fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#ffffff"><path d="M130.72,6.88v158.24h34.4v-158.24zM89.44,44.72v120.4h34.4v-120.4zM48.16,82.56v82.56h34.4v-82.56zM6.88,120.4v44.72h34.4v-44.72z"></path></g><path d="" fill="none"></path></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#ffffff"><path d="M86,24.08c-31.16156,0 -60.75094,11.94594 -83.3125,33.62063l-2.4725,2.37844l19.0275,19.83375l2.49938,-2.37844c17.40156,-16.71625 40.23187,-25.93438 64.25812,-25.93438c24.02625,0 46.85656,9.21813 64.27156,25.93438l2.48594,2.37844l19.04094,-19.83375l-2.48594,-2.39188c-22.56156,-21.67469 -52.15094,-33.60719 -83.3125,-33.60719zM86,65.36c-20.47875,0 -39.92281,7.8475 -54.74437,22.09125l-2.48594,2.37844l19.12156,19.92781l2.48594,-2.39187c9.70188,-9.33906 22.36,-14.48563 35.62281,-14.48563c13.26281,0 25.92094,5.14656 35.62281,14.48563l2.48594,2.39187l19.12156,-19.92781l-2.4725,-2.37844c-14.835,-14.24375 -34.27906,-22.09125 -54.75781,-22.09125zM86,106.64c-9.7825,0 -19.08125,3.74906 -26.17625,10.57531l-2.4725,2.37844l28.64875,29.84469l28.64875,-29.84469l-2.4725,-2.37844c-7.095,-6.82625 -16.39375,-10.57531 -26.17625,-10.57531z"></path></g></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="18" height="18"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g id="original-icon" fill="#ffffff"><path d="M22.93333,40.13333c-9.43116,0 -17.2,7.76884 -17.2,17.2v51.6c0,9.43116 7.76884,17.2 17.2,17.2h114.66667c9.43116,0 17.2,-7.76884 17.2,-17.2v-51.6c0,-9.43116 -7.76884,-17.2 -17.2,-17.2zM22.93333,51.6h114.66667c3.23951,0 5.73333,2.49383 5.73333,5.73333v51.6c0,3.23951 -2.49383,5.73333 -5.73333,5.73333h-114.66667c-3.23951,0 -5.73333,-2.49383 -5.73333,-5.73333v-51.6c0,-3.23951 2.49383,-5.73333 5.73333,-5.73333zM28.66667,63.06667v40.13333h103.2v-40.13333zM160.53333,68.8v28.66667h5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-17.2c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z"></path></g></g></svg>
            </div>
          </div>
        </STop>
        <SSection>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="16" height="16"
            viewBox="0 0 172 172"
            fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#9b59b6"><path d="M116.45833,9.63021l-64.5,71.66667l-4.25521,4.70313l4.25521,4.70313l64.5,71.66667l10.75,-9.40625l-60.24479,-66.96354l60.24479,-66.96354z"></path></g></g></svg>
          <p>Search</p>
        </SSection>
        <SSection>
          <div className="left"><img src={`${list.list_URL}`} alt="" /></div>
          <div className="right">
            <h1>{list.list_name ? list.list_name : "世界莫名其妙物语"}</h1>
            <p>{list.list_info ? list.list_info : "世界莫名其妙物语"}</p>
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
            <span>{list.list_type ? list.list_type : "Comedy Interviews"}</span>
          </div>
        </SSection2>
        <SSection3>
          <input type="checkbox" name="toggle" id="toggle" style={{ display: "none" }} />
          <p>{list.list_desc ? list.list_desc : "干货和笑点不能两全？这么想可就大错特错了！三名美少女段子手组成了相声天团，每周一每周一每周一每周一每周一每周一每周一每周一每周一每周一每周一每周一"}</p>
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
                  fill=" fill:#000000;"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#9b59b6"><path d="M79.12,30.96v48.16h-48.16v13.76h48.16v48.16h13.76v-48.16h48.16v-13.76h-48.16v-48.16z"></path></g></g></g></svg>
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
                  fill=" fill:#000000;"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#9b59b6"><path d="M79.12,30.96v48.16h-48.16v13.76h48.16v48.16h13.76v-48.16h48.16v-13.76h-48.16v-48.16z"></path></g></g></g></svg>
              </div>
              <div className="cardBottom">
                <p>Detials</p>
                <span>1 hr 1 min</span>
              </div>
            </div>
          </div>
        </SSection4>
        <SFooter>
          <div>
            <img src="https://img.icons8.com/plasticine/100/000000/jp2.png" />
            <span> 「视频」元宵还可以...</span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#ffffff"><path d="M34.4,18.06v135.86656l115.48188,-67.92656z"></path></g></g></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g fill="#ffffff"><path d="M86,17.2c-37.92867,0 -68.8,30.87133 -68.8,68.8c0,37.92867 30.87133,68.8 68.8,68.8c37.92867,0 68.8,-30.87133 68.8,-68.8c0.02924,-2.06765 -1.05709,-3.99087 -2.843,-5.03322c-1.78592,-1.04236 -3.99474,-1.04236 -5.78066,0c-1.78592,1.04236 -2.87225,2.96558 -2.843,5.03322c0,31.73133 -25.60201,57.33333 -57.33333,57.33333c-31.73133,0 -57.33333,-25.60201 -57.33333,-57.33333c0,-31.73133 25.60201,-57.33333 57.33333,-57.33333c14.40198,0 27.46542,5.33787 37.52422,14.07578l-14.59089,14.59089h34.4v-34.4l-11.69062,11.69063c-12.15721,-10.79982 -28.13397,-17.42396 -45.64271,-17.42396zM68.46406,65.05989c-9.37973,0 -15.4275,5.0388 -15.5651,12.9336h9.31666c0.11467,-3.1648 2.48729,-5.26302 6.01329,-5.26302c3.58333,0 5.80052,1.81791 5.80052,4.75911c0,2.9412 -2.2652,4.87109 -5.71093,4.87109h-4.94948v7.08828h4.96068c3.9216,0.00001 6.29323,1.898 6.29323,5.00547c0,3.0272 -2.51819,5.09505 -6.15886,5.09505c-3.89293,0 -6.37959,-1.90427 -6.51718,-4.98307h-9.79818c0.3612,7.92347 6.71033,13.07917 16.14739,13.07917c9.88427,0 16.77448,-5.10303 16.77448,-12.40729c0,-5.20587 -3.5647,-8.86051 -9.1375,-9.45104v-0.5375c4.53507,-0.8428 7.64817,-4.51017 7.64817,-9.1599c0,-6.52453 -6.16172,-11.02995 -15.11719,-11.02995zM108.46302,65.07109c-10.41173,0 -16.96485,7.80486 -16.96485,21.18646c0,13.3816 6.46711,21.38229 16.96485,21.38802c10.46907,0 16.96484,-8.03016 16.96484,-21.35443c0,-13.43893 -6.57604,-21.22005 -16.96484,-21.22005zM108.46302,72.96562c3.9216,0.00001 6.55078,4.41673 6.55078,13.29193c0,8.93253 -2.62918,13.49349 -6.55078,13.49349c-3.9216,0 -6.52839,-4.56096 -6.52839,-13.49349c0,-8.8752 2.60679,-13.29193 6.52839,-13.29193z"></path></g></g></svg>
          </div>
        </SFooter>
        <SFooterIcon>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#000000"></path><g id="original-icon" fill="#cccccc"><path d="M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM61.7789,44.84765c-0.91465,0.00008 -1.79162,0.36439 -2.43711,1.0124c-0.64549,0.64801 -1.00637,1.5264 -1.00289,2.44104v0.08062c-0.00002,0.00672 -0.00002,0.01344 0,0.02015l0.28891,75.56578c0.0032,1.23018 0.66302,2.36504 1.73052,2.97643c1.0675,0.61139 2.38022,0.60626 3.44292,-0.01346l65.21219,-38.08188c1.06271,-0.61806 1.71486,-1.75622 1.7107,-2.98559c-0.00416,-1.22937 -0.66399,-2.36309 -1.73086,-2.97395l-65.5011,-37.58469v0.00672c-0.52072,-0.30172 -1.11147,-0.46157 -1.71328,-0.4636zM65.23906,54.24719l55.16765,31.65875l-54.91906,32.0686z"></path></g></g></g></svg>
            <p>Listen Now</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#1f1f1f"></path><g fill="#818181"><path d="M24.08,13.76c-5.68976,0 -10.32,4.63024 -10.32,10.32v51.6c0,1.90232 1.54112,3.44 3.44,3.44h58.48c1.89888,0 3.44,-1.53768 3.44,-3.44v-51.6c0,-5.68976 -4.63024,-10.32 -10.32,-10.32zM103.2,13.76c-5.68976,0 -10.32,4.63024 -10.32,10.32v51.6c0,1.90232 1.54112,3.44 3.44,3.44h58.48c1.89888,0 3.44,-1.53768 3.44,-3.44v-51.6c0,-5.68976 -4.63024,-10.32 -10.32,-10.32zM20.64,34.4h51.6v37.84h-51.6zM99.76,34.4h51.6v37.84h-51.6zM24.08,92.88c-5.68976,0 -10.32,4.63024 -10.32,10.32v51.6c0,1.90232 1.54112,3.44 3.44,3.44h58.48c1.89888,0 3.44,-1.53768 3.44,-3.44v-51.6c0,-5.68976 -4.63024,-10.32 -10.32,-10.32zM103.2,92.88c-5.68976,0 -10.32,4.63024 -10.32,10.32v51.6c0,1.90232 1.54112,3.44 3.44,3.44h58.48c1.89888,0 3.44,-1.53768 3.44,-3.44v-51.6c0,-5.68976 -4.63024,-10.32 -10.32,-10.32zM20.64,113.52h51.6v37.84h-51.6zM99.76,113.52h51.6v37.84h-51.6z"></path></g></g></svg>
            <p>Browse</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#1f1f1f"></path><g fill="#818181"><path d="M44.72,6.88c-7.56531,0 -13.76,6.19469 -13.76,13.76v131.795h0.1075c0.56438,7.05469 6.46344,12.685 13.6525,12.685h99.76v-6.88h-99.76c-3.84312,0 -6.88,-3.03687 -6.88,-6.88c0,-3.84312 3.03688,-6.88 6.88,-6.88h99.76v-6.88h-99.76c-3.84312,0 -6.88,-3.03687 -6.88,-6.88c0,-3.84312 3.03688,-6.88 6.88,-6.88h99.76v-116.96zM44.72,13.76h92.88v103.2h-92.88c-2.55312,0 -4.82406,0.90031 -6.88,2.13656v-98.45656c0,-3.84312 3.03688,-6.88 6.88,-6.88zM55.04,24.08c-3.7625,0 -6.88,3.1175 -6.88,6.88v10.32c0,3.7625 3.1175,6.88 6.88,6.88h65.36c3.7625,0 6.88,-3.1175 6.88,-6.88v-10.32c0,-3.7625 -3.1175,-6.88 -6.88,-6.88zM55.04,30.96h65.36v10.32h-65.36z"></path></g></g></g></svg>
            <p>Library</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="#1f1f1f"></path><g fill="#7c48be"><path d="M66.15385,1.24038c-35.86779,0 -64.91346,29.04567 -64.91346,64.91346c0,35.86779 29.04567,64.91346 64.91346,64.91346c15.14303,0 29.07151,-5.34916 40.10577,-14.05769l5.78846,5.78846c-2.42908,4.57392 -1.57632,10.41406 2.27404,14.26442l30.38942,30.59615c4.72897,4.72897 12.42969,4.72897 17.15865,0l5.78846,-5.78846c4.72897,-4.72897 4.72897,-12.42969 0,-17.15865l-30.59615,-30.38942c-3.8762,-3.8762 -9.69051,-4.54808 -14.26442,-2.06731l-5.78846,-5.78846c8.76022,-11.0601 14.05769,-25.09195 14.05769,-40.3125c0,-35.86779 -29.04567,-64.91346 -64.91346,-64.91346zM66.15385,13.23077c29.22656,0 52.92308,23.69651 52.92308,52.92308c0,29.22656 -23.69651,52.92308 -52.92308,52.92308c-29.22656,0 -52.92308,-23.69651 -52.92308,-52.92308c0,-29.22656 23.69651,-52.92308 52.92308,-52.92308zM32.66346,49.40865c-3.41106,5.53005 -5.375,12.04207 -5.375,19.01923c0,20.02704 16.15084,36.17788 36.17788,36.17788c7.72656,0 14.98798,-2.50661 20.87981,-6.61538c-1.57632,0.18089 -3.33353,0.20673 -4.96154,0.20673c-25.89303,0 -46.72115,-20.82812 -46.72115,-46.72115c0,-0.69772 -0.02584,-1.36959 0,-2.06731z"></path></g></g></svg>
            <p className="active">Search</p>
          </div>
        </SFooterIcon>
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
