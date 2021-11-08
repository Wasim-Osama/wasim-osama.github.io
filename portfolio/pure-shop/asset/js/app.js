

function bodyScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $(".nav-scroller").addClass('attachTop');
        $(".toggle-nav").addClass('attachTop');
    } else {
        $(".nav-scroller").removeClass('attachTop');
        $(".toggle-nav").removeClass('attachTop');
    }
}
function toggleNav(){
    $('.side-bar').toggleClass('active');
}
window.onscroll = function (){
    bodyScroll();
};

let products = [
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 11 pro max',
        price: '৳1,00,000.00',
        img: 'asset/img/iphn-11.png'
    },
    {
        name: 'Samsung galaxy note 20',
        price: '৳80,000.00',
        img: 'asset/img/Samsung_Galaxy_Note_20_2.png'
    },
    {
        name: 'DM-10 Earphone',
        price: '৳400.00',
        img: 'asset/img/headphn.png'
    },
    {
        name: 'Micropack MHP-800',
        price: '৳1,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name: 'Iphone 12 pro max',
        price: '৳1,20,000.00',
        img: 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
]

function showProduct() {
    let productHtml = '';
    let productsWrapper = $('#product-wrapper')
    products.forEach((v, i) => {
        productHtml += '<div class="product-box">\n' +
            '            <div class="img"><img src="'+ v.img +'" alt="I-phone-12 pro max"></div>\n' +
            '            <div class="product-text-box">\n' +
            '                <div class="p">'+ v.name +'</div>\n' +
            '                <div class="icon">\n' +
            '                    <div class="my-rating"></div>\n' +
            '                </div>\n' +
            '                <div class="price">'+ v.price +'</div>\n' +
            '                <div class="cart-btn">View</div>\n' +
            '            </div>\n' +
            '        </div>'

    })
    productsWrapper.html(productHtml);
}

let dealProducts = [
    {
        name : 'Iphone 12 pro max',
        mainPrice : '৳1,20,000.00',
        offerPrice : '৳1,00,000.00',
        img : 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name : 'Iphone 12 pro max',
        mainPrice : '৳1,20,000.00',
        offerPrice : '৳1,00,000.00',
        img : 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name : 'Iphone 12 pro max',
        mainPrice : '৳1,20,000.00',
        offerPrice : '৳1,00,000.00',
        img : 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name : 'Iphone 12 pro max',
        mainPrice : '৳1,20,000.00',
        offerPrice : '৳1,00,000.00',
        img : 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
    {
        name : 'Iphone 12 pro max',
        mainPrice : '৳1,20,000.00',
        offerPrice : '৳1,00,000.00',
        img : 'asset/img/Apple-iPhone-12-Pro-Max-Pacific-Blue.png'
    },
]
function showDeal() {
    let offerBox = $('#offer-box');
    let dealHTML = ' <div class="box box-1">\n' +
        '                <div class="img">\n' +
        '                    <img src="'+ dealProducts[0].img +'" alt="I phone 11">\n' +
        '                </div>\n' +
        '                <div class="text">\n' +
        '                    <div class="icon">\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                    </div>\n' +
        '                    <div class="h">'+ dealProducts[0].name +'</div>\n' +
        '                    <div class="price"> '+ dealProducts[0].offerPrice +' <span class="cross-price"><s>'+ dealProducts[0].mainPrice +'</s></span></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="box box-2">\n' +
        '                <div class="img">\n' +
        '                    <img src="'+ dealProducts[1].img +'" alt="P47 wireless">\n' +
        '                </div>\n' +
        '                <div class="text">\n' +
        '                    <div class="icon">\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                    </div>\n' +
        '                    <div class="h">'+ dealProducts[1].name +'</div>\n' +
        '                    <div class="price">'+ dealProducts[1].offerPrice +'<span class="cross-price"><s>'+ dealProducts[1].mainPrice +'</s></span></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="box box-3">\n' +
        '                <div class="img">\n' +
        '                    <img src="'+ dealProducts[2].img +'" alt="Galaxy note 20">\n' +
        '                </div>\n' +
        '                <div class="text">\n' +
        '                    <div class="icon">\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                    </div>\n' +
        '                    <div class="h">'+ dealProducts[2].name +'</div>\n' +
        '                    <div class="price">'+ dealProducts[2].offerPrice +'<span class="cross-price"><s>'+ dealProducts[2].mainPrice +'</s></span></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="box box-4">\n' +
        '                <div class="img">\n' +
        '                    <img src="'+ dealProducts[3].img +'" alt="Neckband">\n' +
        '                </div>\n' +
        '                <div class="text">\n' +
        '                    <div class="icon">\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                    </div>\n' +
        '                    <div class="h">'+ dealProducts[3].name +'</div>\n' +
        '                    <div class="price">'+ dealProducts[3].offerPrice +' <span class="cross-price"><s>'+ dealProducts[3].mainPrice +'</s></span></div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="box box-5">\n' +
        '                <div class="img">\n' +
        '                    <img src="'+ dealProducts[4].img +'" alt="I phone 12 pro max">\n' +
        '                </div>\n' +
        '                <div class="text">\n' +
        '                    <div class="icon">\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                        <i class="fa fa-star" aria-hidden="true"></i>\n' +
        '                    </div>\n' +
        '                    <div class="h">'+ dealProducts[4].name +'</div>\n' +
        '                    <div class="price">'+ dealProducts[4].offerPrice +'<span class="cross-price"><s>'+ dealProducts[4].mainPrice +'</s></span></div>\n' +
        '                </div>\n' +
        '            </div>'
    offerBox.html(dealHTML);
}

$(function() {
    showProduct();
    showDeal();
});