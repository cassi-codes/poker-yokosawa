function pokerCre (name,power){
    let color = '';
    switch(power){
        case 7:color = 'navy';
        break;
        case 6:color = 'red';
        break;
        case 5:color = 'yellow';
        break;
        case 4:color = 'green';
        break;
        case 3:color = 'aqua';
        break;
        case 2:color = 'white';
        break;
        case 1:color = 'pink';
        break;
        case 0:color = 'grey';
        break;
    }
    return{name,color};
}


const pokerEle=[
    [pokerCre('AA',7),pokerCre('AKs',7),pokerCre('AQs',6),pokerCre('AJs',6),pokerCre('ATs',6),pokerCre('A9s',4),pokerCre('A8s',4),
    pokerCre('A7s',4),pokerCre('A6s',4),pokerCre('A5s',4),pokerCre('A4s',4),pokerCre('A3s',4),pokerCre('A2s',4)],

    [pokerCre('AKo',7),pokerCre('KK',7),pokerCre('KQs',6),pokerCre('KJs',5),pokerCre('KTs',4),pokerCre('K9s',4),pokerCre('K8s',2),pokerCre('K7s',2),pokerCre('K6s',2),pokerCre('K5s',2),pokerCre('K4s',2),pokerCre('K3s',2),pokerCre('K2s',2)],

    [pokerCre('AQo',6),pokerCre('KQo',5),pokerCre('QQ',7),pokerCre('QJs',5),pokerCre('QTs',4),pokerCre('Q9s',3),pokerCre('Q8s',2),
    pokerCre('Q7s',2),pokerCre('Q6s',2),pokerCre('Q5s',1),pokerCre('Q4s',1),pokerCre('Q3s',1),pokerCre('Q2s',1)],

    [pokerCre('AJo',5),pokerCre('KJo',4),pokerCre('QJo',3),pokerCre('JJ',6),pokerCre('JTs',5),pokerCre('J9s',3),pokerCre('J8s',2),pokerCre('J7s',2),pokerCre('J6s',1),pokerCre('J5s',0),pokerCre('J4s',0),pokerCre('J3s',0),pokerCre('J2s',0)],

    [pokerCre('ATo',4),pokerCre('KTo',3),pokerCre('QTo',2),pokerCre('JTo',3),pokerCre('TT',6),pokerCre('T9s',4),pokerCre('T8s',3),pokerCre('T7s',1),pokerCre('T6s',0),pokerCre('T5s',0),pokerCre('T4s',0),pokerCre('T3s',0),pokerCre('T2s',0)],

    [pokerCre('A9o',3),pokerCre('K9o',2),pokerCre('Q9o',2),pokerCre('J9o',2),pokerCre('T9o',2),pokerCre('99',6),pokerCre('98s',3),pokerCre('97s',2),pokerCre('96s',1),pokerCre('95s',0),pokerCre('94s',0),pokerCre('93s',0),pokerCre('92s',0)],

    [pokerCre('A8o',2),pokerCre('K8o',0),pokerCre('Q8o',0),pokerCre('J8o',0),pokerCre('T8o',0),pokerCre('98o',1),pokerCre('88',5),pokerCre('87s',2),pokerCre('86s',1),pokerCre('85s',0),pokerCre('84s',0),pokerCre('83s',0),pokerCre('82s',0)],

    [pokerCre('A7o',1),pokerCre('K7o',0),pokerCre('Q7o',0),pokerCre('J7o',0),pokerCre('T7o',0),pokerCre('97o',0),pokerCre('87o',0),pokerCre('77',5),pokerCre('76s',2),pokerCre('75s',1),pokerCre('74s',0),pokerCre('73s',0),pokerCre('72s',0)],

    [pokerCre('A6o',1),pokerCre('K6o',0),pokerCre('Q6o',0),pokerCre('J6o',0),pokerCre('T6o',0),pokerCre('96o',0),pokerCre('86o',0),pokerCre('76o',0),pokerCre('66',4),pokerCre('65s',2),pokerCre('64s',1),pokerCre('63s',0),pokerCre('62s',0)],

    [pokerCre('A5o',0),pokerCre('K5o',0),pokerCre('Q5o',0),pokerCre('J5o',0),pokerCre('T5o',0),pokerCre('95o',0),pokerCre('85o',0),pokerCre('75o',0),pokerCre('65o',0),pokerCre('55',4),pokerCre('54s',1),pokerCre('53s',0),pokerCre('52s',0)],

    [pokerCre('A4o',0),pokerCre('K4o',0),pokerCre('Q4o',0),pokerCre('J4o',0),pokerCre('T4o',0),pokerCre('94o',0),pokerCre('84o',0),pokerCre('74o',0),pokerCre('64o',0),pokerCre('54o',0),pokerCre('44',3),pokerCre('43s',0),pokerCre('42s',0)],

    [pokerCre('A3o',0),pokerCre('K3o',0),pokerCre('Q3o',0),pokerCre('J3o',0),pokerCre('T3o',0),pokerCre('93o',0),pokerCre('83o',0),pokerCre('73o',0),pokerCre('63o',0),pokerCre('53o',0),pokerCre('43o',0),pokerCre('33',3),pokerCre('32s',0)],

    [pokerCre('A2o',0),pokerCre('K2o',0),pokerCre('Q2o',0),pokerCre('J2o',0),pokerCre('T2o',0),pokerCre('92o',0),pokerCre('82o',0),pokerCre('72o',0),pokerCre('62o',0),pokerCre('52o',0),pokerCre('42o',0),pokerCre('32o',0),pokerCre('22',3)],
];

