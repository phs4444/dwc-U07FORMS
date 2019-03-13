'use strict';
//creamos un menú lateral de gestión del sistema (luego hay que comprobar primero que existe la cookie)


function crearMenuGestion() {
    let main = document.getElementsByTagName('main')[0];
    main.classList.toggle('con-menu-lateral');
    let divGestion = document.createElement('div');
    divGestion.classList.add('position-fixed', 'bg-warning', 'opacity-0');
    divGestion.setAttribute('id', 'divGestion');

    let h3welcome = document.createElement('h3');
    h3welcome.innerHTML = 'Bienvenido master';
    divGestion.appendChild(h3welcome);

    //menú lateral
    let navLateral = document.createElement('nav');
    navLateral.classList.add('bg-light');

    //añadir botones de gestión
    let ul = document.createElement('ul');

    //botón categorías
    let liCateg = document.createElement('li');
    let aCateg = document.createElement('a');
    aCateg.setAttribute('href', '#');
    aCateg.innerHTML = "Modificar Categorías";
    aCateg.addEventListener('click', () => modificarCategorias());

    let comentarioCateg = document.createElement('p');
    comentarioCateg.innerHTML = 'Crear / Modificar / Borrar';
    comentarioCateg.classList.add('small', 'font-italic');
    liCateg.appendChild(aCateg);
    liCateg.appendChild(comentarioCateg);

    //añado a ul
    ul.appendChild(liCateg);






    //botón actores
    let liActors = document.createElement('li');
    let aActors = document.createElement('a');
    aActors.setAttribute('href', '#');
    aActors.innerHTML = "Modificar Actores";
    aActors.addEventListener('click', () => modificarActors());

    let comentarioActors = document.createElement('p');
    comentarioActors.innerHTML = 'Crear / Modificar / Borrar';
    comentarioActors.classList.add('small', 'font-italic');
    liActors.appendChild(aActors);
    liActors.appendChild(comentarioActors);

    //añado a ul
    ul.appendChild(liActors);










    //añado a navLateral
    navLateral.appendChild(ul);

    //añado a divGestión y lo engancho a la página
    divGestion.appendChild(navLateral);
    //creo y engancho el divInfoOperacion
    let divInfoOperacion = document.createElement('div');
    divInfoOperacion.setAttribute('id', 'divInfoOperacion');
    divGestion.appendChild(divInfoOperacion);
    let navPrincipal = document.getElementById('nav');
    navPrincipal.appendChild(divGestion);
}

function modificarCategorias() {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    //
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    let h2TextNode = document.createTextNode('Modificar Categorías');
    h2.appendChild(h2TextNode);

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
}

function addCategory(form, catName, catDesc) {
    let formId = form.id;
    let divErrorCatName = document.getElementById(formId + '-errorCatName');
    let divErrorCatDesc = document.getElementById(formId + '-errorCatDesc');
    if (catName == '') {
        divErrorCatName.classList.add('d-block');
    }
    if (catDesc == '') {
        divErrorCatDesc.classList.add('d-block');
    }
    if (catName != '' && catDesc != '') {
        let resultadoInfo;
        try {
            divErrorCatName.classList.add('d-none');
            divErrorCatDesc.classList.add('d-none');
            let cat = new Category(catName, catDesc);
            vs.addCategory(cat);
            categoriesMenuPopulate();
            resultadoInfo = crearDivResultadoOperacion('Éxito al crear categoría.', 'success');
        } catch (e) {
            resultadoInfo = crearDivResultadoOperacion('Error al crear categoría.', 'error');
        } finally {
            resultadoInfo.setAttribute('id', formId + '-resultadoInfo');
            modificarCategorias();
            document.getElementById(formId).appendChild(resultadoInfo);
            let resultadoDiv = document.getElementById(resultadoInfo.id);
            setTimeout(() => resultadoDiv.style.opacity = '0', 3000);
        }
    }
}

