"use strict";
const tlou = {
    title: 'the last of us',
    description: 'the best game in the word',
    genre: 'action',
    platform: ['ps3', 'ps4'],
    getsimilars(title) {
        console.log(`Similar games to ${title}: Ucharted, A plague tales, Metro`);
    }
};
tlou.getsimilars(tlou.title);
