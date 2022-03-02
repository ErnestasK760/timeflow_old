/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (layout.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import './js/navbar.js';


// start the Stimulus application
import './bootstrap';
import * as Vue from 'vue'
import App from './vue/app.vue'

new Vue({
    el: "#app",
    components: {App}
})