(function() {
    `use strict`;
function ajaxCall (dataURL,outputElement, callback){
    `use strict`;
    var XHR = new XMLHttpRequest();
    outputElement.innerHTML = '<a style="color:rgb(255, 255, 255); font-size: 2em; ">Loading......</a>';
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
    XHR.open('GET',dataURL,true);
    XHR.send();
}
    var news = document.querySelector(`#news`), 
    jsonURL = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=a70d4f9ca8894cf09976575575426bcb';
    ajaxCall(jsonURL,news,function(data){    
        var addrBook =  data.articles,  //ดึงข้อมูลจาก API มาเป็บไว้ที่ตัวแปลนี้
        count = addrBook.length,  //นับข้อมูลในตัวแปล addrBook ว่ามีเท่าไร
        i;
            news.innerHTML = ``; //เคลียหน้าจอแสดงผลให้ว่าง
        for (i = 0; i < count; i++) {
            var obj = addrBook[i]; //เข้าถึงข้อมูลโดยใช้ I เป็นตัวนับลำดับ
            if(obj.urlToImage){ //แสดงผลแค่ข้อมูลที่มีรูปภาพ
            news.innerHTML += `<div>
                               <a href="${obj.url}"><img src="${obj.urlToImage}" style="width:100%; height:100%;" ></a>
                               </div>
                               <div1>
                               <h2 style="color:rgb(0, 0, 0);">${obj.title}</h2>
                               <br>
                               <h4>${obj.description}</h4>
                               </div1>
                               `;
        }
    }
  });
})();