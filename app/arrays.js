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
        var newArr = [];

        for(var i = 0; i < arr.length; i++) {
            if(arr[i] !== item) {
                newArr.push(arr[i]);
            }
        }

        return newArr;
    },

    removeWithoutCopy: function(arr, item) {
        for(var i = arr.length - 1; i >= 0; i--) {
            if(arr[i] === item) {
               arr.splice(i, 1);
            }
        }

        return arr;
    },

    append: function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate: function(arr) {
        arr.pop();

        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail: function(arr) {
        arr.shift();

        return arr;
    },

    concat: function(arr1, arr2) {
        var newArr = arr1.concat(arr2);

        return newArr;
    },

    insert: function(arr, item, index) {
        var arr1 = [];
        var arr2 = [];

        for(var i = 0; i < arr.length; i++) {
            if(arr[i] < arr[index]) {
                arr1.push(arr[i]);
            } else {
                arr2.push(arr[i]);
            }
        }

        arr1.push(item);
        arr = arr1.concat(arr2);

        return arr;
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
