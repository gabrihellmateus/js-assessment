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
      var arrMatches = [];
      var counter = 0;

      for (var i = 0; i < arr.length; i++) {
         if (arr[i] === item) {
           arrMatches.push(arr[i]);
         }
      }

      if (arrMatches.length) {
        for (var j = 0; j < arrMatches.length; j++) {
           counter++;
        }
      }

      return counter;
    },

    duplicates: function(arr) {
      var arrPlain = [];
      var arrDuplicates = [];

    	for (var i = 0; i < arr.length; i++) {
    		if (arrPlain.indexOf(arr[i]) === -1) {
          arrPlain.push(arr[i]);
    		} else if (arrDuplicates.indexOf(arr[i]) === -1) {
          arrDuplicates.push(arr[i]);
        }
    	}

  		return arrDuplicates;
    },

    square: function(arr) {
      var arrSquare = [];
      var result;

  		for (var i = 0; i < arr.length; i++) {
        result = arr[i] * arr[i];

        arrSquare.push(result);
  		}

      return arrSquare;
    },

    findAllOccurrences: function(arr, target) {
      var first = arr.indexOf(target);
    	var arrOcc = [];

    	if (first !== -1) {
    		for (var i = first; i < arr.length ; i++) {
    			var match = arr.indexOf(target, i);

    			if (match !== -1 && arrOcc.indexOf(match) === -1) {
    				arrOcc.push(match);
    			}
    		}
    	}

      return arrOcc;
    }
};
