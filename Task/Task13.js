// My Personal Library

const Book = {
Title: 'Smart Money Woman',
Description: 'A must read fo(r anyone looking to get better',
Numberofpages: 208,
Author: 'Arese Ugwu',
Reading: true,

toggleReadingstatus:function(){

if(Book.Reading===false){
Boolean.Reading = true
}else{
    Book.Reading = false
}

}



}
Book.toggleReadingstatus()

console.log(Book.Reading)