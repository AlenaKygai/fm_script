'use strict';

const site = {
  title:'Green site',
  headers:['Header1','Header2','Header3','Header4'],
  showHeaders(){
    const that = this;
    this.headers.forEach((header,index) => {
      console.log(that.title);
      console.log(`${index+1}: ${header}`);

      // const test = ()=>{
      //   console.log(this);
      // }
      // test();

    });
  }
};

site.showHeaders();