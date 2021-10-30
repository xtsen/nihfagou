// import products from "./data.js";
const products = [
    {
        id: 0,
        name: "iPhone SE 2",
        price: 260,
        category: "phone",
        color: "Noir",
        storage: 64,
    },
    {
        id: 1,
        name: "iPhone X",
        price: 319,
        category: "phone",
        color: "Noir",
        storage: 64,
    },
    {
        id: 2,
        name: "iPhone XR",
        price: 338,
        category: "phone",
        color: "Blanc",
        storage: 64,
    },
    {
        id: 3,
        name: "iPhone SE 2",
        price: 260,
        category: "phone",
        color: "Noir",
        storage: 64,
    },
    {
        id: 4,
        name: "iPhone X",
        price: 319,
        category: "phone",
        color: "Noir",
        storage: 64,
    },
    {
        id: 5,
        name: "iPhone XR",
        price: 338,
        category: "phone",
        color: "Blanc",
        storage: 64,
    },
]

function initGallery() {

    nbItems = products.length
    item = 0
    document.getElementById('gallery').innerHTML = ""
    while (item != nbItems) {
        
        product = products[item]

        // Container item
        itemContainer = document.createElement('div')
        itemContainer.setAttribute("id", "item" + String(item))
        itemContainer.setAttribute("class", "item")
        document.getElementById("gallery").appendChild(itemContainer)

        // Image
        img = document.createElement("img")
        img.setAttribute("class", "imgProduct")
        img.setAttribute("src", `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`)
        document.getElementById("item" + String(item)).appendChild(img) 
        
        // Container Infos
        itemContainerInfos = document.createElement('div')
        itemContainerInfos.setAttribute("id", "desc" + String(item))
        itemContainerInfos.setAttribute("class", "desc")
        document.getElementById("item" + String(item)).appendChild(itemContainerInfos)

        // Product title
        productTitle = document.createElement('h3')
        productTitle.setAttribute("id", "nameProduct" + String(item))
        productTitle.setAttribute("class", "nameProduct")
        document.getElementById("desc" + String(item)).appendChild(productTitle)  
        document.getElementById("nameProduct" + String(item)).innerText = product.name

        // Product desc
        productDesc = document.createElement('p')
        productDesc.setAttribute("id", "descProduct" + String(item))
        productDesc.setAttribute("class", "descProduct")
        document.getElementById("desc" + String(item)).appendChild(productDesc) 
        document.getElementById("descProduct" + String(item)).innerText = product.color + " - " + product.storage + " Go"
        

        // Product price
        productPrice = document.createElement('p')
        productPrice.setAttribute("id", "price" + String(item))
        productPrice.setAttribute("class", "price")
        document.getElementById("desc" + String(item)).appendChild(productPrice) 
        document.getElementById("price" + String(item)).innerText = product.price + " €"

        item += 1

    }
}