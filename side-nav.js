'use strict'

class SideNav {
    constructor() {
        this.showButtonEl = document.querySelector('.js-menu-show');
        this.hideButtonEl = document.querySelector('.js-menu-hide');
        this.SideNavEl = document.querySelector('.js-side-nav');
        this.sideNavContainerEl = document.querySelector('.js-side-nav-container');

        this.showSideNav = this.showSideNav.bind(this);
        this.hideSideNav = this.hideSideNav.bind(this);
        this.blockClicks = this.blockClicks.bind(this);

        this.addEventListeners();
    }

    addEventListeners() {
        this.showButtonEl.addEventListener('click', this.showSideNav);
        this.hideButtonEl.addEventListener('click', this.hideSideNav);
        this.sideNavEl.addEventListener('click', this.hideSideNav);
        this.sideNavContainerEl.addEventListener('click', this.blockClicks);
    }

    blockClicks (evt) {
        evt.stopPropogation();
    }

    showSideNav() {
        this.SideNavEl.classList.add('side-nav--visible');
    }

    hideSideNav() {
        this.SideNavEl.classList.remove('side-nav--visible');
    }
}

new SideNav();