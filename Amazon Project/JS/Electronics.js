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
                // ************ start of sidebar ******************
    var myside = document.getElementsByTagName("aside")[0];
    for(let i=0; i<data.elctronicsside.length;i++){
        var mylink = document.createElement("a");
        mylink.setAttribute("href","#")
        mylink.innerHTML=data.elctronicsside[i];
        myside.appendChild(mylink);
    }
    var mydiv = document.createElement("div");
    mydiv.setAttribute("id","sectionpart");
    var mypara = document.createElement("h5");
    mypara.innerText = "Fulfilled by Amazon"
    mydiv.appendChild(mypara);
    myside.appendChild(mydiv);
    for(let i=0; i<data.FulfilledbyAmazon.length;i++){
        var mycheck= document.createElement("input");
        mycheck.setAttribute("type","Checkbox")
        mycheck.style.margin="0 2px 0 0"
        var mylabael = document.createElement("label");
        mylabael.innerHTML = data.FulfilledbyAmazon[i] + "<br>";
        var stylediv = document.createElement("div");
        stylediv.append(mycheck,mylabael);
        mydiv.appendChild(stylediv);
    }

    var mydiv = document.createElement("div");
    mydiv.setAttribute("id","sectionpart");
    var mypara = document.createElement("h5");
    mypara.innerText = "Brand"
    mydiv.appendChild(mypara);
    myside.appendChild(mydiv);
    for(let i=0; i<data.Brand.length;i++){
        var mycheck= document.createElement("input");
        mycheck.setAttribute("type","Checkbox")
        mycheck.style.margin="0 2px 0 0"
        var mylabael = document.createElement("label");
        mylabael.innerHTML = data.Brand[i] + "<br>";
        var stylediv = document.createElement("div");
        stylediv.append(mycheck,mylabael);
        mydiv.appendChild(stylediv);
    }
    var divrate = document.createElement("div");
    divrate.setAttribute("style","position: relative;right: 14px;")
    var rateimage = document.createElement("img");
    var ratepara = document.createElement("h5");
    ratepara.style.margin = "0 0 0 15px"
    ratepara.innerText = "Avg. Customer Review";
    rateimage.setAttribute("src","./rates.PNG");
    divrate.append(ratepara,rateimage);
    myside.append(divrate);
    var mydiv = document.createElement("div");
    mydiv.setAttribute("id","sectionpart");
    var mypara = document.createElement("h5");
    mypara.innerText = "Price"
    mydiv.appendChild(mypara);
    myside.appendChild(mydiv);
    for(let i=0; i<data.Price.length;i++){
        var mycheck= document.createElement("input");
        // mycheck.setAttribute("type","Checkbox")
        // mycheck.style.margin="0 2px 0 0"
        var mylabael = document.createElement("label");
        mylabael.innerHTML = data.Price[i] + "<br>";
        var stylediv = document.createElement("div");
        stylediv.append(mylabael);
        mydiv.appendChild(stylediv);
    }
    var mydiv = document.createElement("div");
    mydiv.setAttribute("id","sectionpart");
    var mypara = document.createElement("h5");
    mypara.innerText = "Deals"
    mydiv.appendChild(mypara);
    myside.appendChild(mydiv);
    for(let i=0; i<data.Deals.length;i++){
        var mycheck= document.createElement("input");
        mycheck.setAttribute("type","Checkbox")
        mycheck.style.margin="0 2px 0 0"
        var mylabael = document.createElement("label");
        mylabael.innerHTML = data.Deals[i] + "<br>";
        var stylediv = document.createElement("div");
        stylediv.append(mycheck,mylabael);
        mydiv.appendChild(stylediv);
    }
    var mydiv = document.createElement("div");
    mydiv.setAttribute("id","sectionpart");
    var mypara = document.createElement("h5");
    mypara.innerText = "Seller"
    mydiv.appendChild(mypara);
    myside.appendChild(mydiv);
    for(let i=0; i<data.Seller.length;i++){
        var mycheck= document.createElement("input");
        mycheck.setAttribute("type","Checkbox")
        mycheck.style.margin="0 2px 0 0"
        var mylabael = document.createElement("label");
        mylabael.innerHTML = data.Seller[i] + "<br>";
        var stylediv = document.createElement("div");
        stylediv.append(mycheck,mylabael);
        mydiv.appendChild(stylediv);
    }
    var mydiv = document.createElement("div");
    mydiv.setAttribute("id","sectionpart");
    var mypara = document.createElement("h5");
    mypara.innerText = "Availability"
    mydiv.appendChild(mypara);
    myside.appendChild(mydiv);
    for(let i=0; i<data.Availability.length;i++){
        var mycheck= document.createElement("input");
        mycheck.setAttribute("type","Checkbox")
        mycheck.style.margin="0 2px 0 0"
        var mylabael = document.createElement("label");
        mylabael.innerHTML = data.Availability[i] + "<br>";
        var stylediv = document.createElement("div");
        stylediv.append(mycheck,mylabael);
        mydiv.appendChild(stylediv);
    }
                    // ************ end of sidebar ******************

                           ////////////////// start of brands ///////////////////
    for(let i = 0;i<data.EletronBrands.length;i++){
        var mydiv=document.getElementById("EletronBrands");
        var mydivv=document.createElement("div");
        mydivv.setAttribute("id","brandsbackground");
        var myimage = document.createElement("img");
        var myp = document.createElement("p");
        var makediv = document.createElement("div");
        makediv.setAttribute("style","margin: 10px 5px;")
        myp.innerHTML = data.EletronBrands[i].name;
        myimage.setAttribute("src",data.EletronBrands[i].image)
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

