function modifyCategory(form, oldCat, catName, catDesc) {
    let formId = form.id;
    console.log(oldCat);
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
            vs.removeCategory(oldCat);
            vs.addCategory(cat);
            categoriesMenuPopulate();
            resultadoInfo = crearDivResultadoOperacion('Éxito al crear categoría.', 'success');
        } catch (e) {
            console.log('errormod');
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
