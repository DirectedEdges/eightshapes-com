"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var tab_button = document.querySelectorAll('.escom-tabs__button');
    var tab_content = document.querySelectorAll('.escom-tabs__content');
    var i;

    function toggleTab() {
        tab_button[i].addEventListener('click', function() {
            var target = document.getElementById(this.dataset.target);

            for (i = 0; i < tab_button.length; i++) {
                tab_button[i].classList.remove('escom-tabs__button--is-active');
            }
            for (i = 0; i < tab_content.length; i++) {
                tab_content[i].classList.remove('escom-tabs__content--is-active');
            }

            this.classList.add('escom-tabs__button--is-active');
            target.classList.add('escom-tabs__content--is-active');
        });
    }

    for (i = 0; i < tab_button.length; i++) {
        toggleTab();
    }
});
