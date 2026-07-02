
// =========================
// Character Data
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

        vehicle: "Lamborghini Revuelto",

        money: "$25.000.000",

        location: "Vice City",

        image: "Bilder/Kevin.png"

    },

    christopher: {

        name: "Christopher",

        role: "Accountant",

        rank: "Finance",

        weapon: "MP5",

        vehicle: "Audi RS6",

        money: "$120.500.000",

        location: "Vice City",

        image: "Bilder/Christopher.png"

    }

};

// =========================
// Elemente auswählen
// =========================

const modal = document.getElementById("characterModal");

console.log(modal);

const buttons = document.querySelectorAll(".character-button");    /* Alle Buttons auswählen */  


const closeButton = document.querySelector(".close");

// =========================
// Button Klick
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
// Modal schließen
// =========================

closeButton.addEventListener("click", () => {

    modal.style.display = "none";

});