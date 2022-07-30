//accountInfo
//charInfo
//playerInfo

type accountInfo = {
    id: number
    name: string
    email?: string
}

const account: accountInfo = {
    id: 123,
    name: "helleson",
    
}

type charInfo = {
    nickname: string
    level: number
}

const char: charInfo = {
    nickname: 'hellison silva',
    level: 100
}

// intersection
type playerInfo = accountInfo & charInfo

const player: playerInfo = {
    id: 123,
    name: "helleson",
    nickname: "hellison silva",
    level: 100
    
}