var girilen,secilen;
var eklenen,btnTamamla,btnSil,sonuc;

function listeyeEkle(){
    girilen=document.getElementById("txtAlinacaklar").value;
 

    if(girilen!=""){
        eklenen=document.createElement("li");
        document.getElementById("listeAlinacaklar").appendChild(eklenen);
        eklenen.innerHTML=girilen;

        btnTamamla=document.createElement("img");
        eklenen.appendChild(btnTamamla);
        btnTamamla.setAttribute("src","img/tık.png");
        btnTamamla.setAttribute("id","resimTamamla");
        btnTamamla.addEventListener("click",tamamla);
        

        btnSil=document.createElement("img");
        eklenen.appendChild(btnSil);
        btnSil.setAttribute("src","img/sil.jpg");
        btnSil.setAttribute("id","resimSil");
        btnSil.addEventListener("click",sil); 
    }
    else alert("Boş bırakılamaz!");
}

function sil(){
    secilen=event.currentTarget.parentNode;
    secilen.remove();
    document.getElementById("sonuc").innerHTML="Seçiminiz Silindi!";
}
function tamamla(){
    eklenen=document.createElement("li");
    document.getElementById("listeAlinanlar").appendChild(eklenen);
    secilen=event.currentTarget.parentNode;
    secilen.childNodes[1].style.display="none";
    secilen.childNodes[2].setAttribute("onclick","sil();");
    eklenen.innerHTML=secilen.innerHTML;
    document.getElementById("sonuc").innerHTML="Seçiminiz Taşındı!";

}