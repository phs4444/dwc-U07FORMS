//divAddNewCat
let divAddNewCat = document.createElement('div');
//formulario nueva categoría
let formAddCat = document.createElement('form');
formAddCat.setAttribute('id', 'f0');
formAddCat.classList.add('needs-validation', 'position-relative');
formAddCat.setAttribute('novalidate', 'novalidate');
let divRowFormAddCat = document.createElement('div');
divRowFormAddCat.classList.add('d-flex', 'align-items-center', 'border', 'py-2', 'border-success');
//input name categoría   div > label+input
let divAddCatName = document.createElement('div');
divAddCatName.classList.add('px-3', 'd-flex', 'flex-column', 'align-items-center');
let labelAddCatName = document.createElement('label');
labelAddCatName.setAttribute('for', 'f0-name');
let inputAddCatName = document.createElement('input');
inputAddCatName.classList.add('form-control');
inputAddCatName.setAttribute('type', 'text');
inputAddCatName.setAttribute('required', 'required');
inputAddCatName.setAttribute('id', 'f0-name');
inputAddCatName.setAttribute('placeholder', 'Nombre nueva categoría');
divAddCatName.appendChild(labelAddCatName);
divAddCatName.appendChild(inputAddCatName);
let divValidateName = document.createElement('div');
divValidateName.setAttribute('id', 'f0-errorCatName');
divValidateName.classList.add('invalid-feedback');
divValidateName.innerHTML = 'Introduzca un nombre válido.';
divAddCatName.appendChild(divValidateName);
//input description categoría  div > label + input
let divAddCatDescription = document.createElement('div');
divAddCatDescription.classList.add('px-3', 'd-flex', 'flex-column', 'w-75', 'align-items-center');
let labelAddCatDescription = document.createElement('label');
labelAddCatDescription.setAttribute('for', 'f0-description');
let inputAddCatDescription = document.createElement('input');
inputAddCatDescription.classList.add('form-control');
inputAddCatDescription.setAttribute('type', 'text');
inputAddCatDescription.setAttribute('required', 'required');
inputAddCatDescription.setAttribute('id', 'f0-description');
inputAddCatDescription.setAttribute('placeholder', 'Descripción categoría');
divAddCatDescription.appendChild(labelAddCatDescription);
divAddCatDescription.appendChild(inputAddCatDescription);
let divValidateDescription = document.createElement('div');
divValidateDescription.setAttribute('id', 'f0-errorCatDesc');
divValidateDescription.classList.add('invalid-feedback');
divValidateDescription.innerHTML = 'Introduzca una descripción.';
divAddCatDescription.appendChild(divValidateDescription);

let buttonAddCatName = document.createElement('button');
buttonAddCatName.classList.add('btn', 'p-0');
buttonAddCatName.setAttribute('type', 'submit');
let buttonIconPlus = document.createElement('i');
buttonIconPlus.classList.add('btn', 'fas', 'fa-plus-circle', 'text-success');
buttonIconPlus.style.fontSize = '1.3em';
buttonAddCatName.appendChild(buttonIconPlus);

buttonAddCatName.addEventListener('click', () => addCategory(formAddCat, inputAddCatName.value, inputAddCatDescription.value));

//juntamos el divFormaddCat
divRowFormAddCat.appendChild(divAddCatName);
divRowFormAddCat.appendChild(divAddCatDescription);
divRowFormAddCat.appendChild(buttonAddCatName);

//lo pegamos al formAddCat
formAddCat.appendChild(divRowFormAddCat);
//añadimos a divAddNewCat
divAddNewCat.appendChild(formAddCat);

//ahora vamos a crear los botones para borrar y modificar

