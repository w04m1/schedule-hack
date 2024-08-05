// ==UserScript==
// @name         Schedule Hack
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Enjoy
// @author       w04m1
// @match        https://tanrend.elte.hu/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getTermString() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const semester = month >= 6 ? 1 : 2;
        const yearString = semester === 1 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
        return `${yearString}-${semester}`;
    }

    function addOption() {
        const termString = getTermString();
        const options = document.getElementById('felev');
        if (options) {
            options.insertBefore(
                new Option(termString, termString),
                options.firstChild
            );
            options.value = termString;
        } else {
            console.error('Element with id "felev" not found.');
        }
    }

    addOption();
})();