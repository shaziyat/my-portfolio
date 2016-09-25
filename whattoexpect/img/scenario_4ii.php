<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="img/favicon.ico"> <!--Enter favicon icon here at 32x32 px-->

    <title>WhatToExpect Scenario 4</title>

    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="starter-template.css" rel="stylesheet">

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/ion.rangeSlider.css" />
    <link rel="stylesheet" href="css/ion.rangeSlider.skinFlat.css" />

    <link href="inline.css" rel="stylesheet">

    <script src="js/jquery-1.11.1.min.js"></script>

    <script>
      function imgChange9( img ) {
        document.clothe.src = img;
      }
      function imgChange10( img ) {
        document.disposable.src = img;
      }
    </script>

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
            <p style="font-size:18px; color:#F59C12;">You’re running out of baby diapers, what type do you want to use?</p>
            
            <div align="center" class="col-md-6 pull left" style="padding-top:20px">
              <img id="clothe" name="clothe" src="img/clothe.png" height=300px width=250px onmouseover="imgChange9('img/clothe2.png')" onmouseout="imgChange9('img/clothe.png')" style="display: block"></img>
              <br/>
              <input type="radio" name="diaper" value="clothe"><b><i>&nbsp; Clothe diapers - They’re natural and almost cost-free! </i></b>
            </div>
            <div align="center" class="col-md-6 pull left" style="display: inline-block; padding-top:20px">
              <img id="disposable" name="disposable" src="img/disposable.png" height=300px width=250px onmouseover="imgChange10('img/disposable2.png')" onmouseout="imgChange10('img/disposable.png')" style="display: block"></img>
              <br/>
              <input type="radio" name="diaper" value="disposable"><b><i>&nbsp; Disposable diapers - I can get these in bulk and I don’t have to worry about cleaning! </i></b>
            </div>
          </div>

          <div class="lead" style="padding-left:380px">
            <a href="scenario_5ii.php"><span id="next-btn" class="btn btn-group-sm btn-default">Next</span></a>
          </div>
        </div>
        

        <div class="col-md-4 pull-right" style="padding-left:20px; padding-top:10px; background-color: #E4E4E4">
          <!--<img src="img/progress_bars.png"></img>-->
          <h5>TRACK YOUR PROGRESS:</h5>
          <br/>

          <img src=img/calendar.png width=25px height=25px style="display: inline-block;"> </img> &nbsp; <h5 style="display: inline-block;">Timeline [in months]</h5>
            <div class="progress" align="center" style="margin-bottom:0px;">
              <div class="progress-bar progress-bar-warning progress-bar-striped active" id="timeline" role="progressbar" aria-valuenow="66.68" aria-valuemin="0" aria-valuemax="100" style="width: 66.68%">
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