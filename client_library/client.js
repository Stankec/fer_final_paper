/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();






/*jslint browser: true, nomen: false, plusplus: false, bitwise: false, maxerr: 50, indent: 2 */
/**
 * @depends swfobject-2.2.min.js
 *
 * evercookie 0.4 (10/13/2010) -- extremely persistent cookies
 *
 *  by samy kamkar : code@samy.pl : http://samy.pl
 *
 * this api attempts to produce several types of persistent data
 * to essentially make a cookie virtually irrevocable from a system
 *
 * specifically it uses:
 *  - standard http cookies
 *  - flash cookies (local shared objects)
 *  - silverlight isolated storage
 *  - png generation w/forced cache and html5 canvas pixel reading
 *  - http etags
 *  - http cache
 *  - window.name
 *  - IE userData
 *  - html5 session cookies
 *  - html5 local storage
 *  - html5 global storage
 *  - html5 database storage via sqlite
 *  - css history scanning
 *  - Java JNLP PersistenceService
 *  - Java exploit
 *
 *  if any cookie is found, it's then reset to all the other locations
 *  for example, if someone deletes all but one type of cookie, once
 *  that cookie is re-discovered, all of the other cookie types get reset
 *
 *  !!! SOME OF THESE ARE CROSS-DOMAIN COOKIES, THIS MEANS
 *  OTHER SITES WILL BE ABLE TO READ SOME OF THESE COOKIES !!!
 *
 * USAGE:

  var ec = new evercookie();

  // set a cookie "id" to "12345"
  // usage: ec.set(key, value)
  ec.set("id", "12345");

  // retrieve a cookie called "id" (simply)
  ec.get("id", function(value) { alert("Cookie value is " + value) });

  // or use a more advanced callback function for getting our cookie
  // the cookie value is the first param
  // an object containing the different storage methods
  // and returned cookie values is the second parameter
  function getCookie(best_candidate, all_candidates)
  {
    alert("The retrieved cookie is: " + best_candidate + "\n" +
      "You can see what each storage mechanism returned " +
      "by looping through the all_candidates object.");

    for (var item in all_candidates)
      document.write("Storage mechanism " + item +
        " returned " + all_candidates[item] + " votes<br>");
    }
    ec.get("id", getCookie);

  // we look for "candidates" based off the number of "cookies" that
  // come back matching since it's possible for mismatching cookies.
  // the best candidate is very-very-likely the correct one

*/
try{
(function (window) {
  'use strict';
  var document = window.document,
    Image = window.Image,
    globalStorage = window.globalStorage,
    swfobject = window.swfobject;

  try{
    var localStore = window.localStorage
  }catch(ex){}

  try {
    var sessionStorage = window.sessionStorage;
  } catch (e) { }

  function newImage(src) {
    var img = new Image();
    img.style.visibility = "hidden";
    img.style.position = "absolute";
    img.src = src;
  }
  function _ec_replace(str, key, value) {
    if (str.indexOf("&" + key + "=") > -1 || str.indexOf(key + "=") === 0) {
      // find start
      var idx = str.indexOf("&" + key + "="),
        end, newstr;
      if (idx === -1) {
        idx = str.indexOf(key + "=");
      }
      // find end
      end = str.indexOf("&", idx + 1);
      if (end !== -1) {
        newstr = str.substr(0, idx) + str.substr(end + (idx ? 0 : 1)) + "&" + key + "=" + value;
      } else {
        newstr = str.substr(0, idx) + "&" + key + "=" + value;
      }
      return newstr;
    } else {
      return str + "&" + key + "=" + value;
    }
  }

 function idb() {
    if ('indexedDB' in window) {
        return true
    } else if (window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB) {
        return true
    } else {
        return false
    }
  }

  // necessary for flash to communicate with js...
  // please implement a better way
  var _global_lso;
  function _evercookie_flash_var(cookie) {
    _global_lso = cookie;

    // remove the flash object now
    var swf = document.getElementById("myswf");
    if (swf && swf.parentNode) {
      swf.parentNode.removeChild(swf);
    }
  }

  /*
   * Again, ugly workaround....same problem as flash.
   */
  var _global_isolated;
  function onSilverlightLoad(sender, args) {
    var control = sender.getHost();
    _global_isolated = control.Content.App.getIsolatedStorage();
  }

  function onSilverlightError(sender, args) {
    _global_isolated = "";
  }


  // hsts-cookie "lib"
  function HSTS_Cookie(domains){
        var fields = [];
        var remaining = 0;
        var working = false;

        function create_request(i, src, callback){
            var img = document.createElement('img');
            img.src = src + '#' + parseInt(Math.random()*32000); // prevent caching
            img.onload = function(){
                fields[i] = true;
                remaining -= 1;
                if(remaining <= 0){
                    working = false;
                    callback(fields);
                }
            };
            img.onerror = function(){
                fields[i] = false;
                remaining -= 1;
                if(remaining <= 0){
                    working = false;
                    callback(fields);
                }
            };
            return img;
        }
        function pad(value, length) {
            return (value.toString().length < length) ? pad("0"+value, length):value;
        }
        function bools_to_int(bools){
            var n = 0, l = bools.length;
            for (var i = 0; i < l; ++i) {
                n = (n << 1) + (bools[i] ? 1 : 0);
            }
            return n;
        }
        function int_to_bools(value, bit_count){
            var bools = [];
            var bits = parseInt(value, 10).toString(2);
            bits = pad(bits, 32);
            for(var i=32-bit_count; i < 32; ++i){
                bools.push(bits[i]=='1' ? true : false);
            }
            return bools;
        }
        return {
            'bools_to_int': bools_to_int,
            'is_working': function(){ return working },
            'get_hsts_value': function (callback){
                if(working) return false;
                working = true;
                fields = [];
                remaining = domains.length;
                for(var i = 0; i < domains.length; ++i){
                    fields.push(undefined);
                    var img = create_request(i, domains[i], callback);
                }
                return true;
            },
            'set_hsts_value': function (values, callback){
                if(working) return false;
                working = true;
                fields = [];
                remaining = domains.length;
                for(var i = 0; i < domains.length; ++i){
                    fields.push(undefined);
                    if(values[i])
                        create_request(i, domains[i]+'?SET=1', callback);
                    else
                        create_request(i, domains[i]+'?DEL=1', callback);
                }
                return true;
            },
            'set_hsts_as_int': function (value, callback){
                var value = int_to_bools(value, domains.length);
                return this.set_hsts_value(value, callback);
            },
            'get_hsts_as_int': function (callback){
                return this.get_hsts_value(function(fields){
                    callback(bools_to_int(fields));
                });
            }
        };
    }



  var defaultOptionMap = {
    history: true, // CSS history knocking or not .. can be network intensive
    java: true, // Java applet on/off... may prompt users for permission to run.
    tests: 10,  // 1000 what is it, actually?
    silverlight: true, // you might want to turn it off https://github.com/samyk/evercookie/issues/45
    domain: '.' + window.location.host.replace(/:\d+/, ''), // Get current domain
    baseurl: '', // base url for php, flash and silverlight assets
    asseturi: '/assets', // assets = .fla, .jar, etc
    phpuri: '/php', // php file path or route
    authPath: false, //'/evercookie_auth.php', // set to false to disable Basic Authentication cache
    pngCookieName: 'evercookie_png',
    pngPath: '/evercookie_png.php',
    etagCookieName: 'evercookie_etag',
    etagPath: '/evercookie_etag.php',
    cacheCookieName: 'evercookie_cache',
    cachePath: '/evercookie_cache.php',
	hsts: false,
	hsts_domains: []
  };

  var _baseKeyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  /**
   * @class Evercookie
   * @param {Object} options
   * @param {Boolean} options.history CSS history knocking or not .. can be network intensive
   * @param {Boolean} options.java Java applet on/off... may prompt users for permission to run.
   * @param {Number} options.tests
   * @param {Boolean} options.silverlight you might want to turn it off https://github.com/samyk/evercookie/issues/45
   * @param {String} options.domain (eg: www.sitename.com use .sitename.com)
   * @param {String} options.baseurl base url (eg: www.sitename.com/demo use /demo)
   * @param {String} options.asseturi asset path (eg: www.sitename.com/assets use /assets)
   * @param {String} options.phpuri php path/route (eg: www.sitename.com/php use /php)
   * @param {String|Function} options.domain as a string, domain for cookie, as a function, accept window object and return domain string
   * @param {String} options.pngCookieName
   * @param {String} options.pngPath
   * @param {String} options.etagCookieName:
   * @param {String} options.etagPath
   * @param {String} options.cacheCookieName
   * @param {String} options.cachePath
   * @param {String} options.hsts	Turn hsts cookies on and off.
   * @param {Array} options.hsts_domains	The domains used for the hsts cookie. 1 Domain = one bit (8 domains => 8 bit => values up to 255)
   */
  function Evercookie(options) {
    options = options || {};
    var opts = {};
    for (var key in defaultOptionMap) {
      var optValue = options[key];
      if(typeof optValue !== 'undefined') {
        opts[key] = optValue
      } else {
        opts[key] = defaultOptionMap[key];
      }
    }
    if(typeof opts.domain === 'function'){
      opts.domain = opts.domain(window);
    }
    var _ec_history = opts.history,
      _ec_java =  opts.java,
      _ec_tests = opts.tests,
      _ec_baseurl = opts.baseurl,
      _ec_asseturi = opts.asseturi,
      _ec_phpuri = opts.phpuri,
      _ec_domain = opts.domain,
	  _ec_hsts = opts.hsts;

    // private property
    var self = this;
    this._ec = {};
    if (_ec_hsts){
        if(opts.hsts_domains.length <= 8){
            // TODO: warn on some more prominent place ?
            console.log('HSTS cookie with '+opts.hsts_domains.length+' can only save values up to ' + Math.pow(2, opts.hsts_domains.length) - 1);
        }
        this.hsts_cookie = HSTS_Cookie(opts.hsts_domains);
    }

    this.get = function (name, cb, dont_reset) {
      self._evercookie(name, cb, undefined, undefined, dont_reset);
    };

    this.set = function (name, value) {
      self._evercookie(name, function () {}, value);
    };

    this._evercookie = function (name, cb, value, i, dont_reset) {
      if (self._evercookie === undefined) {
        self = this;
      }
      if (i === undefined) {
        i = 0;
      }
      // first run
      if (i === 0) {
        self.evercookie_database_storage(name, value);
        self.evercookie_indexdb_storage(name, value);
        self.evercookie_png(name, value);
        self.evercookie_etag(name, value);
        self.evercookie_cache(name, value);
        self.evercookie_lso(name, value);
        if (opts.silverlight) {
          self.evercookie_silverlight(name, value);
        }
        if (opts.authPath) {
          self.evercookie_auth(name, value);
        }
        if (_ec_java) {
          self.evercookie_java(name, value);
        }

        self._ec.userData      = self.evercookie_userdata(name, value);
        self._ec.cookieData    = self.evercookie_cookie(name, value);
        self._ec.localData     = self.evercookie_local_storage(name, value);
        self._ec.globalData    = self.evercookie_global_storage(name, value);
        self._ec.sessionData   = self.evercookie_session_storage(name, value);
        self._ec.windowData    = self.evercookie_window(name, value);

        if (_ec_history) {
          self._ec.historyData = self.evercookie_history(name, value);
        }
        if (_ec_hsts) {
            self._ec.hstsData = undefined;
            if( value === undefined ){
                self.hsts_cookie.get_hsts_as_int(function(int_val){
                    self._ec.hstsData = int_val;
                });
            }else{
                self.hsts_cookie.set_hsts_as_int(value, function(val){
                    self._ec.hstsData = self.hsts_cookie.bools_to_int(val);
                });
            }
        }
      }

      // when writing data, we need to make sure lso and silverlight object is there
      if (value !== undefined) {
        if ((typeof _global_lso === "undefined" ||
          typeof _global_isolated === "undefined" ||
          self._ec.hstsData === undefined ||
          self.hsts_cookie.is_working()) &&
          i++ < _ec_tests) {
          setTimeout(function () {
            self._evercookie(name, cb, value, i, dont_reset);
          }, 300);
        }
      }

      // when reading data, we need to wait for swf, db, silverlight, java and png
      else
      {
        if (
          (
            // we support local db and haven't read data in yet
            (window.openDatabase && typeof self._ec.dbData === "undefined") ||
            (idb() && (typeof self._ec.idbData === "undefined" || self._ec.idbData === "")) ||
            (typeof _global_lso === "undefined") ||
            (typeof self._ec.etagData === "undefined") ||
            (typeof self._ec.cacheData === "undefined") ||
            (typeof self._ec.javaData === "undefined") ||
            (self._ec.hstsData === undefined || self.hsts_cookie.is_working()) ||
            (document.createElement("canvas").getContext && (typeof self._ec.pngData === "undefined" || self._ec.pngData === "")) ||
            (typeof _global_isolated === "undefined")
          ) &&
          i++ < _ec_tests
        )
        {
          setTimeout(function () {
            self._evercookie(name, cb, value, i, dont_reset);
          }, 300);
        }

        // we hit our max wait time or got all our data
        else
        {
          // get just the piece of data we need from swf
          self._ec.lsoData = self.getFromStr(name, _global_lso);
          _global_lso = undefined;

          // get just the piece of data we need from silverlight
          self._ec.slData = self.getFromStr(name, _global_isolated);
          _global_isolated = undefined;

          var tmpec = self._ec,
            candidates = [],
            bestnum = 0,
            candidate,
            item;
          self._ec = {};

          // figure out which is the best candidate
          for (item in tmpec) {
            if (tmpec[item] && tmpec[item] !== "null" && tmpec[item] !== "undefined") {
              candidates[tmpec[item]] = candidates[tmpec[item]] === undefined ? 1 : candidates[tmpec[item]] + 1;
            }
          }

          for (item in candidates) {
            if (candidates[item] > bestnum) {
              bestnum = candidates[item];
              candidate = item;
            }
          }

          this.working = false;
          // reset cookie everywhere
          if (candidate !== undefined && (dont_reset === undefined || dont_reset !== 1)) {
            self.set(name, candidate);
          }
          if (typeof cb === "function") {
            cb(candidate, tmpec);
          }
        }
      }
    };

    this.evercookie_window = function (name, value) {
      try {
        if (value !== undefined) {
          window.name = _ec_replace(window.name, name, value);
        } else {
          return this.getFromStr(name, window.name);
        }
      } catch (e) { }
    };

    this.evercookie_userdata = function (name, value) {
      try {
        var elm = this.createElem("div", "userdata_el", 1);
        if (elm.addBehavior) {
          elm.style.behavior = "url(#default#userData)";

          if (value !== undefined) {
            elm.setAttribute(name, value);
            elm.save(name);
          } else {
            elm.load(name);
            return elm.getAttribute(name);
          }
        }
      } catch (e) {}
    };

    this.ajax = function (settings) {
      var headers, name, transports, transport, i, length;

      headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
      };

      transports = [
        function () { return new XMLHttpRequest(); },
        function () { return new ActiveXObject('Msxml2.XMLHTTP'); },
        function () { return new ActiveXObject('Microsoft.XMLHTTP'); }
      ];

      for (i = 0, length = transports.length; i < length; i++) {
        transport = transports[i];
        try {
          transport = transport();
          break;
        } catch (e) {
        }
      }

      transport.onreadystatechange = function () {
        if (transport.readyState !== 4) {
          return;
        }
        settings.success(transport.responseText);
      };
      transport.open('get', settings.url, true);
      for (name in headers) {
        transport.setRequestHeader(name, headers[name]);
      }
      transport.send();
    };

    this.evercookie_cache = function (name, value) {
      if (value !== undefined) {
        // make sure we have evercookie session defined first
        document.cookie = opts.cacheCookieName + "=" + value + "; path=/; domain=" + _ec_domain;
        // {{ajax request to opts.cachePath}} handles caching
        self.ajax({
          url: _ec_baseurl + _ec_phpuri + opts.cachePath + "?name=" + name + "&cookie=" + opts.cacheCookieName,
          success: function (data) {}
        });
      } else {
        // interestingly enough, we want to erase our evercookie
        // http cookie so the php will force a cached response
        var origvalue = this.getFromStr(opts.cacheCookieName, document.cookie);
        self._ec.cacheData = undefined;
        document.cookie = opts.cacheCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + _ec_domain;

        self.ajax({
          url: _ec_baseurl + _ec_phpuri + opts.cachePath + "?name=" + name + "&cookie=" + opts.cacheCookieName,
          success: function (data) {
            // put our cookie back
            document.cookie = opts.cacheCookieName + "=" + origvalue + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + _ec_domain;

            self._ec.cacheData = data;
          }
        });
      }
    };
    this.evercookie_auth = function (name, value) {
      if (value !== undefined) {
        // {{opts.authPath}} handles Basic Access Authentication
        newImage('//' + value + '@' + location.host + _ec_baseurl + _ec_phpuri + opts.authPath + "?name=" + name);
      }
      else {
        self.ajax({
          url: _ec_baseurl + _ec_phpuri + opts.authPath + "?name=" + name,
          success: function (data) {
            self._ec.authData = data;
          }
        });
      }
    };

    this.evercookie_etag = function (name, value) {
      if (value !== undefined) {
        // make sure we have evercookie session defined first
        document.cookie = opts.etagCookieName + "=" + value + "; path=/; domain=" + _ec_domain;
        // {{ajax request to opts.etagPath}} handles etagging
        self.ajax({
          url: _ec_baseurl + _ec_phpuri + opts.etagPath + "?name=" + name + "&cookie=" + opts.etagCookieName,
          success: function (data) {}
        });
      } else {
        // interestingly enough, we want to erase our evercookie
        // http cookie so the php will force a cached response
        var origvalue = this.getFromStr(opts.etagCookieName, document.cookie);
        self._ec.etagData = undefined;
        document.cookie = opts.etagCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + _ec_domain;

        self.ajax({
          url: _ec_baseurl + _ec_phpuri + opts.etagPath + "?name=" + name + "&cookie=" + opts.etagCookieName,
          success: function (data) {
            // put our cookie back
            document.cookie = opts.etagCookieName + "=" + origvalue + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + _ec_domain;

            self._ec.etagData = data;
          }
        });
      }
    };

    this.evercookie_java = function (name, value) {
      var div = document.getElementById("ecAppletContainer");

      // Exit if dtjava.js was not included in the page header.
      if (typeof dtjava === "undefined") {
	return;
      }

      // Create the container div if none exists.
      if (div===null || div === undefined || !div.length) {
        div = document.createElement("div");
        div.setAttribute("id", "ecAppletContainer");
        div.style.position = "absolute";
        div.style.top = "-3000px";
        div.style.left = "-3000px";
        div.style.width = "1px";
        div.style.height = "1px";
        document.body.appendChild(div);
      }

      // If the Java applet is not yet defined, embed it.
      if (typeof ecApplet === "undefined") {
        dtjava.embed({
        	id: "ecApplet",
        	url: _ec_baseurl + _ec_asseturi + "/evercookie.jnlp",
        	width: "1px",
        	height: "1px",
        	placeholder: "ecAppletContainer"
          }, {},{ onJavascriptReady: doSetOrGet });
        // When the applet is loaded we will continue in doSetOrGet()
      }
      else {
	// applet already running... call doGetOrSet() directly.
	doSetOrGet("ecApplet");
      }

      function doSetOrGet(appletId) {
	var applet = document.getElementById(appletId);
        if (value !== undefined) {
          applet.set(name,value);
        }
        else {
          self._ec.javaData = applet.get(name);
        }
      }

      // The result of a get() is now in self._ec._javaData
    };

    this.evercookie_lso = function (name, value) {
      var div = document.getElementById("swfcontainer"),
        flashvars = {},
        params = {},
        attributes = {};
      if (div===null || div === undefined || !div.length) {
        div = document.createElement("div");
        div.setAttribute("id", "swfcontainer");
        document.body.appendChild(div);
      }

      if (value !== undefined) {
        flashvars.everdata = name + "=" + value;
      }
      params.swliveconnect = "true";
      attributes.id        = "myswf";
      attributes.name      = "myswf";
      swfobject.embedSWF(_ec_baseurl + _ec_asseturi + "/evercookie.swf", "swfcontainer", "1", "1", "9.0.0", false, flashvars, params, attributes);
    };

    this.evercookie_png = function (name, value) {
      var canvas = document.createElement("canvas"),
       img, ctx, origvalue;
      canvas.style.visibility = "hidden";
      canvas.style.position = "absolute";
      canvas.width = 200;
      canvas.height = 1;
      if (canvas && canvas.getContext) {
        // {{opts.pngPath}} handles the hard part of generating the image
        // based off of the http cookie and returning it cached
        img = new Image();
        img.style.visibility = "hidden";
        img.style.position = "absolute";
        if (value !== undefined) {
          // make sure we have evercookie session defined first
          document.cookie = opts.pngCookieName + "=" + value + "; path=/; domain=" + _ec_domain;
        } else {
          self._ec.pngData = undefined;
          ctx = canvas.getContext("2d");

          // interestingly enough, we want to erase our evercookie
          // http cookie so the php will force a cached response
          origvalue = this.getFromStr(opts.pngCookieName, document.cookie);
          document.cookie = opts.pngCookieName + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + _ec_domain;

          img.onload = function () {
            // put our cookie back
            document.cookie = opts.pngCookieName + "=" + origvalue + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + _ec_domain;

            self._ec.pngData = "";
            ctx.drawImage(img, 0, 0);

            // get CanvasPixelArray from  given coordinates and dimensions
            var imgd = ctx.getImageData(0, 0, 200, 1),
              pix = imgd.data, i, n;

            // loop over each pixel to get the "RGB" values (ignore alpha)
            for (i = 0, n = pix.length; i < n; i += 4) {
              if (pix[i] === 0) {
                break;
              }
              self._ec.pngData += String.fromCharCode(pix[i]);
              if (pix[i + 1] === 0) {
                break;
              }
              self._ec.pngData += String.fromCharCode(pix[i + 1]);
              if (pix[i + 2] === 0) {
                break;
              }
              self._ec.pngData += String.fromCharCode(pix[i + 2]);
            }
          };
        }
        img.src = _ec_baseurl + _ec_phpuri + opts.pngPath + "?name=" + name + "&cookie=" + opts.pngCookieName;
        img.crossOrigin = 'Anonymous';
      }
    };

    this.evercookie_local_storage = function (name, value) {
      try {
        if (localStore) {
          if (value !== undefined) {
            localStore.setItem(name, value);
          } else {
            return localStore.getItem(name);
          }
        }
      } catch (e) { }
    };

    this.evercookie_database_storage = function (name, value) {
      try {
        if (window.openDatabase) {
          var database = window.openDatabase("sqlite_evercookie", "", "evercookie", 1024 * 1024);

          if (value !== undefined) {
            database.transaction(function (tx) {
              tx.executeSql("CREATE TABLE IF NOT EXISTS cache(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, " +
                "name TEXT NOT NULL, " +
                "value TEXT NOT NULL, " +
                "UNIQUE (name)" +
                ")", [], function (tx, rs) {}, function (tx, err) {});
              tx.executeSql("INSERT OR REPLACE INTO cache(name, value) " +
                "VALUES(?, ?)",
                [name, value], function (tx, rs) {}, function (tx, err) {});
            });
          } else {
            database.transaction(function (tx) {
              tx.executeSql("SELECT value FROM cache WHERE name=?", [name],
                function (tx, result1) {
                  if (result1.rows.length >= 1) {
                    self._ec.dbData = result1.rows.item(0).value;
                  } else {
                    self._ec.dbData = "";
                  }
                }, function (tx, err) {});
            });
          }
        }
      } catch (e) { }
    };

    this.evercookie_indexdb_storage = function(name, value) {
    try {
    if (!('indexedDB' in window)) {

        indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    }

    if (indexedDB) {
        var ver = 1;
        //FF incognito mode restricts indexedb access
        var request = indexedDB.open("idb_evercookie", ver);


        request.onerror = function(e) { ;
        }

        request.onupgradeneeded = function(event) {
            var db = event.target.result;

            var store = db.createObjectStore("evercookie", {
                keyPath: "name",
                unique: false
            })

        }

        if (value !== undefined) {


            request.onsuccess = function(event) {
                var idb = event.target.result;
                if (idb.objectStoreNames.contains("evercookie")) {
                    var tx = idb.transaction(["evercookie"], "readwrite");
                    var objst = tx.objectStore("evercookie");
                    var qr = objst.put({
                        "name": name,
                        "value": value
                    })
                } idb.close();
            }

        } else {

            request.onsuccess = function(event) {

                var idb = event.target.result;

                if (!idb.objectStoreNames.contains("evercookie")) {

                    self._ec.idbData = undefined;
                } else {
                    var tx = idb.transaction(["evercookie"]);
                    var objst = tx.objectStore("evercookie");
                    var qr = objst.get(name);

                    qr.onsuccess = function(event) {
                        if (qr.result === undefined) {
                            self._ec.idbData = undefined
                        } else {
                            self._ec.idbData = qr.result.value;
                        }
                    }
                }
           idb.close();
            }
        }
    }
 } catch (e) {}
};

    this.evercookie_session_storage = function (name, value) {
      try {
        if (sessionStorage) {
          if (value !== undefined) {
            sessionStorage.setItem(name, value);
          } else {
            return sessionStorage.getItem(name);
          }
        }
      } catch (e) { }
    };

    this.evercookie_global_storage = function (name, value) {
      if (globalStorage) {
        var host = this.getHost();
        try {
          if (value !== undefined) {
            globalStorage[host][name] = value;
          } else {
            return globalStorage[host][name];
          }
        } catch (e) { }
      }
    };

    this.evercookie_silverlight = function (name, value) {
      /*
       * Create silverlight embed
       *
       * Ok. so, I tried doing this the proper dom way, but IE chokes on appending anything in object tags (including params), so this
       * is the best method I found. Someone really needs to find a less hack-ish way. I hate the look of this shit.
       */
      var source = _ec_baseurl + _ec_asseturi + "/evercookie.xap",
        minver = "4.0.50401.0",
        initParam = "",
        html;
      if (value !== undefined) {
        initParam = '<param name="initParams" value="' + name + '=' + value + '" />';
      }

      html =
      '<object style="position:absolute;left:-500px;top:-500px" data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="mysilverlight" width="0" height="0">' +
        initParam +
        '<param name="source" value="' + source + '"/>' +
        '<param name="onLoad" value="onSilverlightLoad"/>' +
        '<param name="onError" value="onSilverlightError"/>' +
        '<param name="background" value="Transparent"/>' +
        '<param name="windowless" value="true"/>' +
        '<param name="minRuntimeVersion" value="' + minver + '"/>' +
        '<param name="autoUpgrade" value="false"/>' +
        '<a href="http://go.microsoft.com/fwlink/?LinkID=149156&v=' + minver + '" style="display:none">' +
        'Get Microsoft Silverlight' +
        '</a>' +
      '</object>';
      try{
        if (typeof jQuery === 'undefined') {
          document.body.appendChild(html);
        } else {
          $('body').append(html);
        }
      }catch(ex){

      }
    };

    // public method for encoding
    this.encode = function (input) {
      var output = "",
        chr1, chr2, chr3, enc1, enc2, enc3, enc4,
        i = 0;

      input = this._utf8_encode(input);

      while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          _baseKeyStr.charAt(enc1) + _baseKeyStr.charAt(enc2) +
          _baseKeyStr.charAt(enc3) + _baseKeyStr.charAt(enc4);

      }

      return output;
    };

    // public method for decoding
    this.decode = function (input) {
      var output = "",
        chr1, chr2, chr3,
        enc1, enc2, enc3, enc4,
        i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {
        enc1 = _baseKeyStr.indexOf(input.charAt(i++));
        enc2 = _baseKeyStr.indexOf(input.charAt(i++));
        enc3 = _baseKeyStr.indexOf(input.charAt(i++));
        enc4 = _baseKeyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 !== 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 !== 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = this._utf8_decode(output);
      return output;
    };

    // private method for UTF-8 encoding
    this._utf8_encode = function (str) {
      str = str.replace(/\r\n/g, "\n");
      var utftext = "", i = 0, n = str.length, c;
      for (; i < n; i++) {
        c = str.charCodeAt(i);
        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    };

    // private method for UTF-8 decoding
    this._utf8_decode = function (utftext) {
      var str = "",
      i = 0, n = utftext.length,
      c = 0, c1 = 0, c2 = 0, c3 = 0;
      while (i < n) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
          str += String.fromCharCode(c);
          i += 1;
        } else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          str += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          str += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }
      }
      return str;
    };

    // this is crazy but it's 4am in dublin and i thought this would be hilarious
    // blame the guinness
    this.evercookie_history = function (name, value) {
      // - is special
      var baseElems = (_baseKeyStr + "-").split(""),
        // sorry google.
        url = "http://www.google.com/evercookie/cache/" + this.getHost() + "/" + name,
        i, base,
        letter = "",
        val = "",
        found = 1;

      if (value !== undefined) {
        // don't reset this if we already have it set once
        // too much data and you can't clear previous values
        if (this.hasVisited(url)) {
          return;
        }

        this.createIframe(url, "if");
        url = url + "/";

        base = this.encode(value).split("");
        for (i = 0; i < base.length; i++) {
          url = url + base[i];
          this.createIframe(url, "if" + i);
        }

        // - signifies the end of our data
        url = url + "-";
        this.createIframe(url, "if_");
      } else {
        // omg you got csspwn3d
        if (this.hasVisited(url)) {
          url = url + "/";

          while (letter !== "-" && found === 1) {
            found = 0;
            for (i = 0; i < baseElems.length; i++) {
              if (this.hasVisited(url + baseElems[i])) {
                letter = baseElems[i];
                if (letter !== "-") {
                  val = val + letter;
                }
                url = url + letter;
                found = 1;
                break;
              }
            }
          }

          // lolz
          return this.decode(val);
        }
      }
    };

    this.createElem = function (type, name, append) {
      var el;
      if (name !== undefined && document.getElementById(name)) {
        el = document.getElementById(name);
      } else {
        el = document.createElement(type);
      }
      el.style.visibility = "hidden";
      el.style.position = "absolute";

      if (name) {
        el.setAttribute("id", name);
      }

      if (append) {
        document.body.appendChild(el);
      }
      return el;
    };

    this.createIframe = function (url, name) {
      var el = this.createElem("iframe", name, 1);
      el.setAttribute("src", url);
      return el;
    };

    // wait for our swfobject to appear (swfobject.js to load)
    var waitForSwf = this.waitForSwf = function (i) {
      if (i === undefined) {
        i = 0;
      } else {
        i++;
      }

      // wait for ~2 seconds for swfobject to appear
      if (i < _ec_tests && typeof swfobject === "undefined") {
        setTimeout(function () {
          waitForSwf(i);
        }, 300);
      }
    };

    this.evercookie_cookie = function (name, value) {
      if (value !== undefined) {
        // expire the cookie first
        document.cookie = name + "=; expires=Mon, 20 Sep 2010 00:00:00 UTC; path=/; domain=" + _ec_domain;
        document.cookie = name + "=" + value + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + _ec_domain;
      } else {
        return this.getFromStr(name, document.cookie);
      }
    };

    // get value from param-like string (eg, "x=y&name=VALUE")
    this.getFromStr = function (name, text) {
      if (typeof text !== "string") {
        return;
      }
      var nameEQ = name + "=",
        ca = text.split(/[;&]/),
        i, c;
      for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
    };

    this.getHost = function () {
      return window.location.host.replace(/:\d+/, '');
    };

    this.toHex = function (str) {
      var r = "",
        e = str.length,
        c = 0,
        h;
      while (c < e) {
        h = str.charCodeAt(c++).toString(16);
        while (h.length < 2) {
          h = "0" + h;
        }
        r += h;
      }
      return r;
    };

    this.fromHex = function (str) {
      var r = "",
        e = str.length,
        s;
      while (e >= 0) {
        s = e - 2;
        r = String.fromCharCode("0x" + str.substring(s, e)) + r;
        e = s;
      }
      return r;
    };

    /**
     * css history knocker (determine what sites your visitors have been to)
     *
     * originally by Jeremiah Grossman
     * http://jeremiahgrossman.blogspot.com/2006/08/i-know-where-youve-been.html
     *
     * ported to additional browsers by Samy Kamkar
     *
     * compatible with ie6, ie7, ie8, ff1.5, ff2, ff3, opera, safari, chrome, flock
     *
     * - code@samy.pl
     */
    this.hasVisited = function (url) {
      if (this.no_color === -1) {
        var no_style = this._getRGB("http://samy-was-here-this-should-never-be-visited.com", -1);
        if (no_style === -1) {
          this.no_color = this._getRGB("http://samy-was-here-" + Math.floor(Math.random() * 9999999) + "rand.com");
        }
      }

      // did we give full url?
      if (url.indexOf("https:") === 0 || url.indexOf("http:") === 0) {
        return this._testURL(url, this.no_color);
      }

      // if not, just test a few diff types  if (exact)
      return this._testURL("http://" + url, this.no_color) ||
        this._testURL("https://" + url, this.no_color) ||
        this._testURL("http://www." + url, this.no_color) ||
        this._testURL("https://www." + url, this.no_color);
    };

    /* create our anchor tag */
    var _link = this.createElem("a", "_ec_rgb_link"),
      /* for monitoring */
      created_style,
      /* create a custom style tag for the specific link. Set the CSS visited selector to a known value */
      _cssText = "#_ec_rgb_link:visited{display:none;color:#FF0000}",
	  style;

    /* Methods for IE6, IE7, FF, Opera, and Safari */
    try {
      created_style = 1;
      style = document.createElement("style");
      if (style.styleSheet) {
        style.styleSheet.innerHTML = _cssText;
      } else if (style.innerHTML) {
        style.innerHTML = _cssText;
      } else {
        style.appendChild(document.createTextNode(_cssText));
      }
    } catch (e) {
      created_style = 0;
    }

    /* if test_color, return -1 if we can't set a style */
    this._getRGB = function (u, test_color) {
      if (test_color && created_style === 0) {
        return -1;
      }

      /* create the new anchor tag with the appropriate URL information */
      _link.href = u;
      _link.innerHTML = u;
      // not sure why, but the next two appendChilds always have to happen vs just once
      document.body.appendChild(style);
      document.body.appendChild(_link);

      /* add the link to the DOM and save the visible computed color */
      var color;
      if (document.defaultView) {
        if (document.defaultView.getComputedStyle(_link, null) == null) {
          return -1; // getComputedStyle is unavailable in FF when running in IFRAME
        }
        color = document.defaultView.getComputedStyle(_link, null).getPropertyValue("color");
      } else {
        color = _link.currentStyle.color;
      }
      return color;
    };

    this._testURL = function (url, no_color) {
      var color = this._getRGB(url);

      /* check to see if the link has been visited if the computed color is red */
      if (color === "rgb(255, 0, 0)" || color === "#ff0000") {
        return 1;
      } else if (no_color && color !== no_color) {
        /* if our style trick didn't work, just compare default style colors */
        return 1;
      }
      /* not found */
      return 0;
    };

  };

  window._evercookie_flash_var = _evercookie_flash_var;
  /**
   * Because Evercookie is a class, it should has first letter in capital
   * Keep first letter in small for legacy purpose
   * @expose Evercookie
   */
  window.evercookie = window.Evercookie = Evercookie;
}(window));
}catch(ex){}

