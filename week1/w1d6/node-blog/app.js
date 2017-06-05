/* app.js */

/*  Templating Node and Express Apps with EJS
    cloned from https://coligo.io/templating-node-and-express-apps-with-ejs/  */

// require and instantiate express
var app = require('express')()

// example posts to simulate a database
var posts = [
  {
    id: 1,
    author: 'Joe Dirt',
    title: 'Templating with EJS',
    body: 'This is the blog post. Yay!'
  },
  {
    id: 2,
    author: 'McLovin',
    title: 'Why I\'m lovin\' Express',
    body: 'Blog post number two'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'This is the third blog post'
  },
  {
    id: 4,
    author: 'Mike from Canmore',
    title: 'Hip happenin\' events',
    body: 'Blog post number four'
  }
]

// setting the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts})
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  var post = posts.filter((post => {
    return post.id == req.params.id
  })[0])

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')
