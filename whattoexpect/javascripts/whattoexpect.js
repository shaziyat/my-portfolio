//Initializing variables
var timer_check = false;

var intensity=[  
      {option1:["10","-5","0","0"],option2:["-10","-2","0","0"],option3:["10","-1","0","0"],option4:["-10","-1","0","0"],option5:["10","-1.5","0","0"],option6:["-10","-1.5","0","0"]},
			{option1:["0","6","0","-20"],option2:["0","-6","0","20"],option3:[],option4:[],option5:[],option6:[]},
			{option1:["-10","0","0","20"],option2:["20","0","0","0"],option3:["-10","0","0","-20"],option4:[],option5:[],option6:[]},
			{option1:["0","3","20","-20"],option2:["0","-3","-20","20"],option3:[],option4:[],option5:[],option6:[]},
			{option1:["0","-1","5","0"],option2:["0","-2","5","0"],option3:["0","-1","5","0"],option4:["0","-2","5","0"],option5:[],option6:[]},
			{option1:["10","0","20","0"],option2:["-5","0","-20","0"],option3:["2.5","0","5","0"],option4:[],option5:[],option6:[]},
			{option1:["50","0","0","0"],option2:["0","50","0","0"],option3:[],option4:[],option5:[],option6:[]},
			{option1:["0","0","50","0"],option2:["0","50","0","0"],option3:["0","0","0","0"],option4:[],option5:[],option6:[]},
			{option1:["0","0","50","0"],option2:["0","0","0","50"],option3:[],option4:[],option5:[],option6:[]},
			{option1:["0","0","0","50"],option2:["50","0","0","0"],option3:[],option4:[],option5:[],option6:[]}
		];
