module.exports = {
    flag: function(argumentToFind){
        var args = process.argv,
            value;

        for(var i = 0; i < args.length; i++){
            value = args[i + 1] && args[i + 1].indexOf('--') < 0 ? args[i + 1] : null;

            if(args[i].match(argumentToFind))return {arg: args[i], value: value};

        }
    }
}
