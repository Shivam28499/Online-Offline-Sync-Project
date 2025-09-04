
//req.body: title: milkman
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

// req.params: id: 1
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

// req.params: id:1
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

// req.body: title: Project Work, req.params: id: 4
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
