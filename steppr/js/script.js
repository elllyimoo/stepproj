const tegA = Array.from(document.getElementsByTagName('a'));
tegA.forEach((value) => value.addEventListener('click', (e) => e.preventDefault()));

const hideAuthors = document.getElementsByClassName('hide-authors');
const hideAuthorsMini = document.getElementsByClassName('hide-authors-mini');
const loader = document.getElementsByClassName('loader');
const show = document.getElementsByClassName('show');
const itemsImage = Array.from(document.getElementsByClassName('items-image'));
const hideBestImage = document.getElementsByClassName('hide-best-image');
const liList = Array.from(document.getElementsByClassName('li-list'));
const liAmazing = Array.from(document.getElementsByClassName('li-amazing'));
const miniCirclePhoto = Array.from(document.getElementsByClassName('mini-circle-photo'));
const loadMoreAmazing = document.getElementsByClassName('load-more-amazing');
const loadMoreHide = document.getElementsByClassName('load-more-hide');
const leftButton = document.getElementsByClassName('left');
const rightButton = document.getElementsByClassName('right');

const applyHiddenClass = (cls, length = cls.length, count = 0) => {
    for (let i = count; i < length; i++) {
        cls[i].style.display = 'none';
    }
};

applyHiddenClass(hideAuthors);
applyHiddenClass(hideAuthorsMini);
applyHiddenClass(loader);
applyHiddenClass(itemsImage, itemsImage.length, 12);
applyHiddenClass(hideBestImage);
applyHiddenClass(show);

window.addEventListener('load', () => {
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer',
        horizontalOrder: true
    });
});

function showOurServices() {
    const list = Array.from(document.getElementsByClassName('li-list'));
    const dataNumber = this.getAttribute('data-number');
    const servicesMenu = Array.from(document.getElementsByClassName('services-menu-content'));

    if (this.classList.contains('active')) {
        return;
    }
    list.forEach((value) => value.classList.remove('active'));
    this.classList.add('active');

    servicesMenu.forEach((value) => value.style.display = 'none');

    const dataNumberServices = servicesMenu.filter((items) => {
        return items.getAttribute('data-number') === dataNumber;
    });
    dataNumberServices[0].style.display = '';
}

function showOurAmazingWork() {
    const liAmazing = Array.from(document.getElementsByClassName('li-amazing'));
    const buttonLoadMore = document.getElementsByClassName('load-more-amazing');
    buttonLoadMore[0].style.display = '';
    const amazingItems = Array.from(document.getElementsByClassName('amazing-items'));
    const showItems = 12;
    amazingItems.forEach((value) => value.classList.remove('margin-bottom'));

    liAmazing.forEach((value) => value.classList.remove('active-amazing'));
    this.classList.add('active-amazing');

    const dataAmazingItems = this.getAttribute('data-amazing-items');
    const itemsImage = Array.from(document.getElementsByClassName('items-image'));
    itemsImage.forEach((value) => value.style.display = 'none');
    const dataItemsImage = itemsImage.filter((items) => {
        return items.getAttribute('data-amazing-items') === dataAmazingItems;
    });
    const hideButtonAddClass = () => {
        buttonLoadMore[0].style.display = 'none';
        amazingItems[0].classList.add('margin-bottom');
    };
    if (dataItemsImage.length > showItems) {
        for (let i = 0; i < showItems; i++) {
            dataItemsImage[i].style.display = '';
        }
        buttonLoadMore[0].style.display = '';
    } else if (dataAmazingItems === 'all') {
        itemsImage.forEach((value) => value.style.display = '');
        hideButtonAddClass();
    } else {
        dataItemsImage.forEach((value) => value.style.display = '');
        hideButtonAddClass();
    }
}

function showPeople() {
    const miniCirclePhoto = Array.from(document.getElementsByClassName('mini-circle-photo'));
    const bigPeopleBlock = Array.from(document.getElementsByClassName('authors-main-block'));
    bigPeopleBlock.forEach((value) => value.style.display = 'none');
    const dataPeople = this.getAttribute('data-people');
    const dataBigBlock = bigPeopleBlock.filter((value) => {
        return value.getAttribute('data-people') === dataPeople;
    });
    dataBigBlock[0].style.display = '';
    miniCirclePhoto.forEach((value) => value.classList.remove('mini-circle-border'));
    this.classList.add('mini-circle-border');
}

