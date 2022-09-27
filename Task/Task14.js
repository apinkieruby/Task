const books = [
    {
        title: 'First Games',
        decription: 'Fantacy',
        numberOfPages: 103,
        author: 'Wayz Fave',
        reading: true,
    },

    {
        title: 'faithful',
        decription: 'Fantacy',
        numberOfPages: 90,
        author: 'Rose Checkih',
        reading: false
    },

    {
        title: 'All for Them',
        decription: 'Action',
        numberOfPages: 112,
        author: 'Maddison',
        reading: true
    }
]

for(let i=0; i<books.length; i++) {
    if(books[i].reading === true)
    console.log(books[i]);
}

console.log('==== or ====');

for(elem in books) {
    if(books[elem].reading === true) {
        console.log(elem, books[elem]);
    }
}

console.log('==== or ====');

const filter = books.filter(function (book) {
    return book.reading === true;
});

console.log(filter);