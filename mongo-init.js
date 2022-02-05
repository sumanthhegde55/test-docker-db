// db = new Mongo().getDB('testDB');
db.createCollection('books',{capped:false});
db.createCollection('author',{capped:false});
db.books.insert([
    {id:'1',bookName:'Harry potter',authorName:'JKR',cover:'cover1'},
    {id:'2',bookName:'LOR',authorName:'Tolkien',cover:'cover2'},
    {id:'3',bookName:'Hobbit',authorName:'Tolkien',cover:'cover3'},
    {id:'4',bookName:'Hunger Games',authorName:'collins',cover:'cover4'},    
]);
db.author.insert([{'author':'JKR'},{'author':'Tolkien'},{'author':'collins'}]);