const loadingMoreAmazing = () => {
    const itemsImage = Array.from(document.getElementsByClassName('items-image'));
    const buttonLoadMore = document.getElementsByClassName('load-more-amazing');
    const amazingItems = document.getElementsByClassName('amazing-items');
    const hiddenElem = itemsImage.filter((value) => {
        return value.style.display === 'none';
    });
    const loader = document.getElementsByClassName('loader-image');
    const showItems = 12;
    const dataAmazingItems = document.getElementsByClassName('active-amazing')[0].getAttribute('data-amazing-items');
    const allElemDataItems = itemsImage.filter((items) => {
        return items.getAttribute('data-amazing-items') === dataAmazingItems;
    });

    buttonLoadMore[0].style.display = 'none';
    loader[0].style.display = '';
    setTimeout(function () {
        buttonLoadMore[0].style.display = '';
        loader[0].style.display = 'none';
        if (hiddenElem.length === showItems) {
            buttonLoadMore[0].style.display = 'none';
            amazingItems[0].classList.add('margin-bottom');
        }
        if (dataAmazingItems === 'all') {
            for (let i = 0; i < showItems; i++) {
                hiddenElem[i].style.display = '';
            }
        } else {
            for (let i = showItems; i <= allElemDataItems.length - 1; i++) {
                allElemDataItems[i].style.display = '';
            }
            buttonLoadMore[0].style.display = 'none';
            amazingItems[0].classList.add('margin-bottom');
        }
    }, 2000);
};

const loadMore = () => {
    let hiddenImage = Array.from(document.getElementsByClassName('hide-best-image'));
    const loader = document.getElementsByClassName('loader');
    const loadMoreHide = document.getElementsByClassName('load-more-hide');
    const showNextPhoto = (hiddenImage.length < 5) ? hiddenImage.length : 5;
    const gridMarginBottom = document.getElementsByClassName('grid');

    loadMoreHide[0].style.display = 'none';
    loader[1].style.display = '';

    setTimeout(function () {
        loadMoreHide[0].style.display = '';
        loader[1].style.display = 'none';

        for (let i = 0; i < showNextPhoto; i++) {
            hiddenImage[i].classList.remove('hide-best-image');
            hiddenImage[i].style.display = '';
        }
        $('.grid').masonry({
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: '.gutter-sizer',
            horizontalOrder: true
    });
        hiddenImage = Array.from(document.getElementsByClassName('hide-best-image'));
        if (hiddenImage.length < 1) {
            loadMoreHide[0].style.display = 'none';
            gridMarginBottom[0].classList.add('grid-margin-bottom');
        }
    }, 2000);
};

const moveLeft = () => {
    const miniImages = Array.from(document.getElementsByClassName('mini-circle-photo'));
    const currentImageIndex = miniImages.findIndex((items) => items.classList.contains('mini-circle-border'));
    const currentImage = document.getElementsByClassName('mini-circle-border');
    let prevImageIndex = currentImageIndex - 1;
    let prevImage = miniImages[prevImageIndex];
    const bigPeopleBlock = Array.from(document.getElementsByClassName('authors-main-block'));

    bigPeopleBlock.forEach((items) => items.style.display = 'none');

    if (currentImageIndex === 0) {
        miniImages.forEach((items) => items.style.display = '');
        prevImage = miniImages[miniImages.length - 1];
        prevImageIndex = miniImages.length - 1;
        currentImage[currentImageIndex].style.display = 'none';
    }
    if (prevImage.style.display === 'none') {
        prevImage.style.display = '';
        miniImages[currentImageIndex + 3].style.display = 'none';
    }
    currentImage[0].classList.remove('mini-circle-border');
    prevImage.classList.add('mini-circle-border');
    bigPeopleBlock[prevImageIndex].style.display = '';
};

const moveRight = () => {
    const miniImages = Array.from(document.getElementsByClassName('mini-circle-photo'));
    const currentImageIndex = miniImages.findIndex((items) => items.classList.contains('mini-circle-border'));
    const currentImage = document.getElementsByClassName('mini-circle-border');
    let nextImageIndex = currentImageIndex + 1;
    let nextImage = miniImages[nextImageIndex];
    const bigPeopleBlock = Array.from(document.getElementsByClassName('authors-main-block'));

    bigPeopleBlock.forEach((items) => items.style.display = 'none');

    if (currentImageIndex === (miniImages.length - 1)) {
        miniImages.forEach((items) => items.style.display = '');
        nextImage = miniImages[0];
        nextImageIndex = 0;
        currentImage[0].style.display = 'none';
    }
    if (nextImage.style.display === 'none') {
        nextImage.style.display = '';
        miniImages[currentImageIndex - 3].style.display = 'none';
    }
    currentImage[0].classList.remove('mini-circle-border');
    nextImage.classList.add('mini-circle-border');
    bigPeopleBlock[nextImageIndex].style.display = '';
};

liList.forEach((value) => value.addEventListener('click', showOurServices));
liAmazing.forEach((value) => value.addEventListener('click', showOurAmazingWork));
miniCirclePhoto.forEach((value) => value.addEventListener('click', showPeople));
loadMoreAmazing[0].addEventListener('click', loadingMoreAmazing);
loadMoreHide[0].addEventListener('click', loadMore);
leftButton[0].addEventListener('click', moveLeft);
rightButton[0].addEventListener('click', moveRight);