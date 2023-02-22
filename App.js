let DataId = document.querySelector("#DataId");

let Data = (deger) => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => DataFunc(data, deger));

    let DataFunc = (data, deger) => {
        data.forEach(element => {
            RenderData(element, deger);
        });
    }
}

let Time;
let liId ;

let RenderData = (e, deger) => {

    if (deger == "Daily") {
        Time = `<b class='time'>${e.timeframes.daily.current}hrs</b><div>Last Daily - ${e.timeframes.daily.previous}hrs</div>`;
    } else if (deger == "Monthly") {
        Time = `<b class='time'>${e.timeframes.monthly.current}hrs</b><div>Last Monthly - ${e.timeframes.monthly.previous}hrs</div>`;
    } else if (deger == "Weekly") {
        Time = `<b class='time'>${e.timeframes.weekly.current}hrs</b><div>Last  Weekly- ${e.timeframes.weekly.previous}hrs</div>`;
    }

    if(e.title!="Self Care"){
        liId = e.title;
    }else {
        liId = "Self";
    }

    let dataLi = `<li id='${liId}'><div class='contain'><h2><b>${e.title}</b><img src='./images/icon-ellipsis.svg' alt='${e.title}'></h2>${Time}</div></li>`;

    DataId.innerHTML += dataLi;
}


Data("Daily");

let buttons = document.querySelectorAll(".buttons button");
buttons[0].style.color = "#fff";

buttons[0].addEventListener("click", () => {
    DataId.innerHTML = "";
    Data("Daily");
    styleClear();
    buttons[0].style.color = "#fff";
});

buttons[1].addEventListener("click", () => {
    DataId.innerHTML = "";
    Data("Weekly");
    styleClear();
    buttons[1].style.color = "#fff";
})

buttons[2].addEventListener("click", () => {
    DataId.innerHTML = "";
    Data("Monthly");
    styleClear();
    buttons[2].style.color = "#fff";
})


let styleClear = () => {
    buttons.forEach(button=>{
        button.removeAttribute("style");
    })
}