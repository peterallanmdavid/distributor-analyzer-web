var request = require('superagent')
    , _ = require('lodash')
    , commonUtils = require('./common.utils')
    , ApiBaseUrl = "http://localhost:8080/distribution-analyzer-api/"
    ;

module.exports = {
    url:{
        distributor: ApiBaseUrl +"distributor",
        source: ApiBaseUrl + "source",
        client: ApiBaseUrl + "client",
        vehicle: ApiBaseUrl + "vehicle",
        links: ApiBaseUrl + "links"
    },
    objToQueryStr: function(obj){
        var str = [];
        for(var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    },
    postData: function (data, url, successCallback, errorCallback) {
        var ret = {
            request: data,
            response: {},
            status:0
        };

        request.post(url)
            .send(data)
            .set('Accept', 'application/json')
            .end(function (error, res) {
                if (res) {
                    if (res.error) {
                        ret.response = res.error;
                        errorCallback(ret);
                    } else {
                        var json = JSON.parse(res.text);
                        ret.response = json;
                        ret.status= res.status;
                        successCallback(ret);
                    }
                }
            });
    },
    getData: function (params, url, successCallback, errorCallback) {
        var queryStr = this.objToQueryStr(params);
        var _url = (queryStr === "") ? url: url + "?" + queryStr;
        var ret = {
            request: params,
            response: {}
        };

        request.get(_url)
            .end(function (err, res) {
                if(res && res.error === false){
                    var json = JSON.parse(res.text);
                    ret.response = json;
                    successCallback(ret);
                }else{
                    ret.response = err;
                    errorCallback(ret);
                }
            });
    },

    fetchAllDistributors:function(successCallBack,errorCallBack ){
        var url = this.url.distributor;
        this.getData({}, url, successCallBack, errorCallBack);
    },

    saveDistributor: function(data, successCallBack, errorCallBack){
        var url = this.url.distributor;
        this.postData(data, url, successCallBack, errorCallBack);
    },
    getCurrentDistributor:function(id, successCallBack,errorCallBack){
        var url = this.url.distributor + "/" + id;
        this.getData({}, url, successCallBack, errorCallBack);
    },
    fetchVehicleLinks: function(id, successCallBack,errorCallBack){
        var url = this.url.distributor + "/" + id+ "/link";
        this.getData({}, url, successCallBack, errorCallBack);
        /*var data = {
            response:{
                data:[
                    {linkType:"Vehicle",distributorId:1, distributorName: "Philip Morris", vehicleId:1, plateNumber:"TDE269" },
                    {linkType:"Vehicle",distributorId:2, distributorName: "Figaro", vehicleId:2, plateNumber:"PES456" },
                    {linkType:"Vehicle",distributorId:3, distributorName: "Fortune", vehicleId:3, plateNumber:"SPE598" },
                    {linkType:"Vehicle",distributorId:4, distributorName: "Salem", vehicleId:4, plateNumber:"REE444" }
                ]
            }
        }
        successCallBack(data);*/
    }

}