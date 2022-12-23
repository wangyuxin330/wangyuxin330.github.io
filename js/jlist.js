var dramatext1=[{
    img:"./img/drama1.jpg",
    title:"柴可夫斯基三大经典《天鹅湖》...",
    price:"¥180",
},{
    img:"./img/drama2.jpg",
    title:"央华·保利剧场戏剧节《情书》...",
    price:"¥80",
},{
    img:"./img/drama3.jpg",
    title:"【沉浸式喜剧】互动新春巨制...",
    price:"¥20",
}]
var jlist1=document.querySelector(".jlist1");
dramatext1.forEach((v,i)=>{
    var text=document.createElement("li");
    text.innerHTML=`
    <img src="${v.img}">
    <p>${v["title"]}</p>
    <p><span class="price">${v.price}</span>起</p>
    `;
    jlist1.appendChild(text);
})

var dramatext2=[{
    img:"./img/drama4.jpg",
    title:"《三里屯脱口秀》【大笑喜剧】...",
    price:"¥60",
},{
    img:"./img/drama5.jpg",
    title:"【笑脱喜剧】国贸万达精品|爆笑...",
    price:"¥60",
},{
    img:"./img/drama6.jpg",
    title:"草台喜剧脱口秀-万达影城CBD店",
    price:"¥69",
}]
var jlist2=document.querySelector(".jlist2");
dramatext2.forEach((v,i)=>{
    var text=document.createElement("li");
    text.innerHTML=`
    <img src="${v.img}">
    <p>${v["title"]}</p>
    <p><span class="price">${v.price}</span>起</p>
    `;
    jlist2.appendChild(text);
})

var dramatext3=[{
    "img":"./img/week10.jpg",
    "title":"【Laugh喜剧】脱口秀开放麦...",
    "price":"¥19.9",
},{
    "img":"./img/week8.jpg",
    "title":"波波笑剧场-大悦城店 爆笑",
    "price":"¥59",
},{
    "img":"./img/week7.jpg",
    "title":"重磅爆笑感动沉浸式话剧《夜...",
    "price":"¥99",
}]
var jlist3=document.querySelector(".jlist3");
dramatext3.forEach((v,i)=>{
    var text=document.createElement("li");
    text.innerHTML=`
    <img src="${v.img}">
    <p>${v["title"]}</p>
    <p><span class="price">${v.price}</span>起</p>
    `;
    jlist3.appendChild(text);
})

var dramatext4=[{
    img:"./img/station1.jpg",
    title:"音乐剧《基督山伯爵》中文版",
    price:"¥80",
    time:"2022.12.19-12.26"
},{
    img:"./img/drama10.jpg",
    title:"开心麻花首个戏剧live秀《燃烧》",
    price:"¥180",
    time:"2022.12.22-20..."
},{
    img:"./img/drama11.jpg",
    title:"买一送一|开心麻花2022重返青春...",
    price:"¥80",
    time:"2022.12.22-12.31" 
}]
var jlist4=document.querySelector(".jlist4");
dramatext4.forEach((v,i)=>{
    var text=document.createElement("li");
    text.innerHTML=`
    <img src="${v.img}">
    <p>${v["title"]}</p>
    <p><span class="price">${v.price}</span>起</p>
    <p>${v.time}</p>
    `;
    jlist4.appendChild(text);
})

var dramatext5=[{
    img:"./img/station1.jpg",
    title:"音乐剧《基督山伯爵》中文版",
    price:"¥80",
},{
    img:"./img/drama12.jpg",
    title:"开心麻花钢琴LIVE音乐剧《致命旋...",
    price:"¥180",
},{
    img:"./img/drama3.jpg",
    title:"【沉浸式喜剧】互动新春巨制...",
    price:"¥20",
}]
var jlist5=document.querySelector(".jlist5");
dramatext5.forEach((v,i)=>{
    var text=document.createElement("li");
    text.innerHTML=`
    <img src="${v.img}">
    <p>${v["title"]}</p>
    <p><span class="price">${v.price}</span>起</p>
    `;
    jlist5.appendChild(text);
})
var dramatext6=[{
    img:"./img/month4.jpg",
    title:"爱乐之城——经典电影音乐...",
    price:"¥100",
},{
    img:"./img/month5.jpg",
    title:"Laugh喜剧|周末爆笑脱口秀...",
    price:"¥80",
},{
    img:"./img/month6.jpg",
    title:"【搞笑圈脱口秀】沈阳本土...",
    price:"¥15.8",
}]
var jlist6=document.querySelector(".jlist6");
dramatext6.forEach((v,i)=>{
    var text=document.createElement("li");
    text.innerHTML=`
    <img src="${v.img}">
    <p>${v["title"]}</p>
    <p><span class="price">${v.price}</span>起</p>
    `;
    jlist6.appendChild(text);
})