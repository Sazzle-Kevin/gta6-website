
// =========================
// Character Data KI Erstellt !!!!
// =========================

const characters = {

    muju: {

        name: "Muju",

        role: "Stratege",

        rank: "Boss",

        weapon: "Goldene Desert Eagle",

        vehicle: "McLaren Senna",

        money: "$24.500.000",

        location: "Vice City",

        image: "Bilder/Muju.png"

    },

    kevin: {

        name: "Kevin",

        role: "Anführer",

        rank: "Leader",

        weapon: "Goldene Pistole",

        vehicle:"Mercedes G Klasse Brabus",

        money: "$25.000.000",

        location: "Vice City",

        danger: "★★★★★",

        image: "Bilder/Kevin.png"

},

    christopher: {

        name: "Christopher",

        role: "Accountant",

        rank: "Finance",

        weapon: "MP5",

        vehicle: "Vespa 946",

        money: "$120.500.000",

        location: "Vice City",

        image: "Bilder/Christopher.png"

    

    }

};

// =========================
// Elemente auswählen KI Erstellt !!
// =========================

const modal = document.getElementById("characterModal");

console.log(modal);

const buttons = document.querySelectorAll(".character-button");    /* Alle Buttons auswählen */  


const closeButton = document.querySelector(".close");

// =========================
// Button Klick KI Erstellt
// =========================

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const character = characters[button.dataset.character];

        document.getElementById("modalName").textContent = character.name;

        document.getElementById("modalRole").textContent = character.role;

        document.getElementById("modalWeapon").textContent = character.weapon;

        document.getElementById("modalVehicle").textContent = character.vehicle;

        document.getElementById("modalRank").textContent = character.rank;

        document.getElementById("modalMoney").textContent = character.money;

        document.getElementById("modalImage").src = character.image;

        modal.style.display = "flex";

    });

});

// =========================
// Modal schließen KI Erstellt !!
// =========================

closeButton.addEventListener("click", () => {

    modal.style.display = "none";

});