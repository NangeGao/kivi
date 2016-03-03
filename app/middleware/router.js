var fs = require("fs");
var controllerCache = {};

module.exports = function* (next){

    console.log(this.request.host, this.request.path);

    var pathArray = this.request.path.split("/");
    var controllerName = (pathArray[1] || "index").toLowerCase();
    var actionName = (pathArray[2] || "index").toLowerCase();

    var action = getAction(controllerName, actionName);
    if(action){
        yield* action.call(this, next);
    }

    function getAction(controllerName, actionName){
        //从缓存读取controlller
        var controller = controllerCache[controllerName];
        //如果缓存没有，从文件读取controller，并存入缓存
        if(!controller){
            var controllerFilePath = `${CONTROLLER_PATH}/${controllerName}.js`;
            var controllerFile = fs.statSync(controllerFilePath);
            if(controllerFile.isFile()){
                var controller = require(controllerFilePath);
            }
        }

        return controller[`${controllerName}Action`];
    }

    yield next;
};
