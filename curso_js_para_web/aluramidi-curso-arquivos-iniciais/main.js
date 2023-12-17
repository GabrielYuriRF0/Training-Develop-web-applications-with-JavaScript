function tocaSom(tipoBotao){
    document.querySelector(`#som_${tipoBotao}`).play();          
}

const listaTeclas = document.querySelectorAll('.tecla')

for (let i = 0; i < listaTeclas.length; i++){
    const tecla = listaTeclas[i];
    listaTeclas[i].onclick = () => tocaSom(tecla.classList[1])
    tecla.onkeydown = (event) => event.code == 'Enter' || event.code == 'Space' ? tecla.classList.add('ativa'): undefined
    tecla.onkeyup =  (event) => event.code == 'Enter' || event.code == 'Space' ?  tecla.classList.remove('ativa') : undefined
}