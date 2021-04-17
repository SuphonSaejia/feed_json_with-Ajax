(function() {
    `use strict`;
function ajaxCall (dataURL,outputElement, callback){
    `use strict`;
    var XHR = new XMLHttpRequest();
    outputElement.innerHTML = 'Loading....';
    XHR.onreadystatechange = function(){
        if(XHR.readyState === 4 && XHR.status === 200){
            var contacts = JSON.parse(XHR.responseText);
            if(typeof callback === 'function'){
                callback(contacts);
            } else {
                alert('There was aproblem of request : \n ${XHR.statusText}');
            }
        }
    };
    XHR.open('GET',dataURL);
    XHR.send(null);
}
       var     UpdateDate = document.querySelector(`#UpdateDate`),
               Confirmed = document.querySelector(`#Confirmed`),
               NewConfirmed = document.querySelector(`#NewConfirmed`),
               Recovered = document.querySelector(`#Recovered`),
               NewRecovered = document.querySelector(`#NewRecovered`),
               Hospitalized = document.querySelector(`#Hospitalized`),
               NewHospitalized = document.querySelector(`#NewHospitalized`),
               Deaths = document.querySelector(`#Deaths`),
               NewDeaths = document.querySelector(`#NewDeaths`),
               jsonURL = 'https://covid19.th-stat.com/api/open/today';

    ajaxCall(jsonURL,UpdateDate,function(data){
        UpdateDate.innerHTML = `<h4>อัพเดทข้อมูลล่าสุด : ${data.UpdateDate}</h4>`;
        Confirmed.textContent = data.Confirmed;
        NewConfirmed.textContent = "[ +" + data.NewConfirmed + " ]";
        Recovered.textContent = data.Recovered;
        NewRecovered.textContent = "[ +" + data.NewRecovered + " ]";
        Hospitalized.textContent = data.Hospitalized;
        NewHospitalized.textContent = "[ " + data.Hospitalized + " ]";
        Deaths.textContent = data.Deaths;
        NewDeaths.textContent = "[ +" + data.NewDeaths + " ]";
      });
})();