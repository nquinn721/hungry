module.exports = function (io) {
    var mongoose = require('mongoose');


    class SessionCL{
        login(id){
            Session.find({id: id}, (err, user) =>{
                if(!user)
                    this.updateClients('failed login', id);
                else
                    this.updateClients('online', id);
            });
        }
        updateClients(event, data) {
            io.sockets.emit(event, data);
        }
    }


    return new SessionCL();
}