/** We have to import bluebird  */

import{ coroutine as co } from 'bluebird';

/** How to Call api using Promises */

const getRandomUsers = n => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
    fetchRandomUsers.then(data => {
        data.json().then(randomUsers =>{
            log(JSON.stringify(randomUsers.result.length));
            randomUsers.result.forEach(user => {
                const{gender, email} = user;
                log(`${gender} - ${email}`)
            });
        });
    });
};

getRandomUsers(100);



/** How to Call api using Coroutine and Promises */

const getRandomUsers = co(function* (n) {
    const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
    const data = yield fetchRandomUsers.json();
    return data;
});

getRandomUsers(10).then(randomUsers => {
    randomUsers.result.forEach(user => {
        const {gender, email} = user;
        log(`${gender} - ${email}`);
    });

}).catch(err => log);
