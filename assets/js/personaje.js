//clase padre
class Personajes {
    //constructor
    constructor (id) {
        //clausures
        let _id = id
        this.getid = () => _id
        this.setid = (nuevo_id) => _id = nuevo_id
    }
    //get y set
    get id() {
        return this.getid()
    }
    set id(nuevo_id) {
        this.setid(nuevo_id)
    }
}
export default Personajes
