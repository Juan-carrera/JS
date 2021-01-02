(()=>{
const xhr = new XMLHttpRequest();
const $xhr = document.getElementById("xhr");
const $fragment = document.createDocumentFragment();


xhr.addEventListener("readystatechange",e=>{

    if(xhr.readyState !== 4) return;

    if(xhr.status >= 200 && xhr.status < 300) {
        //console.log("exito");
        //console.log(xhr.responseText);
        let json = JSON.parse(xhr.responseText);
        
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;

            $fragment.appendChild($li);
        })

        $xhr.appendChild($fragment);
    } 
    else{
        //console.log("error");
        let message = xhr.statusText || "Ocurrio un error";

        $xhr.innerHTML = `ERROR ${xhr.status}: ${message}`;
    }

    console.log("este mensaje cargara de cualquier forma xmlhttprequest")

});

xhr.open("GET","https://jsonplaceholder.typicode.com/users");

xhr.send();


})();


(()=>{
const $fetch = document.getElementById("fetch");
const $fragment = document.createDocumentFragment();
 
fetch("https://jsonplaceholder.typicode.com/users")
/*.then(res => {
    return res.ok ? res.json() : Promise.reject(res);
})*/

.then((res) => (res.ok ? res.json() : Promise.reject(res)))

.then(json => {
    //console.log(json)
    json.forEach(el => {
        const $li = document.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;

        $fragment.appendChild($li);
    });

    $fetch.appendChild($fragment);
})
.catch((err) => {
    //console.log(err);
    let message = err.statusText || "Ocurrio un error";

    $fetch.innerHTML = `ERROR ${err.status}: ${message}`;
})
.finally(()=>{
    console.log("esto se ejecutara independientemente de resultado de la promesa fetch");
});

})();


(()=>{
const $fetchAsync = document.getElementById("fetch-async");
const $fragment = document.createDocumentFragment();
     

async function getData(){

    try {

        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let json = await res.json();

        if(!res.ok) throw{status: res.status,statusText : res.statusText}

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
    
            $fragment.appendChild($li);
        });
    
        $fetchAsync.appendChild($fragment);
    } 
    catch (err) {
        //console.log(err);
        let message = err.statusText || "Ocurrio un error";

        $fetchAsync.innerHTML = `ERROR ${err.status}: ${message}`;
    } finally{
        console.log("esto se ejecutara independientemente del try catch")
    }

    
}

getData();
   
})();


(()=>{
    const $axios = document.getElementById("axios");
    const $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //console.log(res);
        let json = res.data;

        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
    
            $fragment.appendChild($li);
        });
    
        $axios.appendChild($fragment);
    })
    .catch(err =>{
        //console.log(err.response);
        let message = err.response.statusText || "Ocurrio un error";

        $axios.innerHTML = `ERROR ${err.response.status}: ${message}`;
    })

    .finally(()=>{
        console.log("esto se ejecuta independientemente del resultado de axios")
    });

})();


(()=>{

    const $axiosAsync = document.getElementById("axios-async");
    const $fragment = document.createDocumentFragment();


    async function getData(){

        try {

            let res = await axios.get("https://jsonplaceholder.typicode.com/users");

            let json = await res.data;

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        
                $fragment.appendChild($li);
            });
        
            $axiosAsync.appendChild($fragment);
            
        } catch (err) {
            //console.log(err)
            let message = err.response.statusText || "Ocurrio un error";

            $axiosAsync.innerHTML = `ERROR ${err.response.status}: ${message}`;
            
        } finally{
          console.log("esto se ejecuta independientemente del try catch");  
        }

    }

    getData();

})();