(this.webpackJsonppendu=this.webpackJsonppendu||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/you_lose.10b6602b.png"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),c=(a(14),a(7)),l=a(1),o=a(4),d=a(5),u=a(6),m=a(8),h=(a(15),a(16),["thuongme","hieumap","quarantine","epidemic","isolation","infection","transmission","symptoms","treatment","vaccine","pandemic","outbreak","virus","disease","fever","hoarding","headache","backache","sprain","chill","allergy","inflammation","droplets","apple","banana","grape","grapefruit","lemon","kiwi","mandarin","mango","coconut","orange","raspberry","peach","pear","papaya","pineapple","melon","soup","salad","salmon","baguette","bread","steak","chicken","duck","beef","pork","mackerel","seafood","egg","sausages","curry","tea"]),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).keyboard=n.generateKeyboard(),n.state={currentWord:n.randomWord(),clickedLetters:[],life:5,matchedLetters:[]},n}return Object(d.a)(a,[{key:"randomWord",value:function(){return h[Math.floor(Math.random()*h.length)].split("").map((function(e){return{value:e.toUpperCase(),ishidden:!0}}))}},{key:"generateKeyboard",value:function(){for(var e=[],t=0;t<26;t++){var a=String.fromCharCode(t+65);e.push(a)}return e}},{key:"handleKeyClick",value:function(e){var t,a=[],n=[],r=[],i=!1,s=this.state.life,o=e.target.textContent,d=Object(l.a)(this.state.currentWord);try{for(d.s();!(t=d.n()).done;){var u=t.value;o===u.value&&(u.ishidden=!1,i=!0,r.push(o)),n.push(Object(c.a)({},u))}}catch(y){d.e(y)}finally{d.f()}i||s--;var m,h=Object(l.a)(this.state.clickedLetters);try{for(h.s();!(m=h.n()).done;){var v=m.value;a.push(v)}}catch(y){h.e(y)}finally{h.f()}var p,f=Object(l.a)(this.state.matchedLetters);try{for(f.s();!(p=f.n()).done;){var k=p.value;r.push(k)}}catch(y){f.e(y)}finally{f.f()}a.push(o),this.setState({currentWord:n,clickedLetters:a,life:s,matchedLetters:r}),console.log(r)}},{key:"onClickTryAgain",value:function(){this.setState({currentWord:this.randomWord(),clickedLetters:[],life:5,matchedLetters:[]})}},{key:"onClickReplay",value:function(){this.setState({currentWord:this.randomWord(),clickedLetters:[],life:5,matchedLetters:[]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"contenu"},0===this.state.life&&r.a.createElement("div",{className:"lose"},r.a.createElement("div",{className:"logo_lose"}),r.a.createElement("div",{className:"lose_tryagain",onClick:this.onClickTryAgain.bind(this)},"Try again")),this.state.matchedLetters.length===this.state.currentWord.length&&r.a.createElement("div",{className:"win"},r.a.createElement("div",{className:"logo_win"}),r.a.createElement("div",{className:"win_replay",onClick:this.onClickReplay.bind(this)},"Replay")),r.a.createElement("div",{className:"lives"},r.a.createElement("div",{className:"lives_title"},"lives remaining"),r.a.createElement("div",{className:"lives_content"},this.state.life)),r.a.createElement("div",{className:"letter_bar"},this.state.currentWord.map((function(e,t){return r.a.createElement("div",{key:t,className:"letter_box"},e.ishidden?"_":e.value)}))),r.a.createElement("div",{className:"keyboard"},this.keyboard.map((function(t){return e.state.clickedLetters.includes(t)?r.a.createElement("div",{className:"clicked_key",key:t},t):r.a.createElement("div",{key:t,className:"key",onClick:e.handleKeyClick.bind(e)},t)}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4dcd2959.chunk.js.map