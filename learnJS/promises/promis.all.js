const namePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Anna','Jones','Ali','Jake']);
    }, 3000);

    setTimeout(() => {
      reject("No data back from server, there is an error");
  }, 5000);
});

const surnamePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Williams','Bravo','Mohammado','Smith']);
    }, 3000);

    setTimeout(() => {
      reject("No data back from server, there is an error");
  }, 5000);
});


Promise.all([namePromise, surnamePromise]).then(data =>{
    const [names, surnames] = data;
    for (var i = 0; i < names.length; i++) {
        const name = names[i];
        const surname = surnames[i];
        log(`${name} ${surname}`)
        
    }
}).catch(error => {
    log(error);
});