var questions = [
      {q: "You need to make a monthly groceries list to stock up your refrigerator! Add to your list by checking the items you want to buy and proceed.", checked: 1},
      {q: "A much awaited movie has finally hit theaters and you can’t wait to watch it with your husband. How do you want to take care of your toddler?", checked: 0},
      {q: "You’ve just put down your baby for a nap. What do you want to do with your time?", checked: 0},
      {q: "You’re running out of baby diapers, what type do you want to use?", checked: 0},
      {q: "It’s time to do some baby shopping. Add items you think you could need to your cart and proceed.", checked: 1},
      {q: "Breastfeeding is a great way to burn up to 500 calories a day but it takes a lot of time and planning at work. What do you want to do?", checked: 0},
      {q: "Congratulations! Your boss has assigned you to a big project. How do you feel?", checked: 0, p:[0,1,-1,-1]},
      {q: "You’ve had a manic Monday at work and just as you step into another meeting your phone starts to ring. Hurry up and decide!", checked: 0, p:[-1,0,1,-1]},
      {q: "It’s been a tough day at the office. How do you want to spend the rest of your evening?", checked: 0, p:[-1,-1,0,1]},
      {q: "You’ve had a crazy couple of weeks juggling work, your baby and a nagging mother-in-law!", checked: 0, p:[1,-1,-1,0]}  //Your Health, Savings, Baby's Health, Happiness
    ];
    var count =-1;
    tcount=0;

    var pbar_values=[50,50,50,50]; //Initial progress bar values
    var thresh=[30,30,30,30];
    var priority=[1,0,2,3]; // Setting priority incase of threshold clash
    var currTh=0;
  
    var end = 0;
    var t_select=[0,0,0,0];
    var th_count=[-1,-1,-1,-1];
    for (var i = 0, ar = []; i < 6; i++) {
      ar[i] = i;
    }

  // randomize the array for the scenarios
  ar.sort(function () 
  {
        return Math.random() - 0.5;
    
  });
    
   timer = null;

    $(document).ready(function()
    { 
  
  // Start quiz once start button is clicked
      function beginning() 
       {
          console.log(ar);
          var next_button = document.getElementById('next');
          next_button.onclick = function(e){

           
            console.log('next clicked');

            if($(this).text() == 'Play Again') {
              window.location.reload();
              return;
            }
           
            if($('input:checkbox[name="s1"]:checked').length > 0 || $('input:radio[name="rb"]:checked').length > 0 || count==7)
            {

            //  console.log('tcount='+tcount, 'count='+count);

                //console.log('before 7');
                if(count == 7 && timer_check === false)
                { 
                  timer.stop();
                 // console.log('within 7');
                    if($('#r4 input').is(':checked') && t_select[1]==1) 
                    { 
                        alert('It’s your Mother-in-law and she’s found the perfect nanny for your baby, but unfortunately this will eat into your savings!');
                        //console.log('r4 checked haha');
                    }
                    if($('#r4 input').is(':checked') && t_select[2]==1)
                    {
                      alert('Great news! Your Mother-in-law was calling to tell you that she’s found the perfect nanny for your baby');
                    }
                    if($('#r6 input').is(':checked') && t_select[1]==1)
                    {
                        //console.log('r6 checked');
                        alert('Phew! You just avoided hiring an expensive nanny');
                    }
                    if($('#r6 input').is(':checked') && t_select[2]==1)
                    {
                      alert('Uh-Oh! You just missed out on hiring the perfect nanny for your baby');
                    }
                }
                
                if(count != -1)
                { 
                    var exit = check_answer(currTh);
                    console.log('tcount='+tcount, 'count='+count);

                     for(var k = 0; k<4; k++)
                     {
                     
                        console.log(th_count[k]);
                      if(parseInt(th_count[k])==1)
                       {
                    console.log('End of Game through threshold');

                        window.alert('GAME OVER!');
                        endstate(2);
                        end =1;
                      }
                    

                  }
             }

                 if(end==1)return;   // End condition to break out of function


                     t_select=[0,0,0,0];


                      var checkT= check_thresh();


                       console.log('Threshold Count Array'+th_count);
                   console.log('Variable hitting threshold Array'+t_select);

                       console.log('Variables Reaching Threshhold = '+checkT);
                       currTh = checkT;
               // window.alert(checkT);
          
               
                update_pbar(pbar_values);
          
               // count++;
               if(checkT ==0) 
                 {
                   
                    if(tcount<6)
                    {
                     count=ar[tcount];
                     tcount++;
                     console.log('tcount='+tcount, 'count='+count);
                   //window.alert(tcount);
                    }
                   else
                   {

                    endstate(1);
                    count=11;

                   }
                }
                 else
                 {
                     if(checkT>0)
                     {
                      count = select_threshold_question();
                      console.log('tcount='+tcount, 'count='+count);

                     }
                    
                 }
              
                  //window.alert("Count="+count);

                    replace_html(count);
             // count++;
             
             }
           
           else
           {
            if(count==-1)
            {   

            //  console.log('tcount='+tcount, 'count='+count);
                update_pbar(pbar_values);
            
                 // count++;
                count=ar[tcount];
                tcount++;
              console.log('tcount='+tcount, 'count='+count);
                replace_html(count);

            }
            else{
           window.alert("Please select an option!");}
           }
          };
          
          
        }


       function update_pbar(pbar_values)
       {
               var percentage=pbar_values;

                if(pbar_values[1] <= 30)
                {  
                  $( "#savings" ).removeClass( "progress-bar-info");
                  $( "#savings" ).addClass( "progress-bar-danger");
                }
              else
                {
                  $( "#savings" ).removeClass( "progress-bar-danger");
                  $( "#savings" ).addClass("progress-bar-info");
                }
                if(pbar_values[0] <= 30)
                {  
                
                  $( "#yourhealth" ).removeClass( "progress-bar-info");
                  $( "#yourhealth" ).addClass( "progress-bar-danger");
                }
              else
                {
                  $( "#yourhealth" ).removeClass( "progress-bar-danger");
                  $( "#yourhealth" ).addClass("progress-bar-info");
                }
                if(pbar_values[2] <= 30)
                {  
                  
                  $( "#babyhealth" ).removeClass( "progress-bar-info");
                  $( "#babyhealth" ).addClass( "progress-bar-danger");
                }
              else
                {
                  $( "#babyhealth" ).removeClass( "progress-bar-danger");
                  $( "#babyhealth" ).addClass("progress-bar-info");
                }
                if(pbar_values[3] <= 30)
                {  
                 
                  $( "#happiness" ).removeClass( "progress-bar-info");
                  $( "#happiness" ).addClass( "progress-bar-danger");
                }
              else
                {
                  $( "#happiness" ).removeClass( "progress-bar-danger");
                  $( "#happiness" ).addClass("progress-bar-info");
                }
                  
               $('#timeline').attr('style', 'width: '+[(tcount*100)/6]+'%');
               $('#yourhealth').attr('style', 'width: '+percentage[0]+'%');
               $('#savings').attr('style', 'width: '+percentage[1]+'%');
               $('#babyhealth').attr('style', 'width: '+percentage[2]+'%');
               $('#happiness').attr('style', 'width: '+percentage[3]+'%');

       }

       function check_answer(checkT)
       {

          //  console.log(count, questions[count]);
            if(questions[count].checked)
             {
              var total = 0;   
              var vals = $('input:checkbox[name="s1"]:checked').map(function () {
                 
                 for(var i=0; i < 4; i++)
                 {
                   if(checkT == 0){
                   pbar_values[i] += parseInt(intensity[count]["option"+this.value][i]);  }

                   else{
                   if(parseInt(intensity[count]["option"+this.value][i])!=0){ 

                    pbar_values[i]=parseInt(intensity[count]["option"+this.value][i]);
                       }

                   }

                    } 
               return this.value;
                }).get();
                 
              return 1;   

            }
            else
            {
              var vals = $('input:radio[name="rb"]:checked').map(function () {

                 for(var i=0; i < 4; i++)
               {
                 if(checkT == 0)
                 {
                                pbar_values[i] += parseInt(intensity[count]["option"+this.value][i]); 

                                }
                else
                {
                         if(parseInt(intensity[count]["option"+this.value][i])!=0 && t_select[i]==1)
                          { 

                          th_count[i]--;
                        pbar_values[i]=parseInt(intensity[count]["option"+this.value][i]);
                           }
                }

             }
             
             return this.value;
              }).get();
              return 1;
            }

       }

       function check_priority()

       {  
          var temp_t_array=[0];
         // 
        for(var j=0; j<4; j++)
         {
          if(t_select[j]==1)
          {
                   temp_t_array[j]==priority[j];
          }

         }

         var index = temp_t_array.indexOf(Math.max.apply(Math, temp_t_array));
         console.log('Priority Index='+index);

        return index;

       }

       function check_thresh(){
         var temp=0;
         for(var j=0; j<4; j++)
         {
          if(pbar_values[j] <= thresh[j])
           {
              if(th_count[j] < 2)
              {
              th_count[j]++;
              t_select[j]=1;
              window.alert("Threshold Question coming up!!");
              temp++;
              return temp;
              }
            }
           
          }

         return temp;
          
       }
       
       function select_threshold_question()
       {
         if(th_count[0]>-1)
         {
           for(var k = 6; k<10; k++)
           {
            if(questions[k].p[0] == th_count[0])
            {
            return k;
            }
            
           }
         }
         
         if(th_count[1]>-1){
           for(var k = 6; k<10; k++)
           {
            
             if(questions[k].p[1] == th_count[1])
            {
            return k;
            }

           }
         }
         
         if(th_count[2]>-1){
           for(var k = 6; k<10; k++)
           {
            if(questions[k].p[2] == th_count[2])
            {
            return k;
            }

            
           }
         }
         if(th_count[3]>-1){
           for(var k = 6; k<10; k++)
           {
            
            if(questions[k].p[3] == th_count[3])
            {
            return k;
            }

           }
         }
         
      }
       
       function endstate(val)
       {

        var score = parseInt([4*pbar_values[1] + 3*(pbar_values[0]+pbar_values[2]+pbar_values[3])]/13);
        if(val==2)

        {
      $('#replace').html("<b>TRY AGAIN!</b><br>");
      $('#answer').empty();
      $('#replace').append("<br>Oh no! You were unable to recover from the threshold scenarios. <br> <br>While it is most important to have savings for a vacation, it is equally important to focus on the factors that require your immediate attention.<br> <br>Better luck next time!");
      $('#next').text("Play Again");


        }

        if(val==1)
        {

          if(score >74)
          {
            $('#replace').html("<br><br>Your score is: "+score+"/100<br><br><b>SUCCESSFUL!</b><br>");
            $('#answer').empty();
            $('#replace').append("<br>Woohoo! With your lifestyle choices you’ve managed to juggle all your responsibilities well to go for a long family vacation in the summer. <br> <br>You've earned a well-deserved break. Enjoy!");
          }

          if(score<75 && score>50)
          {
            $('#replace').html("<br><br>Your score is: "+score+"/100<br><br><b>ALMOST THERE!</b><br>");
            $('#answer').empty();
            if(pbar_values[1]<50){
            $('#replace').append("<br>Uh-oh! Some of your lifestyle choices haven’t been well balanced. <br> <br>Remember to focus better on your savings next time.");
            }
            else{
            if(pbar_values[0]<50){
            $('#replace').append("<br>Uh-oh! Some of your lifestyle choices haven’t been well balanced. <br> <br>Remember to focus better on your health next time.");
            }
            else {
            if(pbar_values[2]<50){
            $('#replace').append("<br>Uh-oh! Some of your lifestyle choices haven’t been well balanced. <br> <br>Remember to focus better on your baby's health next time.");
            }
            else{
            if(pbar_values[3]<50){
            $('#replace').append("<br>Uh-oh! Some of your lifestyle choices haven’t been well balanced. <br> <br>Remember to focus more on being happy next time.");
            }
          } } }

          $('#next').text("Play Again");
          }

          if(score<51)
          {
            $('#replace').text("<br><br>Your score is: "+score+"/100<br><br><b>TRY AGAIN!</b><br>");
            $('#answer').empty();
            $('#replace').append("<br>Oh no! Most of your lifestyle choices haven’t been well balanced. <br> <br>Better luck next time!");

          }
          $('#next').text("Play Again");
        }

        $('#answer').empty();

       }


       function replace_html(count)
       {
      console.log(questions[count].q);

        if(count==0)
        {
          
          $('#replace').text(questions[count].q);
          $('#answer').empty();

         // creating images
        var img = document.createElement('img');
            img.src='img/fruits&veggies.png';
            img.id='fruitsveggies'; 
            //img.name='fruitsveggies'; 
            img.height=150;
            img.width=150;
          // img.onmouseover=imgChange1(this);
            //img.onmouseout=imgChange2(this);

            var img2 = document.createElement('img');
            img2.src='img/chocolates.png';
            img2.id='chocolates'; 
            img2.height=150;
            img2.width=150;

            var img3 = document.createElement('img');
            img3.src='img/eggs.png';
            img3.id='eggs'; 
            img3.height=150;
            img3.width=150;

            var img4 = document.createElement('img');
            img4.src='img/pizza.png';
            img4.id='pizza'; 
            img4.height=150;
            img4.width=150;

            var img5 = document.createElement('img');
            img5.src='img/rice.png';
            img5.id='rice'; 
            img5.height=150;
            img5.width=150;

            var img6 = document.createElement('img');
            img6.src='img/tub.png';
            img6.id='tub'; 
            img6.height=150;
            img6.width=150;

            // Creating Table

            $('#answer').html("<center><table width='745'><tr><td id='r1'></td><td id='r2'></td><td id='r3'></td></tr><tr><td id='r4'></td><td id='r5'></td><td id='r6'></td></tr><tr><td id='r7'></td><td id='r8'></td><td id='r9'></td></tr><tr><td id='r10'></td><td id='r11'></td><td id='r12'></td></tr> </table><center>");

            // Creating checkboxes

            var cbox1=document.createElement('input');
            cbox1.type='checkbox';
            cbox1.name='s1';
            cbox1.value='1';
            cbox1.id='fv';

             var cbox2=document.createElement('input');
            cbox2.type='checkbox';
            cbox2.name='s1';
            cbox2.value='2';
            cbox2.id='cb';

            var cbox3=document.createElement('input');
            cbox3.type='checkbox';
            cbox3.name='s1';
            cbox3.value='3';
            cbox3.id='egg';

            var cbox4=document.createElement('input');
            cbox4.type='checkbox';
            cbox4.name='s1';
            cbox4.value='4';
            cbox4.id='fp';

            var cbox5=document.createElement('input');
            cbox5.type='checkbox';
            cbox5.name='s1';
            cbox5.value='5';
            cbox5.id='br';

            var cbox6=document.createElement('input');
            cbox6.type='checkbox';
            cbox6.name='s1';
            cbox6.value='6';
            cbox6.id='ics';

            $('#r1').append(img);
            $('#r2').append(img2);
            $('#r3').append(img3);
            $('#r4').append(""); $('#r4').append(cbox1);
            $('#r4').append("<label for='fv'><b><i>&nbsp;Fruits & Veggies -- $ 50 </i></b></label>");//$('#r4').append("<br>");
            $('#r5').append(""); $('#r5').append(cbox2);
            $('#r5').append("<label for='cb'><b><i>&nbsp;Chocolate Bars -- $ 20  </i></b></label>"); //$('#r5').append("<br>");
            $('#r6').append(""); $('#r6').append(cbox3);
            $('#r6').append("<label for='egg'><b><i>&nbsp;Eggs -- $ 10  </i></b></label>");//$('#r6').append("<br>");
            $('#r7').append("<br>");
            $('#r7').append(img4);
            $('#r8').append("<br>");
            $('#r8').append(img5);
            $('#r9').append("<br>");
            $('#r9').append(img6);
            $('#r10').append(""); $('#r10').append(cbox4);
            $('#r10').append("<label for='fp'><b><i>&nbsp;Frozen Pizza -- $ 10  </i></b></label>");//$('#r10').append("<br>");
            $('#r11').append(""); $('#r11').append(cbox5);
            $('#r11').append("<label for='br'><b><i>&nbsp;Brown Rice -- $ 15 </i></b></label>");//$('#r11').append("<br>");
            $('#r12').append(""); $('#r12').append(cbox6);
            $('#r12').append("<label for='ics'><b><i>&nbsp;Ice Cream Sundae -- $ 15  </i></b></label>");

            $( '#fruitsveggies' ).mouseover(function(){
                $(this).attr("src", "img/fruits&veggies2.png");
            });

            $( '#fruitsveggies' ).mouseout(function(){
                $(this).attr("src", "img/fruits&veggies.png");
            });

            $( '#chocolates' ).mouseover(function(){
                $(this).attr("src", "img/chocolates2.png");
            });

            $( '#chocolates' ).mouseout(function(){
                $(this).attr("src", "img/chocolates.png");
            });

             $( '#eggs' ).mouseover(function(){
                $(this).attr("src", "img/eggs2.png");
            });

            $( '#eggs' ).mouseout(function(){
                $(this).attr("src", "img/eggs.png");
            });

          $( '#pizza' ).mouseover(function(){
                $(this).attr("src", "img/pizza2.png");
            });

            $( '#pizza' ).mouseout(function(){
                $(this).attr("src", "img/pizza.png");
            });

           $( '#rice' ).mouseover(function(){
                $(this).attr("src", "img/rice2.png");
            });

            $( '#rice' ).mouseout(function(){
                $(this).attr("src", "img/rice.png");
            });

          $( '#tub' ).mouseover(function(){
                $(this).attr("src", "img/tub2.png");
            });

            $( '#tub' ).mouseout(function(){
                $(this).attr("src", "img/tub.png");
            });

        }
            
        if(count==1){

            
            $('#replace').text(questions[count].q);
            $('#answer').empty();

            //Creating Images

            var img = document.createElement('img');
            img.src='img/mil.png';
            img.id='mil'; 
            img.height=300;
            img.width=250;

            var img2 = document.createElement('img');
            img2.src='img/babysitter.png';
            img2.id='babysitter'; 
            img2.height=300;
            img2.width=250;

            //Creating Table

            $('#answer').append("<table width='745'><tr><td id='r1'></td><td id='r2'></td></tr><tr><td id='r3'></td><td id='r4'></td></tr></table>");
            //Creating Radio Buttons
             var rbutton1=document.createElement('input');
           rbutton1.type='radio';
           rbutton1.name='rb';
           rbutton1.value='1';
           rbutton1.id='mil1';
           var rbutton2=document.createElement('input');
           rbutton2.type='radio';
           rbutton2.name='rb';
           rbutton2.value='2';
           rbutton2.id='babysitter1';
           
            $('#r1').append(img);
            $('#r2').append(img2);
            $('#r3').append("<br>");$('#r3').append(rbutton1);
            $('#r3').append("<b><i>&nbsp; I’ll request my mother-in-law. She’ll probably &nbsp; &nbsp; &nbsp;<br>&nbsp; &nbsp; &nbsp;nag me about it though! </i></b>"); 
            $('#r4').append("<br>");$('#r4').append(rbutton2);
            $('#r4').append("<b><i>&nbsp; I’ll hire a baby-sitter, it’s just a matter of<br>&nbsp; &nbsp; &nbsp;few hours anyway </i></b>"); 

            $( '#mil' ).mouseover(function(){
                $(this).attr("src", "img/mil2.png");
            });

            $( '#mil' ).mouseout(function(){
                $(this).attr("src", "img/mil.png");
            });

            $( '#babysitter' ).mouseover(function(){
                $(this).attr("src", "img/babysitter2.png");
            });

            $( '#babysitter' ).mouseout(function(){
                $(this).attr("src", "img/babysitter.png");
            });
           
            }

            if(count==2)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();
            // Create Radio Buttons

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='phone';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='sleep';
            var rbutton3=document.createElement('input');
            rbutton3.type='radio';
            rbutton3.name='rb';
            rbutton3.value='3';
            rbutton3.id='chores';

           // $('#answer').append("<table><tr><td id='r1'></td>/tr><tr><td id='r2'></td></tr><tr><td id='r3'></td></tr></table><br><br>");
            $('#answer').append("<br>"); 
            $('#answer').append(rbutton1); 
            $('#answer').append("<label for='phone'><b><i>&nbsp; It’s been a while since I checked my phone, let me see if I’ve got any important mail</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");$('#answer').append(rbutton2); 
            $('#answer').append("<label for='sleep'><b><i>&nbsp; I’m going to sleep when my baby sleeps </i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");$('#answer').append(rbutton3); 
            $('#answer').append("<label for='chores'><b><i>&nbsp; I’ve got so many chores to complete! Laundry and dishes need to get done </i></b></label>");  $('#answer').append("<br>");  $('#answer').append("<br>"); 
            
            }

            if(count==3)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();

            //Creating Images

            var img = document.createElement('img');
            img.src='img/clothe.png';
            img.id='clothe'; 
            img.height=300;
            img.width=250;
           

            var img2 = document.createElement('img');
            img2.src='img/disposable.png';
            img2.id='disposable'; 
            img2.height=300;
            img2.width=250;

            //Creating Table

            $('#answer').append("<table width='745'><tr><td id='r1' align='center'></td><td id='r2' align='center' style='padding-left: 50px;'></td></tr><tr><td id='r3' align='center'></td><td id='r4' align='center' style='padding-left: 50px;'></td></tr></table>");
            //Creating Radio Buttons

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='clothe1';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='disposable1';
           
            $('#r1').append(img);
            $('#r2').append(img2);
            $('#r3').append("<br>");$('#r3').append(rbutton1);
            $('#r3').append("<b><i> Cloth diapers - They’re natural <br>&nbsp; &nbsp; and almost cost-free!</i></b>"); 
            $('#r4').append("<br>");$('#r4').append(rbutton2);
            $('#r4').append("<b><i> Disposable diapers - I can get these in bulk and <br>&nbsp; &nbsp;  I don’t have to worry about cleaning!</i></b>"); 

            $( '#clothe' ).mouseover(function(){
                $(this).attr("src", "img/clothe2.png");
            });

            $( '#clothe' ).mouseout(function(){
                $(this).attr("src", "img/clothe.png");
            });

            $( '#disposable' ).mouseover(function(){
                $(this).attr("src", "img/disposable2.png");
            });

            $( '#disposable' ).mouseout(function(){
                $(this).attr("src", "img/disposable.png");
            });

            }
            if(count==4)
            {
          $('#replace').text(questions[count].q);
            $('#answer').empty();

            var img = document.createElement('img');
            img.src='img/clothes.png';
            img.id='clothes'; 
            img.height=150;
            img.width=250;

            var img2 = document.createElement('img');
            img2.src='img/cot.png';
            img2.id='cot'; 
            img2.height=150;
            img2.width=250;

            var img3 = document.createElement('img');
            img3.src='img/toys.png';
            img3.id='toys'; 
            img3.height=150;
            img3.width=250;

            var img4 = document.createElement('img');
            img4.src='img/stroller.png';
            img4.id='stroller'; 
            img4.height=150;
            img4.width=250;

            //Creating Table
            $('#answer').html("<table width='745'><tr><td id='r1'></td><td id='r2'></td></tr><tr><td id='r3'></td><td id='r4'></td></tr><tr><td id='r5'></td><td id='r6'></td></tr><tr><td id='r7'></td><td id='r8'></td></tr> </table>");

            //Creating Checkboxes
            var cbox1=document.createElement('input');
            cbox1.type='checkbox';
            cbox1.name='s1';
            cbox1.value='1';
            cbox1.id='clothes1';

             var cbox2=document.createElement('input');
            cbox2.type='checkbox';
            cbox2.name='s1';
            cbox2.value='2';
            cbox2.id='cot1';

            var cbox3=document.createElement('input');
            cbox3.type='checkbox';
            cbox3.name='s1';
            cbox3.value='3';
            cbox3.id='toys1';

            var cbox4=document.createElement('input');
            cbox4.type='checkbox';
            cbox4.name='s1';
            cbox4.value='4';
            cbox4.id='stroller1';

            //Add Items to table

            $('#r1').append(img);
            $('#r2').append(img2);
           
            $('#r3').append(""); $('#r3').append(cbox1);
            $('#r3').append("<label for='clothes1'><b><i>&nbsp;Cloths -- $ 150 </i></b></label>");//$('#r4').append("<br>");
            $('#r4').append(""); $('#r4').append(cbox2);
            $('#r4').append("<label for='cot1'><b><i>&nbsp;Cot -- $ 150  </i></b></label>"); //$('#r5').append("<br>");
            
            $('#r5').append("<br>");
            $('#r5').append(img3);
            $('#r6').append("<br>");
            $('#r6').append(img4);
            
            $('#r7').append(""); $('#r7').append(cbox3);
            $('#r7').append("<label for='toys1'><b><i>&nbsp;Rattles and other Toys -- $ 50  </i></b></label>");//$('#r10').append("<br>");
            $('#r8').append(""); $('#r8').append(cbox4);
            $('#r8').append("<label for='stroller1'><b><i>&nbsp;Stroller -- $ 100 </i></b></label>");//$('#r11').append("<br>");
            

            $( '#clothes' ).mouseover(function(){
                $(this).attr("src", "img/clothes2.png");
            });

            $( '#clothes' ).mouseout(function(){
                $(this).attr("src", "img/clothes.png");
            });

            $( '#cot' ).mouseover(function(){
                $(this).attr("src", "img/cot2.png");
            });

            $( '#cot' ).mouseout(function(){
                $(this).attr("src", "img/cot.png");
            });

            $( '#toys' ).mouseover(function(){
                $(this).attr("src", "img/toys2.png");
            });

            $( '#toys' ).mouseout(function(){
                $(this).attr("src", "img/toys.png");
            });

            $( '#stroller' ).mouseover(function(){
                $(this).attr("src", "img/stroller2.png");
            });

            $( '#stroller' ).mouseout(function(){
                $(this).attr("src", "img/stroller.png");
            });


            }
            if(count==5)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='lets';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='not';
            var rbutton3=document.createElement('input');
            rbutton3.type='radio';
            rbutton3.name='rb';
            rbutton3.value='3';
            rbutton3.id='mf';

            $('#answer').append("<br>"); 
            $('#answer').append(rbutton1); 
            $('#answer').append("<label for='lets'><b><i>&nbsp; Let’s do it! My baby will be healthier and it’s so much better than extra sweat sessions at the gym</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");$('#answer').append(rbutton2); 
            $('#answer').append("<label for='not'><b><i>&nbsp; I’ll need more calorie intake with breastfeeding than if I were formula feeding so I’d rather work out</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");$('#answer').append(rbutton3); 
            $('#answer').append("<label for='mf'><b><i>&nbsp; I’ll go with mixed feeding; it’ll take more planning but its the perfect workaround </i></b></label>");  $('#answer').append("<br>");  $('#answer').append("<br>"); 

            }
            
             if(count==6)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();


            // Create Radio Buttons

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='cantcommit';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='bestnews';

            $('#answer').append("<br>"); 
            $('#answer').append(rbutton1); 
            $('#answer').append("<label for='cantcommit'><b><i>&nbsp; It’s a great offer but with a newborn I can’t commit more than 40 hours per week</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");$('#answer').append(rbutton2); 
            $('#answer').append("<label for='bestnews'><b><i>&nbsp; This is the best news! I’ll put my husband on baby-duty and do whatever it takes to make this work</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");

            }

       if(count==7)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();

            var img = document.createElement('img');
            img.src='img/call.gif';
            img.id='call'; 
            img.height=120;
            img.width=120;

            var img2 = document.createElement('img');
            img2.src='img/accept.png';
            img2.id='accept'; 
            img2.height=80;
            img2.width=80;

            var img3 = document.createElement('img');
            img3.src='img/decline.png';
            img3.id='decline'; 
            img3.height=80;
            img3.width=80;

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='accept1';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='decline1';

            // Creating Table
      $('#answer').append("<center><table><tr><td id='r1'></td><td id='r2'></td></tr><tr><td id='r3' align='center'></td><td id='r4'></td></tr><tr><td id='r5' align='center'></td><td id='r6'></td></tr></table></center>");

            $('#r1').append(img);
            $('#r2').append("<div id='countdown'></div>");
            $.getScript('dist/jquery.countdown360.min.js', function()
      {
          // script is now loaded and executed.
          // put your dependent JS here.

           timer = $("#countdown").countdown360({
                        radius      : 50,
                        seconds     : 15,
                        strokeWidth : 5,
                        fillStyle : '#000000',
                        strokeStyle : '#676666',
                        fontSize : 40,
                        fontColor   : '#FFFFFF',
                        autostart: false,
                        onComplete  : function () {
                          // alert
                          timer_check = true;
                          alert('Time’s up! Your Mother-in-law was calling to tell you that she’s found a nanny for your baby but now it’s too late to hire her');
                          //$('#r4 input').prop('checked', true);
                          //console.log('i\'m checking it okay');
                          // manually select one randomly
                          $("#next").click(); //console.log('completed') 
                      }
                        });
           timer.start()
      });
           
            $('#r3').append(img2);
            $('#r4').append("<br>"); $('#r4').append(rbutton1); $('#r4').append("<label for='accept1'><b><i>&nbsp; Answer</i></b></label>");
            $('#r5').append(img3);
            $('#r6').append("<br>"); $('#r6').append(rbutton2);$('#r6').append("<label for='decline1'><b><i>&nbsp; Decline</i></b></label>");
            

            }

       if(count==8)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();

             //Creating Images

            var img = document.createElement('img');
            img.src='img/withbaby.png';
            img.id='withbaby'; 
            img.height=167;
            img.width=250;
           

            var img2 = document.createElement('img');
            img2.src='img/withladies.png';
            img2.id='withladies'; 
            img2.height=167;
            img2.width=250;

            //Creating Table

            $('#answer').append("<table width='745'><tr><td id='r1' align='center'></td><td id='r2' align='center' style='padding-left: 50px;'></td></tr><tr><td id='r3' align='center'></td><td id='r4' align='center'></td></tr></table>");
            //Creating Radio Buttons

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='withbaby1';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='withladies1';
           
            $('#r1').append(img);
            $('#r2').append(img2);
            $('#r3').append("<br>"); $('#r3').append(rbutton1);
            $('#r3').append("<b><i>&nbsp;I should head home and spend time with<br/>my baby</i></b>"); 
            $('#r4').append("<br>");$('#r4').append(rbutton2);
            $('#r4').append("<b><i>&nbsp;I need a night with my ladies to<br/>de-stress</i></b>"); 

            $( '#withbaby' ).mouseover(function(){
                $(this).attr("src", "img/withbaby2.png");
            });

            $( '#withbaby' ).mouseout(function(){
                $(this).attr("src", "img/withbaby.png");
            });

             $( '#withladies' ).mouseover(function(){
                $(this).attr("src", "img/withladies2.png");
            });

            $( '#withladies' ).mouseout(function(){
                $(this).attr("src", "img/withladies.png");
            });

            }

       if(count==9)
            {
            $('#replace').text(questions[count].q);
            $('#answer').empty();

            var rbutton1=document.createElement('input');
            rbutton1.type='radio';
            rbutton1.name='rb';
            rbutton1.value='1';
            rbutton1.id='parlor';
            var rbutton2=document.createElement('input');
            rbutton2.type='radio';
            rbutton2.name='rb';
            rbutton2.value='2';
            rbutton2.id='friendbabysit';

            $('#answer').append("<br>"); 
            $('#answer').append(rbutton1); 
            $('#answer').append("<label for='parlor'><b><i>&nbsp; I need to hit the parlor and just get pampered this weekend</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");$('#answer').append(rbutton2); 
            $('#answer').append("<label for='friendbabysit'><b><i>&nbsp; I’ll reach out to a friend to babysit and try to catch up on some sleep</i></b></label>"); $('#answer').append("<br>"); 
            $('#answer').append("<br>");

            }
       
       }
       
        // Check if the username is empty
        
        // Quiz initiation
             
           beginning();
          //generate_question();
        //evaluate_answer();
        
});