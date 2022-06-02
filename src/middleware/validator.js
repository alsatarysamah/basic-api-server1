
function validator(req, res, next) {
   let regx=/[1-9]/
        if(req.query.name==null)
       errorHandler();
       if(req.query.name=="")
       errorHandler();
       if(regx.test( req.query.name))
       errorHandler();
        next();
       
        
   
}

module.exports = validator;