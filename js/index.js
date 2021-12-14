'use strict';

const site = {
  title:'Green site',
  headers:['Header1','Header2','Header3','Header4'],
  showHeaders(){
    this.headers.forEach(function (header,index){
      console.log(this.title);
      console.log(`${index+1}: ${header}`);
    },this);
  }
};

site.showHeaders();