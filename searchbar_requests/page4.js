 var id_item=0;
 var choosingData = "";
 var choice ="";
 var selection = document.getElementById("inputGroupSelect01");
 var by_price = document.getElementById("by-price");
 var by_name = document.getElementById("by-name");
 var content_show = document.querySelector(".contt");
 var search_img = document.querySelector(".img-search");
 var cartJSON="";

const showInfo = (choice) =>{
    console.log(choice);
    $.getJSON("https://my-json-server.typicode.com/anelnjk/mini-internet-shop/clothing/", function(data){
        var num = data.length;
        console.log(num);
        var str = '"'+choice+'"';
        console.log(str);
        for(i=0; i<num;i++)
      {
          if(str==='"'+data[i].name+'"'){
              id_item=data[i].id-1;
              console.log(id_item);
              break;
          }
      }
        $('#infojson-name')[0].innerHTML = JSON.stringify(data[id_item].name);
        $('#infojson-color')[0].innerHTML =JSON.stringify(data[id_item].color);
        $('#infojson-comp')[0].innerHTML = JSON.stringify(data[id_item].composition);
        $('#infojson-size')[0].innerHTML =JSON.stringify(data[id_item].size);
        $('#infojson-price')[0].innerHTML = JSON.stringify(data[id_item].price);
        $("#img_item").attr("src",data[id_item].photo);
        content_show.classList.add("active");
        search_img.classList.add("non");
        cartJSON = data[id_item];
    });
}

//  let clothing =
// [
// {
//     name: "Top with Fishes",
//    color: "white",
//    price: "5990",
//    photo: "top_fish_2.jpg"
//   },
//   { 
//     name: "Money Top with Tiger",
//    color: "white",
//    price: "4990",
//    photo: "top_tiger_2.jpg"
//   },
//   {
//     name: "Top Tokyo",
//    color: "beige",
//    price: "6990",
//     photo: "top_tokyo_2.jpg"
//   },
//   { 
//     name: "Shirt The Land before Time",
//    color: "white",
//    price: "7990",
//    photo: "shirt_dino_1.jpg"
//   },
//   { 
//     name: "Shirt with Tiger",
//    color: "white",
//    price: "7990",
//    photo: "shirt_tiger_1.jpg"
//   },
//   { 
//     name: "Dragon sport pants",
//    color: "beige",
//    price: "10990",
//    photo: "pants_bej_1.jpg"
//   },
//   {
//     name: "Double-color pattern jeans",
//    color: "purple, white, pink",
//    price: "12990",
//    photo: "pants_purp_1.jpg"
//   },
//   { 
//     name: "Double-color jeans",
//    color: "pink, lightpink",
//    price: "12990",
//    photo: "pants_pink_1.jpg"
//   },
//   { 
//     name: "Banana jeans",
//    color: "light blue",
//    price: "12990",
//    photo:"pants_blue_1.jpg"
//   },
//   { 
//     name: "Graffity sport pants",
//    color: "white",
//    price: "9990",
//    photo: "pants_graph_1.jpg"
//   },
//   { 
//     name: "Hoodie California-Los Angeles",
//     color: "lightgrey",
//     price: "10990",
//    photo: "hoodie_cal_1.jpg"
//   },
//   { 
//     name: "Hoodie Slow Burn pattern",
//    color: "black",
//    price: "10990",
//    photo: "hoodie_eagle_2.jpg"
//   },
//   { 
//     name: "Hoodie Kaleidoscope pattern",
//    color: "black",
//    price: "11990",
//    photo: "hoodie_fish_2.jpg"
//   },
//   { 
//     name: "Hodie Wild Soul pattern",
//    color: "pink",
//    price: "10990",
//    photo: "hoodie_pink_1.jpg"
//   },
//   { 
//     name: "Hoodie Florida Team pattern",
//    color: "mint, purple",
//    price: "9990",
//    photo: "hoodie_team_2.jpg"
//   }
//  ];


// function setItems(product){
//     //console.log('setItems');
//     console.log('my product is:',product);
//     let cartItems = {
//         [products.name]:products
//     }

//     localStorage.setItem("productInCart", cartItems);
// }

// let carts = document.querySelectorAll(".add-to");

//  for (let i=0;i<carts.length;i++){
//      carts[i].addEventListener('click', ()=>{
//         //console.log(cartJSON);
//         setItems(carts[i]);

//      })
//  }





const search_by_price = () =>{
    $(document).ready(function(){
        $.ajaxSetup({ cache: false });
        $('#search').keyup(function(){
         $('#result').html('');
         var searchField = $('#search').val();
         var expression = new RegExp(searchField, "i");
         $.getJSON("https://my-json-server.typicode.com/anelnjk/mini-internet-shop/clothing", function(data) {
                $.each(data, function(key, value){
                    if (value.price.search(expression) != -1)
                    {
                     $('#result').append('<li class="list-group-item link-class"> <img style="width:27px;" src="'+value.photo+'">'+value.name+' | '+value.price+' KZT </li>');
                    }
                   }); 
            });
        });

        $('#result').on('click', 'li', function() {
            var click_text = $(this).text();
            var choice0=$(this).text();
            var choice = choice0.split(' | ');
            //console.log(choice[0].trim());
            $('#search').val(click_text);
            $("#result").html('');
            showInfo(choice[0].trim());
           });
          });
}

const search_by_name = () =>{
    $(document).ready(function(){
        $.ajaxSetup({ cache: false });
        $('#search').keyup(function(){
         $('#result').html('');
         var searchField = $('#search').val();
         var expression = new RegExp(searchField, "i");
         $.getJSON("https://my-json-server.typicode.com/anelnjk/mini-internet-shop/clothing", function(data) {
                $.each(data, function(key, value){
                    if (value.name.search(expression) != -1)
                    {
                     $('#result').append('<li class="list-group-item link-class"> <img style="width:27px;" src="'+value.photo+'">'+value.name+' | '+value.price+' KZT </li>');
                    }
                   });  
            });
        });

        $('#result').on('click', 'li', function() {
            var click_text = $(this).text();
            var choice0=$(this).text();
            var choice = choice0.split(' | ');
            console.log(choice[0].trim());
            $('#search').val(click_text);
            $("#result").html('');
            showInfo(choice);
           });
          });
}

// var noti = document.querySelector('h1');
// var section = document.querySelector('.section');
// var button = document.querySelectorAll('add-to');
// for(but of button){
//     but.addEventListener('click', (e)=>{
//         var add = Number(noti.getAttribute('data-count')||0);
//         noti.setAttribute('data-count', add+1);
//         noti.classList.add('zero');
//         console.log('lol');

//         var parent = e.target.parentNode;
//         var clone = parent.cloneNode(true);
//         section.appendChild(clone);
//         clone.lastElementChild.innerText = "Buy-now";
//         if(clone){
//             noti.onclick =()=>{
//                 section.classList.toggle('display');
//             }
//         }


//     })
// }

search_by_price();
search_by_name();