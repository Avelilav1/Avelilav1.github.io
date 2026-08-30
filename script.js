console.log("test reussi ")

let descriptionStationSpatiale = "This is an ultra-realistic spaceship that took many hours of hardwork and passion. We're hoping that you'll like this model, feel free to send some love to Avelilav1 who coded this site and to Mineki who created this 3D model."
let lienStationSpatiale = "assets/scifiship_final.blend"

function afficherSF() {
    let elem = document.getElementById("objetsSF");

    if (elem.style.display == "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

function afficherAutre() {
    let elem = document.getElementById("objetsAutres");

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


    let description = document.getElementById("descriptionObjet");
    let lien = document.getElementById("lienSS");
    console.log(lien);
    console.log(lienStationSpatiale);


        if (img.alt == "1") {
            let tablimg1 = ["assets/scifiship_image1.png", "assets/scifiship_image2.png"];
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

            description.textContent = descriptionStationSpatiale;
            lien.href = lienStationSpatiale;
            console.log(lien.href);
        } else {
            lien.href = "#";
            description.textContent = "";
        }
    }

function retour() {
    pageObjet.style.display = "none";
    lien.href = "#";
}


