
import {storage} from '../services/fireBase';
const ref = storage.ref()
import { v4 as uuidv4 } from 'uuid';

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
    },
    uploadImagen:  function(image){
        return new Promise(async (resolve, reject)=>{
            const uri = "moment/"+uuidv4()+"/"+image.name
            const refImage = ref.child(uri)
            const metadata = {contentType: 'image/jpeg'}
            await refImage.put(image, metadata)
            console.log("Archivo Subido")
            const uriImage = await refImage.getDownloadURL();
            resolve(uriImage)
        })
    }    
}
