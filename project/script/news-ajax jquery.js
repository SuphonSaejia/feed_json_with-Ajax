(function() {
    `use strict`;
    var news = document.querySelector(`#news`);
    var url = 'http://newsapi.org/v2/top-headlines?country=th&apiKey=a70d4f9ca8894cf09976575575426bcb';
    news.innerHTML = `<a style="color:rgb(255, 255, 255); font-size: 2em; ">Loading......</a>`;
     $.getJSON(url).then(function(res){
        console.log(res['status']) //ok
        news.innerHTML = ``;
        var addrBook =  res['articles'],  //ดึงข้อมูลจาก API มาเป็บไว้ที่ตัวแปลนี้
        count = res['articles'].length,  //นับข้อมูลในตัวแปล addrBook ว่ามีเท่าไร
        i;
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

    })   
})();