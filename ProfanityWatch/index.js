(function(o,f,d,s,a){"use strict";var l=["fuck","bitch","shit","ass","damn","piss","hell","slut","whore"];const g=f.findByProps("sendMessage","receiveMessage");function h(){return d.before("sendMessage",g,function(n){let e=n[1].content;for(const t of l)if(e.toLowerCase().includes(t)){var i="";for(let u=0;u<t.length-1;u++)i=i+"*";var w=e.toLowerCase(),c=w.indexOf(t);a.showToast(`${e} ${t} ${c}`,s.getAssetIDByName("ic_warning_24px")),e=n[1].content.substring(0,c)+e.substring(e.length)}e!==n[1].content&&a.showToast("Watch your language!",s.getAssetIDByName("ic_warning_24px")),n[1].content=e})}let r;var v={onLoad:function(){r=[h()]},onUnload:function(){for(const n of r)n()}};return o.default=v,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.ui.toasts);
