//llamando clases
// import Personaje from "./personaje.js"
import DetallesPersonajes from "./DetallesPersonajes.js"
//funcion IIFE
const llamadoPersonajes = (() => {
// 3 variables privadas
    let baseUrl, result, save
        baseUrl = "https://rickandmortyapi.com/api/character/"
        result = $(".resultados")
        save
//1 funcion asicrona privada try/catch
    const request = async (url) => {
        try{
            const results = await fetch(url);
            save = await results.json();
            return save;
        }
        catch{
            console.log("error")
        }
    }
//2 funcion asicrona privada con try/catch
    const getUser = async (id) => {
        try {
            const url = `${baseUrl}/${id}`;
            Promise.all([request(url)])
            .then(resp2 => {
                let d2 = new DetallesPersonajes(`${resp2[0].id}`,`${resp2[0].name}`,`${resp2[0].status}`,`${resp2[0].species}`,`${resp2[0].gender}`,`${resp2[0].created}`,`${resp2[0].origin.name}`,`${resp2[0].location.name}`,`${resp2[0].episode.length}`)
                d2.infoGeneral()
                let info = d2.infoModal()
                printInfoModal(info)
                //modal
                function printInfoModal(data){
                    let result = $(".resultados")
                    let primero = $('<div class="cartas"></div>')
                    let segundo = $(`<div class="modal fade" id="pj${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"></div>`);
                    let tercero = $('<div class="modal-dialog" role="document"></div>')
                    let cuarto = $('<div class="modal-content"></div>')
                    let quinto1 = $('<div class="modal-header"></div>')
                    let quinto2 = $('<div class="modal-body"></div>')
                    let boton1 = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close">')
                    let boton2 = $('<span aria-hidden="true">&times;</span>')
                    let userUl = $('<ul class="col-12" style="list-style-type: none; margin: 0;margin-top: 50px;"></ul>');
                    ["id", "name", "status", "species", "gender", "created", "origin", "location", "episode"].forEach(element => {
                        userUl.append($(`<li style="font-size:160%;"></li>`).append(data[element]))
                    });
                    ["name"].forEach(element => {
                        quinto1.append($(`<p></p>`).append(data[element]))
                    });
                    cuarto.append(quinto1)
                    boton1.append(boton2)
                    quinto1.append(boton1)
                    quinto2.append(userUl)
                    cuarto.append(quinto2)
                    tercero.append(cuarto)
                    segundo.append(tercero)
                    primero.append(segundo)
                    result.append(primero)
                }
            })
            .catch(err => console.log('err', err))
        }
        catch{
            console.log("error")
        }
    }
    return {
        //1 funcion publica asicrona dentro del retorno
        request: async () => {
            let j = 1
            Promise.all([request(baseUrl + "?page=" + j)])
            .then(resp => {
                for (let id = 1; id < 21; id++){
                    //colocar imagenes
                    let firstCol = $(`<div class="col-md-4" style="padding-top:50px"></div>`)
                    let userInfo = $('<div></div>');
                    userInfo.append(`<button type="button" style="float:left" class="btn col-6" id="imagen${id}" data-toggle="modal" data-target="#pj${id}"><img src="${resp[0].results[id-1].image}" style="width:110px;"></button>`)
                    getUser(id, userInfo)
                    firstCol.append(userInfo)
                    result.append(firstCol)
                }
            })
            .catch(err => console.log('err', err))
        },
        //2 funcion publica dentro del retorno
        getdelete: () => {
            $("div").removeClass("spinner-border");
            $("#cantidadPersonajes").append(`${save.id}`)
        }
    }
})()
//llamando funciones puclicas dentro de la privada
llamadoPersonajes.request()
setTimeout(() => {
llamadoPersonajes.getdelete()
}, 2000)









