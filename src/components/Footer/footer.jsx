import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <section>
      <header />
      <div className="imgWrapper">
        <img className="helloIc" src="assets/helloIc.png" alt="" />
        <img className="beTheNextStar" src="assets/beTheNextStar.png" alt="" />
        <img className="iconStar" src="assets/iconStar.png" alt="" />
      </div>

      <div className="divide" />

      <div className="footer">
        <div className="left">
          <div>
            <span className="company">IC COMPANY</span>
          </div>
          <div>경기도 수원시 경수대로 443번길 14-16, 102호</div>
          <div>
            <span className="ceo">대표: 노준성</span>
          </div>
          <div>
            <span className="email">rjsdanceno1@naver.com</span>
          </div>
          <div>ⓒ IC Corp. All rights reserved</div>
        </div>
        <div className="right">
          <div>EVERYDAY ON IC SHOW YOUR SELF</div>
          <div>YOU ARE THE NEXT STAR</div>
          <div>ON THE STAGE</div>
          <div>IT'S YOUR TURN</div>
        </div>
      </div>
    </section>
  );
}
