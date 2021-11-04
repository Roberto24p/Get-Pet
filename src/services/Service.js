

export const services = {
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
