let tab = function(){

    let table = document.createElement("TABLE");
    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");






    let set=function(){
        data1.innerText="X";
        data1.style.backgroundColor = "slategrey";
    };
    let set2=function(){
        data2.innerText="X";
        data2.style.backgroundColor = "slategrey";
    };
    let set3=function(){
        data3.innerText="X";
        data3.style.backgroundColor = "slategrey";
    };
    let set4=function(){
        data4.innerText="X";
        data4.style.backgroundColor = "slategrey";
    };
    let set5=function(){
        data5.innerText="X";
        data5.style.backgroundColor = "slategrey";
    };
    let set6=function(){
        data6.innerText="X";
        data6.style.backgroundColor = "slategrey";
    };
    let set7=function(){
        data7.innerText="X";
        data7.style.backgroundColor = "slategrey";
    };
    let set8=function(){
        data8.innerText="X";
        data8.style.backgroundColor = "slategrey";
    };
    let set9=function(){
        data9.innerText="X";
        data9.style.backgroundColor = "slategrey";
    };


    let data1 = document.createElement("TD");
    let data2 = document.createElement("TD");
    let data3 = document.createElement("TD");
    let data4 = document.createElement("TD");
    let data5 = document.createElement("TD");
    let data6 = document.createElement("TD");
    let data7 = document.createElement("TD");
    let data8 = document.createElement("TD");
    let data9 = document.createElement("TD");
    data1.innerText = "Bruh";
    data2.innerText = "Bruh";
    data3.innerText = "Bruh";
    data4.innerText = "Bruh";
    data5.innerText = "Bruh";
    data6.innerText = "Bruh";
    data7.innerText = "Bruh";
    data8.innerText = "Bruh";
    data9.innerText = "Bruh";



    data1.onclick=set;
    data2.onclick=set2;
    data3.onclick=set3;
    data4.onclick=set4;
    data5.onclick=set5;
    data6.onclick=set6;
    data7.onclick=set7;
    data8.onclick=set8;
    data9.onclick=set9;




//Create the table with appendages

    row1.appendChild(data1);
    row1.appendChild(data2);
    row1.appendChild(data3);

    row2.appendChild(data4);
    row2.appendChild(data5);
    row2.appendChild(data6);

    row3.appendChild(data7);
    row3.appendChild(data8);
    row3.appendChild(data9);



    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);


    let content = document.getElementById("content");
    content.appendChild(table);

};