const Tbody = document.querySelector('tbody');

for(let i=0; i<pokerEle[0].length; i++){
    const Tr = document.createElement('tr');
    Tbody.insertAdjacentElement('beforeend',Tr);
    for(let A of pokerEle[i]){
        const Td = document.createElement('td');
        Tr.insertAdjacentElement('beforeend',Td);
        Td.append(A.name,' ');
        Td.classList.add(A.color);
        Td.style.backgroundColor = 'grey';
    };
    
};

function Reset (){
    const Tds = document.querySelectorAll('td');
    for(let T of Tds){
        T.style.backgroundColor = 'grey';
        T.style.color = '#333';
        T.classList.remove('table-dark');
    }

}


function tdChangeColor (target,color){
    const tds = document.querySelectorAll(target);
    for(let Td of tds){
        Td.style.backgroundColor = color;
        if(color === 'navy'){
            Td.style.color = 'white';
        }
    }
}

let lastPushButton = '';

    const navyBtn = document.querySelector('#navyBtn');
    navyBtn.addEventListener('click',function(){
        Reset();
        if(lastPushButton !== 'navy'){
        tdChangeColor('.navy','navy');
        lastPushButton = 'navy';
        }else{lastPushButton = '';}
    });
    


const redBtn = document.querySelector('#redBtn');
redBtn.addEventListener('click',function(){
    Reset();
    if(lastPushButton !== 'red'){
        tdChangeColor('.navy','navy');
        tdChangeColor('.red','red');
        lastPushButton = 'red';
    }else{lastPushButton = ''}
});

const yellowBtn = document.querySelector('#yellowBtn');
yellowBtn.addEventListener('click',function(){
    Reset();
    if(lastPushButton !== 'yellow'){
        tdChangeColor('.navy','navy');
        tdChangeColor('.red','red');
        tdChangeColor('.yellow','yellow');
        lastPushButton = 'yellow';
    }else{lastPushButton = ''}
});

const greenBtn = document.querySelector('#greenBtn');
greenBtn.addEventListener('click',function(){
    Reset();
    if(lastPushButton !== 'green'){
        tdChangeColor('.navy','navy');
        tdChangeColor('.red','red');
        tdChangeColor('.yellow','yellow');
        tdChangeColor('.green','green');
        lastPushButton = 'green';
    }else{lastPushButton = ''}
    
});

const aquaBtn = document.querySelector('#aquaBtn');
aquaBtn.addEventListener('click',function(){
    Reset();
    if(lastPushButton !== 'aqua'){
        tdChangeColor('.navy','navy');
        tdChangeColor('.red','red');
        tdChangeColor('.yellow','yellow');
        tdChangeColor('.green','green');
        tdChangeColor('.aqua','aqua');
        lastPushButton = 'aqua';
    }else{lastPushButton = ''}
    
});

const whiteBtn = document.querySelector('#whiteBtn');
whiteBtn.addEventListener('click',function(){
    Reset();
    if(lastPushButton !== 'white'){
        tdChangeColor('.navy','navy');
        tdChangeColor('.red','red');
        tdChangeColor('.yellow','yellow');
        tdChangeColor('.green','green');
        tdChangeColor('.aqua','aqua');
        tdChangeColor('.white','white');
        lastPushButton = 'white';
    }else{lastPushButton = ''}
    
});

const pinkBtn = document.querySelector('#pinkBtn');
pinkBtn.addEventListener('click',function(){
    Reset();
    if(lastPushButton !== 'pink'){
        tdChangeColor('.navy','navy');
        tdChangeColor('.red','red');
        tdChangeColor('.yellow','yellow');
        tdChangeColor('.green','green');
        tdChangeColor('.aqua','aqua');
        tdChangeColor('.white','white');
        tdChangeColor('.pink','rgb(219, 85, 108)');
        lastPushButton = 'pink';
    }else{lastPushButton = ''}
    
});
