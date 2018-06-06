function fn() {
    this.title = ko.observable("Short name");
    this.desc  = ko.observable("Longer description");
    this.prior = ko.observable(0);
    this.date  = ko.observable(new Date().toJSON().slice(0,10).replace(/-/g,'/'));

    this.test = function() {
        var data = {
            'title': 'geoff'
        };
        $.ajax({
            type: "POST",
            url: "http://jx-staging-britecore-mock-project.jx-staging.35.203.42.186.nip.io",
            data: data,
            async: true,
            contentType: "application/json",
            crossDomain: true,
            success: function(ret){
                alert("success");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
        /*
        $.post("http://jx-staging-britecore-mock-project", data, function(ret) {
            console.log(ret);
        });
        */
    };
}

ko.applyBindings(new fn());
