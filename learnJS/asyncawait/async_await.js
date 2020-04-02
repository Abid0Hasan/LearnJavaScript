async function logName(name) {
    log(name);

    //1. We can yield promise using Await
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() => resolve(name.toUpperCase()), 1000);
    });

    const result = await transformName; // we can use Await instead of yield

    //2.return A promise
    
    return result;
}

logName("antonio").then(res => {
   log("result from async function = " +res);
});



/**  Convert generator to async await  */

/** using Generato Functio  */

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


/** Using ASync Await */

/** How to Call api using Coroutine and Promises */

const getRandomUsers = async n => {
    try{

        const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${n}`);
        const data = await fetchRandomUsers.json();
        data.result.forEach(user => {
            const {gender, email} = user;
            log(`${gender} - ${email}`);
        });
        return data;
    }catch(err){
        log(err);
    }
}
getRandomUsers(5);

