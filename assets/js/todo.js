const db = [
    {
        id: 1,
        title: 'Concluir projeto x',
        steps: [
            {step: 'Ajustar textos'},
            {step: 'Ajustar imagens'},
            {step: 'Ajustar videos'},
            {step: 'Ajustar audios'},
        ],
        done: false,
        dueDate: '2022-05-06',
        reminder: '2022-05-02 10:00:00',
    },

    {
        id: 2,
        title: 'Concluir projeto y',
        steps: [
            {step: 'Ajustar textos'},
            {step: 'Ajustar imagens'},
            {step: 'Ajustar videos'},
            {step: 'Ajustar audios'},
        ],
        done: true,
        dueDate: '2022-04-28',
    }
];

console.log(db[0].title);

const form = document.querySelector('#addNewTask');
form.addEventListener('submit', (e) => {
    e.preventDefault(); //pra parar o comportamento padrao e nesse caso nao enviar a entrada do form
});

const newTask = document.querySelector('#inputTxtNewTask');
newTask.addEventListener('keyup', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.key == 'Enter'){
        alert(newTask.value);
        db.push({id: db.length, title: newTask.value });
        newTask.value = '';
    }
    
    console.log(db);
});

//console.log(db.at(-1)); ->> .at() retorna elemento na posicao especififcada e -1 seria a ultima posicao