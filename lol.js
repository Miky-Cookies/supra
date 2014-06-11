var nom, anchonom, x, asunto, email, letra1, num, seg1 , seg2, y1, y2, y3, y4, y5, poci1, poci2, punto, tel, anchotel, g, smile;
function tremor(){
	nom=document.getElementById("txtNom").value;
	nom=nom.toUpperCase();
	document.getElementById("txtNom").value=nom;
	anchonom=nom.length;
	for(x=0;x<=anchonom-1;x++){
		num=nom.charAt(x);
		if(((num>='A')&&(num<='Z'))||(num==" ")){
		}
		else{
			alert("Caracteres incorrectos");
			break;
		}
	}
	}
	function skrillex(){
		asunto=document.getElementById("txtAsun").value;
		asunto=asunto.toUpperCase();
		document.getElementById("txtAsun").value=asunto;
	}
	function cookies(){
		tel=document.getElementById("txtTele").value;
		anchotel=tel.length;
		for(g=0;g<=anchotel-1;g++){
			smile=tel.charAt(g);
			if(((smile>='0')&&(smile<='9'))||((smile==" ")||(smile=='-'))){
			}
			else{
			alert("Caracteres incorrectos");
			break;
		}
			}
	}
	function mail(){
		email=document.getElementById("txtEmail").value;
		letra1=email.charAt(0);
		poci1=email.indexOf("@");
		poci2=email.lastIndexOf("@");
		punto=email.indexOf(".");
		if((((letra1>=0)||(letra1<=9))||((poci1!=poci2)||(punto==-1)))||(poci1==-1)){
			alert("El correo es incorrecto");
		}
		else{
		}
	}
	function dubstep() {
		seg1=document.getElementById("txtSeg").value;
		seg2=document.getElementById("txtSeg2").value;
		if(seg1==seg2){
		}
		else{
			alert("Los valores de seguridad no coinciden");
		}
	}
	function dvlm(){
	}
	function blasterjaxx(){
		y1=document.getElementById("txtNom").value;
		y2=document.getElementById("txtAsun").value;
		y3=document.getElementById("txtEmail").value;
		y4=document.getElementById("txtSeg2").value;
		y5=document.getElementById("txtTele").value;
		if((y1=="")||(y2=="")||(y3=="")||(y4=="")||(y5=="")){
			alert("Favor de introducir toda la informacion");
		}
		else{
			alert("Mensaje enviado");
			document.getElementById("txtNom").value="";
		    document.getElementById("txtAsun").value="";
		    document.getElementById("txtEmail").value="";
		    document.getElementById("txtSeg2").value="";
		    document.getElementById("txtTele").value="";
		}
	}