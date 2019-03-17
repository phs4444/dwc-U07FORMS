'use strict';
//creamos un menú lateral de gestión del sistema (luego hay que comprobar primero que existe la cookie)


function crearMenuGestion() {
    let main = document.getElementsByTagName('main')[0];
    main.classList.add('con-menu-lateral');
    let divGestion = document.createElement('div');
    divGestion.classList.add('position-fixed', 'bg-warning', 'opacity-0');
    divGestion.setAttribute('id', 'divgestion');

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
    aActors.addEventListener('click', () => modificarPersons('actor'));

    let comentarioActors = document.createElement('p');
    comentarioActors.innerHTML = 'Crear / Modificar / Borrar';
    comentarioActors.classList.add('small', 'font-italic');
    liActors.appendChild(aActors);
    liActors.appendChild(comentarioActors);

    //añado a ul
    ul.appendChild(liActors);

    //botón directores
    let liDirectors = document.createElement('li');
    let aDirectors = document.createElement('a');
    aDirectors.setAttribute('href', '#');
    aDirectors.innerHTML = "Modificar Directores";
    aDirectors.addEventListener('click', () => modificarPersons('director'));

    let comentarioaDirectors = document.createElement('p');
    comentarioaDirectors.innerHTML = 'Crear / Modificar / Borrar';
    comentarioaDirectors.classList.add('small', 'font-italic');
    liDirectors.appendChild(aDirectors);
    liDirectors.appendChild(comentarioaDirectors);

    //añado a ul
    ul.appendChild(liDirectors);










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
    // formAddCat.setAttribute('novalidate', 'novalidate');
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
    let divGestion = document.getElementById('divgestion');
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
        case 'director':
            acceptModalButton.addEventListener('click', () => deletePerson(tipo, oldElement));
            break;
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

function modificarPersons(tipo) {
    if (tipo == 'actor') {
        showActors();
    } else if (tipo == 'director') {
        showDirectors();
    }
    //de los actores cogemos los sections, clonamos uno y lo ponemos al principio que será el añadir nuevo
    let h2 = document.getElementsByTagName('h2');

    /* buscador que no funciona
    let inputSearch = document.createElement('input');
        inputSearch.classList.add('form-control');
    inputSearch.setAttribute('type', 'text');
       inputSearch.setAttribute('placeholder', 'Buscador...');
       inputSearch.setAttribute('id','searchToggle');
    h2[0].appendChild(inputSearch);


$(document).ready(function(){

    $("#searchToggle").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("section:not(:first-of-type)").filter(function() {
      let section=$(this).parent();
     console.log($(this).children("a").text().indexOf("Tejero"));
          $(this).toggle($(this).children("a").attr("href").text().toLowerCase().indexOf(value) > -1);
        });
    });
})
*/
    let sections = document.getElementsByTagName('section');

    let parentSections = sections[0].parentElement;
    let section0Clone = sections[0].cloneNode(true);
    section0Clone.classList.add('d-block', 'justify-content-center');
    let imgSection0Clone = section0Clone.getElementsByTagName('img');
    let aSection0Clone = section0Clone.getElementsByTagName('a');
    aSection0Clone[0].classList.add('alert-success');
    imgSection0Clone[0].setAttribute('src', 'img/new_actor.jpg');
    imgSection0Clone[0].style.opacity = '.4';
    aSection0Clone[0].innerHTML = 'Añadir nuevo ' + tipo;

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
    buttonAddPerson.addEventListener('click', () => getPersonData(tipo, 'new'));

    //iteramos las sections para pintarles los botones modificar y borrar
    for (let i = 0; i < sections.length; i++) {
        let el = sections[i];

        //creamos los botones de modificar y borrar
        let img = el.getElementsByTagName('img');
        img[0].style.opacity = '.4';
        let personFullName = img[0].alt;

        //iteramos las personas para ver de quien se trata (será el objeto person)
        let persons;
        if (tipo == 'actor') {
            persons = vs.actors;
        } else if (tipo == 'director') {
            persons = vs.directors;
        }
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
        buttonModPerson.addEventListener('click', () => getPersonData(tipo, person.value));
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
        buttonDelPerson.addEventListener('click', () => prepareToDeleteModal(tipo, person.value));
        el.appendChild(buttonDelPerson);
    }

    parentSections.insertBefore(section0Clone, parentSections.firstElementChild);
}

function deletePerson(tipo, person) {
    let resultadoInfo;
    try {
        resultadoInfo = crearDivResultadoOperacion('Éxito al borrar el ' + tipo, 'success');
        if (tipo == 'actor') {
            vs.removeActor(person);
        } else if (tipo == 'director') {
            vs.removeDirector(person);
        }
        modificarPersons(tipo);
        modificarPersons(tipo);
    } catch (e) {
        resultadoInfo = crearDivResultadoOperacion('Error al borrar el ' + tipo, 'error');
    } finally {

    }

}

function getPersonData(tipo, persona) {
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    h2.classList.add('display-4');
    if (persona === 'new') {
        persona = new Person('John', 'Doe', '', new Date(), 'img/new_actor.jpg');
    }
    let h2TextNode = document.createTextNode('Datos del ' + tipo);
    h2.appendChild(h2TextNode);
    contenedorPrincipal.appendChild(h2);
    let personaFullName = persona.fullName();
    let section = document.createElement('section');
    section.classList.add('img-thumbnail', 'd-flex', 'bg-secondary', 'text-light', 'p-2', 'm-1');
    section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    let divImg = document.createElement('div');
    divImg.classList.add('m-3');
    let imgActor = document.createElement('img');
    imgActor.style.width = '16em';
    imgActor.style.height = '24em';
    imgActor.classList.add('card-text', 'img-thumbnail', 'rounded');
    imgActor.setAttribute('src', persona._picture);
    imgActor.style.objectFit = 'cover';
    imgActor.setAttribute('alt', personaFullName);
    divImg.appendChild(imgActor);

    //div grande derecho
    let divDatos = document.createElement('div');
    divDatos.classList.add('d-flex', 'flex-column', 'm-3');

    //divs para los inputs de datos 
    //div superior
    let divSuperior = document.createElement('div');
    divSuperior.classList.add('d-flex');
    let divInputs = document.createElement('div');
    let divAddProductions = document.createElement('div');
    divSuperior.appendChild(divInputs);
    divSuperior.appendChild(divAddProductions);
    //divs para producciones actuales
    let divInferior = document.createElement('div');

    //añado a divDatos divSuperior y divInferior
    divDatos.appendChild(divSuperior);
    divDatos.appendChild(divInferior);



    //formulario actor
    let formAddActor = document.createElement('form');
    formAddActor.setAttribute('id', 'f0');
    formAddActor.classList.add('needs-validation', 'position-relative');
    // formAddActor.setAttribute('novalidate', 'novalidate');

    //input nombre actor
    let labelAddActorName = document.createElement('label');
    labelAddActorName.setAttribute('for', 'f0-name');
    labelAddActorName.innerHTML = 'Nombre:';
    let inputAddActorName = document.createElement('input');
    inputAddActorName.classList.add('form-control');
    inputAddActorName.setAttribute('type', 'text');
    inputAddActorName.setAttribute('required', 'required');
    inputAddActorName.setAttribute('id', 'f0-name');
    inputAddActorName.setAttribute('placeholder', persona._name);

    //aviso de error
    let divValidateName = document.createElement('div');
    divValidateName.setAttribute('id', 'f0-errorCatName');
    divValidateName.classList.add('invalid-feedback');
    divValidateName.innerHTML = 'Introduzca un nombre válido.';

    //input apellido1 actor
    let labelAddActorSurname1 = document.createElement('label');
    labelAddActorSurname1.setAttribute('for', 'f0-surname1');
    labelAddActorSurname1.innerHTML = 'Apellido1:'
    let inputAddActorSurname1 = document.createElement('input');
    inputAddActorSurname1.classList.add('form-control');
    inputAddActorSurname1.setAttribute('type', 'text');
    inputAddActorSurname1.setAttribute('required', 'required');
    inputAddActorSurname1.setAttribute('id', 'f0-surname1');
    inputAddActorSurname1.setAttribute('placeholder', persona._lastname1);

    //input apellido2 actor
    let labelAddActorSurname2 = document.createElement('label');
    labelAddActorSurname2.setAttribute('for', 'f0-surname2');
    labelAddActorSurname2.innerHTML = 'Apellido2:'
    let inputAddActorSurname2 = document.createElement('input');
    inputAddActorSurname2.classList.add('form-control');
    inputAddActorSurname2.setAttribute('type', 'text');
    inputAddActorSurname2.setAttribute('id', 'f0-surname2');
    inputAddActorSurname2.setAttribute('placeholder', (persona._lastname2) ? persona._lastname2 : '');

    //input birthDate actor
    let labelAddActorBirthDate = document.createElement('label');
    labelAddActorBirthDate.setAttribute('for', 'f0-birthdate');
    labelAddActorBirthDate.innerHTML = 'Fecha de nacimiento:';
    let inputAddActorBirthDate = document.createElement('input');
    inputAddActorBirthDate.classList.add('form-control');
    inputAddActorBirthDate.setAttribute('type', 'text');
    inputAddActorBirthDate.setAttribute('required', 'true');
    inputAddActorBirthDate.setAttribute('id', 'f0-birthdate');
    inputAddActorBirthDate.setAttribute('value', new Date(persona._born));

    inputAddActorBirthDate.setAttribute('placeholder', escribirFecha(new Date(persona._born)));

    //input imagen actor
    let labelAddActorImage = document.createElement('label');
    labelAddActorImage.setAttribute('for', 'f0-image');
    labelAddActorImage.innerHTML = 'URL imagen:';
    let inputAddActorImage = document.createElement('input');
    inputAddActorImage.classList.add('form-control');
    inputAddActorImage.setAttribute('type', 'url');
    inputAddActorImage.setAttribute('required', 'required');
    inputAddActorImage.setAttribute('id', 'f0-image');
    inputAddActorImage.setAttribute('value', persona._picture);


    inputAddActorName.value = persona._name;
    inputAddActorSurname1.value = persona._lastname1;
    inputAddActorSurname2.value = (persona._lastname2) ? persona._lastname2 : '';
    inputAddActorImage.value = persona._picture;

    formAddActor.appendChild(divInputs);
    divInputs.appendChild(labelAddActorName);
    divInputs.appendChild(inputAddActorName);
    divInputs.appendChild(divValidateName);
    divInputs.appendChild(labelAddActorSurname1);
    divInputs.appendChild(inputAddActorSurname1);
    divInputs.appendChild(labelAddActorSurname2);
    divInputs.appendChild(inputAddActorSurname2);
    divInputs.appendChild(labelAddActorBirthDate);
    divInputs.appendChild(inputAddActorBirthDate);
    divInputs.appendChild(labelAddActorImage);
    divInputs.appendChild(inputAddActorImage);

    divSuperior.appendChild(formAddActor);

    divSuperior.appendChild(divAddProductions);
    //botón añadir actor
    let addActorButton = document.createElement('button');
    addActorButton.setAttribute('type', 'button');
    addActorButton.classList.add('btn', 'btn-dark', 'mb-3');
    addActorButton.innerHTML = 'Añadir/Modificar ' + tipo;

    addActorButton.addEventListener('click', () => addPerson(formAddActor, persona, tipo));


    //divAddProductions en collapseButton -> divResources
    let collapseButton = document.createElement('button');
    collapseButton.setAttribute('type', 'button');
    collapseButton.setAttribute('id', 'button-prod');
    collapseButton.classList.add('btn', 'btn-dark', 'mb-3');
    collapseButton.setAttribute('data-toggle', 'collapse');
    collapseButton.setAttribute('data-target', '#resources');
    let collapseButtonTextNode = document.createTextNode('Añadir producciones');
    collapseButton.appendChild(collapseButtonTextNode);

    if (persona.fullName() == 'John Doe') {
        collapseButton.setAttribute('disabled', 'true');
    }
    divAddProductions.classList.add('d-flex', 'p-2', 'align-items-start', 'flex-grow-1');
    divAddProductions.appendChild(addActorButton);
    divAddProductions.appendChild(collapseButton);
    let divResources = document.createElement('div');
    divResources.classList.add('collapse', 'bg-warning');
    divResources.setAttribute('id', 'resources');
    divAddProductions.appendChild(divResources);

    if (personaFullName !== 'John Doe') {
        let h5Producciones = document.createElement('h5');
        let h5TextNode = document.createTextNode('Producciones:');
        h5Producciones.appendChild(h5TextNode);

        divInferior.appendChild(h5Producciones);

        let divProducciones = document.createElement('div');
        divProducciones.classList.add('d-flex', 'p-2');
        persona.productions.forEach(element => {
            let div = document.createElement('div');
            div.classList.add('d-flex', 'p-2', 'flex-column', 'align-items-center');
            let img = document.createElement('img');
            img.classList.add('rounded');
            img.style.width = '143px';
            img.style.height = '211px';
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => showProduction(img.alt));
            div.appendChild(img);
            let p = document.createElement('p');
            if (tipo == 'actor') {

                img.setAttribute('src', element.production._image);
                img.setAttribute('alt', element.production._title);
                let aTextNode = document.createTextNode('as ' + element.character);
                p.appendChild(aTextNode);
            } else if (tipo == 'director') {
                img.setAttribute('src', element._image);
                img.setAttribute('alt', element._title);
                let aTextNode = document.createTextNode('as director');
                p.appendChild(aTextNode);
            }
            div.appendChild(p);
            divProducciones.appendChild(div);
        });
        divDatos.appendChild(divProducciones);
    }

    section.appendChild(divImg);
    section.appendChild(divDatos);
    contenedorPrincipal.appendChild(section);
}

