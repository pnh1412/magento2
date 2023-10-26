define([
    'jquery',
], function($) {
    'use strict';

    $(document).ready(function () {
        $('#my-button').on('click', function(){
            console.log("abc");
        })
    });
});
