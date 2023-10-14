
// navigition qismi

let nav=[
    {text:"Katalog",href:"#"},
    {text:"Aksiya",href:"#"},
    {text:"Biz haqimizda",href:"#"},
    {text:"Manzilimiz",href:"#"},
    {text:"Aloqa",href:"#"},
];

const ulEl=document.getElementById("nav-list")

nav.forEach((item)=>{
    let liEl=document.createElement("li")
    let aEl=document.createElement("a")
    aEl.textContent=item.text;
    aEl.setAttribute("href",item.href)
    liEl.appendChild(aEl)
    ulEl.appendChild(liEl)
});


// Bizning mahsulotlar

let products=[
    {text:"Barchasi",href:"#"},
    {text:"Model A+",href:"#"},
    {text:"Model B+",href:"#"},
    {text:"Model C+",href:"#"},
    {text:"Model D+",href:"#"},
    {text:"Model G+",href:"#"},
    {text:"Model R+",href:"#"},
    {text:"Model K+",href:"#"},
    {text:"Model H+",href:"#"},
    {text:"Model F+",href:"#"},
];

let ulpro=document.getElementById("products__type")

products.forEach((item)=>{
    let liEl=document.createElement("li")
    let aEl=document.createElement("a")
    aEl.textContent=item.text
    aEl.setAttribute("href",item.href)
    liEl.appendChild(aEl)
    ulpro.appendChild(liEl)
});


// footer

let footerNav=[
    {text:"Katalog",href:"#"},
    {text:"Aksiya",href:"#"},
    {text:"Biz haqimizda",href:"#"},
    {text:"Manzilimiz",href:"#"},
];

let ulfooter=document.getElementById("footer__navigation")

footerNav.forEach((item)=>{
    let liEl=document.createElement("li")
    let aEl=document.createElement("a")
    aEl.textContent=item.text
    aEl.setAttribute("href",item.href)
    liEl.appendChild(aEl)
    ulfooter.appendChild(liEl)
});


