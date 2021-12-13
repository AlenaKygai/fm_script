/**
 * 
 * @param {function} howSay 
 * @param {string} whatSay 
 */
function saySomething(howSay,whatSay){
  howSay(whatSay);
}

saySomething(console.log, 'alert');
saySomething(alert, 'alert');
saySomething(prompt, 'prompt');
saySomething(confirm, 'confirm');
