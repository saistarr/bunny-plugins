(function(o,u,g,l,f,s){"use strict";var d=["fuck","bitch","shit","ass","damn","piss","hell","slut","whore"];const h=u.findByProps("sendMessage","receiveMessage");function v(){return g.before("sendMessage",h,function(t){let e=t[1].content;for(const n of d)if(e.toLowerCase().includes(n)){var r="";for(let i=0;i<n.length-1;i++)r=r+"*";var c=e.toLowerCase().indexOf(n-(n.length+1));s.logger.log(c),s.logger.log(e),e=t[1].content.substring(0,c)+t[1].content.substring(t[1].content.length)}e!==t[1].content&&f.showToast("Watch your language!",l.getAssetIDByName("ic_warning_24px")),t[1].content=e})}let a;var b={onLoad:function(){a=[v()]},onUnload:function(){for(const t of a)t()}};return o.default=b,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.ui.toasts,vendetta);
