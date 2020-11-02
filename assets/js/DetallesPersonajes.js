//clase hija
import Personajes from "./personaje.js"
class DetallesPersonajes extends Personajes {
    //constructor
    constructor (id, name, status, species, gender, created, origin, location, episode) {
        super(id)
        //clausures
        let _name = name
        this.getName = () => _name
        this.setName = (nuevo_name) => _name = nuevo_name
        let _status = status
        this.getStatus = () => _status
        this.setStatus = (nuevo_status) => _id = nuevo_status
        let _species = species
        this.getSpecies = () => _species
        this.setSpecies = (nuevo_species) => _species = nuevo_species
        let _gender = gender
        this.getGender = () => _gender
        this.setGender = (nuevo_gender) => _gender = nuevo_gender
        this._created = created
        this._origin = origin
        this._location = location
        this._episode = episode
    }
    //get y set
    get name () {
        return this.getName()
    }
    set name(nuevo_name) {
        this.setName(nuevo_name)
    }
    get status () {
        return this.getStatus()
    }
    set status(nuevo_status) {
        this.setStatus(nuevo_status)
    }
    get species () {
        return this.getSpecies()
    }
    set species(nuevo_species) {
        this.setSpecies(nuevo_species)
    }
    get gender () {
        return this.getGender()
    }
    set gender(nuevo_gender) {
        this.setGender(nuevo_gender)
    }
    get created () {
        return this._created
    }
    get origin () {
        return this._origin
    }
    get location () {
        return this._location
    }
    get episode () {
        return this._episode
    }
    infoModal () {
        let modal = {id: `ID: ${this.id}`,name: `Nombre: ${this.name}`,status: `EStado: ${this.status}`,species: `Especies: ${this.species}`,gender: `Genero: ${this.gender}`,created: `Creado: ${this.created}`,origin: `Origin: ${this.origin}`,location: `Locaion: ${this.location}`,episode: `Cantidad de Episodios: ${this.episode}`}
        return modal
    }
    infoGeneral() {
         let col = `<ul class="col-6" style="list-style-type: none; margin: 0; float:left"><li style="font-size:160%;">${this.id}</li><li style="font-size:160%;">${this.name}</li><li style="font-size:160%;">${this.species}</li><ul>`
        document.getElementById(`imagen${this.id}`).insertAdjacentHTML("afterend", col)
    }
}
export default DetallesPersonajes