<?php
function mi_tema_enqueue_styles() {
    wp_enqueue_style(
        'estilos-principales',
        get_stylesheet_uri(),
        array(),
        null
    );
}

add_action('wp_enqueue_scripts', 'mi_tema_enqueue_styles');

function mi_tema_scripts() {
    wp_enqueue_script(
    'main-js',
    get_template_directory_uri() . '/assets/js/script.js',
    array(),
    null,
    true 
    );
   }

   add_action('wp_enqueue_scripts', 'mi_tema_scripts');
   