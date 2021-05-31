

export const services = {
    login: async function (user) {
        // const response = await fetch(`http://192.168.1.9:8003/login/${user.username}/${user.password}`,
        const req = await fetch(`https://reqres.in/api/login`,
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        const res = await req.json();
            
        return  res;
    },
    registrar: async function(newData){
        const req = await fetch(``,
        {
            method: 'POST',
            body: JSON.stringify(newData),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const res = await req.json();
        return res;
    },
    getPicture: async function(){
        const req = await fetch(`https://dog.ceo/api/breeds/image/random`, {
            method: "GET",
          });
          const res = await req.json();
    
          return res;
    }

}