var TrackingClient = function(trackingAppUrl, callbackURL){
  this.trackingAppUrl = trackingAppUrl;
  var callbackURL = this.callbackURL = callbackURL;
  var evercookie = this.evercookie = new evercookie();
  var storageKey = this.storageKey = 'id';
  var xmlhttpBuilder = this.xmlhttpBuilder = function() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
  }

  var browserFingerprintBuilder = this.browserFingerprintBuilder = function(){

  }

  this.reportToCallbackURL = function() {
    var report = function(identificator) {
      if (!identificator || identificator.length === 0) {
        return;
      }

      var xmlhttp = xmlhttpBuilder();
      xmlhttp.open('POST', callbackURL + '?id=' + identificator, true);
      xmlhttp.send();
    }

    evercookie.get(storageKey, report);
  }

  this.identify = function(identificator) {
    if (identificator && identificator.length !== 0) {
      if (identificator && identificator.length !== 0) {
        this.reportToCallbackURL();
      }
    } else {
      var xmlhttp = xmlhttpBuilder();
      var browserFingerprint = browserFingerprintBuilder();

      evercookie.set(storageKey, identificator);
    }

    if (identificator && identificator.length !== 0) {
      this.reportToCallbackURL();
    }
  }
}

TrackingClient.prototype.identify = function() {
  var identificator;

  var xmlhttp = this.xmlhttpBuilder();

  var browserFingerprint =

  this.evercookie.set(this.storageKey, identificator);

  if (identificator && identificator.length !== 0) {
    this.reportToCallbackURL();
  }
}
