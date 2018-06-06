function fn() {
    this.title = ko.observable("Short name")
    this.desc  = ko.observable("Longer description")
    this.prior = ko.observable(0)
    this.date  = ko.observable(new Date().toJSON().slice(0,10).replace(/-/g,'/'))


}

ko.applyBindings(new fn())
