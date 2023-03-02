const content = document.querySelector('.content_market');
const preview = document.querySelector('.preview');
const blackBlock = document.querySelector(".blackBlock");
const butMid = document.querySelector(".but_Mid");
const butLeft = document.querySelector(".but_Mid");


let data = [
    {id: "1", name: "rick", type:"t-shirt", url: "https://i.etsystatic.com/18117093/r/il/0f8089/4613616573/il_1588xN.4613616573_ctld.jpg"},
    {id: "2", name: "rick", type:"t-shirt",  url: "https://i.etsystatic.com/36187907/r/il/8fdd16/4121971735/il_1588xN.4121971735_l126.jpg"},
    {id: "3", name: "rick", type:"t-shirt", url: "https://i.etsystatic.com/35886940/r/il/f789f0/4239143839/il_1588xN.4239143839_5vq4.jpg"},
    {id: "4", name: "rick", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/1/1933/1933179/previews/people_1_mansmockfull_front_black_500.jpg"},
    {id: "5", name: "rick", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/1/1966/1966451/previews/people_1_mansmockfull_front_red_700.jpg"},
    {id: "6", name: "rick", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/1/1853/1853049/previews/people_2_smock_front_dustypink_700.jpg"},
    {id: "7", name: "rick", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/1/1988/1988199/previews/people_7_man_hoodie_oversize_front_darkblue_500.jpg"},
    {id: "8", name: "rick", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/1/1853/1853049/previews/people_7_man_hoodie_oversize_front_lightgreen_700.jpg"},
    {id: "9", name: "rick", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/1/1988/1988995/previews/people_7_man_hoodie_oversize_front_melange_500.jpg"},
    {id: "10", name: "rick", type: "accessories", url: "https://s5-goods.ozstatic.by/480/248/636/10/10636248_0_Kruzhka_Rik_i_Morti_krasnaya_art_652.jpg"},
    {id: "11", name: "rick", type: "accessories", url: "https://i.siteapi.org/fD__teu7UknbMASB5IbKNxWensI=/fit-in/660x0/top/filters:format(webp):no_upscale()/s2.siteapi.org/d02f2e58372c46a/img/ik3jsmptofkscoc84ck4004ckooo08"},
    {id: "12", name: "rick", type: "accessories",url: "https://comiczera.ru/wa-data/public/shop/products/00/webp/56/56/5656/images/11273/11273.750.webp"},
    {id: "13", name: "morty",type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/2/2604/2604707/previews/people_11_man_tshirt_sport_front_white_700.jpg"},
    {id: "14", name: "morty",type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/2/2728/2728553/previews/people_5_man_tshirt_premium_front_white_500.jpg"},
    {id: "15", name: "morty",type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/3/3284/3284073/previews/people_5_man_tshirt_premium_front_white_700.jpg"},
    {id: "16", name: "morty",type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2604/2604937/previews/people_2_smock_front_beige_700.jpg"},
    {id: "17", name: "morty",type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2459/2459873/previews/people_2_smock_front_lightgreen_700.jpg"},
    {id: "18", name: "morty",type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2604/2604931/previews/people_2_smock_front_white_500.jpg"},
    {id: "19", name: "morty",type: "hoodie",url: "https://storage.vsemayki.ru/images/0/1/1953/1953933/previews/people_7_man_hoodie_oversize_front_beige_700.jpg"},
    {id: "20", name: "morty",type: "hoodie",url: "https://storage.vsemayki.ru/images/0/2/2728/2728553/previews/people_7_man_hoodie_oversize_front_black_700.jpg"},
    {id: "21", name: "morty",type: "hoodie",url: "https://storage.vsemayki.ru/images/0/1/1856/1856947/previews/people_7_man_hoodie_oversize_front_melange_500.jpg"},
    {id: "22", name: "morty",type: "accessories", url: "https://cherdakk-market.ru/wa-data/public/shop/products/98/72/7298/images/8924/8924.750@2x.jpg"},
    {id: "23", name: "morty",type: "accessories", url: "https://avatars.mds.yandex.net/get-mpic/5221865/img_id7337037206031002932.jpeg/orig"},
    {id: "24", name: "morty",type: "accessories", url: "https://storage.vsemayki.ru/images/0/2/2705/2705993/previews/people_1_sleep_mask_front_white_700.jpg"},
    {id: "25", name: "bet", type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/2/2604/2604853/previews/people_2_tshirt_oversize_front_terracotta_700.jpg"},
    {id: "26", name: "bet", type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/2/2461/2461191/previews/people_4_womanshort_oversize_front_lightgreen_700.jpg"},
    {id: "27", name: "bet", type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/1/1953/1953373/previews/people_5_womens_t_shirts_slim_fullprint_front_white_700.jpg"},
    {id: "28", name: "bet", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2461/2461171/previews/people_11_longsleeves_oversize_front_white_700.jpg"},
    {id: "29", name: "bet", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2604/2604853/previews/people_11_longsleeves_oversize_front_melange_700.jpg"},
    {id: "30", name: "bet", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2604/2604907/previews/people_2_smock_front_black_700.jpg"},
    {id: "31", name: "bet", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/2/2461/2461171/previews/people_7_man_hoodie_oversize_front_red_700.jpg"},
    {id: "32", name: "bet", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/2/2461/2461191/previews/people_16_woman_hoodie_front_melangeburgundy_700.jpg"},
    {id: "33", name: "bet", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/1/1929/1929989/previews/people_7_man_hoodie_oversize_front_dustypink_700.jpg"},
    {id: "34", name: "bet", type: "accessories", url: "https://storage.vsemayki.ru/images/0/2/2611/2611847/previews/people_3_Bumbag_front_white_500.jpg" },
    {id: "35", name: "bet", type: "accessories", url: "https://storage.vsemayki.ru/images/0/2/2604/2604861/previews/people_12_plaid_front_3D_wellsoft_500.jpg" },
    {id: "36", name: "bet", type: "accessories", url: "https://storage.vsemayki.ru/images/0/2/2604/2604861/previews/people_1_laptop_bags_front_white_700.jpg"},
    {id: "37", name: "summer", type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/2/2021/2021901/previews/people_4_womanshort_oversize_front_terracotta_500.jpg"},
    {id: "38", name: "summer", type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/3/3178/3178917/previews/people_4_womanshort_oversize_front_yellow_700.jpg"},
    {id: "39", name: "summer", type: "t-shirt", url: "https://storage.vsemayki.ru/images/0/1/1932/1932619/previews/people_1_futbolki_oversize_3d_uniseks_front_white_700.jpg"},
    {id: "40", name: "summer", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/1/1956/1956517/previews/people_4_womansmockfull_front_black_700.jpg"},
    {id: "41", name: "summer", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/2/2460/2460005/previews/people_1_womanlong_front_lightgreen_700.jpg"},
    {id: "42", name: "summer", type: "sweatshirts", url: "https://storage.vsemayki.ru/images/0/1/1958/1958257/previews/people_8_woman_sweatshirt_front_red_700.jpg"},
    {id: "43", name: "summer", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/1/1932/1932619/previews/people_2_manhoodiefull_front_white_700.jpg"},
    {id: "44", name: "summer", type: "hoodie", url: "https://storage.vsemayki.ru/images/0/2/2460/2460005/previews/people_16_woman_hoodie_front_melange_700.jpg"},
    {id: "45", name: "summer", type: "hoodie", url: "https://image.spreadshirtmedia.net/image-server/v1/products/T20A251PA5098PT17X39Y10D16939884W26829H26829/views/1,width=550,height=550,appearanceId=251,backgroundColor=F2F2F2,modelId=5627,crop=list/rick-and-morty-summer-never-past-bedtime-land-mens-premium-hoodie.jpg"},
    {id: "46", name: "summer", type: "accessories", url: "https://storage.vsemayki.ru/images/0/1/1956/1956517/previews/people_9_valved_mask_front_black_700.jpg"},
    {id: "47", name: "summer", type: "accessories", url: "https://storage.vsemayki.ru/images/0/1/1954/1954859/previews/people_5_Bag_should_full_front_black_250.jpg"},
    {id: "48", name: "summer", type: "accessories", url: "https://image.spreadshirtmedia.net/image-server/v1/products/T1155A195PA2483PT17X8Y47D16939884W23495H23495/views/1,width=378,height=378,appearanceId=195,backgroundColor=F2F2F2/rick-and-morty-summer-never-past-bedtime-land.jpg"},
    {id: "49", name: "jerry", type: "t-shirt", url: "https://m.media-amazon.com/images/I/B1qmQK-r4OS._CLa%7C2140%2C2000%7C716LPTPxp5L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UL1500_.png"},
    {id: "50", name: "jerry", type: "t-shirt", url: "https://i.pinimg.com/originals/0e/60/20/0e6020aee09aa9ead26d45b0b9751a82.png"},
    {id: "51", name: "jerry", type: "t-shirt", url: "https://cdn11.bigcommerce.com/s-64ni4d05jw/images/stencil/1280x1280/products/12098/12464/T-Shirt-Unisex-Maglietta-Grigia-Propaganda-Rick-Morty-Jerry__41510.1574178612.jpg"},
    {id: "52", name: "jerry", type: "sweatshirts", url: "https://allbluetees.com/wp-content/uploads/2017/12/image-32-1024x1024.png"},
    {id: "53", name: "jerry", type: "sweatshirts", url: ""},
    {id: "54", name: "jerry", type: "sweatshirts", url: "https://image.spreadshirtmedia.net/image-server/v1/products/T875A2PA5134PT17X64Y22D16954543W16598H23425/views/1,width=550,height=550,appearanceId=366,backgroundColor=F2F2F2,modelId=6021,crop=list/rick-and-morty-jerry-smith-maenner-premium-langarmshirt.jpg"},
    {id: "55", name: "jerry", type: "hoodie", url: "https://image.spreadshirtmedia.net/image-server/v1/products/T1047A2PA5108PT17X81Y34D16954543W16598H23425/views/1,width=550,height=550,appearanceId=2,backgroundColor=F2F2F2/rick-and-morty-jerry-smith-unisex-hoodie.jpg"},
    {id: "56", name: "jerry", type: "hoodie", url: "https://cdn.lazyshop.com/files/84ffff54-8425-4254-ae7b-214096f4de41/product/9c0d602dccf58228c7002a472848f4ac.jpeg?x-oss-process=style%2Fthumb"},
    {id: "57", name: "jerry", type: "hoodie", url: "https://cdn.shopify.com/s/files/1/0340/2657/products/black-stringless-pullover-jerry-and-doofus-rick-hoodie-front.jpg?v=1515119808&width=823"},
    {id: "58", name: "jerry", type: "accessories", url: "https://www.redwolf.in/image/cache/catalog/stickers/rick-and-morty-dont-be-a-jerry-sticker-india-700x700.jpg"},
    {id: "59", name: "jerry", type: "accessories", url: "https://ae04.alicdn.com/kf/A3ff43f35b48e4f75b9e64d81e500e36db.jpg_640x640.jpg"},
    {id: "60", name: "jerry", type: "accessories", url: "https://newagetee.com/wp-content/uploads/2020/07/redirect-263.png"},
]
console.log(data)
 //////////////add content
let defaultImg = "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder-300x300.png";
function addImg(count, url) {

    for (let i = 0; i < count; i++) {
        content.insertAdjacentElement("beforeend", document.createElement('img'))
        content.children[i].setAttribute('src', url[i].url);
    }
}
butMid.addEventListener("click", ()=>{
    addImg(data.length, data)
})
addImg(data.length, data)
function borderGreen(e){
    let type =  e.target.getAttribute("type")
    let oldBorder = localStorage.getItem(type)
    if( type != null){
        if(localStorage.getItem(type) != null) document.getElementById(oldBorder).style.borderBottom = "none";
        localStorage.setItem(type, e.target.id);
        e.target.style.borderBottom ='1px solid greenyellow';
    }
}
let oldStatus;
function addContent(e){
    let type = e.target.getAttribute("type")+ "Status";
    if (type != "nullStatus") {
        content.innerHTML = " ";
        let arr2 = data.filter(element => {
            if (oldStatus != type && oldStatus != undefined) return (type == "underStatus") ? (element.type == localStorage.getItem(oldStatus) && element.name == e.target.id) : (element.type == e.target.id && element.name == localStorage.getItem(oldStatus));
            if (type == "underStatus") return element.name == e.target.id;
            else return element.type == e.target.id
        });
        if (oldStatus == type || oldStatus == undefined) oldStatus = type;
        localStorage.setItem(oldStatus, e.target.id);
        addImg(arr2.length, arr2)
    }else return 0;
}
document.querySelector(".Under").addEventListener("click", addContent)
document.querySelector(".Over").addEventListener("click", addContent)
document.querySelector(".Under").addEventListener("click", borderGreen)
document.querySelector(".Over").addEventListener("click", borderGreen)
document.querySelector(".close").addEventListener("click", ()=>{
    blackBlock.style.display = "none";
})

/////////////scroll
content.addEventListener("wheel", event => {
    event.currentTarget.scrollLeft += event.deltaY;
});