function crearDivResultadoOperacion(mensaje, tipo) {
    let divResultado = document.createElement('div');
    divResultado.innerHTML = mensaje;
    divResultado.classList.add('alert', 'alert-dismissible', 'position-absolute', 'text-right');
    divResultado.setAttribute('role', 'alert');
    divResultado.style.right = '8em';
    divResultado.style.top = '.4em';
    divResultado.style.fontSize = '1.6em';
    if (tipo == 'error') {
        divResultado.classList.add('alert-danger');
    }
    if (tipo == 'success') {
        divResultado.classList.add('alert-success');
    }
    if (tipo == 'info') {
        divResultado.classList.add('alert-info');
    }
    let resultadoDiv = document.getElementById('divInfoOperacion');
    clear(resultadoDiv);
    resultadoDiv.classList.add('position-relative');
    resultadoDiv.style.width = '30em';
    resultadoDiv.style.height = '200px';
    //resultadoDiv.style.marginLeft = '100px';
    resultadoDiv.style.opacity = '1';
    resultadoDiv.appendChild(divResultado);
    let divGestion = document.getElementById('divGestion');
    divGestion.appendChild(resultadoDiv);
    setTimeout(() => resultadoDiv.style.opacity = '0', 2000);
  


    return divResultado;
}

function modifyCategory(form, oldCat, catName, catDesc) {
    let formId = form.id;
    let divErrorCatName = document.getElementById(formId + '-errorCatName');
    let divErrorCatDesc = document.getElementById(formId + '-errorCatDesc');
    if (catName == '') {
        divErrorCatName.classList.add('d-block');
    }
    if (catDesc == '') {
        divErrorCatDesc.classList.add('d-block');
    }
    let resultadoInfo;
    if (catName != '' && catDesc != '' && catDesc != oldCat.description) {
        try {
            divErrorCatName.classList.add('d-none');
            divErrorCatDesc.classList.add('d-none');
            oldCat._name = catName;
            oldCat._description = catDesc;
            resultadoInfo = crearDivResultadoOperacion('Éxito al modificar categoría.', 'success');
        } catch (e) {
            resultadoInfo = crearDivResultadoOperacion('Error al modificar categoría.', 'error');
        } finally {
            resultadoInfo.setAttribute('id', formId + '-resultadoInfo');
            modificarCategorias();
            document.getElementById(formId).appendChild(resultadoInfo);
            let resultadoDiv = document.getElementById(resultadoInfo.id);
            setTimeout(() => resultadoDiv.style.opacity = '0', 3000);
        }
    } else if ((catDesc == oldCat.description) && catName != '') {
        resultadoInfo = crearDivResultadoOperacion('No se realizó ningún cambio en los campos.', 'info');
        resultadoInfo.setAttribute('id', formId + '-resultadoInfo');
        document.getElementById(formId).appendChild(resultadoInfo);
        let resultadoDiv = document.getElementById(resultadoInfo.id);
        setTimeout(() => resultadoDiv.style.opacity = '0', 2000);
    }
}
//awful function
function prepareToDeleteModal(tipo, oldElement, elementName, form) {
    document.getElementById('itemToDelete').innerHTML = tipo + ' - ' + ((oldElement.name) ? oldElement.name : oldElement);
    let acceptModalButton = document.getElementById('acceptDeleteButton');
    switch (tipo) {
        case 'categoría':
            acceptModalButton.addEventListener('click', () => deleteCategory(form, oldElement, elementName));
            break;
        case 'actor':
            acceptModalButton.addEventListener('click', () => deletePerson(tipo, oldElement));
        default:
            break;

    }
}