function addPerson(form, persona, tipo) {
    let inputs = form.getElementsByTagName('input');
    console.log(inputs);
    console.log('valor input3' + inputs[3].value);
    if (inputs[0].value == '') { crearDivResultadoOperacion('Introduzca nombre de ' + tipo + ' válido', 'error') }
    if (inputs[1].value == '') { crearDivResultadoOperacion('Introduzca apellido1 de ' + tipo + ' válido', 'error') }
    if (inputs[3].value == '') { crearDivResultadoOperacion('Introduzca una fecha válida', 'error') }
    console.log(inputs[3].value);
    console.log(persona.fullName());
    if (persona.fullName() == 'John Doe') {

        try {
            persona = new Person(inputs[0].value, inputs[1].value, inputs[2].value, new Date(inputs[3].value), inputs[4].value);
            let buttonAssignProd = document.getElementById('button-prod');
            if (tipo == 'actor') {
                vs.addActor(persona);
                crearDivResultadoOperacion('Actor añadido/modificado con éxito', 'success');
                buttonAssignProd.removeAttribute('disabled');
                buttonAssignProd.addEventListener('click', paintProductionsNotAssignedActor(persona));
            } else if (tipo == 'director') {
                vs.addDirector(persona);
                crearDivResultadoOperacion('Director añadido/modificado con éxito', 'success');
                buttonAssignProd.removeAttribute('disabled');
                buttonAssignProd.addEventListener('click', paintProductionsNotAssignedDirector(persona));
            }
        } catch (e) {
            crearDivResultadoOperacion(e, 'error');
        } finally {

        }
    } else {
        try {
            console.log(inputs[0]);
            persona._name = inputs[0].value;
            persona._lastname1 = inputs[1].value;
            persona._lastname2 = inputs[2].value;
            persona._born = new Date(inputs[3].value);
            persona._picture = inputs[4].value;
            crearDivResultadoOperacion('Persona modificada con éxito', 'success');
            let buttonAssignProd = document.getElementById('button-prod');
            buttonAssignProd.removeAttribute('disabled');
            if (tipo == 'actor') {
                buttonAssignProd.addEventListener('click', paintProductionsNotAssignedActor(persona));
            } else if (tipo == 'director') {
                buttonAssignProd.addEventListener('click', paintProductionsNotAssignedDirector(persona));
            }
        } catch (e) {
            crearDivResultadoOperacion(e, 'error');
        }
    }
}

