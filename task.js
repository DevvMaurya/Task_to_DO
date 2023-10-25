let box_data = document.querySelector('.box');
let btn = document.querySelector('button');
let value = document.querySelector('input');
let count = document.getElementById('show_count')
let cls = document.getElementById('clr');
let counter = 0;

btn.addEventListener('click',()=>
{
    if(value.value != '')
    {
        counter ++;
        box_data.innerHTML += `<li id='${counter}' onclick='remove(${counter})'>${value.value}</li>`;
        count.innerText = counter;
        console.log(value.value);
        console.log(counter);
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
    counter = 0

});

function remove(number)
{
    let strike = document.getElementById(number);
    strike.style.textDecoration = 'line-through';
}