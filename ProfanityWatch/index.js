(function(s,i,c,u,d){"use strict";var f=["fuck","bitch","shit","ass","damn","piss","hell","slut","whore"];const l=i.findByProps("sendMessage","receiveMessage");function g(){return c.before("sendMessage",l,function(t){let e=t[1].content;for(const n of f)if(e.toLowerCase().includes(n)){var a="";for(let r=0;r<n.length-1;r++)a=a+"*";indexstart=e.toLowerCase().indexOf(n-(n.length+1)),e=t[1].content.substring(0,indexstart)+t[1].content.substring(t[1].content.length)}e!==t[1].content&&d.showToast("Watch your language!",u.getAssetIDByName("ic_warning_24px")),t[1].content=e})}let o;var h={onLoad:function(){o=[g()]},onUnload:function(){for(const t of o)t()}};return s.default=h,Object.defineProperty(s,"__esModule",{value:!0}),s})({},vendetta.metro,vendetta.patcher,vendetta.ui.assets,vendetta.ui.toasts);
