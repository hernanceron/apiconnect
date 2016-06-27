module.exports = function(Message) {
    Message.greet = function(msg, cb) {
      process.nextTick(function() {
        msg = msg || 'hello';
        cb(null, 'Sender says ' + msg + ' to receiver');
      });
    };
    Message.foto = function(entrada, cb){
        console.log('Entro a la operacion');
    	var ds = Message.app.dataSources.restSource;
		if(ds)
			console.log("ds existe")
    	var model = ds.createModel("dummy");
		console.log("nuDni "+ entrada.nuDni);
		console.log("fotoCapturada "+ entrada.fotoCapturada);
    	model.foto(entrada.nuDni, entrada.fotoCapturada, function(err, result){
			  if (result && result[0]) {
				console.log(result[0]);
			  }else{
				console.log("No funciono Se hizo la invocación " + result);
				console.log("Error " + err);
			  }
    		cb(null,result);
    	})
    }
};
