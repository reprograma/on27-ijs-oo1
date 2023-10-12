class SuperPower{
    _powerName;
    _powerCategory;

    constructor(powerName, powerCategory){
        this._powerName = powerName;
        this._powerCategory = powerCategory;
    }

    get powerName(){
        return this._powerName
    }

    get powerCategory(){
        return this._powerCategory
    }
}

module.exports = { SuperPower };