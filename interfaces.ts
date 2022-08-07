interface Game {
title: string
description: string
readonly genre: string
platform: string[]
getsimilars: (title: string) => void
}

const tlou: Game = {
    title: 'the last of us',
    description: 'the best game in the word',
    genre: 'action',
    platform:['ps3', 'ps4'],
    getsimilars(title: string) {
        console.log(`Similar games to ${title}: Ucharted, A plague tales, Metro`)
    }

}



tlou.getsimilars(tlou.title)