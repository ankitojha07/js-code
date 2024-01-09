require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "hiteshdotcom",
  "id": 62794768,
  "node_id": "MDQ6VXNlcjYyNzk0NzY4",
  "avatar_url": "https://avatars.githubusercontent.com/u/62794768?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshdotcom",
  "html_url": "https://github.com/hiteshdotcom",
  "followers_url": "https://api.github.com/users/hiteshdotcom/followers",
  "following_url": "https://api.github.com/users/hiteshdotcom/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshdotcom/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshdotcom/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshdotcom/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshdotcom/orgs",
  "repos_url": "https://api.github.com/users/hiteshdotcom/repos",
  "events_url": "https://api.github.com/users/hiteshdotcom/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshdotcom/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Hitesh Pal",
  "company": "Dukaan Dost",
  "blog": "",
  "location": "Mumbai",
  "email": null,
  "hireable": null,
  "bio": "I'm Hitesh Pal, a Full-Stack Developer and Team Lead at Dukaan Dost. Proficient in the MERN stack, Docker, and AWS. Passionate about innovation and tech trends",
  "twitter_username": null,
  "public_repos": 70,
  "public_gists": 0,
  "followers": 10,
  "following": 4,
  "created_at": "2020-03-28T11:10:59Z",
  "updated_at": "2023-12-18T09:57:02Z"
}

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('ankitojhacoding')
})

app.get('/login', (req,res)=>{
  res.send('<h1>Login Page</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// basic syntext for server