const books = require('../books')

module.exports = {
  getAllBooks: (req, res)=>{
    res.status(200).send(books)
  },
  getBookById: (req, res) => {
    console.log(req.params)
    let {id} = req.params
    let singleBook = books.filter( book => {
      return book.id === +id
    })
    res.status(200).send(singleBook)
  },
  searchByTitle: (req, res) =>{
    console.log(req.query)
    let {title, author} = req.query
    let foundBook = []
    if( req.query.author){
      foundBook = books.filter( book => {
        return book.author.toLowerCase() === author.toLowerCase()
      })
    } else if( req.query.title)
      foundBook = books.filter( book => {
      return book.title.toLowerCase() === title.toLowerCase()
    })
    res.status(200).send(foundBook)
  }

}

