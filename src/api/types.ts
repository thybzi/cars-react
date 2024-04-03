export interface CarItemData {
    id: string
    title: string
    description: string
    category: string
    isFavorite: boolean
    image: string
    volume: number
    gear: string
    capacity: number
    price: string
    oldPrice: string | null
}

export interface UserData {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
}

export interface UserDataWithToken extends UserData {
    token: string
}
