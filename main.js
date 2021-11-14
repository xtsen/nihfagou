const categories = [
    {
        id: 0,
        name: "Téléphones"
    },
    {
        id: 2,
        name: "Tablettes"
    },
    {
        id: 3,
        name: "Écouteurs"
    },
    {
        id: 4,
        name: "Divers"
    }
]
const products = [
    {
        id: 0,
        name: "iPhone SE 2",
        price: 260,
        category: "Téléphones",
        color: "Noir",
        storage: 64,
    },
    {
        id: 1,
        name: "iPhone X",
        price: 319,
        category: "Téléphones",
        color: "Noir",
        storage: 64,
    },
    {
        id: 2,
        name: "iPhone XR",
        price: 338,
        category: "Téléphones",
        color: "Blanc",
        storage: 64,
    },
    {
        id: 3,
        name: "iPhone SE 2",
        price: 340,
        category: "Téléphones",
        color: "Noir",
        storage: 64,
    },
    {
        id: 4,
        name: "iPhone X",
        price: 319,
        category: "Téléphones",
        color: "Noir",
        storage: 64,
    },
    {
        id: 5,
        name: "iPhone XR",
        price: 338,
        category: "Téléphones",
        color: "Blanc",
        storage: 64,
    },
    {
        id: 6,
        name: "Air pods 1",
        price: 89,
        category: "Écouteurs",
        color: "Blanc"
    },
    {
        id: 7,
        name: "Air pods 2",
        price: 110,
        category: "Écouteurs",
        color: "Blanc"
    },
]

