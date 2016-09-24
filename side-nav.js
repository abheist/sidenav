'use strict'

class SideNav {
    constructor () {
        this.toggleButtonEl = document.querySelector('.js-menu');
        this.SideNavEl = document.querySelector('.js-side-nav');

        this.showSideNav = this.showSideNav.bind(this);

        this.addEventListeners();
    }

    addEventListeners () {
        this.toggleButtonEl.addEventListener('click', this.showSideNav);
    }

    showSideNav () {
        this.SideNavEl.classList.add('side-nav--visible');
    }
}

new SideNav();