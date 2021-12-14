'use strict';
function logItem(header,index){
  console.log(this.title);
  console.log(`${index+1}: ${header}`);
};

const site = {
  title:'Green site',
  headers:['Header1','Header2','Header3','Header4'],
  showHeaders(){
    this.headers.forEach((header,index) => {
      console.log(this.title);
      console.log(`${index+1}: ${header}`);
    });
  }
};

site.showHeaders();