import React from "react";
import Logo from './images/pubg icon.png'
import Main_guy from './images/main_guy.png'
import Tencent from './images/tencent.png'
import Pubg from './images/pubg.png'
import Studio from './images/studio.png'

function App() {
  return (
    // wrapper
    <div className="relative overall__wrapper w-full h-screen">

{/* background card with big ellipse */}
      <div className="mini__bg flex items-center w-full h-full">
      <div className="left__bg w-1/4 bg-[#1f1f1f] h-full"></div>
      <div className="right__bg bg-[#2a2a2a] w-full h-full ">
        <div className="ellipse__wrapper flex items-center w-full h-full p-4">
        <div className="ellipse rounded-[50%] w-[700px] h-[700px] flex items-center justify-center border  p-8 ">
          <div className="inner__ellipse bg-[#313131] rounded-[50%] w-[560px] h-[560px] "></div>
        </div>
        </div>
      </div>
      </div>

{/* MAIN CARD */}
      <div className="absolute top-0 main__card__wrapper w-full h-full">
    <div className="main__card w-full h-full flex justify-center items-center">
<div className="card bg-[#404040] w-[80%] h-[70%] rounded-2xl p-2">
<div className="play__bg w-full h-full  rounded-2xl bg-main-bg bg-cover bg-no-repeat bg-center">
<div className="lite-bg w-full h-full  rounded-2xl bg-[#252525] opacity-[.9]">

{/* main info */}
<div className="main_info__board flex flex-col w-full h-full rounded-2xl p-8">
<div className="header  flex justify-between  items-center px-4">
<div className="logo"><img src={Logo} alt="Pubg icon" /></div>
<div className="nav__menu flex w-[70%] justify-between items-center">
<div className="w-full">
<ul className="flex justify-between items-center  w-full">
  <li className="text-[#fece00]">Home</li>
  <li className="text-white">Rules</li>
  <li className="text-white">Support</li>
  <li className="text-white">Help</li>
  <li className="text-white">Contact Us</li>
</ul>
</div>
<div className="cta__btns w-1/2 flex justify-end">
  <ul className="flex">
    <li className="text-white bg-[#fece00] mr-4 px-2 rounded-2xl text-center">LOG IN</li>
    <li className="text-white bg-[#0c0c0c] px-2 rounded-2xl text-center">SIGN UP</li>
  </ul>
</div>
</div>
</div>

{/* middle portion/section */}
<div className="middle_ware flex items-center justify-around p-8 my-4 w-full h-full">
<div className="text__content w-full flex justify-center pl-2 flex-col h-full">
<h4 className="text-white">BEST GAME IN THE WORLD</h4>
<h1 className="text-4xl text-white my-2 font-bold">PLAYER'S UNKOWN <br />
<span className="text-[#fece00]">BATTLEGROUND'S</span> [PUBG]
</h1>
<h4 className="text-white">LIKE WHAT YOU READ? SIGNUP NOW</h4>
<div className="play__btn bg-white flex justify-between w-[150px] rounded-full mt-4 p-2 text-[#fece00] font-bold">
  <p>PLAY NOW</p>
  <p className="bg-[#fece00] w-[25px] h-[25px] rounded-[50%]"></p>
</div>
</div>
{/* main guy */}
<div className="main-guy   h-full flex justify-center items-center">
<div className="elipse-big w-[300px] h-[300px] rounded-[50%] border border-gray-600 flex justify-center items-center">
<div className="lite_bg w-[250px] h-[250px] bg-[#161616] rounded-[50%]">
<img src={Main_guy} alt="player icon" />
</div>
</div>
</div>

</div>

{/* footer/bottom */}
<div className="footer_data px-2 flex justify-around items-center">
<div className="lang_select text-sm">
  <select name="" id="" className='bg-transparent text-gray-500'>
  <option value="">SELECT LANGUAGE</option>
    <option value="English">ENGLISH</option>
    <option value="French">FRENCH</option>
  </select>
</div>
<div className="logos w-[60%] flex justify-around items-center">
<img className="w-[60px]"  src={Pubg} alt="pubg" />
<img className="w-[60px]" src={Studio} alt="studio" />
<img className="w-[60px]" src={Tencent} alt="tencent" />
</div>
</div>

</div>
{/* end of main info divs */}
</div>
</div>
</div>
    </div>
      </div>

    </div>
  );
}

export default App;
