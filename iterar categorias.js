 //iteramos las categorías
    let categorias = vs.categories;
    let categoria = categorias.next();
    while (categoria.done !== true) {
        let section = document.createElement('section');
        section.setAttribute('id', categoria.value._name);
        let h3Section = document.createElement('h3');
        let h3SectionTextNode = document.createTextNode(categoria.value._name);
        h3Section.appendChild(h3SectionTextNode);
        let h5 = document.createElement('h5');
        h5.classList.add('badge', 'badge-secondary');
        let h5TextNode = document.createTextNode(categoria.value._description);
        h5.appendChild(h5TextNode);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container-fluid');
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        categoria.value.productions.forEach(function (pro) {
            let divCol = document.createElement('div');
            divCol.classList.add('col-4', 'col-md-3', 'col-lg-2');
            let img = document.createElement('img');
            img.classList.add('img-thumbnail');
            img.setAttribute('src', pro._image);
            img.setAttribute('alt', pro._title);
            img.style.width = '15em';

            img.style.cursor = 'pointer';
            divCol.appendChild(img);
            divRow.appendChild(divCol);
            img.addEventListener('click', () => showProduction(img.alt));
        });
        divContainer.appendChild(divRow);
        section.appendChild(h3Section);
        section.appendChild(h5);
        section.appendChild(divContainer);
        contenedorPrincipal.appendChild(section);

        categoria = categorias.next();
    }