function deleteCategory(form, oldCat, catName) {
    let formId = form.id;
    let divErrorCatName = document.getElementById(formId + '-errorCatName');
    if (catName != oldCat._name) {
        divErrorCatName.innerHTML = 'La categoría no existe, aun'
        divErrorCatName.classList.add('d-block');
    }
    if (catName == oldCat._name) {
        let resultadoInfo;
        try {
            divErrorCatName.classList.add('d-none');
            resultadoInfo = crearDivResultadoOperacion('Éxito al borrar la categoría.', 'success');
            vs.removeCategory(oldCat);
        } catch (e) {
            resultadoInfo = crearDivResultadoOperacion('Error al borrar la categoría.', 'error');
        } finally {
            resultadoInfo.setAttribute('id', formId + '-resultadoInfo');
            modificarCategorias();
            document.getElementById(formId).appendChild(resultadoInfo);
            let resultadoDiv = document.getElementById(resultadoInfo.id);
            setTimeout(() => resultadoDiv.style.opacity = '0', 3000);
          
        }
    }
}

function modificarActors() {
    showActors();
    //de los actores cogemos los sections, clonamos uno y lo ponemos al principio que será el añadir nuevo
    let sections = document.getElementsByTagName('section');
    console.log(sections);
    let parentSections = sections[0].parentElement;
    let section0Clone = sections[0].cloneNode(true);
    section0Clone.classList.add('d-block', 'justify-content-center');
    let imgSection0Clone = section0Clone.getElementsByTagName('img');
    let aSection0Clone = section0Clone.getElementsByTagName('a');
    aSection0Clone[0].classList.add('alert-success');
    imgSection0Clone[0].setAttribute('src', 'img/new_actor.jpg');
    imgSection0Clone[0].style.opacity = '.4';
    aSection0Clone[0].innerHTML = 'Añadir Nuevo Actor';

    //botón añadir
    let buttonAddPerson = document.createElement('button');
    buttonAddPerson.classList.add('btn', 'p-0', 'position-absolute');
    buttonAddPerson.setAttribute('type', 'submit');
    buttonAddPerson.style.backgroundColor = 'transparent';
    section0Clone.appendChild(buttonAddPerson);

    let buttonIconPlus = document.createElement('i');
    buttonIconPlus.classList.add('btn', 'fas', 'fa-plus-circle', 'text-success');
    buttonIconPlus.style.fontSize = '12rem';
    buttonAddPerson.appendChild(buttonIconPlus);
    buttonAddPerson.addEventListener('click', () => getPersonData('actor', 'new'));

    //iteramos las sections para pintarles los botones modificar y borrar
    for (let i = 0; i < sections.length; i++) {
        let el = sections[i];

        //creamos los botones de modificar y borrar
        let img = el.getElementsByTagName('img');
        img[0].style.opacity = '.4';
        let personFullName = img[0].alt;

        //iteramos las personas para ver de quien se trata (será el objeto person)
        let persons = vs.actors;
        let person = persons.next();
        let found = false;
        while (!found && (person.done !== true)) {
            let actorFullName = person.value._name + ' ' + person.value._lastname1 + ((person.value._lastname2) ? (' ' + person.value._lastname2) : '');
            (personFullName == actorFullName) ? found = true : person = persons.next();
        }


        let buttonModPerson = document.createElement('button');
        buttonModPerson.classList.add('btn', 'p-0', 'position-absolute', 'btn-info', 'btn-rounded');
        buttonModPerson.setAttribute('type', 'submit');
        //  buttonModPerson.style.backgroundColor = 'transparent';
        buttonModPerson.style.bottom = '47px';
        buttonModPerson.style.left = '37px';


        let buttonIconEdit = document.createElement('i');
        buttonIconEdit.classList.add('btn', 'fas', 'fa-edit', 'text-warning');
        buttonIconEdit.style.fontSize = '3em';
        buttonModPerson.appendChild(buttonIconEdit);
        buttonModPerson.addEventListener('click', () => getPersonData('actor', person.value));
        el.appendChild(buttonModPerson);

        let buttonDelPerson = document.createElement('button');
        buttonDelPerson.classList.add('btn', 'p-0', 'position-absolute', 'btn-info', 'btn-rounded');
        buttonDelPerson.setAttribute('type', 'submit');
        //  buttonDelPerson.style.backgroundColor = 'transparent';
        buttonDelPerson.style.bottom = '47px';
        buttonDelPerson.style.right = '37px';



        let buttonIconDel = document.createElement('i');
        buttonIconDel.classList.add('btn', 'fas', 'fa-eraser', 'text-danger');
        buttonIconDel.style.fontSize = '3em';
        buttonDelPerson.appendChild(buttonIconDel);
        buttonDelPerson.setAttribute('data-toggle', 'modal');
        buttonDelPerson.setAttribute('data-target', '#confirmDeleteModal');
        buttonDelPerson.addEventListener('click', () => prepareToDeleteModal('actor', person.value));
        el.appendChild(buttonDelPerson);

    }


    parentSections.insertBefore(section0Clone, parentSections.firstElementChild);
}

