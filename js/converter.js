var Converter = (function() {

    // Private stuff up here
    var converterValue = 2.20462;

    // Public methods here
    return {
        convertFromPoundsToKIlo: function(weight) {
            var num = parseFloat(weight);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = weight * converterValue;
            return num;
        },

        convertFromMetricToImperial: function(weight) {
            var num = parseFloat(weight);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
             num = num / converterValue;
           return num;
        }

    }
}())