function load() {
    initGallery(true)
    if (!window.localStorage.getItem("listIDs")) {
        window.localStorage.setItem("listIDs", "")
        console.log("done");
    }
    // if (window.innerWidth <= 768) {
    //     mobileCreatePopups()
    // }
}
function createGallery(items, category) {
    console.log("done");
    
    index = 0
    if (category == "init") {
        document.getElementById('gallery').innerHTML = ""
        itemsSorted = sortItems(items)
        while (index != items.length) {
            newItem(index, itemsSorted, category)
            index+=1
        }
    }else if (category == "favs") {
        while (index != items.length) {
            newItem(index, items, category)
            index+=1
        }
    }else {
        document.getElementById('gallery').innerHTML = ""
        currentCategory = []
        categories.forEach(item => {
            if (item.name == category) {
                currentCategory.push(item)
            }
        });
        productsInCategory = []
        products.forEach(product => {
            if (product.category == category) {
                productsInCategory.push(product)
            }
        });
        items = productsInCategory
        while (index != items.length) {
            newItem(index, items, category)
            index+=1
        }
    }
}
function newItem(index, items, category) {

    if(category == "init"){
        currentCategory = items[index]

        // Container item
        itemContainer = document.createElement('div')
        itemContainer.setAttribute("id", "catgory" + String(index))
        itemContainer.setAttribute("class", "category")
        itemContainer.setAttribute("onclick", `openCategory('${String(currentCategory.id)}')`)
        document.getElementById("gallery").appendChild(itemContainer)

        // SVG
        // img = document.createElement("img")
        // img.setAttribute("class", "imgProduct")
        // img.setAttribute("src", `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`)
        // img.setAttribute("alt", "l'image de presentation du produit")
        // document.getElementById("item" + String(index)).appendChild(img) 

        // Product title
        productTitle = document.createElement('h3')
        productTitle.setAttribute("id", "nameCategory" + String(index))
        productTitle.setAttribute("class", "nameCategory")
        document.getElementById("catgory" + String(index)).appendChild(productTitle)  
        document.getElementById("nameCategory" + String(index)).innerText = currentCategory.name


    }else {

        product = items[index]

        if (category == "favs") {
            mainContainer = "favoriteList"
            console.log(mainContainer);
        }else {
            mainContainer = "gallery"
        }
    
        // Container item
        itemContainer = document.createElement('div')
        itemContainer.setAttribute("id", "item" + String(index))
        itemContainer.setAttribute("class", "item")
        itemContainer.setAttribute("onclick", `sendData('${String(product.id)}')`)
        document.getElementById(mainContainer).appendChild(itemContainer)
    
        // Image
        if (product.category == "Téléphones") {
            imgSrc = `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`
        }else if (product.category == "Écouteurs") {
            imgSrc = `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + String(product.color)}.png`
        }

        img = document.createElement("img")
        img.setAttribute("class", "imgProduct")
        img.setAttribute("src", imgSrc)
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
    
        if (category == "Téléphones") {

            // Product desc
            productDesc = document.createElement('p')
            productDesc.setAttribute("id", "descProduct" + String(index))
            productDesc.setAttribute("class", "descProduct")
            document.getElementById("desc" + String(index)).appendChild(productDesc) 
            document.getElementById("descProduct" + String(index)).innerText = product.color + " - " + product.storage + " Go"
        }
        
    
        // Product price
        productPrice = document.createElement('p')
        productPrice.setAttribute("id", "price" + String(index))
        productPrice.setAttribute("class", "price")
        document.getElementById("desc" + String(index)).appendChild(productPrice) 
        document.getElementById("price" + String(index)).innerText = product.price + " €"
    }

}
function initGallery(inload) {
    if(inload == false) {

        itemsSorted = []
        itemsSorted = sortItems(itemsSorted)
        nbItems = products.length
        item = 0
    
        document.getElementById('gallery').innerHTML = ""
        createGallery(products)
    }
    else if (inload == true) {
        document.getElementById("pathToHere").innerHTML = "<li onclick='initGallery(true)'>Menu</li>"
        everyCategories = []
        categories.forEach(category => {
            everyCategories.push(category)
        });

        document.getElementById('gallery').innerHTML = ""
        createGallery(everyCategories, 'init')
    }


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
// function mobileCreatePopups() {
//     filtersElement = document.getElementById('filters')
//     document.getElementById("popupFilter").appendChild(filtersElement)
// }
// function showPopup(which) {
//     checkbox = document.getElementById("popupFilterCheck")
//     if (checkbox.checked == true) {
//         document.getElementById("filterTitlePopup").innerText = "Filtres"
//         document.getElementById("popupFilter").style.display="none"
//         checkbox.checked = false
//     }else {
//         document.getElementById("popupFilter").style.display="flex"
//         document.getElementById("filterTitlePopup").innerText = "Retour"
//         checkbox.checked = true
//     }
// }
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
                initGallery(false)
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
function openCategory(categoryID) {
    categories.forEach(category => {
        if (category.id == categoryID){
            currentCategory = category
        }
    });
    updatePath(currentCategory.name)

    createGallery(products, currentCategory.name)
}
function updatePath(category) {
    document.getElementById("pathToHere").innerHTML += "<li class='separatorCategory'> › </li>"
    document.getElementById("pathToHere").innerHTML += "<li> " + category + "</li>"
}
function getFavoriteList() {
    checkboxPopupFavorite = document.getElementById("checkboxPopupFavorite")
    if (checkboxPopupFavorite.checked == false) {
        document.getElementById("wrapper").style.transform = "scale(200)"
        document.getElementById("textButtonFavorite").innerHTML = "Fermer"
        document.getElementById("svgButtonFavorite").innerHTML = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
      </svg>`
      document.getElementById("content").style.filter = "blur(4px)"
      checkboxPopupFavorite.checked = true
      showFavoriteList()
    }else {
        document.getElementById("wrapper").style.transform = "scale(1)"
        document.getElementById("textButtonFavorite").innerHTML = "Favori"
        document.getElementById("svgButtonFavorite").innerHTML = `<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clip-rule="evenodd"></path>
    </svg>`
    document.getElementById("content").style.filter = "blur(0)"
    checkboxPopupFavorite.checked = false
    }
}
function showFavoriteList() {
    favs = []
    listIDsNonSplited = window.localStorage.getItem("listIDs")
    listIDs = listIDsNonSplited.split(",")
    console.log(listIDs);
    listIDs.forEach(id => {
        id = Number(id)
        products.forEach(product => {
            if (id == product.id) {
                favs.push(product)
                return 0;
            }
        });
    });
    // remove empty item
    favs.pop()
    createGallery(favs, "favs")
}