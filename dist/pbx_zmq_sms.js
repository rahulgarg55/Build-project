var cfg=require("./pbx_config.js"),querystring=require("querystring"),pbx_logger=require("./logger/pbx_logger"),pbx_logger=require("./logger/pbx_logger"),express=require("express"),gZmq=require("zeromq"),gSocksms=gZmq.socket("push"),util=require("util"),logger=new pbx_logger,gDbConn=(module.exports=pbx_zmq_sms,""),gDbPool="";function pbx_zmq_sms(){if(!(this instanceof pbx_zmq_sms))return new pbx_zmq_sms}pbx_zmq_sms.prototype.bind=function(){logger.log("DEB",0,"zmq_sms","host: "+cfg.zmq_sms.ip),logger.log("DEB",0,"zmq_sms","user: "+cfg.zmq_sms.port),logger.log("DEB",0,"zmq_sms","db: "+cfg.zmq_sms.protocol),gSocksms.connect(cfg.zmq_sms.protocol+"://"+cfg.zmq_sms.ip+":"+cfg.zmq_sms.port)},pbx_zmq_sms.prototype.sendZmqMsg=function(s,g,e,o,m,l,r,_,t,n,i,q,c,z,p,u,a,d,D,B,E){logger.log("DEB",s,"zmq_sms","Inside notifyAutodialer"),logger.log("DEB",s,"zmq_sms","event_name("+g+")"),logger.log("DEB",s,"zmq_sms","crm_partner("+e+")"),logger.log("DEB",s,"zmq_sms","sme_id("+o+")"),logger.log("DEB",s,"zmq_sms","account_sid("+m+")"),logger.log("DEB",s,"zmq_sms","session_id("+l+")"),logger.log("DEB",s,"zmq_sms","recording_file_id("+r+")"),logger.log("DEB",s,"zmq_sms","recording_file_url("+_+")"),logger.log("DEB",s,"zmq_sms","agent_no("+t+")"),logger.log("DEB",s,"zmq_sms","customer_no("+n+")"),logger.log("DEB",s,"zmq_sms","longcode("+i+")"),logger.log("DEB",s,"zmq_sms","start_datetime("+q+")"),logger.log("DEB",s,"zmq_sms","end_datetime("+c+")"),logger.log("DEB",s,"zmq_sms","call_type("+z+")"),logger.log("DEB",s,"zmq_sms","call_mode("+p+")"),logger.log("DEB",s,"zmq_sms","call_status("+u+")"),logger.log("DEB",s,"zmq_sms","call_duration("+a+")"),logger.log("DEB",s,"zmq_sms","custom_dtmf("+d+")"),logger.log("DEB",s,"zmq_sms","optional_field("+D+")"),logger.log("DEB",s,"zmq_sms","response_msg("+B+")"),logger.log("DEB",s,"zmq_sms","msgType("+E+")");e={event:""+g,crmPartner:""+e,smeId:""+o,accountSid:""+m,sessionId:""+l,recordingFileId:""+r,recordingFileUrl:""+_,agentNo:""+t,customerNo:""+n,longcode:""+i,startDateTime:""+q,endDateTime:""+c,callType:""+z,callMode:""+p,callStatus:""+u,callDuration:""+a,customDtmf:""+d,optionalField:""+D,responseMsg:"",msgType:""+E},e.responseMsg=B,o=JSON.stringify(e);gSocksms.send([""+g,o]),logger.log("DEB",s,"zmq_sms","sent zmq message successfully ZMQ ({"+g+"})")};