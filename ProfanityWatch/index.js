(function(o,i,u,f,d){"use strict";var l=["fuck","bitch","shit","ass","damn","piss","hell","slut","whore"];const g=i.findByProps("sendMessage","receiveMessage");function v(){return u.before("sendMessage",g,function(t){let e=t[1].content;for(const n of l)if(e.toLowerCase().includes(n)){var a="";for(let c=0;c<n.length-1;c++)a=a+"*";var r=e.toLowerCase().indexOf(n-(n.length+1));e=t[1].content.substring(0,r)+t[1].content.substring(r)}e!==t[1].content&&d.showToast("Watch your language!",f.getAssetIDByName("ic_warning_24px")),t[1].content=e})}let s;var h={onLoad:function(){s=[v()]},onUnload:function(){for(const t of s)t()}};return o.default=h,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.ui.toasts);
