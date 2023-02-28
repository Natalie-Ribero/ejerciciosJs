let name = "Natalie";
let surname = "Ribero";
let age = 22;
let pets = 1;
let namePets = "Kira";

switch (pets) {
    case 0:
        console.log("I don't have pet")
        break;
    case 1:
        console.log("I have one pet")
        break;
    default:
        console.log("I have pets")
        break;

}

if (age < 18) {
    console.log("No puedes acceder a este sitio")
}    else {
        console.log("Que disfrute su visita")
    }