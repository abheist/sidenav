'use strict'

class SideNav {
    constructor() {
        this.showButtonEl = document.querySelector('.js-menu-show');
        this.hideButtonEl = document.querySelector('.js-menu-hide');
        this.SideNavEl = document.querySelector('.js-side-nav');

        this.showSideNav = this.showSideNav.bind(this);
        this.hideSideNav = this.hideSideNav.bind(this);

        this.addEventListeners();
    }

    addEventListeners() {
        this.showButtonEl.addEventListener('click', this.showSideNav);
        this.hideButtonEl.addEventListener('click', this.hideSideNav);
    }

    showSideNav() {
        this.SideNavEl.classList.add('side-nav--visible');
    }

    hideSideNav() {
        this.SideNavEl.classList.remove('side-nav--visible');
    }
}

new SideNav();