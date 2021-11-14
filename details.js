function initDetails() {
    id = window.localStorage.getItem("product")
    // window.localStorage.removeItem("listIDs")
    if (!window.localStorage.getItem("listIDs")) {
        window.localStorage.setItem("listIDs", "")
    }

    product = undefined
    products.forEach(item => {
        if (item.id == id) {
            product = item
        }
    });
    category = product.category

    document.getElementById("subInfos").innerText = product.color

    if (category == "Téléphones") {
        imgSrc = `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`
        document.getElementById("subInfos").innerText += " - " + product.storage + " Go"
    }else if (category == "Écouteurs") {
        imgSrc = `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + String(product.color)}.png`
    }
    imgProduct = document.createElement("img")
    imgProduct.setAttribute("src", imgSrc)
    imgProduct.setAttribute("class", "imgDetails")
    imgProduct.setAttribute("alt", "l'image de presentation du produit")
    document.getElementById("imgFrame").appendChild(imgProduct) 
    
    document.getElementById("name").innerText= product.name
    document.getElementById("price").innerText= product.price + " €"
}
function addToFavorite() {
    id = window.localStorage.getItem("product")
    IDs = window.localStorage.getItem("listIDs")
    console.log(IDs);
    console.log(String(id));
    IDs += String(id) + ","

    window.localStorage.setItem("listIDs", IDs)
    console.log(window.localStorage.getItem("listIDs"));

    successfullyAdded()
}
function successfullyAdded() {
    document.getElementById("success").style.transform = ("translateY(0%)")
    setTimeout(() => {
        document.getElementById("success").style.transform = ("translateY(200%)")
    }, 4000)
}