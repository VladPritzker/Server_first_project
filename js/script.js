'use strict';
const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');
inputRub.addEventListener('input', () => { // событие будет происходить 
    //каждый раз еогда что то ввожиться или удаляется
    const request = new XMLHttpRequest(); // вставили запрос в новую переменную 

    //  request.open(method, url,  async, login, pass);// method = get, post..; url = куда мы отправялем запрос; 
    //  // async указываеться для того что бы при задержке ответа на запрос
    //  // выполнялся остальной код буз задердки 
    //  // метод open собирает настройки которые в будущем помогут сделать запрос    

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Contant-type', 'application/json; charset=utf-8'); // заголовок что бы указать
    // какой тип данных (applicaation/json) мы отправляем и кодировка самая стандартная 'charset=utf08'
    request.send();

    request.addEventListener('readystatchange', () => { // отслеживает когда наш запрос будет готов 
        //(следит за readyState)
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = +inputRub.value / data.carrent.usd;
        } else {
            inputUsd.value = 'Что то пошло не так';
        }
    });
    //status  = 200, 404 //
    //statusText = text not found, undefined ..
    //response ответ который мы становим 
    //readyState разные этапы запроса от 1 = он был создан до 1 2 он был вызван 3 он грузиться и 4 он завершон 
});