var choice = "";
var id_cat = -1;
var choosingData = "";
var long_haired = document.getElementById("btn-long");
var shorthaired = document.getElementById("btn-short");

long_haired.onclick = () =>{
    choosingData = "long-haired-cats";
}
shorthaired.onclick = () =>{
    choosingData = "shorthaired-cats";
}

const showInfo = (choice) =>{
    $.getJSON("https://my-json-server.typicode.com/anelnjk/mockjson/"+choosingData+'/', function(data){
        var num = data.length;
        var str = '"'+choice+'"';
        for(i=0; i<num;i++)
      {
          if(str==='" '+data[i].name+'  "'){
              id_cat=data[i].id-1;
              break;
          }
      }
        $('#p1')[0].innerHTML = "Specie name: " + JSON.stringify(data[id_cat].name);
        $('#p2')[0].innerHTML = "Price: " + JSON.stringify(data[id_cat].price) + "$";
        $("#cat-img").attr("src",data[id_cat].image);
    });
}


const search = () =>{
    $(document).ready(function(){
        $.ajaxSetup({ cache: false });
        $('#search').keyup(function(){
         $('#result').html('');
         $('#state').val('');
         var searchField = $('#search').val();
         var expression = new RegExp(searchField, "i");
         $.getJSON("https://my-json-server.typicode.com/anelnjk/mockjson/"+choosingData+'/', function(data) {
          $.each(data, function(key, value){
           if (value.name.search(expression) != -1)
           {
            $('#result').append('<li class="list-group-item link-class"> '+value.name+'  </li>');
           }
          });   
         });
        });

        $('#result').on('click', 'li', function() {
            var click_text = $(this).text();
            choice=$(this).text();
            console.log($(this).text());
            $('#search').val(click_text);
            $("#result").html('');
            showInfo(choice);
           });
          });
}
search();