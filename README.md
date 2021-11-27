# biketag-games 

This repository holds the data schema and objects created within a Sanity.io dataset for the redundant storage of both content and images for games of BikeTag using the [biketag-api](https://npmjs.com/package/biketag) driven by the serverside application [biketag-app](https://npmjs.com/package/biketag-app). 

## Schema

### Game
A BikeTag Game used to define the gameplay of a BikeTag instance both by the biketag-app and biketag-api projects
```
Game {
  slug: string
  name: string
  ambassadors: Ambassador[]
  boundary: boundary
  mainhash: string
  queuehash: string
  subreddit: string
  logo: string
  region: Region
}
```

### Tag
A BikeTag Tag -- the data model for all BikeTag objects that represent a tag for a given BikeTag Game
```
Tag {
  slug: string
  name: string
  tagnumber: number
  mysteryImage?: string
  mysteryImageUrl: string
  game: Game
  player: Player
  hint: string
  discussionUrl?: string
  mentionUrl?: string
  shareUrl?: string
  foundLocation: string
  gps: geopoint
  foundImage?: string
  foundImageUrl: string
}
```

### Player
A BikeTag Player assigned to a given set of games that has a set of tags associated with their name
```
Player = {
  slug: string
  name: string
  bicon: string
  games: Game[]
  tags: Tag[]
}
```

### Ambassador
A BikeTag Ambassador and person to contact for gameplay support
```
Ambassador = {
  slug: string
  name: string
  address1: string
  address2: string
  city: string
  country: string
  zipcode: number
  email: string
  phone: string
  player: Player
}
```

### Region
A region used to define the playable area of a BikeTag Game
```
Region = {
  slug: string
  name: string
  description: string
  zipcode: number
}
```

### Setting
A BikeTag Game setting used in the configuration of a BikeTag Game within the biketag-api or biketag-app projects.
```
Setting = {
  slug: string
  name: string
  description: string
  key: string
  value: string
}
```

## What you have (from Sanity.io generation)
Deployed from [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-translation-examples).

- Structured content using [Sanity.io](https://www.sanity.io). See the `studio/` folder in this repository.
- Global deployment on [Netlify](https://netlify.com)

### Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

### Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
