export default function countDown(id,limitDate,finalMessage){

const $count = document.getElementById(id);

const countDate = new Date(limitDate).getTime();

let countTempo = setInterval(() => {
    
    let now = new Date().getTime();

    let limitTime = countDate - now,
    
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
    
    hours= ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2),
    
    minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60 ))).slice(-2),

    seconds= ("0" + Math.floor(limitTime % (1000 * 60) / (1000))).slice(-2);

    $count.innerHTML = `
    
    <h3>Faltan: ${days} dias : ${hours} horas : ${minutes} minutos : ${seconds} segundos</h3>
    
    `;

    if(limitTime < 0){
        clearInterval(countTempo);

     $count.innerHTML = `
    <h3>${finalMessage}</h3>
    
    `;

    }

}, 1000);


}