document.addEventListener("DOMContentLoaded", () => {
    

    const getData = () => {
        fetch('https://randomuser.me/api/')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    getData();

    populateTemplate = (e) => {
            let tpl = `<div class="card" style="width: 18rem;">
                        <img src="" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>`;
    }


    console.log("cia sono il body", $('body'))

    // (function sayHello() {
    //     console.log("say hello")
    // })(); IIFE
});


