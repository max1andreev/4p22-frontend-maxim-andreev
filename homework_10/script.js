"use strict";

    fetch("https://reqres.in/api/users?per_page=12")
      .then((response) => {
        response.json().then((users) => {

          console.log("-----------");
          console.log("Пункт №1:");
          console.log("-----------");

          for (let user of users.data) {
            console.log(`${user.id}. ${user.last_name}`)};


          console.log("-----------");
          console.log("Пункт №2:");
          console.log("-----------");


          const filteredArray = users.data.filter(
            (item) => item.last_name[0] === "F"
          );

          for (let user of filteredArray) {
            console.log(`"id": ${user.id},`);
            console.log(`"email": ${user.email},`);
            console.log(`"first_name": ${user.first_name},`);
            console.log(`"last_name": ${user.last_name},`);
            console.log(`"avatar": ${user.avatar},`);
            console.log(``);}
       

            console.log("-----------");
            console.log("Пункт №3:");
            console.log("-----------");
            
       
            const reducedArray = users.data.reduce((acc, user)=>{
                if (acc === "") {
                    acc = `${user.first_name} ${user.last_name}`;
                    return acc;
                  }
                  acc = `${acc}, ${user.first_name} ${user.last_name}`;
                  return acc;
                }, "");
            console.log(`Наша база содержит данные следующих пользователей: `+ reducedArray + `.`)
       
       
            console.log("-----------");
            console.log("Пункт №4:");
            console.log("-----------");


            users.data.forEach((user, index) => {
                    console.log(
                        `Пользователь №${index + 1}: ${Object.keys(user)}\n`
                      );
                      
                    });




    } )
        }).catch((e)=>{
        console.log(e);
    },
    { once: true }
    );

    