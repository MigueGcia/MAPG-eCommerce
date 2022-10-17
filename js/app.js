const productData = [
    {
        index: '01',
        name: 'yellow',
        image: 'img1.jpg',
        des: 'yellow'
    },
    {
        index: '02',
        name: 'Exclusive',
        image: 'img2.jpg',
        des: 'Exclusive'
    },
    {
        index: '03',
        name: 'Comfort',
        image: 'img3.jpg',
        des: 'Comfort'
    },
    {
        index: '04',
        name: 'Fashion',
        image: 'img4.jpg',
        des: 'Fashion'
    },
    {
        index: '05',
        name: 'Style',
        image: 'img5.jpg',
        des: 'Style'
    },
    {
        index: '06',
        name: 'Essence',
        image: 'img6.jpg',
        des: 'Essence'
    },
    {
        index: '07',
        name: 'Beautiful',
        image: 'img7.jpg',
        des: 'Beautiful'
    },
    {
        index: '08',
        name: 'Status',
        image: 'img8.jpg',
        des: 'Status'
    },
    {
        index: '09',
        name: 'Fresh',
        image: 'img9.jpg',
        des: 'Fresh'
    },
    {
        index: '10',
        name: 'She',
        image: 'img10.jpg',
        des: 'She'
    }
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer = document.querySelector('.sm-product-img-container')
let smImg = document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('.product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0

nxtBtn.addEventListener('click', () => {
    if(currentProduct >= productData.length - 1){
        currentProduct = 0
    }
    else{
        currentProduct++
    }

    productIndex.innerHTML = productData[currentProduct].index
    smProductDes.innerHTML = productData[currentProduct].des.slice(0, 80)
    
    smImgContainer.classList.add('slide')
    productImgContainer.classList.add('slide')
    backdropImg.classList.add('fade')
    productDetail.classList.add('fade')

    setTimeout( () => {
        productName.innerHTML = productData[currentProduct].name
        productDes.innerHTML = productData[currentProduct].des
        smImg.src = productImg.src = backdropImg.src = `img/${productData[currentProduct].image}`
    }, 1000) 

    setTimeout( () => {
        smImgContainer.classList.remove('slide')
        productImgContainer.classList.remove('slide')
        backdropImg.classList.remove('fade')
        productDetail.classList.remove('fade')
    }, 1000)
})