var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];


var inputWidth = {
  shorttext: "250px",
  longtext: "500px",
  number: "100px"
};

buildForm(formDef2);
function buildForm(array, form) {
  array.forEach((formElement) => {
    let element;
    let label = document.createElement("label");
    label.innerHTML = formElement.label;
    switch(formElement.kind) {
      case "shorttext":
      case "longtext":
      case "number":
        element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("name", formElement.name);
        element.style.width = inputWidth[formElement.kind];
        break;
      case "submit":
        element = document.createElement("input");
        element.setAttribute("type", "submit");
        element.value = formElement.label;
        break;
    }
    if (formElement.kind !== "submit") {
      form.appendChild(label);
    }
    form.appendChild(element);
  });
}