var fs=require("fs"),dt=require("./common/datetime.js"),cdr=function(o){var l="",i=null;return cdr.prototype.write=function(e){var t,r,n;(r=(new dt).getDateString())!=l&&(t=o+"_"+r+".txt",console.log("Debug: Changing to new CDR File(%s)",t),i&&i.close(),i=null,i=fs.createWriteStream(t,{flags:"a",defaultEncoding:"utf8",fd:null,mode:438,autoClose:!0}),l=r),i?(n=(new dt).getDateTimeString(),i.write(n+"#"+e+"\n")):console.log("ERROR: Writestream is null, Could not write CDRs"+n+"#"+e)},this};module.exports=cdr;