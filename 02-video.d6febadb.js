const e=document.querySelector("iframe"),t=new Vimeo.Player(e);t.on("timeupdate",(function(e){const t=JSON.stringify(e);localStorage.setItem("videoplayer-current-time",t)})),t.getVideoTitle().then((function(e){console.log("title:",e)}));
//# sourceMappingURL=02-video.d6febadb.js.map
