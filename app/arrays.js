exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        return arr.indexOf(item);
    },

    sum: function(arr) {
        var total = 0;

        arr.forEach(function(item) {
            total += item;
        });

        return total;
    },

    remove: function(arr, item) {
        for(var i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === item) {
               arr.splice(i, 1);
            }
        }

        return arr;
    },

    removeWithoutCopy: function(arr, item) {

    },

    append: function(arr, item) {

    },

    truncate: function(arr) {

    },

    prepend: function(arr, item) {

    },

    curtail: function(arr) {

    },

    concat: function(arr1, arr2) {

    },

    insert: function(arr, item, index) {

    },

    count: function(arr, item) {

    },

    duplicates: function(arr) {

    },

    square: function(arr) {

    },

    findAllOccurrences: function(arr, target) {

    }
};
