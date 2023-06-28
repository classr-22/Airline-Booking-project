const CrudService = require('./crud-service');
const { AirportRepository}  = require('../repository/index');

class AirportSevice extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}

module.exports = AirportSevice;