//pintamos producciones aun no asignadas al actor
function paintProductionsNotAssignedActor(persona) {
    let divResources = document.getElementById('resources');
    //en divResources van las produccines para añadirlas al actor
    //1ro comprobar si la produccion ya la tiene asignada y pinta las otras
    let producciones = vs.productions;
    let produccion = producciones.next();
    //contador para los formularios
    let i = 0;
    while (!produccion.done) {
        let p = produccion.value;
        let encontrado = false;
        p.casting.forEach((e) => {
            if (e.actor == persona) encontrado = true;
        })
        if (!encontrado) {
            let sectionP = document.createElement('section');
            sectionP.classList.add('img-thumbnail', 'bg-secondary', 'text-white', 'd-flex', 'align-items-center', 'p-1');
            sectionP.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';

            //creo el formulario
            let form = document.createElement('form');
            form.setAttribute('id', 'ff' + i);
            form.classList.add('needs-validation', 'position-relative', 'd-flex', 'flex-grow-1');
            form.addEventListener('submit', ((event) => { event.preventDefault(); }));
            // form.setAttribute('novalidate', 'novalidate');

            let divImg = document.createElement('div');
            divImg.classList.add('col-12', 'col-md-4', 'm-1');
            divImg.style.flexGrow = '0';

            let img = document.createElement('img');
            img.classList.add('img-thumbnail', 'card-text');
            img.setAttribute('src', p._image);
            img.setAttribute('width', '60px');

            img.setAttribute('alt', p._title);
            divImg.appendChild(img);
            divImg.style.maxWidth = '8em';
            sectionP.appendChild(divImg);
            let divForm = document.createElement('div');
            let h5 = document.createElement('h5');
            h5.classList.add('text-warning');
            h5.innerHTML = p._title;
            divImg.appendChild(h5);

            //añado los radio buttons para rol
            let divRadio1 = document.createElement('div');
            divRadio1.classList.add('custom-control', 'custom-radio');

            let label1 = document.createElement('label');
            label1.classList.add('custom-control-label');
            label1.setAttribute('for', 'radio1' + i);
            label1.innerHTML = 'Protagonista';
            let input1 = document.createElement('input');
            input1.classList.add('custom-control-input');
            input1.setAttribute('id', 'radio1' + i);
            input1.setAttribute('type', 'radio');
            input1.setAttribute('checked', 'checked');
            input1.setAttribute('name', 'rol' + i);
            divRadio1.appendChild(input1);
            divRadio1.appendChild(label1);

            let divRadio2 = document.createElement('div');
            divRadio2.classList.add('custom-control', 'custom-radio');

            let label2 = document.createElement('label');
            label2.classList.add('custom-control-label');
            label2.setAttribute('for', 'radio2' + i);
            label2.innerHTML = 'Secundario';
            let input2 = document.createElement('input');
            input2.classList.add('custom-control-input');
            input2.setAttribute('id', 'radio2' + i);
            input2.setAttribute('type', 'radio');

            input2.setAttribute('name', 'rol' + i);
            divRadio2.appendChild(input2);
            divRadio2.appendChild(label2);


            let divRadioContainer = document.createElement('div');
            divRadioContainer.classList.add('d-flex', 'flex-column', 'justify-content-center');
            divRadioContainer.appendChild(divRadio1);
            divRadioContainer.appendChild(divRadio2);

            divForm.appendChild(divRadioContainer);
            divForm.classList.add('d-flex');

            //input personaje
            let divFormPersonaje = document.createElement('div');
            divFormPersonaje.classList.add('form-check');
            let labelPersonaje = document.createElement('label');
            labelPersonaje.setAttribute('for', 'f0-name' + i);
            labelPersonaje.innerHTML = 'Personaje:'
            let inputPersonaje = document.createElement('input');
            inputPersonaje.classList.add('form-control');
            inputPersonaje.setAttribute('type', 'text');
            inputPersonaje.setAttribute('id', 'f0-name' + i);
            inputPersonaje.setAttribute('placeholder', 'personaje ...');
            divFormPersonaje.appendChild(labelPersonaje);
            divFormPersonaje.appendChild(inputPersonaje);

            //botón asignar producciones
            let buttonAssignActor = document.createElement('button');
            //  buttonAssignActor.classList.add('btn', 'p-0');
            // buttonAssignActor.setAttribute('type', 'submit');
            let buttonIconPlus = document.createElement('i');
            buttonIconPlus.classList.add('btn', 'fas', 'fa-plus-circle', 'text-success');
            buttonIconPlus.style.fontSize = '1.3em';
            buttonAssignActor.appendChild(buttonIconPlus);
            buttonAssignActor.addEventListener('click', () => assignActor(p, persona, form));

            //contador para los id de los forms
            i++;

            divForm.appendChild(divFormPersonaje);
            form.appendChild(divForm);
            form.appendChild(buttonAssignActor);
            sectionP.appendChild(form);
            divResources.appendChild(sectionP);
        }
        produccion = producciones.next();
    }
}

