// Generated by dart2js, the Dart to JavaScript compiler.
$dart_deferred_initializers.current=function(S0) {
var A=S0.A
var B=S0.B
var C=S0.C
var D=S0.D
var E=S0.E
var F=S0.F
var G=S0.G
var H=S0.H
var J=S0.J
var K=S0.K
var L=S0.L
var M=S0.M
var N=S0.N
var O=S0.O
var P=S0.P
var Q=S0.Q
var R=S0.R
var S=S0.S
var T=S0.T
var U=S0.U
var V=S0.V
var W=S0.W
var X=S0.X
var Y=S0.Y
var Z=S0.Z
var init=S0.init
var I=S0.I
var $=I.p
$$=Object.create(null);(function(a){"use strict"
function map(b){b=Object.create(null)
b.x=0
delete b.x
return b}function processStatics(a3){for(var h in a3){if(!u.call(a3,h))continue
if(h==="^")continue
var g=a3[h]
var f=h.substring(0,1)
var e
if(f==="+"){v[e]=h.substring(1)
var d=a3[h]
if(d>0)a3[e].$reflectable=d
if(g&&g.length)init.typeInformation[e]=g}else if(f==="@"){h=h.substring(1)
$[h]["@"]=g}else if(f==="*"){n[e].$defaultValues=g
var c=a3.$methodsWithOptionalArguments
if(!c){a3.$methodsWithOptionalArguments=c={}}c[h]=e}else if(typeof g==="function"){n[e=h]=g
i.push(h)
init.globalFunctions[h]=g}else if(g.constructor===Array){addStubs(n,g,h,true,a3,i)}else{e=h
var b={}
var a0
for(var a1 in g){if(!u.call(g,a1))continue
f=a1.substring(0,1)
if(a1==="static"){processStatics(init.statics[h]=g[a1])}else if(f==="+"){w[a0]=a1.substring(1)
var d=g[a1]
if(d>0)g[a0].$reflectable=d}else if(f==="@"&&a1!=="@"){b[a1.substring(1)]["@"]=g[a1]}else if(f==="*"){b[a0].$defaultValues=g[a1]
var c=b.$methodsWithOptionalArguments
if(!c){b.$methodsWithOptionalArguments=c={}}c[a1]=a0}else{var a2=g[a1]
if(a1!=="^"&&a2!=null&&a2.constructor===Array&&a1!=="<>"){addStubs(b,a2,a1,false,g,[])}else{b[a0=a1]=a2}}}$$[h]=[n,b]
j.push(h)}}}function addStubs(b3,b4,b5,b6,b7,b8){var h,g=[b7[b5]=b3[b5]=h=b4[0]]
h.$stubName=b5
b8.push(b5)
for(var f=0;f<b4.length;f+=2){h=b4[f+1]
if(typeof h!="function")break
h.$stubName=b4[f+2]
g.push(h)
if(h.$stubName){b7[h.$stubName]=b3[h.$stubName]=h
b8.push(h.$stubName)}}for(var e=0;e<g.length;f++,e++){g[e].$callName=b4[f+1]}var d=b4[++f]
b4=b4.slice(++f)
var c=b4[0]
var b=c>>1
var a0=(c&1)===1
var a1=c===3
var a2=c===1
var a3=b4[1]
var a4=a3>>1
var a5=(a3&1)===1
var a6=b+a4!=g[0].length
var a7=b4[2]
var a8=2*a4+b+3
var a9=b4.length>a8
if(d){h=tearOff(g,b4,b6,b5,a6)
b3[b5].$getter=h
h.$getterStub=true
if(b6)init.globalFunctions[b5]=h
b7[d]=b3[d]=h
g.push(h)
if(d)b8.push(d)
h.$stubName=d
h.$callName=null
if(a6)init.interceptedNames[d]=true}if(a9){for(var e=0;e<g.length;e++){g[e].$reflectable=1
g[e].$reflectionInfo=b4}var b0=b6?init.mangledGlobalNames:init.mangledNames
var b1=b4[a8]
var b2=b1
if(d)b0[d]=b2
if(a1){b2+="="}else if(!a2){b2+=":"+b+":"+a4}b0[b5]=b2
g[0].$reflectionName=b2
g[0].$metadataIndex=a8+1
if(a4)b3[b1+"*"]=g[0]}}function tearOffGetterNoCsp(b,c,d,e){return e?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+d+z+++"(x) {"+"if (c === null) c = H.qm("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(b,c,d,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+d+z+++"() {"+"if (c === null) c = H.qm("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(b,c,d,H,null)}function tearOffGetterCsp(b,c,d,e){var h=null
return e?function(f){if(h===null)h=H.qm(this,b,c,false,[f],d)
return new h(this,b[0],f,d)}:function(){if(h===null)h=H.qm(this,b,c,false,[],d)
return new h(this,b[0],null,d)}}function tearOff(b,c,d,e,f){var h
return d?function(){if(h===void 0)h=H.qm(this,b,c,true,[],e).prototype
return h}:y(b,c,e,f)}var z=0
var y=typeof dart_precompiled=="function"?tearOffGetterCsp:tearOffGetterNoCsp
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
if(!init.interceptedNames)init.interceptedNames=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
for(var s=0;s<t;s++){var r=a[s]
var q=r[0]
var p=r[1]
var o=r[2]
var n=r[3]
var m=r[4]
var l=!!r[5]
var k=m&&m["^"]
if(k instanceof Array)k=k[0]
var j=[]
var i=[]
processStatics(m)
x.push([q,p,j,i,o,k,l,n])}})([["","",,Q,{
"^":"",
Hv:{
"^":"Pg;jH<,ng",
gut:function(){return"pt_PT"},
static:{Tu:[function(){return"Ol\u00e1 Mundo de Dart!"},"$0","nn",0,0,62]}}}],])
I.$finishClasses($$,$,I.p)
$=arguments[1]
C.ZB=new H.RM(1,{helloFromDart:Q.nn()},C.vi)
}
$dart_deferred_initializers["UPGxbpB6xN5nxH9qERnP3X+UL1M="]=$dart_deferred_initializers.current
