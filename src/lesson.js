const table = document.createElement("table");
table.border = 1;
document.body.append(table);

const caption = document.createElement("caption");
caption.innerText = "Таблица";
table.append(caption);

const colgroup = document.createElement("colgroup");
table.append(colgroup);

const col1 = document.createElement("col");
col1.setAttribute("width" , "45%");
colgroup.append(col1);

const col2 = document.createElement("col");
col2.setAttribute("width" , "45%")
colgroup.append(col2);

const col3 = document.createElement("col");
col3.setAttribute("width" , "5%")
colgroup.append(col3);

const col4 = document.createElement("col");
col4.setAttribute("width" , "5%")
colgroup.append(col4);

const thead = document.createElement("thead");
table.append(thead);
const tr1 = document.createElement('tr');
thead.append(tr1);
const th1 = document.createElement('th');
th1.innerText = "Name";
tr1.append(th1);
const th2 = document.createElement('th');
th2.innerText = "Surname";
tr1.append(th2);
const th3 = document.createElement('th');
th3.innerText = "Age";
tr1.append(th3);
const th4 = document.createElement('th');
th4.innerText = "Phone";
tr1.append(th4);


const tbody = document.createElement('tbody');
table.append(tbody);

const tr2 = document.createElement('tr');
tbody.append(tr2);
const td1 = document.createElement('td');
td1.setAttribute("align", "center");
td1.innerText = "Vitalik";
tr2.append(td1);
const td2 = document.createElement('td');
td2.innerText = "Petrov";
td2.setAttribute("align", "center");
tr2.append(td2);
const td3 = document.createElement('td');
td3.innerText = "11";
tr2.append(td3);
const td4 = document.createElement('td');
td4.innerText = "11111";
td4.style.color = "Yellow";
tr2.append(td4);

const tr3 = document.createElement("tr");
tbody.append(tr3);
const td5 = document.createElement('td');
tr3.append(td5);
td5.colSpan = 2;
td5.setAttribute('align', 'center');
td5.style.color = "Red";
td5.innerText = "Valeriy";

const td6 = document.createElement('td');
tr3.append(td6);
td6.innerText = "51";

const td7 = document.createElement('td');
tr3.append(td7);
const ul1 = document.createElement('ul');
td7.append(ul1);
ul1.style.color = "Blue";

const li1 = document.createElement('li');
ul1.append(li1);
li1.innerText = "11111";
const li2 = document.createElement('li');
ul1.append(li2);
li2.innerText = "22222";


const tr4 = document.createElement("tr");
tbody.append(tr4);
const td8 = document.createElement('td');
tr4.append(td8);
td8.innerText = "Kate";
const td9 = document.createElement('td');
tr4.append(td9);
td9.innerText = "Ivanova";
const td10 = document.createElement('td');
tr4.append(td10);
td10.innerText = "20";
const td11 = document.createElement('td');
tr4.append(td11);
const ul2 = document.createElement('ul');
td11.append(ul2);
ul2.style.color = "Blue";
const li3 = document.createElement('li');
ul2.append(li3);
li3.innerText = "11111";
const li4 = document.createElement('li');
ul2.append(li4);
li4.innerText = "22222";
const li5 = document.createElement('li');
ul2.append(li5);
li5.innerText = "33333";

const tr5 = document.createElement('tr');
tbody.append(tr5);
const td12 = document.createElement('td');
td12.innerText = "Lera";
tr5.append(td12);
const td13 = document.createElement('td');
td13.innerText = "Kuznetsova";
tr5.append(td13);

const td14 = document.createElement('td');
td14.innerText = "110";
tr5.append(td14);
const td15 = document.createElement('td');
td15.innerText = "77777";
td15.style.color = "Yellow";
tr5.append(td15);



const tr6 = document.createElement("tr");
tbody.append(tr6);
const td16 = document.createElement('td');
tr6.append(td16);
td16.colSpan = 2;
td16.setAttribute('align', 'center');
td16.style.color = "Red";
td16.innerText = "Valeriy";

const td17 = document.createElement('td');
tr6.append(td17);
td17.innerText = "5";

const td18 = document.createElement('td');
tr6.append(td18);
const ul3 = document.createElement('ul');
td18.append(ul3);
ul3.style.color = "Blue";

const li6 = document.createElement('li');
ul3.append(li6);
li6.innerText = "55555";
const li7 = document.createElement('li');
ul3.append(li7);
li7.innerText = "66666";

