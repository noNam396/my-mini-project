let products = {
    data: [{
            productName: "Buty Adidas Czarne",
            category: "Buty",
            price: "260",
            image: "images/zdjecie3.png",
        },
        {
            productName: "Bluza Adidas Niebieska",
            category: "Bluzy",
            price: "130",
            image: "images/zdjecie5.png",
        },
        {
            productName: "Spodnie Nike Szare",
            category: "Spodnie",
            price: "120",
            image: "images/zdjecie9.png",
        },
        {
            productName: "Zegarek Bulova Srebrny",
            category: "Zegarki",
            price: "1050",
            image: "images/zdjecie11.png"
        },
        {
            productName: "Spodnie Adidas Czarne",
            category: "Spodnie",
            price: "170",
            image: "images/zdjecie8.png",
        },
        {
            productName: "Buty Adidas Białe",
            category: "Buty",
            price: "420",
            image: "images/zdjecie2.png",
        },
        {
            productName: "Bluza Adidas Biała",
            category: "Bluzy",
            price: "220",
            image: "images/zdjecie4.png",
        },
        {
            productName: "Spodnie Nike Czerwone",
            category: "Spodnie",
            price: "130",
            image: "images/zdjecie7.png",
        },
        {
            productName: "Zegarek DW Złoty",
            category: "Zegarki",
            price: "600",
            image: "images/zdjecie12.png",
        },
        {
            productName: "Buty Nike Czarne",
            category: "Buty",
            price: "670",
            image: "images/zdjecie1.png",
        },
        {
            productName: "Bluza Adidas Biała",
            category: "Bluzy",
            price: "230",
            image: "images/zdjecie6.png",
        },
        {
            productName: "Zegarek DW Biały",
            category: "Zegarki",
            price: "500",
            image: "images/zdjecie10.png",
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hidden");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    document.querySelector("#products").appendChild(card);

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");

    let name = document.createElement("span");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();

    nameContainer.appendChild(name);
    card.appendChild(nameContainer);

    let priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    let price = document.createElement("span");
    price.classList.add("product-price");
    price.innerText = i.price + " PLN";
    priceContainer.appendChild(price);
    card.appendChild(priceContainer);
};

function filterItems(value) {
    let buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let cards = document.querySelectorAll(".card");

    cards.forEach((element) => {
        if (value == "Wszystko") {
            element.classList.remove("hidden");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hidden");
            } else {
                element.classList.add("hidden");
            }
        }
    });
};

let searchBtn = document.getElementById("search-btn");

const searching = () => {
    let searchInput = document.getElementById("search-input").value;
    let productName = document.querySelectorAll(".product-name");
    let elementCards = document.querySelectorAll(".card");

    productName.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            elementCards[index].classList.remove("hidden");
        } else {
            elementCards[index].classList.add("hidden");
        }
    });
};

searchBtn.addEventListener("click", () => {
    searching();
});

document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        searching();
    };
});