// Create the Dog class here
class Dog {
    constructor(data){
        Object.assign(this, data)
        
    }
    
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    
    getDogHTML() {
        const { name, avatar, age, bio } = this
        
        return `<img class="teddy-pic" src="${avatar}">
            <p class="dog-name">${name}, ${age}</p>
            <p class="dog-bio">${bio}</p>`
        }  
}


export { Dog }