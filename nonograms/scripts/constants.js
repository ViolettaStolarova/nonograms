export const LATEST_SCORES_LOCALE_STORAGE_KEY = "latestScores";
export const SAVED_GAME_STATE_LOCALE_STORAGE_KEY = "savedGameState";

export const MAX_COMPLEXITY = 6;
export const FILLED_COMPLEXITY_STAR = "&#10022;";
export const UNFILLED_COMPLEXITY_STAR = "&#10023;";

export const TEMPLATE_SIZES = {
  5: 0,
  10: 5,
  15: 10,
};

export const SOUNDS = {
  click: "./assets/sounds/cell-click.mp3",
  xClick: "./assets/sounds/x-click.mp3",
  win: "./assets/sounds/win.mp3",
  notification: "./assets/sounds/notification.mp3",
}

export const STATISTICS_STRING_SVG_ELEMENT = `<svg class="svg statistics-img" version="1.0" xmlns="http://www.w3.org/2000/svg"
width="30" height="30" viewBox="0 0 920.000000 980.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
stroke="none">
<path d="M4295 9789 c-333 -79 -616 -275 -829 -573 -55 -77 -186 -324 -186
-351 0 -7 -35 -26 -82 -43 -253 -91 -437 -125 -993 -182 -550 -56 -786 -106
-1024 -216 -240 -112 -418 -275 -554 -509 l-47 -80 0 -3526 0 -3526 52 -81
c213 -326 565 -565 993 -677 l97 -25 2899 0 2899 0 136 45 c301 99 542 244
736 442 77 79 174 206 209 275 19 36 19 122 19 3556 l0 3518 -47 82 c-147 252
-356 429 -641 542 -215 85 -451 131 -932 180 -594 61 -826 104 -1042 192 l-57
24 -71 139 c-196 389 -483 647 -861 771 -83 27 -89 28 -359 30 -151 2 -293 -2
-315 -7z m490 -559 c204 -64 355 -197 416 -366 31 -84 31 -226 0 -309 -62
-169 -192 -288 -392 -356 -86 -30 -104 -33 -224 -33 -218 -1 -336 44 -476 184
-168 166 -208 334 -129 541 59 154 232 301 411 349 101 27 291 23 394 -10z
m-2403 -1079 c83 -410 343 -629 843 -708 95 -16 164 -17 515 -14 537 6 1168 6
1690 0 375 -3 439 -2 540 14 314 49 486 123 637 274 66 66 90 99 130 180 45
89 79 200 98 316 3 20 11 37 16 37 27 0 225 -56 309 -87 328 -122 561 -309
673 -538 61 -123 70 -171 77 -385 12 -345 11 -5636 0 -5730 -18 -141 -48 -250
-97 -349 -39 -79 -63 -112 -147 -198 -216 -225 -439 -322 -832 -363 -138 -15
-4015 -15 -4369 -1 -144 6 -269 16 -313 25 -394 85 -711 345 -823 674 -30 90
-33 109 -39 272 -8 221 -8 4939 0 5470 6 378 7 398 29 465 97 294 327 506 705
652 103 40 292 93 320 90 16 -2 22 -19 38 -96z"/>
<path d="M3400 6667 c-3 -2 -286 -7 -629 -11 l-625 -7 -35 -26 c-113 -83 -161
-159 -161 -253 0 -105 76 -212 190 -268 l55 -27 680 -5 c1868 -14 3631 -6
4047 18 136 8 150 11 200 39 78 44 112 103 116 202 3 59 -1 89 -18 133 -26 69
-95 149 -153 177 -41 19 -66 20 -1852 26 -996 3 -1813 4 -1815 2z"/>
<path d="M2231 5672 c-144 -29 -232 -92 -265 -190 -49 -142 20 -283 173 -356
l66 -31 555 -6 c305 -3 1384 -5 2397 -3 l1843 2 53 25 c108 49 177 151 185
273 2 41 -1 86 -7 107 -19 55 -66 113 -117 143 -45 27 -51 27 -283 37 -130 5
-1203 10 -2385 10 -1745 2 -2162 0 -2215 -11z"/>
<path d="M2248 4693 c-143 -24 -220 -66 -262 -143 -81 -149 -13 -331 152 -408
l57 -27 705 -5 c2043 -15 3473 -8 4010 19 169 8 197 16 258 75 19 17 40 43 48
57 74 142 -6 353 -159 419 l-52 23 -2342 1 c-1796 1 -2360 -1 -2415 -11z"/>
<path d="M2901 3719 l-754 -10 -48 -34 c-110 -82 -156 -163 -146 -263 9 -106
76 -195 185 -249 l57 -28 765 -8 c421 -5 1502 -6 2404 -2 1581 5 1640 6 1682
24 63 28 133 98 165 164 72 152 31 295 -105 364 l-51 27 -350 7 c-594 13
-3009 18 -3804 8z"/>
<path d="M4012 2669 c-402 -272 -784 -685 -1075 -1161 -40 -64 -75 -117 -78
-118 -3 0 -66 106 -140 235 -74 129 -138 234 -144 234 -5 0 -147 -69 -314
-153 l-304 -153 89 -53 c259 -156 588 -391 776 -554 48 -42 90 -76 92 -76 2 0
56 62 119 138 324 388 676 717 1005 940 94 64 112 80 112 101 0 14 -5 130 -10
256 -5 127 -10 276 -11 333 -1 56 -4 102 -8 102 -3 -1 -52 -32 -109 -71z"/>
</g>
</svg>`;

