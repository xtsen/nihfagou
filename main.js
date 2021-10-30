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
        price: 340,
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

function load() {
    initGallery()
    if (window.innerWidth <= 768) {
        mobileCreatePopups()
    }
}
function createGallery(items) {
    document.getElementById('gallery').innerHTML = ""
    index = 0
    itemsSorted = sortItems(items)
    while (index != items.length ) {
        newItem(index, itemsSorted)
        index+=1
    }
}
function newItem(index, items) {
    product = items[index]

    // Container item
    itemContainer = document.createElement('div')
    itemContainer.setAttribute("id", "item" + String(index))
    itemContainer.setAttribute("class", "item")
    itemContainer.setAttribute("onclick", `sendData('${String(product.id)}')`)
    document.getElementById("gallery").appendChild(itemContainer)

    // Image
    img = document.createElement("img")
    img.setAttribute("class", "imgProduct")
    img.setAttribute("src", `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`)
    img.setAttribute("alt", "l'image de presentation du produit")
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
    itemsSorted = []
    itemsSorted = sortItems(itemsSorted)
    nbItems = products.length
    item = 0

    document.getElementById('gallery').innerHTML = ""
    createGallery(products)
}
function sortItems(list) {
    prices = []
    items = list
    itemSorted = []
    sortingMethods = document.getElementById('sortedData').value
    items.forEach(product => {
        prices.push(product.price)
    });
    if (sortingMethods == 'price-increase') {
        prices.sort()
    }else if (sortingMethods == 'price-decrease') {
        prices.sort()
        prices.reverse()
    }
    i = 0
    while (i != prices.length) {
        items.forEach(product => {
            if (product.price == prices[i]) {
                itemSorted.push(product)
                i += 1
            }
        })
    }
    return itemSorted
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
    itemsFiltered = []
    document.getElementById('gallery').innerHTML = ""
    while (item != nbItems) {
        filterColor.forEach(colorId => {
            if (products[item].color == colorId) {
                itemsFiltered.push(products[item])
            }
        });
        item += 1
    }
    createGallery(itemsFiltered)
}
function mobileCreatePopups() {
    filtersElement = document.getElementById('filters')
    document.getElementById("popupFilter").appendChild(filtersElement)
}
function showPopup(which) {
    checkbox = document.getElementById("popupFilterCheck")
    if (checkbox.checked == true) {
        document.getElementById("filterTitlePopup").innerText = "Filtres"
        document.getElementById("popupFilter").style.display="none"
        checkbox.checked = false
    }else {
        document.getElementById("popupFilter").style.display="flex"
        document.getElementById("filterTitlePopup").innerText = "Retour"
        checkbox.checked = true
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
                colorFilter()
            }
        }
    });
});

function sendData(productID) {
    window.localStorage.setItem('product', productID)
    window.location.href = "details.html"
}
function goThere(where) {
    window.location.href = where + ".html"
}