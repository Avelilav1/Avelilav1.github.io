console.log("test reussi ")

function afficherSF() {
    let elem = document.getElementById("objetsSF");

    if (elem.style.display == "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

let images = document.querySelectorAll('.objets img');
console.log("Images trouvées :", images.length);

images.forEach((img) => {
    img.addEventListener("click", () => afficherPageImg(img));
})

function afficherPageImg(img) {
    let lienImage = img.src;
    console.log(lienImage);

    let divParente = img.parentElement;

    let nomObjet = divParente.querySelector('p').textContent;

    var pageObjet = document.getElementById("pageObjet");
    console.log(pageObjet)

    console.log(img);

    if (pageObjet.style.display == "none") {
        pageObjet.style.display = "flex";
        document.querySelector('#imageConcernee').src = lienImage;
        document.querySelector('#nomObjet').textContent = nomObjet

    } else {
        pageObjet.style.display = "none";
    }


    if (img.alt == "1") {
        let tablimg1 = ["assets/imageTest.webp", "assets/armenie1.jpg", "assets/armenie2.jpg"];
        let i = 0;
        let button = document.getElementById("buttonS");
        let imgAct = document.getElementById("imageConcernee");
        button.addEventListener("click", function () {
            i = i + 1;
            if (i >= tablimg1.length) {
                i = 0;
            }
            imgAct.src = tablimg1[i];
        })
    }
}
function retour() {
    pageObjet.style.display = "none";
}

