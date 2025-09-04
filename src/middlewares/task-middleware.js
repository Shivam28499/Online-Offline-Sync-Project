async function taskCreateChecker(req,res,next){
    try{
        if(!req.body.title){
            return res.json({
                success: false,
                message: "Task is missing in the request"
            })
        }
    }catch{
        throw error;
    }
    next();
}

async function taskGetChecker(req,res,next){
    try{
        if(!req.params.id){
            return res.json({
                success: false,
                message: "ID is missing in the request"
            })
        }
    }catch{
        throw error;
    }
    next();
}

async function taskDestoryChecker(req,res,next){
    try{
        if(!req.params.id){
            return res.json({
                success: false,
                message: "ID is missing in the request"
            })
        }


    }catch{
        throw error;
    }
    next();
}

async function taskUpdateChecker(req,res,next){
    try{
        if(!req.params.id){
            return res.json({
                success: false,
                message: "ID is missing in the request"
            })
        }

        if(!req.body){
            return res.json({
                success: false,
                message: "Request Body is missing in the request"
            })
        }
    } catch{
        throw error;
    }
    next();
}

module.exports = {
    taskCreateChecker,
    taskGetChecker,
    taskDestoryChecker,
    taskUpdateChecker
};
