import React from 'react';

import * as ethUtil from 'ethereumjs-util'
import CONSTANTS from "../constants"
import BLOCKCHAIN_INFO from "../../../env"

const httpEndpoint = "http://52.77.19.90:8000/"
const wsEndpoint = "ws://52.77.19.90:8000/"


// const wss = new WebSocket.Server({ port: 8080 });

// function heartbeat() {
//   this.isAlive = true;
// }

// wss.on('connection', function connection(ws) {
//   ws.isAlive = true;
//   ws.on('pong', heartbeat);
// });

// const interval = setInterval(function ping() {
//   wss.clients.forEach(function each(ws) {
//     if (ws.isAlive === false) return ws.terminate();

//     ws.isAlive = false;
//     ws.ping('', false, true);
//   });
// }, 30000);


export default class Provider extends React.Component {
  constructor(type) {
    super(type)
    this.initProvider(type)
    // this.initContract()
  }

  initProvider(type) {
    switch (type) {
      case "http":
        this.currentProvider = "http"
        break
      case "ws":
        this.currentProvider = "ws"
        break
      default:
        this.currentProvider = "http"
        break
    }
  }

  initContract() {
    this.erc20Contract = new this.rpc.eth.Contract(CONSTANTS.ABIS.ERC20)
    this.networkAddress = BLOCKCHAIN_INFO.network
    this.wrapperAddress = BLOCKCHAIN_INFO.wrapper
    this.networkContract = new this.rpc.eth.Contract(CONSTANTS.ABIS.KYBER_NETWORK, this.networkAddress)
    this.wrapperContract = new this.rpc.eth.Contract(CONSTANTS.ABIS.KYBER_WRAPPER, this.wrapperAddress)
  }


  send(path, method, data) {
    if (this.currentProvider == "http") {
      return this.httpRequest(httpEndpoint + path, method, data)
    }

    else if (this.currentProvider == "ws") {
      return this.wsSend(wsEndpoint + path, data)
    }

    else {
      return Promise.reject("provider not support")
    }
  }

  sendBlockchain(){

  }

  httpRequest(url, method, data) {
    var requestData = method == "POST" ? { method: "POST", body: data } : {}
    return new Promise((resolve, reject) => {
      fetch(url, requestData)
        .then((response) => {
          if (!response.ok) {
            reject(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          resolve(data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  wsSend(url, data) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket('ws://' + url)
      ws.on('open', function open() {
        resolve(ws);
      })

      ws.on('close', function close() {
        reject('disconnected');
      })

      ws.on('message', function incoming(data) {
        resolve(data)
      });
    })
  }

}
