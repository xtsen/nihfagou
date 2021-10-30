function initDetails() {
    id = window.localStorage.getItem("product")
    product = undefined
    products.forEach(item => {
        if (item.id == id) {
            product = item
        }
    });

    imgProduct = document.createElement("img")
    imgProduct.setAttribute("src", `res/${product.category}/${(product.name.replace(/\s+/g, '')).toLowerCase() + product.color + String(product.storage)}.png`)
    imgProduct.setAttribute("class", "imgDetails")
    imgProduct.setAttribute("alt", "l'image de presentation du produit")
    document.getElementById("imgFrame").appendChild(imgProduct) 

    document.getElementById("name").innerText= product.name
    document.getElementById("subInfos").innerText= product.color + " - " + product.storage + " Go"
    document.getElementById("price").innerText= product.price + " €"
}

function successfullyAdded() {
    document.getElementById("success").style.transform = ("translateY(0%)")
    setTimeout(() => {
        document.getElementById("success").style.transform = ("translateY(200%)")
    }, 4000)
}