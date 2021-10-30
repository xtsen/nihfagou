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

function newItem(index) {
    product = products[index]

    // Container item
    itemContainer = document.createElement('div')
    itemContainer.setAttribute("id", "item" + String(index))
    itemContainer.setAttribute("class", "item")
    document.getElementById("gallery").appendChild(itemContainer)

    // Image
    img = document.createElement("img")
    img.setAttribute("class", "imgProduct")
    img.setAttribute("src", `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`)
    document.getElementById("item" + String(index)).appendChild(img) 
    
    // Container Infos
    itemContainerInfos = document.createElement('div')
    itemContainerInfos.setAttribute("id", "desc" + String(index))
    itemContainerInfos.setAttribute("class", "desc")
    document.getElementById("item" + String(index)).appendChild(itemContainerInfos)

    // Product title
    productTitle = document.createElement('h3')
    productTitle.setAttribute("id", "nameProduct" + String(index))
    productTitle.setAttribute("class", "nameProduct")
    document.getElementById("desc" + String(index)).appendChild(productTitle)  
    document.getElementById("nameProduct" + String(index)).innerText = product.name

    // Product desc
    productDesc = document.createElement('p')
    productDesc.setAttribute("id", "descProduct" + String(index))
    productDesc.setAttribute("class", "descProduct")
    document.getElementById("desc" + String(index)).appendChild(productDesc) 
    document.getElementById("descProduct" + String(index)).innerText = product.color + " - " + product.storage + " Go"
    

    // Product price
    productPrice = document.createElement('p')
    productPrice.setAttribute("id", "price" + String(index))
    productPrice.setAttribute("class", "price")
    document.getElementById("desc" + String(index)).appendChild(productPrice) 
    document.getElementById("price" + String(index)).innerText = product.price + " €"
}
function initGallery() {

    nbItems = products.length
    item = 0
    document.getElementById('gallery').innerHTML = ""
    while (item != nbItems) {
        
        newItem(item)

        item += 1

    }
}

filterColor = []

function addFilter(nameFilter, valueFilter) {
    if (nameFilter == "color") {
        colorFilter(valueFilter)
    }
    if (nameFilter == "price") {
        priceFilter(valueFilter)
    }
}

function colorFilter() {
    nbItems = products.length
    item = 0
    document.getElementById('gallery').innerHTML = ""
    while (item != nbItems) {
        filterColor.forEach(colorId => {
            if (products[item].color == colorId) {
                newItem(item)
            }
        });
        item += 1
    }
}

document.querySelectorAll('.colorFilter').forEach(function(el){
    el.addEventListener('click', function() {
        input = document.getElementById((this.id).toLowerCase())
        label = document.getElementById("color" + this.id)
        if (input.checked == false) {
            filterColor.push(this.id)
            colorFilter()
            label.classList.add("selectedFilter")
            input.checked = true
        }else {
            indexOfColor = filterColor.indexOf(this.id)
            filterColor.splice(indexOfColor, 1)
            label.classList.remove("selectedFilter")
            input.checked = false
            if (filterColor.length == 0) {
                initGallery()
            }else {
                filterColor.forEach(color => {
                    colorFilter(color)
                });
            }
        }
    });
});