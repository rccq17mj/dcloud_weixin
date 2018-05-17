import React, { Component } from 'react';
var request = require('superagent');

class HttpUtils {
    httpGet(href) {
        request.get(href)
            .end(function(err, res){
                alert(res);
            });
    }
}

export default httpUtils;