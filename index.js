const request = require('request');
const token = process.env.r3d;

const payload = {
  'content': '> # **ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk    ksmk  ksmk  <@1021578348813623366> <@1053453096556175450> <@1093307299298287699>  <@1158944434772254861>**'
};

const header = {
  'authorization': token
};

function sendRequest() {
  request.post('https://discord.com/api/v9/channels/1031643595331080192/messages?limit=5000000000000000000000000000000000000000000000000', {
    headers: header,
    json: payload
  }, (error, response) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('r3d');
    setTimeout(sendRequest, 6000);
  });
}
sendRequest();
const express = require("express")