function deletePerson(tipo, person) {
    let resultadoInfo;
    switch (tipo) {
        case 'actor':

            try {
                resultadoInfo = crearDivResultadoOperacion('Éxito al borrar el actor.', 'success')
                vs.removeActor(person);
                modificarActors();
            } catch (e) {
                resultadoInfo = crearDivResultadoOperacion('Error al borrar el actor.', 'error');
            } finally {

            }
            break;
        case 'director':

        default:
            break;
    }

}

function getPersonData(tipo, persona) {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    //
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
if (persona === 'new'){
    persona = new Person('John', 'Doe', '',new Date(), 'img/new_actor.jpg');
}
    let h2TextNode = document.createTextNode('Datos del' + tipo);
    h2.appendChild(h2TextNode);
    let personaFullName = persona._name + ' ' + persona._lastname1 + ((persona._lastname2) ? (' ' + persona._lastname2) : '');
    let section = document.createElement('section');
    section.classList.add('img-thumbnail', 'd-flex', 'align-items-center', 'bg-secondary', 'text-light', 'p-2', 'm-1');
    section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    let divImg = document.createElement('div');
    divImg.classList.add('m-3');
    let imgActor = document.createElement('img');
    imgActor.style.width = '321px';
    imgActor.style.height = '476px';
    imgActor.classList.add('card-text', 'img-thumbnail', 'rounded');
    imgActor.setAttribute('src', persona._picture);
    imgActor.style.objectFit = 'cover';
    imgActor.setAttribute('alt', personaFullName);
    divImg.appendChild(imgActor);

    let divDatos = document.createElement('div');
    divDatos.classList.add('m-3');
    let h4 = document.createElement('h4');
    let h4TextNode = document.createTextNode(personaFullName);
    h4.appendChild(h4TextNode);
    let p = document.createElement('p');
    let fechaNacimiento = 'Fecha de Nacimiento: ' + escribirFecha(persona._born) + ' ';
    let pTextNode = document.createTextNode(fechaNacimiento);
    p.appendChild(pTextNode);
    let edad = getAge(persona._born);
    let span = document.createElement('span');
    span.classList.add('badge', 'badge-warning');
    let spanTextNode = document.createTextNode(edad + ' años');
    span.appendChild(spanTextNode);
    p.appendChild(span);
    let h5Producciones = document.createElement('h5');
    let h5TextNode = document.createTextNode('Producciones:');
    h5Producciones.appendChild(h5TextNode);
    divDatos.appendChild(h4);
    divDatos.appendChild(p);
    divDatos.appendChild(h5Producciones);

if (personaFullName !== 'John Doe') {


    let divProducciones = document.createElement('div');
    divProducciones.classList.add('d-flex', 'p-2');
    persona.productions.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
        let img = document.createElement('img');
        img.classList.add('rounded');
        img.setAttribute('src', element.production._image);
        img.setAttribute('alt', element.production._title);
        img.style.width = '143px';
        img.style.height = '211px';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => showProduction(img.alt));
        let p = document.createElement('p');
        let aTextNode = document.createTextNode('as ' + element.character);
        p.appendChild(aTextNode);
        div.appendChild(img);
        div.appendChild(p);
        divProducciones.appendChild(div);
    });
    divDatos.appendChild(divProducciones);
}

    section.appendChild(divImg);
    section.appendChild(divDatos);
    contenedorPrincipal.appendChild(section);
}



















crearMenuGestion();