export const SETTINGS_STRING_SVG_ELEMENT = `<svg class="svg settings-img" version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="30" height="30" viewBox="0 0 920.000000 920.000000"
    preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
    stroke="none">
    <path d="M3177 9175 c-371 -60 -740 -223 -904 -398 -107 -114 -131 -201 -94
    -342 80 -317 55 -749 -59 -1001 -119 -265 -400 -451 -744 -494 -172 -22 -338
    -2 -546 64 -204 66 -241 67 -343 13 -101 -53 -194 -171 -295 -373 -106 -212
    -169 -429 -179 -619 -6 -123 6 -184 57 -284 40 -79 78 -110 219 -180 174 -87
    258 -147 401 -291 144 -144 201 -230 251 -380 29 -84 33 -111 37 -235 4 -159
    -8 -236 -57 -358 -62 -157 -184 -318 -336 -446 -112 -95 -191 -146 -320 -206
    -61 -29 -126 -65 -144 -80 -73 -62 -117 -210 -107 -356 12 -160 74 -379 163
    -572 198 -432 353 -533 685 -448 352 91 685 77 903 -37 126 -66 267 -228 345
    -395 55 -116 72 -206 73 -372 0 -176 -17 -266 -82 -413 -59 -134 -74 -192 -69
    -276 5 -91 26 -133 109 -221 156 -164 413 -305 739 -405 300 -92 476 -90 615
    5 58 40 90 85 149 216 142 317 424 567 731 650 115 31 345 31 460 0 164 -44
    312 -131 446 -263 107 -105 170 -194 250 -353 136 -271 215 -335 398 -321 199
    15 430 82 624 180 247 125 375 227 430 343 28 61 32 77 32 158 -1 83 -4 98
    -43 194 -72 175 -86 249 -86 446 1 202 16 274 94 430 84 170 221 326 345 392
    118 62 354 113 527 113 94 0 269 -27 388 -60 168 -46 219 -54 290 -41 86 16
    195 69 260 128 162 145 317 466 374 772 21 113 21 268 -1 323 -45 117 -139
    211 -273 274 -185 87 -243 126 -356 239 -142 142 -225 296 -266 495 -16 78
    -19 121 -15 240 3 87 11 168 21 202 53 191 143 344 287 488 116 116 187 165
    361 249 159 78 211 120 251 209 78 174 -88 790 -288 1067 -111 154 -198 209
    -330 210 -71 0 -89 -4 -162 -37 -185 -84 -329 -113 -548 -112 -175 0 -235 11
    -375 65 -287 110 -522 410 -581 739 -17 95 -14 291 6 384 15 73 29 115 88 266
    15 40 21 78 21 141 1 83 0 87 -38 145 -56 86 -201 224 -302 291 -116 75 -270
    143 -424 187 -164 46 -235 58 -351 60 -90 1 -98 -1 -144 -29 -52 -32 -150
    -141 -177 -197 -9 -18 -37 -76 -62 -128 -101 -209 -303 -398 -521 -486 -325
    -133 -669 -105 -936 77 -86 58 -243 217 -302 306 -26 39 -74 128 -106 197 -64
    135 -117 204 -185 238 -52 26 -164 32 -279 13z m1783 -2454 c434 -73 841 -284
    1152 -598 180 -181 300 -349 408 -568 157 -320 214 -571 214 -945 0 -155 -5
    -247 -17 -328 -110 -711 -589 -1344 -1237 -1633 -315 -141 -616 -199 -970
    -186 -316 12 -565 72 -835 203 -618 298 -1076 903 -1190 1570 -19 111 -36 365
    -30 436 2 29 7 93 10 143 38 562 365 1148 837 1502 319 238 633 366 1028 418
    150 20 467 13 630 -14z"/>
    </g>
    </svg>`;

    export const MUSIC_ON_STRING_SVG_ELEMENT = `<svg class="switch music-on" version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="30" height="30" viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">
    
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    stroke="none">
    <path d="M2727 4189 c-32 -11 -77 -31 -100 -46 -23 -14 -336 -212 -694 -440
    l-653 -415 0 -728 0 -728 694 -441 c399 -254 716 -450 747 -461 229 -80 475
    22 583 241 20 41 41 98 46 128 6 34 10 505 10 1275 0 1051 -2 1230 -15 1279
    -42 163 -161 290 -316 338 -84 26 -224 25 -302 -2z"/>
    <path d="M4138 3820 c-43 -23 -65 -51 -79 -102 -14 -55 3 -107 57 -170 167
    -194 291 -458 340 -723 26 -138 26 -392 0 -530 -49 -265 -173 -529 -340 -723
    -54 -63 -71 -115 -57 -169 15 -53 36 -80 83 -104 50 -25 116 -22 157 8 75 56
    218 257 304 429 320 634 243 1394 -198 1964 -106 136 -176 168 -267 120z"/>
    <path d="M681 3344 c-169 -45 -301 -180 -346 -351 -22 -85 -22 -783 0 -868 45
    -172 179 -305 352 -350 36 -9 104 -15 181 -15 l123 0 -7 23 c-4 12 -11 38 -15
    57 -5 19 -9 343 -9 720 0 377 4 701 9 720 4 19 11 45 15 58 l7 22 -128 -1
    c-78 0 -149 -6 -182 -15z"/>
    <path d="M3730 3319 c-60 -24 -100 -85 -100 -152 0 -37 9 -58 52 -123 114
    -174 152 -297 152 -484 0 -187 -38 -310 -152 -484 -44 -67 -52 -86 -52 -126 0
    -116 115 -190 223 -142 99 44 238 301 289 537 7 34 13 126 13 215 0 163 -9
    221 -52 355 -56 173 -174 363 -246 396 -46 20 -88 23 -127 8z"/>
    </g>
    </svg>
    `;

    export const MUSIC_OFF_STRING_SVG_ELEMENT = `</svg>
    <svg class="switch music-off" version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="30" height="30" viewBox="0 0 512.000000 512.000000"
     preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    stroke="none">
    <path d="M2727 4189 c-32 -11 -77 -31 -100 -46 -23 -14 -336 -212 -694 -440
    l-653 -415 0 -728 0 -728 694 -441 c399 -254 716 -450 747 -461 229 -80 475
    22 583 241 20 41 41 98 46 128 6 34 10 505 10 1275 0 1051 -2 1230 -15 1279
    -42 163 -161 290 -316 338 -84 26 -224 25 -302 -2z"/>
    <path d="M681 3344 c-169 -45 -301 -180 -346 -351 -22 -85 -22 -783 0 -868 45
    -172 179 -305 352 -350 36 -9 104 -15 181 -15 l123 0 -7 23 c-4 12 -11 38 -15
    57 -5 19 -9 343 -9 720 0 377 4 701 9 720 4 19 11 45 15 58 l7 22 -128 -1
    c-78 0 -149 -6 -182 -15z"/>
    <path d="M3632 3193 c-39 -8 -99 -76 -107 -122 -14 -82 -7 -92 208 -308 l201
    -203 -201 -202 c-215 -217 -225 -231 -208 -310 21 -93 123 -151 212 -118 15 6
    117 100 226 208 l197 197 198 -197 c108 -108 210 -202 225 -208 92 -34 194 27
    213 127 13 71 2 88 -209 301 l-202 202 197 198 c108 108 202 210 208 225 34
    92 -27 194 -127 213 -71 13 -88 2 -301 -209 l-202 -202 -198 197 c-108 108
    -210 202 -225 208 -28 10 -62 11 -105 3z"/>
    </g>
    </svg>
    `;

    export const SOLUTION_STRING_SVG_ELEMENT = `<svg class="svg hint-img" version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="25" height="25" viewBox="0 0 920.000000 980.000000"
    preserveAspectRatio="xMidYMid meet">
    
    <g transform="translate(0.000000,980.000000) scale(0.100000,-0.100000)"
    stroke="none">
    
    <path d="M4526 9786 c-54 -20 -85 -45 -121 -95 l-30 -43 -3 -524 c-1 -328 1
    -539 7 -562 24 -85 128 -162 221 -162 92 0 197 76 220 160 6 21 10 243 10 540
    0 297 -4 519 -10 540 -13 48 -63 106 -112 131 -53 27 -132 33 -182 15z"/>
    <path d="M1551 8556 c-88 -32 -151 -122 -151 -217 1 -100 13 -116 388 -492
    191 -191 361 -357 377 -367 114 -71 270 -28 329 92 30 61 35 138 11 196 -11
    25 -133 155 -373 396 -384 385 -410 406 -502 405 -25 0 -60 -6 -79 -13z"/>
    <path d="M7510 8561 c-61 -20 -104 -59 -442 -398 -240 -240 -362 -370 -373
    -395 -23 -56 -19 -134 9 -195 54 -115 201 -162 320 -102 11 6 180 169 375 363
    274 272 359 362 377 401 55 116 12 250 -99 306 -44 23 -128 33 -167 20z"/>
    <path d="M4410 7693 c-919 -69 -1745 -677 -2084 -1533 -249 -631 -233 -1310
    44 -1875 115 -235 237 -408 569 -808 100 -120 215 -263 257 -318 235 -311 375
    -603 433 -903 30 -153 30 -153 -23 -167 -55 -14 -120 -67 -147 -122 -66 -128
    17 -295 161 -326 71 -15 1889 -15 1960 0 145 31 228 197 162 325 -28 55 -92
    109 -148 124 l-46 13 7 61 c10 81 58 276 88 358 117 309 240 499 618 955 332
    400 454 573 569 808 208 424 269 898 180 1400 -97 549 -399 1073 -825 1432
    -493 416 -1136 624 -1775 576z m-430 -558 c58 -30 90 -84 90 -155 0 -93 -32
    -129 -171 -193 -325 -151 -599 -404 -773 -715 -55 -98 -122 -260 -151 -362
    -28 -100 -75 -151 -153 -166 -73 -14 -169 43 -193 113 -16 49 -7 109 36 238
    147 441 463 842 855 1086 97 60 313 166 350 172 33 5 79 -3 110 -18z"/>
    <path d="M305 5576 c-123 -57 -170 -192 -109 -314 32 -65 92 -109 169 -123 34
    -6 238 -9 538 -7 439 3 486 5 522 21 156 70 188 265 63 384 -65 63 -67 63
    -627 63 l-506 0 -50 -24z"/>
    <path d="M7791 5586 c-48 -17 -108 -71 -132 -118 -44 -86 -18 -213 54 -274 71
    -60 59 -59 584 -62 300 -2 504 1 538 7 77 14 137 58 169 123 60 121 13 258
    -108 314 l-51 24 -510 -1 c-374 0 -519 -4 -544 -13z"/>
    <path d="M2195 3266 c-39 -18 -130 -105 -407 -382 -240 -241 -362 -371 -373
    -396 -38 -92 -2 -221 77 -278 76 -55 186 -58 265 -6 21 13 192 179 380 368
    369 370 382 387 383 486 0 93 -48 168 -135 208 -65 31 -126 31 -190 0z"/>
    <path d="M6831 3276 c-88 -32 -151 -122 -151 -217 1 -100 13 -116 388 -492
    191 -191 361 -357 377 -367 77 -48 183 -45 260 8 81 56 118 186 80 280 -11 25
    -133 155 -373 396 -384 385 -410 406 -502 405 -25 0 -60 -6 -79 -13z"/>
    <path d="M3621 1509 c-150 -29 -229 -199 -158 -335 23 -44 89 -98 136 -112 28
    -9 300 -12 1003 -12 1066 0 1018 -3 1086 63 52 50 75 103 75 172 0 103 -57
    182 -155 216 -50 17 -109 18 -998 18 -520 -1 -965 -5 -989 -10z"/>
    <path d="M3561 904 c-152 -76 -171 -293 -34 -387 40 -27 82 -39 201 -56 127
    -19 210 -79 277 -201 70 -128 198 -224 334 -250 70 -13 452 -13 522 0 136 26
    264 122 335 251 72 132 163 190 330 209 101 11 161 41 199 98 78 118 38 274
    -86 336 l-53 26 -986 0 -986 0 -53 -26z"/>
    </g>
    </svg>
    <div class="solution">Solution</div>
    `