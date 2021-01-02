const d = document;
const $table = d.querySelector(".crud-table");
const $form = d.querySelector(".crud-form");
const $title = d.querySelector(".crud-title");
const $template = d.getElementById("crud-template").content;
const $fragment = d.createDocumentFragment();


const ajax = (options) =>{
    let {url,method,success,error,data} = options;

    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange",e=>{

        if(xhr.readyState!== 4) return;

        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else{
            let message = xhr.statusText || "ocurrio un error";
            error(`Error ${xhr.status}: ${message}`);
        }

    });

    xhr.open(method || "GET",url);
    xhr.setRequestHeader("Content-type","application/json;charset=utf-8");
    xhr.send(JSON.stringify(data));


}
const getAllUsers = () =>{
 ajax({
     //method : "GET",
     url : "http://localhost:5550/usuarios",
     success: (res)=>{
        console.log(res)
        res.forEach(el =>{
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".apellidos").textContent = el.apellidos;
            $template.querySelector(".edad").textContent = el.edad;
            $template.querySelector(".telefono").textContent = el.telefono;

            $template.querySelector(".editar").dataset.id = el.id;
            $template.querySelector(".editar").dataset.nombre = el.nombre;
            $template.querySelector(".editar").dataset.apellidos = el.apellidos;
            $template.querySelector(".editar").dataset.edad = el.edad;
            $template.querySelector(".editar").dataset.telefono = el.telefono;

            $template.querySelector(".eliminar").dataset.id = el.id;
            
            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);

        },
     error:(err)=>{
        //console.error(err)
        $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`)
        }
     //data: null
 });
}


d.addEventListener("DOMContentLoaded",getAllUsers);

d.addEventListener("submit",e=>{

    if(e.target === $form){
        e.preventDefault();

        if(!e.target.id.value){
            //POST-CREATE
            ajax({
                url: "http://localhost:5550/usuarios",
                method: "POST",
                success: (res) => location.reload(),
                error: () => $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data: {
                    nombre : e.target.nombre.value,
                    apellidos : e.target.apellidos.value,
                    edad : e.target.edad.value,
                    telefono : e.target.telefono.value
                }
            });
        }else{
            //PUT-UPDATE
            ajax({
                url: `http://localhost:5550/usuarios/${e.target.id.value}`,
                method: "PUT",
                success: (res) => location.reload(),
                error: () => $form.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`),
                data: {
                    nombre : e.target.nombre.value,
                    apellidos : e.target.apellidos.value,
                    edad : e.target.edad.value,
                    telefono : e.target.telefono.value
                }
            });
        }
    }

});

d.addEventListener("click",e=>{
    if(e.target.matches(".editar")){
        $title.textContent = "Editar Usuario";
        $form.nombre.value = e.target.dataset.nombre;
        $form.apellidos.value = e.target.dataset.apellidos;
        $form.edad.value = e.target.dataset.edad;
        $form.telefono.value = e.target.dataset.telefono;
        $form.id.value = e.target.dataset.id;
    }

    if(e.target.matches(".eliminar")){
       let isDelete = confirm(`¿Estas seguro de eliminar el id${e.target.dataset.id}?`);

       if(isDelete){
        //delete-DELETE
        ajax({
            url: `http://localhost:5550/usuarios/${e.target.dataset.id}`,
            method: "DELETE",
            success: (res) => location.reload(),
            error: () => alert(err)
        });

       }
    }

});