//pintamos producciones aun no asignadas al director
function paintProductionsNotAssignedDirector(persona) {
    let divResources = document.getElementById('resources');
    //en divResources van las produccines para añadirlas al actor
    //1ro comprobar si la produccion ya la tiene asignada y pinta las otras
    let producciones = vs.productions;
    let produccion = producciones.next();
    //contador para los formularios
    let i = 0;
    while (!produccion.done) {
        let p = produccion.value;
        let encontrado = false;
        p.directors.forEach((e) => {
            if (e == persona) encontrado = true;
        })
        if (!encontrado) {
            let sectionP = document.createElement('section');
            sectionP.classList.add('img-thumbnail', 'bg-secondary', 'text-white', 'd-flex', 'align-items-center', 'p-1');
            sectionP.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';

            //creo el formulario
            let form = document.createElement('form');
            form.setAttribute('id', 'ff' + i);
            form.classList.add('needs-validation', 'position-relative', 'd-flex', 'flex-grow-1');
            // form.setAttribute('novalidate', 'novalidate');

            let divImg = document.createElement('div');
            divImg.classList.add('col-12', 'col-md-4', 'm-1');
            divImg.style.flexGrow = '0';

            let img = document.createElement('img');
            img.classList.add('img-thumbnail', 'card-text');
            img.setAttribute('src', p._image);
            img.setAttribute('width', '60px');

            img.setAttribute('alt', p._title);
            divImg.appendChild(img);
            divImg.style.maxWidth = '8em';

            let h5 = document.createElement('h5');
            h5.classList.add('text-warning');
            h5.innerHTML = p._title;
            divImg.appendChild(h5);

            //botón asignar producciones
            let buttonAssignActor = document.createElement('button');
            //  buttonAssignActor.classList.add('btn', 'p-0');
            // buttonAssignActor.setAttribute('type', 'submit');
            let buttonIconPlus = document.createElement('i');
            buttonIconPlus.classList.add('btn', 'fas', 'fa-plus-circle', 'text-success');
            buttonIconPlus.style.fontSize = '1.3em';
            buttonAssignActor.appendChild(buttonIconPlus);
            buttonAssignActor.addEventListener('click', () => assignDirector(p, persona));

            //contador para los id de los forms
            i++;

            sectionP.appendChild(buttonAssignActor);
            sectionP.appendChild(divImg);
            divResources.appendChild(sectionP);

        }

        produccion = producciones.next();
    }
}

