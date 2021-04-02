import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

import { STop, STop2 } from "./style";

type Props = {};

const Microcosm: NextPage<Props, any> = ({ }) => {
  return (
    <div>
      <NextSeo title="小宇宙" />
      <div style={{ width: '414px', height: '841px', backgroundColor: '#FEFFFF', margin: '0 auto', border: '1px solid #E7E8E8' }}>
        <STop>
          <div style={{ display: 'flex', alignItems: 'center', width: '70%' }}>
            <p>00:00</p>
            <svg height="14" width="14" fill="##0A0A0A" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><g><path d="M66.5,98c-1.4,0-2.8-0.7-3.5-2L47.7,70.5l-29,6.7c-1.7,0.4-3.5-0.4-4.4-1.9c-0.9-1.5-0.8-3.5,0.4-4.8L71.2,5 c1.2-1.3,3.1-1.8,4.7-1.1c1.6,0.7,2.6,2.4,2.5,4.1l-7.9,86.2c-0.2,1.8-1.4,3.2-3.2,3.6C67.1,98,66.8,98,66.5,98z M49.7,61.8 c1.4,0,2.8,0.7,3.5,2L63.5,81l5.6-61l-40,46.4l19.6-4.5C49,61.8,49.3,61.8,49.7,61.8z"></path></g></svg>
          </div>
          <div style={{ width: '30%', float: 'right', textAlign: 'right' }}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g fill="#000000"><path d="M130.72,6.88v158.24h34.4v-158.24zM137.6,13.76h20.64v144.48h-20.64zM89.44,44.72v120.4h34.4v-120.4zM48.16,82.56v82.56h34.4v-82.56zM6.88,120.4v44.72h34.4v-44.72z"></path></g></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="16" height="16"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g fill="#000000"><path d="M86,24.08c-31.16156,0 -60.75094,11.94594 -83.3125,33.62063l-2.4725,2.37844l19.0275,19.83375l2.49938,-2.37844c17.40156,-16.71625 40.23187,-25.93438 64.25812,-25.93438c24.02625,0 46.85656,9.21813 64.27156,25.93438l2.48594,2.37844l19.04094,-19.83375l-2.48594,-2.39188c-22.56156,-21.67469 -52.15094,-33.60719 -83.3125,-33.60719zM86,65.36c-20.47875,0 -39.92281,7.8475 -54.74437,22.09125l-2.48594,2.37844l19.12156,19.92781l2.48594,-2.39187c9.70188,-9.33906 22.36,-14.48563 35.62281,-14.48563c13.26281,0 25.92094,5.14656 35.62281,14.48563l2.48594,2.39187l19.12156,-19.92781l-2.4725,-2.37844c-14.835,-14.24375 -34.27906,-22.09125 -54.75781,-22.09125zM86,106.64c-9.7825,0 -19.08125,3.74906 -26.17625,10.57531l-2.4725,2.37844l28.64875,29.84469l28.64875,-29.84469l-2.4725,-2.37844c-7.095,-6.82625 -16.39375,-10.57531 -26.17625,-10.57531z"></path></g></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="18" height="18"
                viewBox="0 0 172 172"
                fill=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g id="original-icon" fill="#000000"><path d="M22.93333,40.13333c-9.43116,0 -17.2,7.76884 -17.2,17.2v51.6c0,9.43116 7.76884,17.2 17.2,17.2h114.66667c9.43116,0 17.2,-7.76884 17.2,-17.2v-51.6c0,-9.43116 -7.76884,-17.2 -17.2,-17.2zM22.93333,51.6h114.66667c3.23951,0 5.73333,2.49383 5.73333,5.73333v51.6c0,3.23951 -2.49383,5.73333 -5.73333,5.73333h-114.66667c-3.23951,0 -5.73333,-2.49383 -5.73333,-5.73333v-51.6c0,-3.23951 2.49383,-5.73333 5.73333,-5.73333zM28.66667,63.06667v40.13333h103.2v-40.13333zM160.53333,68.8v28.66667h5.73333c3.1648,0 5.73333,-2.56853 5.73333,-5.73333v-17.2c0,-3.1648 -2.56853,-5.73333 -5.73333,-5.73333z"></path></g></g></svg>
            </div>
          </div>
        </STop>
        <STop2>
          <div style={{ width: '50%', textAlign: 'left' }}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="48" height="48"
              viewBox="0 0 172 172"
              fill=" fill: #FFFFFF;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g id="Layer_1"><path d="M110.1875,81.96875h-41.3875l13.30313,-13.30312c1.6125,-1.6125 1.6125,-4.16563 0,-5.64375c-1.6125,-1.6125 -4.16563,-1.6125 -5.64375,0l-20.15625,20.15625c-1.6125,1.6125 -1.6125,4.16563 0,5.64375l20.15625,20.15625c0.80625,0.80625 1.88125,1.20938 2.82188,1.20938c0.94062,0 2.01563,-0.40313 2.82188,-1.20938c1.6125,-1.6125 1.6125,-4.16562 0,-5.64375l-13.30313,-13.30312h41.3875c2.28437,0 4.03125,-1.74688 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125z" fill="#74C7DC"></path></g><path d="" fill="none"></path></g></g></svg>
          </div>
          <div className="topRight">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="28" height="28"
              viewBox="0 0 172 172"
              fill=" fill:#000000;"><g transform=""><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#74c7dc"><path d="M127.13135,21.43001c-2.91501,0.00361 -5.53745,1.7723 -6.63303,4.47359c-1.09558,2.70129 -0.44601,5.79702 1.64296,7.83012l3.91927,3.91927c-41.93611,0.6194 -75.89388,34.93357 -75.89388,77.01367c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153c0,-34.30129 27.3316,-61.98194 61.46956,-62.64535l-3.82829,3.82829c-1.87223,1.79752 -2.62641,4.46675 -1.97168,6.97825c0.65472,2.5115 2.61605,4.47282 5.12755,5.12755c2.5115,0.65472 5.18073,-0.09946 6.97825,-1.97168l15.48812,-15.48812c1.789,-1.35902 2.83726,-3.47825 2.83176,-5.7249c-0.0055,-2.24665 -1.06412,-4.36073 -2.85975,-5.71097l-15.46013,-15.46013c-1.35097,-1.38873 -3.2066,-2.17137 -5.14404,-2.1696zM44.79167,21.5c-12.77872,0 -23.29167,10.51295 -23.29167,23.29167v82.41667c0,12.77872 10.51295,23.29167 23.29167,23.29167h82.41667c12.77872,0 23.29167,-10.51295 23.29167,-23.29167v-26.875c0.03655,-2.58456 -1.32136,-4.98858 -3.55376,-6.29153c-2.2324,-1.30295 -4.99342,-1.30295 -7.22582,0c-2.2324,1.30295 -3.59031,3.70697 -3.55376,6.29153v26.875c0,5.03045 -3.92789,8.95833 -8.95833,8.95833h-82.41667c-5.03045,0 -8.95833,-3.92789 -8.95833,-8.95833v-82.41667c0,-5.03045 3.92789,-8.95833 8.95833,-8.95833h26.875c2.58456,0.03655 4.98858,-1.32136 6.29153,-3.55376c1.30295,-2.2324 1.30295,-4.99342 0,-7.22582c-1.30295,-2.2324 -3.70697,-3.59031 -6.29153,-3.55376z"></path></g></g></g></svg>
            <a>···</a>
          </div>
        </STop2>
      </div>
    </div>
  );
};

Microcosm.getInitialProps = async () => {
  return {
    namespacesRequired: ["common"],
  };
};

export default Microcosm;