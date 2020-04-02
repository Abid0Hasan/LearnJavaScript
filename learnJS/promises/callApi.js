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

