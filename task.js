let box_data = document.querySelector('.box');
let btn = document.querySelector('button');
let value = document.querySelector('input');
let count = document.getElementById('show_count')
let cls = document.getElementById('clr');
let counter = 0;
let stotageCount = 9999;

btn.addEventListener('click',()=>
{
    if(value.value != '')
    {
        counter ++;
        box_data.innerHTML += `<li id='${counter}' onclick='remove(${counter})'>${value.value}</li>`;
        count.innerText = counter;
        localStorage.setItem(stotageCount,counter);
        localStorage.setItem(counter,value.value);
        // console.log(value.value);
        // console.log(counter);
        value.value = ''
    }
    else
    {
        alert('Field is blank..!');
    }
});

cls.addEventListener('click',()=>
{
    box_data.innerHTML = ``;
    count.innerText = 0;
    counter = 0;
    localStorage.clear();
});

function remove(number)
{
    let strike = document.getElementById(number);
    strike.style.textDecoration = 'line-through';
}



    document.addEventListener('DOMContentLoaded',()=>
    {
        for(let i =1; i<=Number(localStorage.getItem(stotageCount)); i++)
        {
            box_data.innerHTML = localStorage.getItem(i);
            // console.log(localStorage.getItem(i))
        }
    
    });

