"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[592],{773:(a,n,e)=>{e.d(n,{M:()=>i});var o=e(2340),s=e(2223),c=e(3144);let i=(()=>{class r{constructor(t){this.http=t,this.products=[]}getProducts(){return this.http.get(o.N.apiURL+"pizzas")}getProduct(t){return this.http.get(o.N.apiURL+`pizzas?id=${t}`)}createOrder(t){return this.http.post(o.N.apiURL+"order-pizza",t)}}return r.\u0275fac=function(t){return new(t||r)(s.LFG(c.eN))},r.\u0275prov=s.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},2340:(a,n,e)=>{e.d(n,{N:()=>o});const o={apiURL:"https://testologia.site/"}}}]);