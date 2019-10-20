// comando para criar uma arry
// pode ser let data = new array;  é o mesmo comando
/* let data = [{
    id: 1,
    title: "Estudar Html"
},{
    id: 2,
    title: "Estudar Css"
},{
    Id: 3,
    title: "Estudar Java Script"
},{
    id: 4,
    title: "Estudar PHP"
}];  

let data = [];

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';  //limpando a lista

    data.forEach( task => {
        
        let li = document.createElement('li')

        li.innerHTML = `<input type="checkbox" id ="task-${task.Id}">
                        <label for="task-${task.Id}">${task.title}</label>
                        <button type ="button">x</button>
                        `;

        li.querySelector('input').addEventListener("change", e =>{
            if(e.target.checked){            //e.target é um iput ele estaverificando o checked
                        //se true
                li.classList.add('complete');
            } else {
                    // se false
                    li.classList.remove('complete');

            }
        });

        // procuta o botao          add um evento de click 
        li.querySelector('button').addEventListener('click', e => {
           /* // console.warn("Voce vai deletar este item !!!");
           //console.warn(e.target);
           //console.dir(e.target); //mostra todos o no acima

           //estou indo na target parennote procurando o input, quando acho pego o id
          // console.dir(e.target.parentNote.querySelector('input').id); 
          
          
         // console.dir(e.target.parentNote.querySelector('input').id.split('-')[1]);

                let button = e.target;  // botao
                let li = button.parentNote; // pai do botap
                let input = li.querySelector('input'); //procurar o input
                let id = input.id;       //localizamos o id
                let idArray = id.split('-'); // encontramos o id do todo 
                let todoId = idArray[1];  //obteve o numer do array index1

                if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {

                    data = data.filter(task => task.id !== parseInt(todoId));
    
                    renderTodo();
    
                }            
    
        });

        document.querySelector('.todo').append(li);

    });
}

// estou localizando o input com query select, verificando quando solta a tecla - keyup
document.querySelector('#new-task').addEventListener('keyup', e => {

 //   console.log(e);   vamos validar se o e.key

    if(e.key === 'Enter') {
       // console.log(e.target.value);

        data.push({
                id: data.length+1,
                title: e.target.value
        });

        e.target.value = "";
        renderTodo();

    }

})
// quando a tela carrega
renderTodo();

*/

let data = [];

function renderTodo() {

    document.querySelector('.todo').innerHTML = '';

    data.forEach(task => {

        let li = document.createElement('li');

        li.innerHTML = `
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}">${task.title}</label>
            <button type="button">x</button> 
        `;

        li.querySelector('input').addEventListener("change", e => {

            if (e.target.checked) {
                li.classList.add('complete');
            } else {
                li.classList.remove('complete');
            }

        });

        li.querySelector('button').addEventListener('click', e => {

            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let todoId = idArray[1];
            let title = li.querySelector('label').innerText;

            if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {

                data = data.filter(task => task.id !== parseInt(todoId));

                renderTodo();

            }            

        });

        document.querySelector('.todo').append(li);

    });

}

document.querySelector('#new-task').addEventListener('keyup', e => {

    if (e.key === 'Enter') {

        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = "";

        renderTodo();

    }

});

renderTodo();