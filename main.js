const name = ["Akeri", "Usman", "Mayra", "Alondra", "Mike", "Uzi"];
const result = invitadospareja(name);

function invitadospareja(names) {
    let parejas = []; 
    for (let i = 0; i < names.length - 1; i++) {  //penúltimo elemento
        for (let j = i + 1; j < names.length; j++) {  //comparación con próximos elementos 
            
            if (names[i][0] === names[j][0]) {//Coinciden
                parejas.push([names[i], names[j]]);
            }
        }
    }
    return parejas; 
}

if (result.length > 0) {
    result.forEach(par => {
        console.log(`Pareja: ${par[0]} y ${par[1]}`);
    });
} else {
    console.log("No hay parejas");
}
