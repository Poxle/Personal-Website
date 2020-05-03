import React from 'react';
import { Transform } from 'stream';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill}) {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  height="32px" viewBox="0 0 5150 2160" preserveAspectRatio="xMidYMid meet">
    <g id="layer101" fill="white" >
     <path d="M4955 2020 c-11 -5 -226 -9 -477 -9 l-458 -1 -5 -22 c-5 -24 -35 -246 -35 -260 0 -4 218 -8 485 -8 l485 0 4 23 c5 21 36 265 36 280 0 9 -9 8 -35 -3z"/>
     <path d="M1179 1994 c-9 -16 -216 -418 -459 -894 -243 -476 -449 -872 -456 -881 -8 -8 -14 -19 -14 -23 0 -3 82 -5 182 -4 l183 3 452 869 c249 479 463 887 477 908 l25 38 -92 0 c-51 0 -135 3 -187 6 l-95 6 -16 -28z"/>
     <path d="M3091 1295 c-189 -393 -345 -714 -347 -713 -1 2 -31 150 -65 331 l-63 327 -153 0 c-142 0 -153 -1 -153 -19 0 -10 47 -236 105 -502 58 -266 103 -494 100 -506 -5 -23 -4 -23 82 -23 49 0 131 -3 184 -6 l96 -7 259 524 c142 288 346 701 454 917 l195 392 -175 0 -175 0 -344 -715z"/>
     <path d="M1677 1218 c-82 -150 -197 -377 -197 -390 0 -7 32 -154 72 -325 l73 -313 81 0 c44 0 123 -3 174 -7 89 -6 93 -5 85 13 -4 10 -61 257 -125 547 -65 291 -120 530 -123 533 -3 3 -21 -23 -40 -58z"/>
     <path d="M3841 743 c-40 -279 -77 -515 -82 -526 -6 -10 -9 -20 -7 -21 5 -5 328 -17 328 -13 0 2 34 239 75 527 41 288 75 528 75 532 0 4 -71 8 -158 8 l-159 0 -72 -507z"/>
     </g>
    
    </svg>
  );
}