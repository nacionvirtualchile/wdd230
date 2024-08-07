const modeButton = document.querySelector("#mode");
const imgMode = modeButton.querySelector('#imgMode');
const bodyOfPage = document.querySelector("body");
const cards = document.querySelector(".parent-cards");
const logo = document.querySelector('#camara-comercio-logo');
const navAToA = document.querySelectorAll('nav a');
const BarSides = document.querySelectorAll('.sidebar');
const BarSideCards = document.querySelectorAll('.card');
const discoverCards = document.querySelectorAll('.card-list .card');
const DiscoveryMains = document.querySelectorAll('#DiscoverMain');
const gridContainers = document.querySelectorAll('.grid-container section');
const myFormLabels = document.querySelectorAll('.myForm label');
const myFormlegends = document.querySelectorAll('.myForm legend');
const myFormInputs = document.querySelectorAll('.myForm input');
const myFormSubmits = document.querySelectorAll('.myForm input[type="submit"]');
const myFormTextAreas = document.querySelectorAll('.myForm textarea');
const as = document.querySelectorAll('a');
const callToActionAs = document.querySelectorAll('.callToAction a');




modeButton.addEventListener('click', () => {
    const directorioSections = document.querySelectorAll('.membersGrid section');
    const directorioSectionAs = document.querySelectorAll('.membersGrid section a');


    if (imgMode.getAttribute('src') === "images/dark-mode.svg") {
        imgMode.setAttribute('src', "images/light-mode.svg");
        imgMode.setAttribute('alt', "Light mode");
        bodyOfPage.style.background = "#393939";
        bodyOfPage.style.color = "#fff";
        if (cards) {
            cards.style.color = "#000";

        }

        if (BarSideCards) {
            BarSideCards.forEach(BarSideCard => {
                BarSideCard.style.color = "#fff";
                BarSideCard.style.background = "#505050";
            });
        }


        if (BarSides) {
            BarSides.forEach(BarSide => {
                BarSide.style.color = "#fff";
                BarSide.style.background = "#606060";
            });
        }

        if (directorioSections) {
            directorioSections.forEach(section => {
                section.style.color = "#fff";
                section.style.background = "#505050";
            });
        }

        if (directorioSectionAs) {
            directorioSectionAs.forEach(a => {
                a.style.color = "#90e0ef";
            });
        }

        if (DiscoveryMains) {
            DiscoveryMains.forEach(DiscoveryMain => {
                DiscoveryMain.style.color = "#fff";
                DiscoveryMain.style.background = "#505050";
            });
        }

        if (gridContainers) {
            gridContainers.forEach(gridContainer => {
                gridContainer.style.color = "#fff";
                gridContainer.style.background = "#505050";
            });
        }

        if (myFormLabels) {
            myFormLabels.forEach(myFormLabel => {
                myFormLabel.style.color = "#fff";
                myFormLabel.style.background = "#505050";
            });
        }


        if (myFormlegends) {
            myFormlegends.forEach(myFormlegend => {
                myFormlegend.style.color = "#fff";
            });
        }


        if (myFormInputs) {
            myFormInputs.forEach(myFormInput => {
                myFormInput.style.color = "#fff";
                myFormInput.style.background = "#606060";
            });
        }


        if (myFormSubmits) {
            myFormSubmits.forEach(myFormSubmit => {
                myFormSubmit.style.color = "white";
                myFormSubmit.style.background = "darkblue";
            });
        }





        if (myFormTextAreas) {
            myFormTextAreas.forEach(myFormTextArea => {
                myFormTextArea.style.color = "#fff";
                myFormTextArea.style.background = "#505050";
            });
        }

        if (as) {
            as.forEach(a => {
                a.style.color = "#fff";
            });
        }


        logo.setAttribute('src', "images/camara-comercio-logo-light.png");
        navAToA.forEach(enlace => {
            enlace.style.color = "#90e0ef";
        });




    } else {
        imgMode.setAttribute('src', "images/dark-mode.svg");
        imgMode.setAttribute('alt', "Dark mode");
        bodyOfPage.style.background = "#fff";
        bodyOfPage.style.color = "#000";
        logo.setAttribute('src', "images/camara-comercio-logo.png");
        navAToA.forEach(enlace => {
            enlace.style.color = "#000";
        });

        if (directorioSections) {
            directorioSections.forEach(section => {
                section.style.color = "#000";
                section.style.background = "#eee";
            });
        }

        if (directorioSectionAs) {
            directorioSectionAs.forEach(a => {
                a.style.color = "#0066cc";
            });
        }

        if (BarSideCards) {
            BarSideCards.forEach(BarSideCard => {
                BarSideCard.style.color = "#000";
                BarSideCard.style.background = "#90e0ef";
            });
        }


        if (discoverCards) {
            discoverCards.forEach(discoverCard => {
                discoverCard.style.background = "#fff";
            });
        }



        if (BarSides) {
            BarSides.forEach(BarSide => {
                BarSide.style.color = "#000";
                BarSide.style.background = "#90e0ef";
            });
        }

        if (DiscoveryMains) {
            DiscoveryMains.forEach(DiscoveryMain => {
                DiscoveryMain.style.color = "#000";
                DiscoveryMain.style.background = "#ffffff";
            });
        }

        if (gridContainers) {
            gridContainers.forEach(gridContainer => {
                gridContainer.style.color = "#000";
                gridContainer.style.background = "#eee";
            });
        }

        if (myFormLabels) {
            myFormLabels.forEach(myFormLabel => {
                myFormLabel.style.color = "#000";
                myFormLabel.style.background = "#eee";
            });
        }

        if (myFormlegends) {
            myFormlegends.forEach(myFormlegend => {
                myFormlegend.style.color = "#000";
            });
        }

        if (myFormInputs) {
            myFormInputs.forEach(myFormInput => {
                myFormInput.style.color = "#000";
                myFormInput.style.background = "#eee";
            });
        }



        if (myFormSubmits) {
            myFormSubmits.forEach(myFormSubmit => {
                myFormSubmit.style.color = "white";
                myFormSubmit.style.background = "darkblue";
            });
        }


        if (myFormTextAreas) {
            myFormTextAreas.forEach(myFormTextArea => {
                myFormTextArea.style.color = "#000";
                myFormTextArea.style.background = "#eee";
            });
        }

        if (as) {
            as.forEach(a => {
                a.style.color = "#000";
            });
        }

        if (callToActionAs) {
            callToActionAs.forEach(callToActionA => {
                callToActionA.style.color = "#fff";
            });
        }





    }
});