// Para recibir usuarios

function recibeUsuarios(){

    fetch("http://localhost:3000/users")
    .then(users => users.json())
    .then(users => {
        console.log(users);
        const otrosMusicos = document.getElementById('otrosMusicos');
        otrosMusicos.innerHTML = "<h2>Usuarios</h2>"
        for(let user of users){
            let tarjeta = document.createElement('div');
            tarjeta.setAttribute('class', 'tarjeta');
            if(user.Instrumentos&&user.Generos){
                tarjeta.innerHTML = 
                `            
                <p>Nombre: ${user.nombre}</p>
                <p>Pronombre: ${user.pronombre}</p>
                <p>Instrumentos: ${user.Instrumentos[0].nombre}, ${user.Instrumentos[1].nombre}</p>
                <p>Generos: ${user.Generos[0].nombre}, ${user.Generos[1].nombre}</p>
                `;
            }else{
                tarjeta.innerHTML = 
                `            
                <p>Nombre: ${user.nombre}</p>
                <p>Pronombre: ${user.pronombre}</p>
                `;
            }
            otrosMusicos.appendChild(tarjeta);
        }
    })
}

recibeUsuarios();

// Para postear usuarios
const botonMusico = document.getElementById('botonMusico');
botonMusico.addEventListener("click", () => {
    let nombre = document.getElementById('inputNombre').value;
    let pronombre = document.getElementById('inputPronombre').value;

    let bodyCont = {
        "nombre": nombre,
        "pronombre": pronombre
    };

    fetch(`http://localhost:3000/users/post`, 
    { 
        method: "POST", 
        body: JSON.stringify(bodyCont),
        headers: {
          connection: 'keep-alive',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36',
          accept: '*/*',
          'sec-fetch-site': 'same-origin',
          'sec-fetch-mode': 'cors',
          'sec-fetch-dest': 'empty',
          referer: 'http://localhost:3000/users/posts',
          'accept-language': 'es-US,es-419;q=0.9,es;q=0.8,en;q=0.7',
          'content-type': 'application/json',
          host: 'localhost:3000',
          'accept-encoding': 'gzip, deflate, br',
          'content-length': '84'
        }
    })
    .then(res => res.json())
    .then(res => console.log(res));
    recibeUsuarios();
});


