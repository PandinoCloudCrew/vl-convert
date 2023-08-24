var H="vega-themes",Q="2.14.0",R="Themes for stylized Vega and Vega-Lite visualizations.",K=["vega","vega-lite","themes","style"],N="BSD-3-Clause",Z={name:"UW Interactive Data Lab",url:"https://idl.cs.washington.edu"},ee=[{name:"Emily Gu",url:"https://github.com/emilygu"},{name:"Arvind Satyanarayan",url:"http://arvindsatya.com"},{name:"Jeffrey Heer",url:"https://idl.cs.washington.edu"},{name:"Dominik Moritz",url:"https://www.domoritz.de"}],te="build/vega-themes.js",oe="build/vega-themes.module.js",le="build/vega-themes.min.js",ae="build/vega-themes.min.js",ie="build/vega-themes.module.d.ts",re={type:"git",url:"https://github.com/vega/vega-themes.git"},ne=["src","build"],se={prebuild:"yarn clean",build:"rollup -c",clean:"rimraf build && rimraf examples/build","copy:data":"rsync -r node_modules/vega-datasets/data/* examples/data","copy:build":"rsync -r build/* examples/build","deploy:gh":"yarn build && mkdir -p examples/build && rsync -r build/* examples/build && gh-pages -d examples",preversion:"yarn lint",serve:"browser-sync start -s -f build examples --serveStatic examples",start:"yarn build && concurrently --kill-others -n Server,Rollup 'yarn serve' 'rollup -c -w'",format:"eslint . --fix",lint:"eslint .",release:"release-it"},de={"@babel/core":"^7.22.9","@babel/plugin-proposal-async-generator-functions":"^7.20.7","@babel/plugin-proposal-json-strings":"^7.18.6","@babel/plugin-proposal-object-rest-spread":"^7.20.7","@babel/plugin-proposal-optional-catch-binding":"^7.18.6","@babel/plugin-transform-runtime":"^7.22.9","@babel/preset-env":"^7.22.9","@babel/preset-typescript":"^7.22.5","@release-it/conventional-changelog":"^7.0.0","@rollup/plugin-json":"^6.0.0","@rollup/plugin-node-resolve":"^15.1.0","@rollup/plugin-terser":"^0.4.3","@typescript-eslint/eslint-plugin":"^6.0.0","@typescript-eslint/parser":"^6.0.0","browser-sync":"^2.29.3",concurrently:"^8.2.0",eslint:"^8.45.0","eslint-config-prettier":"^8.8.0","eslint-plugin-prettier":"^5.0.0","gh-pages":"^5.0.0",prettier:"^3.0.0","release-it":"^16.1.0",rollup:"^3.26.2","rollup-plugin-bundle-size":"^1.0.3","rollup-plugin-ts":"^3.2.0",typescript:"^5.1.6",vega:"^5.25.0","vega-lite":"^5.9.3"},ce={vega:"*","vega-lite":"*"},fe={},ge={name:H,version:Q,description:R,keywords:K,license:N,author:Z,contributors:ee,main:te,module:oe,unpkg:le,jsdelivr:ae,types:ie,repository:re,files:ne,scripts:se,devDependencies:de,peerDependencies:ce,dependencies:fe};const f="#fff",B="#888",be={background:"#333",view:{stroke:B},title:{color:f,subtitleColor:f},style:{"guide-label":{fill:f},"guide-title":{fill:f}},axis:{domainColor:f,gridColor:B,tickColor:f}},l="#4572a7",pe={background:"#fff",arc:{fill:l},area:{fill:l},line:{stroke:l,strokeWidth:2},path:{stroke:l},rect:{fill:l},shape:{stroke:l},symbol:{fill:l,strokeWidth:1.5,size:50},axis:{bandPosition:.5,grid:!0,gridColor:"#000000",gridOpacity:1,gridWidth:.5,labelPadding:10,tickSize:5,tickWidth:.5},axisBand:{grid:!1,tickExtra:!0},legend:{labelBaseline:"middle",labelFontSize:11,symbolSize:50,symbolType:"square"},range:{category:["#4572a7","#aa4643","#8aa453","#71598e","#4598ae","#d98445","#94aace","#d09393","#b9cc98","#a99cbc"]}},a="#30a2da",v="#cbcbcb",ue="#999",he="#333",E="#f0f0f0",W="#333",me={arc:{fill:a},area:{fill:a},axis:{domainColor:v,grid:!0,gridColor:v,gridWidth:1,labelColor:ue,labelFontSize:10,titleColor:he,tickColor:v,tickSize:10,titleFontSize:14,titlePadding:10,labelPadding:4},axisBand:{grid:!1},background:E,group:{fill:E},legend:{labelColor:W,labelFontSize:11,padding:1,symbolSize:30,symbolType:"square",titleColor:W,titleFontSize:14,titlePadding:10},line:{stroke:a,strokeWidth:2},path:{stroke:a,strokeWidth:.5},rect:{fill:a},range:{category:["#30a2da","#fc4f30","#e5ae38","#6d904f","#8b8b8b","#b96db8","#ff9e27","#56cc60","#52d2ca","#52689e","#545454","#9fe4f8"],diverging:["#cc0020","#e77866","#f6e7e1","#d6e8ed","#91bfd9","#1d78b5"],heatmap:["#d6e8ed","#cee0e5","#91bfd9","#549cc6","#1d78b5"]},point:{filled:!0,shape:"circle"},shape:{stroke:a},bar:{binSpacing:2,fill:a,stroke:null},title:{anchor:"start",fontSize:24,fontWeight:600,offset:20}},i="#000",Ce={group:{fill:"#e5e5e5"},arc:{fill:i},area:{fill:i},line:{stroke:i},path:{stroke:i},rect:{fill:i},shape:{stroke:i},symbol:{fill:i,size:40},axis:{domain:!1,grid:!0,gridColor:"#FFFFFF",gridOpacity:1,labelColor:"#7F7F7F",labelPadding:4,tickColor:"#7F7F7F",tickSize:5.67,titleFontSize:16,titleFontWeight:"normal"},legend:{labelBaseline:"middle",labelFontSize:11,symbolSize:40},range:{category:["#000000","#7F7F7F","#1A1A1A","#999999","#333333","#B0B0B0","#4D4D4D","#C9C9C9","#666666","#DCDCDC"]}},ke=22,Fe="normal",A="Benton Gothic, sans-serif",w=11.5,ye="normal",r="#82c6df",z="Benton Gothic Bold, sans-serif",T="normal",P=13,b={"category-6":["#ec8431","#829eb1","#c89d29","#3580b1","#adc839","#ab7fb4"],"fire-7":["#fbf2c7","#f9e39c","#f8d36e","#f4bb6a","#e68a4f","#d15a40","#ab4232"],"fireandice-6":["#e68a4f","#f4bb6a","#f9e39c","#dadfe2","#a6b7c6","#849eae"],"ice-7":["#edefee","#dadfe2","#c4ccd2","#a6b7c6","#849eae","#607785","#47525d"]},ve={background:"#ffffff",title:{anchor:"start",color:"#000000",font:z,fontSize:ke,fontWeight:Fe},arc:{fill:r},area:{fill:r},line:{stroke:r,strokeWidth:2},path:{stroke:r},rect:{fill:r},shape:{stroke:r},symbol:{fill:r,size:30},axis:{labelFont:A,labelFontSize:w,labelFontWeight:ye,titleFont:z,titleFontSize:P,titleFontWeight:T},axisX:{labelAngle:0,labelPadding:4,tickSize:3},axisY:{labelBaseline:"middle",maxExtent:45,minExtent:45,tickSize:2,titleAlign:"left",titleAngle:0,titleX:-45,titleY:-11},legend:{labelFont:A,labelFontSize:w,symbolType:"square",titleFont:z,titleFontSize:P,titleFontWeight:T},range:{category:b["category-6"],diverging:b["fireandice-6"],heatmap:b["fire-7"],ordinal:b["fire-7"],ramp:b["fire-7"]}},n="#ab5787",m="#979797",ze={background:"#f9f9f9",arc:{fill:n},area:{fill:n},line:{stroke:n},path:{stroke:n},rect:{fill:n},shape:{stroke:n},symbol:{fill:n,size:30},axis:{domainColor:m,domainWidth:.5,gridWidth:.2,labelColor:m,tickColor:m,tickWidth:.2,titleColor:m},axisBand:{grid:!1},axisX:{grid:!0,tickSize:10},axisY:{domain:!1,grid:!0,tickSize:0},legend:{labelFontSize:11,padding:1,symbolSize:30,symbolType:"square"},range:{category:["#ab5787","#51b2e5","#703c5c","#168dd9","#d190b6","#00609f","#d365ba","#154866","#666666","#c4c4c4"]}},s="#3e5c69",Se={background:"#fff",arc:{fill:s},area:{fill:s},line:{stroke:s},path:{stroke:s},rect:{fill:s},shape:{stroke:s},symbol:{fill:s},axis:{domainWidth:.5,grid:!0,labelPadding:2,tickSize:5,tickWidth:.5,titleFontWeight:"normal"},axisBand:{grid:!1},axisX:{gridWidth:.2},axisY:{gridDash:[3],gridWidth:.4},legend:{labelFontSize:11,padding:1,symbolType:"square"},range:{category:["#3e5c69","#6793a6","#182429","#0570b0","#3690c0","#74a9cf","#a6bddb","#e2ddf2"]}},e="#1696d2",$="#000000",xe="#FFFFFF",C="Lato",S="Lato",De="Lato",Be="#DEDDDD",Ee=18,p={"main-colors":["#1696d2","#d2d2d2","#000000","#fdbf11","#ec008b","#55b748","#5c5859","#db2b27"],"shades-blue":["#CFE8F3","#A2D4EC","#73BFE2","#46ABDB","#1696D2","#12719E","#0A4C6A","#062635"],"shades-gray":["#F5F5F5","#ECECEC","#E3E3E3","#DCDBDB","#D2D2D2","#9D9D9D","#696969","#353535"],"shades-yellow":["#FFF2CF","#FCE39E","#FDD870","#FCCB41","#FDBF11","#E88E2D","#CA5800","#843215"],"shades-magenta":["#F5CBDF","#EB99C2","#E46AA7","#E54096","#EC008B","#AF1F6B","#761548","#351123"],"shades-green":["#DCEDD9","#BCDEB4","#98CF90","#78C26D","#55B748","#408941","#2C5C2D","#1A2E19"],"shades-black":["#D5D5D4","#ADABAC","#848081","#5C5859","#332D2F","#262223","#1A1717","#0E0C0D"],"shades-red":["#F8D5D4","#F1AAA9","#E9807D","#E25552","#DB2B27","#A4201D","#6E1614","#370B0A"],"one-group":["#1696d2","#000000"],"two-groups-cat-1":["#1696d2","#000000"],"two-groups-cat-2":["#1696d2","#fdbf11"],"two-groups-cat-3":["#1696d2","#db2b27"],"two-groups-seq":["#a2d4ec","#1696d2"],"three-groups-cat":["#1696d2","#fdbf11","#000000"],"three-groups-seq":["#a2d4ec","#1696d2","#0a4c6a"],"four-groups-cat-1":["#000000","#d2d2d2","#fdbf11","#1696d2"],"four-groups-cat-2":["#1696d2","#ec0008b","#fdbf11","#5c5859"],"four-groups-seq":["#cfe8f3","#73bf42","#1696d2","#0a4c6a"],"five-groups-cat-1":["#1696d2","#fdbf11","#d2d2d2","#ec008b","#000000"],"five-groups-cat-2":["#1696d2","#0a4c6a","#d2d2d2","#fdbf11","#332d2f"],"five-groups-seq":["#cfe8f3","#73bf42","#1696d2","#0a4c6a","#000000"],"six-groups-cat-1":["#1696d2","#ec008b","#fdbf11","#000000","#d2d2d2","#55b748"],"six-groups-cat-2":["#1696d2","#d2d2d2","#ec008b","#fdbf11","#332d2f","#0a4c6a"],"six-groups-seq":["#cfe8f3","#a2d4ec","#73bfe2","#46abdb","#1696d2","#12719e"],"diverging-colors":["#ca5800","#fdbf11","#fdd870","#fff2cf","#cfe8f3","#73bfe2","#1696d2","#0a4c6a"]},We={background:xe,title:{anchor:"start",fontSize:Ee,font:C},axisX:{domain:!0,domainColor:$,domainWidth:1,grid:!1,labelFontSize:12,labelFont:S,labelAngle:0,tickColor:$,tickSize:5,titleFontSize:12,titlePadding:10,titleFont:C},axisY:{domain:!1,domainWidth:1,grid:!0,gridColor:Be,gridWidth:1,labelFontSize:12,labelFont:S,labelPadding:8,ticks:!1,titleFontSize:12,titlePadding:10,titleFont:C,titleAngle:0,titleY:-10,titleX:18},legend:{labelFontSize:12,labelFont:S,symbolSize:100,titleFontSize:12,titlePadding:10,titleFont:C,orient:"right",offset:10},view:{stroke:"transparent"},range:{category:p["six-groups-cat-1"],diverging:p["diverging-colors"],heatmap:p["diverging-colors"],ordinal:p["six-groups-seq"],ramp:p["shades-blue"]},area:{fill:e},rect:{fill:e},line:{color:e,stroke:e,strokeWidth:5},trail:{color:e,stroke:e,strokeWidth:0,size:1},path:{stroke:e,strokeWidth:.5},point:{filled:!0},text:{font:De,color:e,fontSize:11,align:"center",fontWeight:400,size:11},style:{bar:{fill:e,stroke:null}},arc:{fill:e},shape:{stroke:e},symbol:{fill:e,size:30}},d="#3366CC",q="#ccc",k="Arial, sans-serif",Ae={arc:{fill:d},area:{fill:d},path:{stroke:d},rect:{fill:d},shape:{stroke:d},symbol:{stroke:d},circle:{fill:d},background:"#fff",padding:{top:10,right:10,bottom:10,left:10},style:{"guide-label":{font:k,fontSize:12},"guide-title":{font:k,fontSize:12},"group-title":{font:k,fontSize:12}},title:{font:k,fontSize:14,fontWeight:"bold",dy:-3,anchor:"start"},axis:{gridColor:q,tickColor:q,domain:!1,grid:!0},range:{category:["#4285F4","#DB4437","#F4B400","#0F9D58","#AB47BC","#00ACC1","#FF7043","#9E9D24","#5C6BC0","#F06292","#00796B","#C2185B"],heatmap:["#c6dafc","#5e97f6","#2a56c6"]}},x=c=>c*(1/3+1),j=x(9),L=x(10),X=x(12),u="Segoe UI",Y="wf_standard-font, helvetica, arial, sans-serif",M="#252423",h="#605E5C",I="transparent",we="#C8C6C4",t="#118DFF",Te="#12239E",Pe="#E66C37",$e="#6B007B",qe="#E044A7",je="#744EC2",Le="#D9B300",Xe="#D64550",G=t,J="#DEEFFF",O=[J,G],Ye=[J,"#c7e4ff","#b0d9ff","#9aceff","#83c3ff","#6cb9ff","#55aeff","#3fa3ff","#2898ff",G],Me={view:{stroke:I},background:I,font:u,header:{titleFont:Y,titleFontSize:X,titleColor:M,labelFont:u,labelFontSize:L,labelColor:h},axis:{ticks:!1,grid:!1,domain:!1,labelColor:h,labelFontSize:j,titleFont:Y,titleColor:M,titleFontSize:X,titleFontWeight:"normal"},axisQuantitative:{tickCount:3,grid:!0,gridColor:we,gridDash:[1,5],labelFlush:!1},axisBand:{tickExtra:!0},axisX:{labelPadding:5},axisY:{labelPadding:10},bar:{fill:t},line:{stroke:t,strokeWidth:3,strokeCap:"round",strokeJoin:"round"},text:{font:u,fontSize:j,fill:h},arc:{fill:t},area:{fill:t,line:!0,opacity:.6},path:{stroke:t},rect:{fill:t},point:{fill:t,filled:!0,size:75},shape:{stroke:t},symbol:{fill:t,strokeWidth:1.5,size:50},legend:{titleFont:u,titleFontWeight:"bold",titleColor:h,labelFont:u,labelFontSize:L,labelColor:h,symbolType:"circle",symbolSize:75},range:{category:[t,Te,Pe,$e,qe,je,Le,Xe],diverging:O,heatmap:O,ordinal:Ye}},D='IBM Plex Sans,system-ui,-apple-system,BlinkMacSystemFont,".sfnstext-regular",sans-serif',U=400,Ie=["#8a3ffc","#33b1ff","#007d79","#ff7eb6","#fa4d56","#fff1f1","#6fdc8c","#4589ff","#d12771","#d2a106","#08bdba","#bae6ff","#ba4e00","#d4bbff"],Ge=["#6929c4","#1192e8","#005d5d","#9f1853","#fa4d56","#570408","#198038","#002d9c","#ee538b","#b28600","#009d9a","#012749","#8a3800","#a56eff"];function F({type:c,background:V}){const y=c==="dark"?"#161616":"#ffffff",g=c==="dark"?"#f4f4f4":"#161616",_=c==="dark"?Ie:Ge,o=c==="dark"?"#d4bbff":"#6929c4";return{background:V,arc:{fill:o},area:{fill:o},path:{stroke:o},rect:{fill:o},shape:{stroke:o},symbol:{stroke:o},circle:{fill:o},view:{fill:y,stroke:y},group:{fill:y},title:{color:g,anchor:"start",dy:-15,fontSize:16,font:D,fontWeight:600},axis:{labelColor:g,labelFontSize:12,grid:!0,gridColor:"#525252",titleColor:g,labelAngle:0},style:{"guide-label":{font:D,fill:g,fontWeight:U},"guide-title":{font:D,fill:g,fontWeight:U}},range:{category:_,diverging:["#750e13","#a2191f","#da1e28","#fa4d56","#ff8389","#ffb3b8","#ffd7d9","#fff1f1","#e5f6ff","#bae6ff","#82cfff","#33b1ff","#1192e8","#0072c3","#00539a","#003a6d"],heatmap:["#f6f2ff","#e8daff","#d4bbff","#be95ff","#a56eff","#8a3ffc","#6929c4","#491d8b","#31135e","#1c0f30"]}}}const Je=F({type:"light",background:"#ffffff"}),Oe=F({type:"light",background:"#f4f4f4"}),Ue=F({type:"dark",background:"#262626"}),Ve=F({type:"dark",background:"#161616"}),_e=ge.version;export{Oe as carbong10,Ve as carbong100,Ue as carbong90,Je as carbonwhite,be as dark,pe as excel,me as fivethirtyeight,Ce as ggplot2,Ae as googlecharts,ve as latimes,Me as powerbi,ze as quartz,We as urbaninstitute,_e as version,Se as vox};export default null;