module.exports = {

    indexAction: function* (next){
        this.render("index");
        yield next;
    }
};