let divDeleteAndModifyCat = document.createElement('div');
//iteramos las categorías
let categorias = vs.categories;
let i = 1;
let categoria = categorias.next();
while (categoria.done !== true) {
    let cat = categoria.value;  //recogemos el valor categoria

    //formulario nueva categoría
    let formCat = document.createElement('form');
    formCat.setAttribute('id', 'f' + i);
    formCat.classList.add('position-relative');
    let divRowFormCat = document.createElement('div');
    divRowFormCat.classList.add('d-flex', 'align-items-center', 'border', 'py-2', 'border-success');
    //input name categoría   div > label+input
    let divCatName = document.createElement('div');
    divCatName.classList.add('px-3', 'd-flex', 'flex-column', 'align-items-center');
    let labelCatName = document.createElement('label');
    labelCatName.setAttribute('for', 'f' + i + '-name-' + cat.name);
    let inputCatName = document.createElement('input');
    inputCatName.classList.add('form-control');
    inputCatName.setAttribute('type', 'text');
    inputCatName.setAttribute('id', 'f' + i + '-name-' + cat.name);
    inputCatName.setAttribute('value', cat.name);
    divCatName.appendChild(labelCatName);
    divCatName.appendChild(inputCatName);
    let divValidateName = document.createElement('div');
    divValidateName.setAttribute('id', 'f' + i + '-errorCatName');
    divValidateName.classList.add('invalid-feedback');
    divValidateName.innerHTML = 'Introduzca un nombre válido.';
    divCatName.appendChild(divValidateName);
    //input description categoría  div > label + input
    let divCatDescription = document.createElement('div');
    divCatDescription.classList.add('px-3', 'd-flex', 'flex-column', 'w-75', 'align-items-center');
    let labelCatDescription = document.createElement('label');
    labelCatDescription.setAttribute('for', 'f' + i + '-desc-' + cat.name);
    let inputCatDescription = document.createElement('input');
    inputCatDescription.classList.add('form-control');
    inputCatDescription.setAttribute('type', 'text');
    inputCatDescription.setAttribute('id', 'f' + i + '-desc-' + cat.name);
    inputCatDescription.setAttribute('value', cat.description);
    divCatDescription.appendChild(labelCatDescription);
    divCatDescription.appendChild(inputCatDescription);
    let divValidateCatDescription = document.createElement('div');
    divValidateCatDescription.setAttribute('id', 'f' + i + '-errorCatDesc');
    divValidateCatDescription.classList.add('invalid-feedback');
    divValidateCatDescription.innerHTML = 'Introduzca una descrpción.';
    divCatDescription.appendChild(divValidateCatDescription);
    let buttonModCat = document.createElement('button');
    buttonModCat.classList.add('btn', 'p-0');
    buttonModCat.setAttribute('type', 'submit');
    let buttonIconEdit = document.createElement('i');
    buttonIconEdit.classList.add('btn', 'fas', 'fa-edit', 'text-warning');
    buttonIconEdit.style.fontSize = '1.3em';
    buttonModCat.appendChild(buttonIconEdit);
    buttonModCat.addEventListener('click', () => modifyCategory(formCat, cat, inputCatName.value, inputCatDescription.value));

    let buttonDelCat = document.createElement('button');
    buttonDelCat.classList.add('btn', 'p-0');
    buttonDelCat.setAttribute('type', 'submit');
    let buttonIconDel = document.createElement('i');
    buttonIconDel.classList.add('btn', 'fas', 'fa-eraser', 'text-danger');
    buttonIconDel.style.fontSize = '1.3em';
    buttonDelCat.appendChild(buttonIconDel);
    buttonDelCat.setAttribute('data-toggle', 'modal');
    buttonDelCat.setAttribute('data-target', '#confirmDeleteModal');
    buttonDelCat.addEventListener('click', () => prepareToDeleteModal('categoría', cat, inputCatName.value, formCat));

    //juntamos el divFormCat
    divRowFormCat.appendChild(divCatName);
    divRowFormCat.appendChild(divCatDescription);
    divRowFormCat.appendChild(buttonModCat);
    divRowFormCat.appendChild(buttonDelCat);

    //lo pegamos al formCat
    formCat.appendChild(divRowFormCat);
    //añadimos a divAddNewCat
    divDeleteAndModifyCat.appendChild(formCat);

    i++;
    categoria = categorias.next();
}

//añadimos todo a contenedorPrincipal
contenedorPrincipal.appendChild(h2);
contenedorPrincipal.appendChild(divAddNewCat);
contenedorPrincipal.appendChild(divDeleteAndModifyCat);