//segunda solucion posible
// //llamando clases
// import DetallesPersonajes from "./DetallesPersonajes.js"
// //funcion IIFE
// const llamadoPersonajes = (() => {
// // 3 variables privadas
// let baseUrl, result, guardar
// baseUrl = "https://rickandmortyapi.com/api/character/"
// result = $(".resultados")
// guardar
// //1 funcion asicrona privada try/catch
//     const request = async (url) => {
//         try{
//             const results = await fetch(url);
//             guardar = await results.json();
//         return guardar;
//         }
//         catch{
//             console.log("error")
//         }
//         }
// //2 funcion asicrona privada con try/catch
//         const getUser = async (id) => {
//             try {
//             const url = `${baseUrl}/${id}`;
//             return request(url);
//         }
//         catch{
//             console.log("error")
//         }
//     }
//     return {
//         //1 funcion publica asicrona dentro del retorno
//         request: async (id) => {
//             let j = 1
//             Promise.all([request(baseUrl + "?page=" + j)])
//             .then(resp => {
//                 for (let id = 1; id < 21; id++){
//                 let imagen = `${resp[0].results[id-1].image}`
//                 Promise.all([getUser(id)])
//                 .then(resp2 => {
//                     let d2 = new DetallesPersonajes(`${resp2[0].id}`,`${resp2[0].name}`,`${resp2[0].status}`,`${resp2[0].species}`,`${resp2[0].gender}`,`${resp2[0].created}`,`${resp2[0].origin.name}`,`${resp2[0].location.name}`,`${resp2[0].episode.length}`)
//                     let info = d2.infoModal()
//                     printInfoModal(info)
//                     printUserInfo(id, imagen);
//                     d2.infoGeneral(d2)
//   function printUserInfo(id, data2){
//     let firstCol = $('<div class="col-md-4" style="padding-bottom:50px"></div>')
//       let userInfo = $('<div><strong></strong></div>');
//      ["image"].forEach(element => {
//         userInfo.append($(`<button type="button" style="float:left" class="btn col-6" id="imagen${id}" data-toggle="modal" data-target="#pj${id}"><img src="${data2}" id="imagen${id}" style="width:100px;"></button>`).append(data2[element]))
//         });
//     firstCol.append(userInfo)
//     result.append(firstCol)
//   }
//   function printInfoModal(data){
//   let result = $(".resultados")
//   let primero = $('<div class="cartas"></div>')
//   let segundo = $(`<div class="modal fade" id="pj${id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"></div>`);
//   let tercero = $('<div class="modal-dialog" role="document"></div>')
//   let cuarto = $('<div class="modal-content"></div>')
//   let quinto1 = $('<div class="modal-header"></div>')
//   let quinto2 = $('<div class="modal-body"></div>')
//   let boton1 = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close">')
//   let boton2 = $('<span aria-hidden="true">&times;</span>')
//   let userUl = $('<ul class="col-12" style="list-style-type: none; margin: 0;margin-top: 50px;"></ul>');
//   ["id", "name", "status", "species", "gender", "created", "origin", "location", "episode"].forEach(element => {
//     userUl.append($(`<li style="font-size:160%;"></li>`).append(data[element]))
//     });
//     ["name"].forEach(element => {
//         quinto1.append($(`<p></p>`).append(data[element]))
//         });
// cuarto.append(quinto1)
// boton1.append(boton2)
// quinto1.append(boton1)
// quinto2.append(userUl)
// cuarto.append(quinto2)
// tercero.append(cuarto)
// segundo.append(tercero)
// primero.append(segundo)
// result.append(primero)
//   }
//                 })
//                 .catch(errr => console.log('err', errr))
//             }
//             })
//             .catch(err => console.log('err', err))
//         },
// //2 funcion publica dentro del retorno
//         getdelete: () => {
//             setTimeout(() => {
//             console.log("segunda")
//             $("div").removeClass("spinner-border");
//             console.log(`${guardar.id}`)
//             $("#cantidadPersonajes").append(`${guardar.id}`)
//         }, 2000)
//         }
//     }
//     })()
// llamadoPersonajes.request()
// llamadoPersonajes.getdelete()