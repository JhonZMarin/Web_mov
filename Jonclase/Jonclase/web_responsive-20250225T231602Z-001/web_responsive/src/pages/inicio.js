const modal = (texto) =>{
    const div = document.createElement('div');
    div.classList.add('modal');
    
    const p = document.createElement('p');
    p.textContent = texto;

    const btnClose = document.createElement('button');
    btnClose.textContent = "OLA XDXD";
    btnClose.classList.add('btn');
    btnClose.addEventListener('click', ()=>{
        div.remove();
    });

    div.appendChild(p);
    div.appendChild (btnClose);
    return div;
}

const inicioPage = () => {
    const section = document.createElement('section');

    const boton = document.createElement('button');
    boton.textContent = "Aceptar";
    boton.classList.add('btn');
    boton.addEventListener('click', ()=>{
        const widthScreen =  window.innerWidth;
        /*if (widthScreen<=375){ 
            alert('Hola Mobile');
        }else{
            alert('Hola Desktop');
        }*/
       const msg = widthScreen <= 375 ? modal('Hola Mobile'): modal('Hola Deskotp');

       section.appendChild(msg);
        
    });

    section.appendChild(boton);
    return section;
    
};


document.getElementById('page').appendChild(inicioPage());