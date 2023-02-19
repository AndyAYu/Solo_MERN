import { Component } from "react";

class KommunicateChat extends Component {
componentDidMount(){
   (function(d, m){
       var kommunicateSettings =
           {"appId":"1d808f56361f9251b0fabae867867b6b4","popupWidget":true,"automaticChatOpenOnNavigation":true};
       var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
       s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
       var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
       window.kommunicate = m; m._globals = kommunicateSettings;
   })(document, window.kommunicate || {});
}
render(){
   return null;
}
}

export default KommunicateChat;