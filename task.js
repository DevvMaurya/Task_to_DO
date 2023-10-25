let box_data = document.querySelector('.box');
let btn = document.querySelector('button');
let value = document.querySelector('input');
let count = document.getElementById('show_count')
let cls = document.getElementById('clr');
let counter = 0;

btn.addEventListener('click',()=>
{
    if(value.value != null)
    {
        counter ++;
        box_data.innerHTML += `<li>${value.value}</li>`;
        count.innerText = counter;
        console.log(value.value);
        console.log(counter);
        value.value = ' '
    }
    else
    {
        alert('field is balck..!');
    }
});
cls.addEventListener('click',()=>
{
    box_data.innerHTML = ``;
    count.innerText = 0;
    counter = 0

});