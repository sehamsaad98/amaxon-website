fetch("./Amazon.json").then(function(response){
    return response.json();
}).then(function(data) {
     console.log(data.links.length);
   // document.getElementsByTagName("a")[0].innerHTML =data.links[2]
    for(let i = 0;i<data.links.length;i++){
      navv =  document.getElementById("mynav");
      mya = document.createElement("a");
      mya.setAttribute("href","#")
      mya.innerHTML = data.links[i];
      navv.appendChild(mya);
    }

                // ******** start of sidebar *****************
    var mysection1 = document.getElementById("section1");
    for(let i = 0; i<data.operatingsystem.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.operatingsystem[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection1.appendChild(mydiv);
    }
    var mysection2 = document.getElementById("section2");
    for(let i = 0; i<data.screenSize.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.screenSize[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection2.appendChild(mydiv);
    }
    var mysection3 = document.getElementById("section3");
    for(let i = 0; i<data.internalMemorySize.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.internalMemorySize[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection3.appendChild(mydiv);
    }
    var mysection4 = document.getElementById("section4");
    for(let i = 0; i<data.DataTransferStandard.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.DataTransferStandard[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection4.appendChild(mydiv);
    }
    var mysection5 = document.getElementById("section5");
    for(let i = 0; i<data.Features.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.Features[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection5.appendChild(mydiv);
    }
    var mysection6 = document.getElementById("section6");
    for(let i = 0; i<data.CameraResolution.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.CameraResolution[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection6.appendChild(mydiv);
    }
    var mysection7 = document.getElementById("section7");
    for(let i = 0; i<data.RAMSize.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.RAMSize[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection7.appendChild(mydiv);
    }
    var mysection8 = document.getElementById("section8");
    for(let i = 0; i<data.ModelYear.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.ModelYear[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection8.appendChild(mydiv);
    }
    var mysection9 = document.getElementById("section9");
    for(let i = 0; i<data.FormFactor.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.FormFactor[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection9.appendChild(mydiv);
    }
    var mysection10 = document.getElementById("section10");
    for(let i = 0; i<data.SIMCardSize.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.SIMCardSize[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection10.appendChild(mydiv);
    }
    var mysection11 = document.getElementById("section11");
    for(let i = 0; i<data.ConnectivityTechnology.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.ConnectivityTechnology[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection11.appendChild(mydiv);
    }
    var mysection12 = document.getElementById("section12");
    for(let i = 0; i<data.DisplayType.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.DisplayType[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection12.appendChild(mydiv);
    }
    var mysection13 = document.getElementById("section13");
    for(let i = 0; i<data.ShootingModes.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.ShootingModes[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection13.appendChild(mydiv);
    }
    var mysection14 = document.getElementById("section14");
    for(let i = 0; i<data.HumanInterfaceInput.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.HumanInterfaceInput[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection14.appendChild(mydiv);
    }
    var mysection15 = document.getElementById("section15");
    for(let i = 0; i<data.SIMCardSlotCount.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.SIMCardSlotCount[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection15.appendChild(mydiv);
    }
    var mysection16 = document.getElementById("section16");
    for(let i = 0; i<data.ConnectorType.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.ConnectorType[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection16.appendChild(mydiv);
    }
    var mysection17 = document.getElementById("section17");
    for(let i = 0; i<data.Seller.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.Seller[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection17.appendChild(mydiv);
    }
    var mysection18 = document.getElementById("section18");
    for(let i = 0; i<data.Availability.length;i++){
        var mycheck= document.createElement("input");
    mycheck.setAttribute("type","Checkbox")
    mycheck.style.margin="0 2px 0 0"
    var mylabael = document.createElement("label");
    mylabael.innerHTML = data.Availability[i] + "<br>";
    var mydiv = document.createElement("div");
    mydiv.appendChild(mycheck);
    mydiv.appendChild(mylabael);
    mysection18.appendChild(mydiv);
    }
            // ******** end of sidebar *****************
            ////////////////// brands ///////////////////
    for(let i = 0;i<data.brands.length;i++){
    var mydiv=document.getElementById("brands");
    var mydivv=document.createElement("div");
    mydivv.setAttribute("id","brandsbackground");
    var myimage = document.createElement("img");
    var myp = document.createElement("p");
    var makediv = document.createElement("div");
    makediv.setAttribute("style","margin: 20px 20px;")
    myp.innerHTML = data.brands[i].name;
    myimage.setAttribute("src",data.brands[i].image)
    mydivv.appendChild(myimage);
    makediv.append(mydivv,myp);
    mydiv.appendChild(makediv);
    }
        ////////////// end of brands ////////////////

        // **************start of  menu ****************

        var menudiv = document.getElementById("menu");
        for(let i =0 ; i<data.menu.length;i++){
            var sectiondiv = document.createElement("div");
            var sectionimg = document.createElement("img");
            var myspan = document.createElement("div");
            myspan.appendChild(sectionimg);
            myspan.setAttribute("style","background-color:#f8f8f8;border-top-color: #333333;")
            var namep = document.createElement("p")
            var descriptionp = document.createElement("p")
            var pricep = document.createElement("p")
            pricep.setAttribute("style","cursor:pointer;font-weight:bold")
            var offrep = document.createElement("p")
            var offernum = document.createElement("a");
            sectionimg.setAttribute("src",data.menu[i].image)
            namep.innerHTML = data.menu[i].name;
            descriptionp.innerHTML = data.menu[i].description;
            pricep.innerHTML = data.menu[i].price;
            offrep.innerHTML = data.menu[i].offer;
            offernum.setAttribute("href","#");
            offernum.innerHTML = data.menu[i].offernumber;
            sectiondiv.append(myspan,namep,pricep,descriptionp,offrep,offernum)
            menudiv.appendChild(sectiondiv);
        }
        // **************end of  menu ****************
})





