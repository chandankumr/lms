function DAOErrorMessage(message,statusCode=503,trace="no trace found") {
    this.message = message;
    this.statusCode = statusCode;
    this.trace = trace;
    this.type="data object";
}

module.exports={
    getDAOErrorMessage(message,statusCode=503,trace="no trace found") {
       return new DAOErrorMessage(message,statusCode,trace);
    }
};