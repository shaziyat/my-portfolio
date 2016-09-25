<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/favicon.ico"> <!--Enter favicon icon here at 32x32 px-->

    <title>WhatToExpect Threshold Scenario 2</title>

    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="starter-template.css" rel="stylesheet">

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/ion.rangeSlider.css" />
    <link rel="stylesheet" href="css/ion.rangeSlider.skinFlat.css" />

    <link href="inline.css" rel="stylesheet">

    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="dist/jquery.countdown360.min.js"></script>

  </head>

  <body>

    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <!--<div style="font-family: 'Satisfy', cursive; font-size: 24px;"> <a class="navbar-brand" href="index.php" style="">WhatToExpect</a> </div>-->
          <div style="padding-top: 5px; padding-right: 20px"> <a href="index.php"> <img src="img/logo.png" width="33" height="40"/> </a> </div>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="rules.php">Rules</a></li>
            <li class="active"><a href="flowchart.php">Flowchart</a></li>
            <li class="active"><a href="sources.php">Sources</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">

      <div class="starter-template" style="padding-top:70px">
        <div class="col-md-8 pull-left" style="padding-left:0px">

          <div style="height:450px; padding-top:10px;">
            <p style="font-size:18px; color:#F59C12;">You’ve had a manic Monday at work and just as you step into another meeting your mother-in-law is calling you. Hurry up and decide!</p>
            <br/>
            <center>
            <div style="display:inline-block">
             <img src="img/call.gif" width="120" height="120" style="vertical-align:baseline"/>
            </div>
            <div id="countdown" style="display:inline-block; padding-bottom:30px">
                <script type="text/javascript" charset="utf-8">
                  $("#countdown").countdown360({
                  radius      : 50,
                  seconds     : 15,
                  strokeWidth : 5,
                  fillStyle : '#000000',
                  strokeStyle : '#676666',
                  fontSize : 40,
                  fontColor   : '#FFFFFF',
                  autostart: false,
                  onComplete  : function () { console.log('completed') }
                  }).start()
                </script>
            </div>
            </center>
            <div class="col-md-12 pull-left" style="text-align:center; padding-bottom:10px">
              <img src="img/accept.png" width="90" height="80" style="padding-right:10px"></img>
              <input type="radio" name="call" value="accept"><b><i>&nbsp;Accept </i> </b>
            </div>

            <div class="col-md-12 pull-left" style="text-align:center">
              <img src="img/decline.png" width="90" height="80" style="padding-right:10px"></img>
              <input type="radio" name="call" value="decline"><b><i>&nbsp; Decline </i> </b>
            </div>

          </div>
          
          
          <div class="lead" style="padding-left:380px">
            <a href="tscenario_3ii.php"><span id="next-btn" class="btn btn-group-sm btn-default">Next</span></a>
          </div>
        </div>
        

        <div class="col-md-4 pull-right" style="padding-left:20px; padding-top:10px; background-color: #E4E4E4">
          <!--<img src="img/progress_bars.png"></img>-->
          <h5>TRACK YOUR PROGRESS:</h5>
          <br/>

          <img src=img/calendar.png width=25px height=25px style="display: inline-block;"> </img> &nbsp; <h5 style="display: inline-block;">Timeline [in months]</h5>
            <div class="progress" align="center" style="margin-bottom:0px;">
              <div class="progress-bar progress-bar-warning progress-bar-striped active" id="timeline" role="progressbar" aria-valuenow="16.67" aria-valuemin="0" aria-valuemax="100" style="width: 16.67%">
              </div>
            </div>
            <img src="img/timeline12.png"/>

          <img src=img/health.png width=25px height=25px style="display: inline-block;"> </img> &nbsp; <h5 style="display: inline-block;">Your Health</h5>
          <div class="progress" align="center">
            <div class="progress-bar progress-bar-info progress-bar-striped active" id="yourhealth" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
            </div>
          </div>

          <img src=img/savings.png width=25px height=25px style="display: inline-block;"> </img> &nbsp; <h5 style="display: inline-block;">Savings</h5> 
          <div class="progress" align="center">
            <div class="progress-bar progress-bar-info progress-bar-striped active" id="savings" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
            </div>
          </div>

          <img src=img/health.png width=25px height=25px style="display: inline-block;"> </img> &nbsp; <h5 style="display: inline-block;">Baby's Health</h5>          
          <div class="progress" align="center">
            <div class="progress-bar progress-bar-info progress-bar-striped active" id="babyhealth" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
            </div>
          </div>

          <img src=img/happiness.png width=22px height=22px style="display: inline-block;"> &nbsp; <h5 style="display: inline-block;">Happiness</h5> </img> 
          
          <div class="progress" align="center">
            <div class="progress-bar progress-bar-info progress-bar-striped active" id="happiness" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
            </div>
          </div>

        </div>
      </div>

    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="dist/js/ie10-viewport-bug-workaround.js"></script>

    <script src="js/jquery-1.11.1.min.js"></script>
    <script src="js/ion.rangeSlider.js"></script>

  </body>
</html>