function assignActor(production, persona, form) {
    let inputs = form.getElementsByTagName('input');
    let esProtagonista = inputs[0].checked;
    let rol = inputs[2].value;

    console.log(inputs[2].value);
    if (inputs[2].value == '') { crearDivResultadoOperacion('Introduzca rol del actor', 'error') }
    try {
        vs.assignActor(production, persona, rol, esProtagonista);
        crearDivResultadoOperacion('Película añadida con éxito al actor', 'success');
    }
    catch (e) {
        crearDivResultadoOperacion(e, 'error');
    }
}

function assignDirector(production, persona) {
    console.log(production);
    console.log(persona);
    try {
        vs.assignDirector(production, persona);
        crearDivResultadoOperacion('Película añadida con éxito al director', 'success');
    }
    catch (e) {
        crearDivResultadoOperacion(e, 'error');
    }
}







































//creación formulario de validación (habrá que instanciarlo para que se ejecute)
function validarLogin() {
    let buttonCheckLogin = document.getElementById('login-btn');
    let form = document.getElementById('login-form');
    buttonCheckLogin.addEventListener('click', () => checkCookie(form));
}

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); //le damos 1 día de validez
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let form = document.getElementById('login-form');
    let inputs = form.getElementsByTagName('input');
    let buttonCheckLogin = document.getElementById('login-btn');
    buttonCheckLogin.addEventListener('click', () => checkCookie());
    let buttonDataToggle = document.getElementById('dropdownMenuButton');
    let login = inputs[0].value;
    let pass = inputs[1].value;
    let user = getCookie("username");
    if (user != "") {
        buttonDataToggle.removeAttribute('data-toggle');
        buttonDataToggle.innerHTML = 'Cerrar Sesión';
        buttonDataToggle.addEventListener('click', () => deleteCookie(), () => deleteCookie());
        crearMenuGestion();
    } else {
        user = (login == 'prueba' && pass == 'prueba') ? 'prueba' : '';
        if (user != '' && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function deleteCookie() {
    let divGestion = document.getElementById('divgestion');
    let dGParent;
    if (divGestion) {
        dGParent = divGestion.parentElement;
        dGParent.removeChild(divGestion);
    }
    let main = document.getElementsByTagName('main');
    main[0].classList.remove('con-menu-lateral');
    // divGestion.classList.add('d-none');
    let buttonDataToggle = document.getElementById('dropdownMenuButton');
    buttonDataToggle.removeEventListener('click', () => deleteCookie(), () => deleteCookie());
    buttonDataToggle.innerHTML = 'Iniciar Sesión';
    buttonDataToggle.setAttribute('data-toggle', 'dropdown');
    //borro cookie
    document.cookie = 'username=;expires=expires=Thu, 01 Jan 1970 00:00:00 UTC; + expires + ;path=/';
}
