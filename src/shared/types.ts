export interface PostInterface {
  userId: number
  id: number
  title: string
  body: string
  isNew?: boolean
  isFavorite?: boolean
}

export interface Geo {
  lat: string
  lng: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export interface UserInterface {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface CommentInterface {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
