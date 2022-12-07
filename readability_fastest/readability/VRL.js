/************ 
 * Vrl Test *
 ************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'VRL';  // from the Builder filename that created this script
let expInfo = {
    'Welcome to Virtual Reading Test!': 'Please wait for resources to download and then click OK',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('white'),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(initializeRoutineBegin());
flowScheduler.add(initializeRoutineEachFrame());
flowScheduler.add(initializeRoutineEnd());
flowScheduler.add(donotuseSAFARIRoutineBegin());
flowScheduler.add(donotuseSAFARIRoutineEachFrame());
flowScheduler.add(donotuseSAFARIRoutineEnd());
flowScheduler.add(generalInstructions2RoutineBegin());
flowScheduler.add(generalInstructions2RoutineEachFrame());
flowScheduler.add(generalInstructions2RoutineEnd());
const normalizeFontTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(normalizeFontTrialsLoopBegin(normalizeFontTrialsLoopScheduler));
flowScheduler.add(normalizeFontTrialsLoopScheduler);
flowScheduler.add(normalizeFontTrialsLoopEnd);
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin(blocksLoopScheduler));
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(writeDataToFileRoutineBegin());
flowScheduler.add(writeDataToFileRoutineEachFrame());
flowScheduler.add(writeDataToFileRoutineEnd());
flowScheduler.add(finalInstructionsRoutineBegin());
flowScheduler.add(finalInstructionsRoutineEachFrame());
flowScheduler.add(finalInstructionsRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'fonts/TimesNew.woff', 'path': 'fonts/TimesNew.woff'},
    {'name': 'stimuli/testFastest.xlsx', 'path': 'stimuli/testFastest.xlsx'},
    {'name': 'blocks/blocks_1.xlsx', 'path': 'blocks/blocks_1.xlsx'},
    {'name': 'next_button.png', 'path': 'next_button.png'},
    {'name': 'welcomeText.png', 'path': 'welcomeText.png'},
    {'name': 'fonts/ArialFont.woff', 'path': 'fonts/ArialFont.woff'},
    {'name': 'fonts/LexendDeca.woff', 'path': 'fonts/LexendDeca.woff'},
    {'name': 'bank-1300155_640.png', 'path': 'bank-1300155_640.png'},
    {'name': 'fonts/Montserrat.woff', 'path': 'fonts/Montserrat.woff'},
    {'name': 'fonts/Garamond.woff', 'path': 'fonts/Garamond.woff'},
    {'name': 'fonts/Roboto.woff', 'path': 'fonts/Roboto.woff'},
    {'name': 'fonts/NotoSans.woff', 'path': 'fonts/NotoSans.woff'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.3';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var initializeClock;
var makeid;
var findIndices;
var randomArrayShuffle;
var randomIntFromInterval;
var range;
var balancedLatinSquare;
var unitsPerEm_ctrl;
var xHeight_ctrl;
var width_ctrl;
var height_ctrl;
var size_ctrl;
var yourX;
var xHeight_ctrl_weight;
var width_ctrl_weight;
var height_ctrl_weight;
var xHeightSourceDelta;
var widthSourceDelta;
var heightSourceDelta;
var chars;
var chars_check;
var chars_decimal;
var chars_unicode;
var gen_normalization;
var thisGroup;
var PID;
var participantCode;
var passageSetOrder;
var baseSizePixels;
var questionSizeMultiplier;
var passageSizeMultiplier;
var instructionSizeMultiplier;
var passageTextSize;
var questionTextSize;
var instructionTextSize;
var vsize;
var hsize;
var wrapWidthText;
var wrapWidthPassages;
var xAxisCenterPassages;
var xAxisCenter;
var topScreenInstruction;
var bottomScreenInstruction;
var buttonWidth;
var buttonHeight;
var buttonX;
var buttonY;
var formLinkX;
var formLinkY;
var websiteLinkX;
var websiteLinkY;
var questionsXaxis;
var questionsTopYaxis;
var questionsBottomYaxis;
var sliderPosition;
var sliderSize;
var textboxSize;
var textboxPosition;
var passageYaxis;
var y_scale;
var x_scale;
var myClock;
var totalTrialIterationIndex;
var accuracyTotal;
var data_totalTrialIndex;
var data_dateTime;
var data_miniRating;
var data_trialType;
var data_itemID;
var data_itemType;
var data_passageRT;
var data_passageFont;
var data_compAccuracy;
var data_compChoice;
var data_blockName;
var data_zoomLevel;
var currentFontType;
var currentRT;
var browserZoom;
var thisExp;
var trialColumNames;
var donotuseSAFARIClock;
var key_resp_12;
var welcomeText;
var nextButton_warning;
var mouseWarning;
var generalInstructions2Clock;
var generalInstructionsText_2;
var nextButton_Instructions;
var mouseInstructions;
var waitForNormalizationClock;
var fontNames;
var fontDirectories;
var howManyFonts;
var normalized_xsizes;
var heightDifferences;
var waitFor10Secs_2;
var key_resp_8;
var setBlockParametersClock;
var setTrialParametersClock;
var instructions_passageClock;
var readPassageInstructions;
var nextButton_readingInstructions;
var mouseReadingInstructions;
var displayPassaagesClock;
var passageText;
var passageKeyPress;
var nextButton_passage;
var mousePassage;
var instructions_questionsClock;
var text_2;
var nextButton_questionInstructions;
var mouseQuestionInstructions;
var displayQuestionsClock;
var questionText;
var pressSpaceText;
var clickOnCircleText;
var questionSlider;
var nextButton_comprehension;
var mouseComprehension;
var displayMiniSurveyClock;
var miniSurveyText;
var pressMiniSpaceText;
var clickOnCircleText_2;
var miniSurveySlider;
var nextButton_mini;
var mouseMiniSurvey;
var findFastestClock;
var writeDataToFileClock;
var finalInstructionsClock;
var finish_instructions;
var formLink;
var websiteLink;
var redirectMouse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "initialize"
  initializeClock = new util.Clock();
  // randomly generate letters from an array
  
  function makeid2() {
    var text = "";
    var possible = "ABCDEF";
  
    for (var i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  makeid=makeid2;
  // find index of a string element in an array
  function findIndices2(listVariable, elementToSearch) {
      var matchIndex, searchItIndex;
      matchIndex = [];
      searchItIndex = 0;
      for (var i, _pj_c = 0, _pj_a = listVariable, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          i = _pj_a[_pj_c];
          if ((i === elementToSearch)) {
              matchIndex.push(searchItIndex);
          }
          searchItIndex = (searchItIndex + 1);
      }
      return matchIndex;
  }
  findIndices = findIndices2;
  
  
  // shuffle array: randomly shuffles the order of elements in an array.
  function randomArrayShuffle2(o){
      for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }
  
  randomArrayShuffle = randomArrayShuffle2;
  
  function randomIntFromInterval2(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  randomIntFromInterval = randomIntFromInterval2;
  
  
  function range2(start, end) {
      if(start === end) return [start];
      return [start, ...range(start + 1, end)];
  }
  range = range2;
  // Latin Square design generator
  
  // How to use:
  // var conditions = ["A", "B", "C", "D"];
  // balancedLatinSquare(conditions, 0)  //=> ["A", "B", "D", "C"]
  // balancedLatinSquare(conditions, 1)  //=> ["B", "C", "A", "D"]
  // balancedLatinSquare(conditions, 2)  //=> ["C", "D", "B", "A"]
  // ...
  function balancedLatinSquare2(array, participantId) {
   var result = [];
   // Based on "Bradley, J. V. Complete counterbalancing of immediate sequential effects in a Latin square design. J. Amer. Statist. Ass.,.1958, 53, 525-528. "
   for (var i = 0, j = 0, h = 0; i < array.length; ++i) {
    var val = 0;
    if (i < 2 || i % 2 != 0) {
     val = j++;
    } else {
     val = array.length - h - 1;
     ++h;
    }
  
    var idx = (val + participantId) % array.length;
    result.push(array[idx]);
   }
  
   if (array.length % 2 != 0 && participantId % 2 != 0) {
    result = result.reverse();
   }
  
   return result;
  }
  
  balancedLatinSquare = balancedLatinSquare2;
  
  
  
  /////////////////////////////////////
  //// font normalization function ////
  /////////////////////////////////////
  
  Array.prototype.sum = function() {
      return this.reduce(function(a,b){return a+b;});
  };
  
  Array.prototype.mean = function() {
      return this.sum() / this.length;
  };
  
  // CONTROL vars (Times)
  unitsPerEm_ctrl = 1000;
  xHeight_ctrl = 448;
  width_ctrl = 556.388855;
  height_ctrl = 707.977295;
  size_ctrl = 16;
  yourX=0
  xHeight_ctrl_weight = 448/unitsPerEm_ctrl;
  width_ctrl_weight   = 556.388855/unitsPerEm_ctrl;
  height_ctrl_weight  = 707.977295/unitsPerEm_ctrl;
  
  xHeightSourceDelta =  0.44970703125;
  widthSourceDelta =  0.5528367565524194;
  heightSourceDelta =  0.6362068422379032;
  
  chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  chars_check = chars.split('');
  chars_decimal = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 97, 115, 100, 102, 103, 104, 106, 107, 108, 122, 120, 99, 118, 98, 110, 109, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];
  
  //chars = 'Adobe';
  chars_check = chars.split('');
  chars_decimal = [];
  chars_check.forEach(e => {
      chars_decimal.push(e.codePointAt());
  });
  
  
  chars_unicode = ['0x0031','0x0032','0x0033','0x0034','0x0035','0x0036','0x0037','0x0038','0x0039','0x0030','0x0071','0x0077','0x0065','0x0072','0x0074','0x0079','0x0075','0x0069','0x006f','0x0070','0x0061','0x0073','0x0064','0x0066','0x0067','0x0068','0x006a','0x006b','0x006c','0x007a','0x0078','0x0063','0x0076','0x0062','0x006e','0x006d','0x0051','0x0057','0x0045','0x0052','0x0054','0x0059','0x0055','0x0049','0x004f','0x0050','0x0041','0x0053','0x0044','0x0046','0x0047','0x0048','0x004a','0x004b','0x004c','0x005a','0x0058','0x0043','0x0056','0x0042','0x004e','0x004d'];
  
  function log(str) {
      console.log(str);
  };
  
  function print_server_load(name,path) {
      log("@font-face {");
      log("    font-family: '" + name + "';");
      log("    font-style: normal;");
      log("    font-weight: normal;");
      log("    src: local('" + name + "'), url('fonts/" + path + "') format('truetype');");
      log("}");
  };
  
  function print_css(name,name_css,factor,size) {
      log("p." + name_css + "_" + factor + " {");
      log("    font-family: '" + name + "' !important;");
      log("    font-size: " + size + "px;");
      log("}");
  }
  
  function gen_normalization2(fontPath,name,name_css) {
      opentype.load(fontPath, function(err, font) {
          if (err) {
              alert('Font ' + fontPath + ' could not be loaded: ' + err);
          } else {
              // Now let's display it on a canvas with id "canvas"
              console.log('normalization')
              //console.log(document.getElementById('canvas'))
              //console.log(document.getElementById('canvas').getContext)
              //console.log(document.getElementById('canvas').getContext('2d'))
              //var ctx = document.getElementById('canvas').getContext('2d');
      
              // Construct a Path object containing the letter shapes of the given text.
              // The other parameters are x, y and fontSize. Note that y is the position of the baseline.
              var path = font.getPath(chars, 0, 0, 16);
      
              //
              var xHeight = font.tables.os2.sxHeight; // sxHeight could be missing from some fonts
              var widths = [];
              var heights = [];
      
             var xMinFont = 0;
             var xMaxFont = 0;
             var yMinFont = 0;
             var yMaxFont = 0;
      
              //compute max width/height
              Object.keys(font.glyphs.glyphs).forEach(function (k) {
                  var glyph = font.glyphs.glyphs[k];
                  var unicode_decimal = glyph.unicode;
                  if (chars_decimal.includes(unicode_decimal)) {
                      if(glyph.xMin < xMinFont)
                          xMinFont = glyph.xMin;
                      if(glyph.xMax > xMaxFont)
                          xMaxFont = glyph.xMax;
                      if(glyph.yMin < yMinFont)
                          yMinFont = glyph.yMin;
                      if(glyph.yMax > yMaxFont)
                          yMaxFont = glyph.yMax;
                  }
              });
      
              Object.keys(font.glyphs.glyphs).forEach(function (k) {
                  var glyph = font.glyphs.glyphs[k];
                  var char = glyph.name;
                  var unicode_decimal = glyph.unicode;
      
                  var lsb = glyph.leftSideBearing;
                  var rsb = glyph.advanceWidth - (lsb + glyph.xMax - glyph.xMin); //right side bearing
      
                  var width = glyph.xMax - glyph.xMin;
                  width = glyph.advanceWidth;
                  //width = glyph.xMax - glyph.xMin;
      
                  var yMinGlyph = glyph.yMin;
                  var yMaxGlyph = glyph.yMax;
                  var yMinFinal = yMinFont;
                  var yMaxFinal = yMaxFont;
      
                  if (yMinFont > yMinGlyph)
                      yMinFinal = yMinGlyph;
                  if (yMaxFont < yMaxGlyph)
                      yMaxFinal = yMaxGlyph;
                  
                  var height = glyph.yMax - glyph.yMin;
                  if (chars_decimal.includes(unicode_decimal)) {
                      widths.push(width);
                      heights.push(height);
                  }
                  if(unicode_decimal === 120) { // x
                      xHeight = yMaxGlyph - yMinGlyph;
                  }
              });
      
              let unitsPerEm = font.tables.head.unitsPerEm;
      
              let xHeightDelta = xHeight/unitsPerEm;
              let widthDelta = widths.mean()/unitsPerEm;
              let heightDelta = heights.mean()/unitsPerEm;
              
              let x = 16*(1+((xHeightSourceDelta-xHeightDelta)/xHeightDelta));
              let w = 16*(1+((widthSourceDelta-widthDelta)/widthDelta));
              let h = 16*(1+((heightSourceDelta-heightDelta)/heightDelta));
              
              yourX = (1+((xHeightSourceDelta-xHeightDelta)/xHeightDelta));
              console.log('yourX')
              console.log(yourX)
              return yourX
              
          }
      });    
  
  }
  
  gen_normalization = gen_normalization2;
  // redirect back to readabilitylab.xyz
  psychoJS.setRedirectUrls('https://readabilitylab.xyz','');
  
  ///////////////////////////////////////////////////////////////
  //// BLOCK AND TRIAL RELATED PARAMETERS - COUNTERBALANCING ////
  ///////////////////////////////////////////////////////////////
  
  
  //thisGroup = await psychoJS.shelf.counterBalanceSelect({key: ['pilot_child'], groups: ['A', 'B','C','D','E','F'], groupSizes: [2,2,2,2,2,2]})
  thisGroup = {};
  thisGroup.group = makeid();
  //PID = randomIntFromInterval(0,5);
  if (thisGroup.group === 'A'){
      PID = 0;
  }
  if (thisGroup.group === 'B') {
      PID = 1;
  }
  if (thisGroup.group === 'C') {
      PID = 2;
  }
  if (thisGroup.group === 'D') {
      PID = 3;
  }
  if (thisGroup.group === 'E') {
      PID = 4;
  }
  if (thisGroup.group === 'F') {
      PID = 5;
  }
  
  
  participantCode = randomIntFromInterval(100000,999999);
  expInfo["participant"] = participantCode.toString() + thisGroup.group;
  console.log("group",thisGroup.group)
  console.log("PID",PID)
  console.log('subject code',expInfo["participant"]);
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  passageSetOrder = [];
  
  //////////////////////////////////////////////////////////////////////////
  //// TEXT PARAMETERS (pixels, size multipliers, wrapwidth, position.) ////
  //////////////////////////////////////////////////////////////////////////
  // text sizes
  baseSizePixels = 16;
  questionSizeMultiplier = 1.2;
  passageSizeMultiplier = 1.8;
  instructionSizeMultiplier = 1.5;
  passageTextSize = baseSizePixels * passageSizeMultiplier;
  questionTextSize = baseSizePixels * questionSizeMultiplier; // used in questions etc.
  instructionTextSize = baseSizePixels * instructionSizeMultiplier;
  // window pixel sizes below (h horizontal, v vertical)
  vsize = psychoJS.window.size[1];
  hsize = psychoJS.window.size[0];
  
  // text wrapping and position parameters
  wrapWidthText = hsize*4/5;
  wrapWidthPassages = hsize/2;
  // x axis starting point for passages
  xAxisCenterPassages =  -hsize/4;
  // x axis starting point for other text (instructions etc.)
  xAxisCenter = -hsize * 2/5;
  // screen scale instructions  
  topScreenInstruction = vsize * 3/10;
  bottomScreenInstruction = -vsize * 3/10;
  // next button size and position
  buttonWidth = hsize/10;
  buttonHeight = vsize/10;
  
  buttonX = hsize * 4/10;
  buttonY = 0-(vsize * 4/10);
  
  // final link positions
  formLinkX = hsize * 3/10;
  formLinkY = 0-(vsize * 3/10);
  
  websiteLinkX = 0-(hsize * 3/10);
  websiteLinkY = 0-(vsize * 3/10);
  // question text positions
  questionsXaxis = -hsize*45/100;
  questionsTopYaxis = vsize*10/100;
  questionsBottomYaxis = -vsize*35/100;
  // slider positions and size
  sliderPosition = [-hsize*45/100, -vsize*10/100];
  sliderSize = [hsize*1/100, vsize*20/100];
  // textbox position and size
  textboxSize = [hsize * 2/5, vsize*7.5/100];
  textboxPosition = [xAxisCenter, 0];
  console.log("hsize",hsize,"vsize",vsize)
  console.log("wrapwidthText",wrapWidthText,"xAxis",xAxisCenter)
  console.log("wrapwidthPass",wrapWidthPassages,"xAxisPass",xAxisCenterPassages) 
  
  
  passageYaxis = -200;
  // scaling parameters
  y_scale = 1;
  x_scale = 1;
  
  // clock
  myClock = new util.Clock();
  //////////////////////////////////////////////////////////////////////////
  //// DATA REGISTRY VARIABLES (accuracy, rt, date, blocks, trials etc) ////
  //////////////////////////////////////////////////////////////////////////
  totalTrialIterationIndex = 0;
  accuracyTotal = [0,0];
  
  data_totalTrialIndex= [];
  data_dateTime       = [];
  data_miniRating     = [];
  data_trialType      = [];
  data_itemID         = [];
  data_itemType       = [];
  data_passageRT      = [];
  data_passageFont    = [];
  data_compAccuracy   = [];
  data_compChoice     = [];
  data_blockName      = [];
  data_zoomLevel      = [];
  currentFontType     = [];
  currentRT           = [];
  browserZoom         = [];
  thisExp = psychoJS.experiment;
  // write trial by trial data
  trialColumNames = ["trialNo","itemID" ,"blockName", "trialType", "FontName", "wordsPerMinute", "comprehensionAccuracy", "comprehensionChoice","miniSurveyRating"];
  
  // add headers right above the data 
  psychoJS.experiment.addData("dateTime", "dateTime")
  psychoJS.experiment.addData(trialColumNames[0], trialColumNames[0]);
  psychoJS.experiment.addData("subid", "subid")
  psychoJS.experiment.addData("counterbalanceGroup", "counterbalanceGroup")
  psychoJS.experiment.addData(trialColumNames[1], trialColumNames[1]);
  psychoJS.experiment.addData(trialColumNames[2], trialColumNames[2]);
  psychoJS.experiment.addData(trialColumNames[3], trialColumNames[3]);
  psychoJS.experiment.addData(trialColumNames[4], trialColumNames[4]);
  psychoJS.experiment.addData(trialColumNames[5], trialColumNames[5]);
  psychoJS.experiment.addData(trialColumNames[6], trialColumNames[6]);
  psychoJS.experiment.addData(trialColumNames[7], trialColumNames[7]);
  psychoJS.experiment.addData(trialColumNames[8], trialColumNames[8]);
  psychoJS.experiment.addData("X_Scale", "X_Scale");
  psychoJS.experiment.addData("Y_Scale", "Y_Scale");
  psychoJS.experiment.addData("IsFullScreen", "IsFullScreen")
  psychoJS.experiment.addData("window_width", "window_width")
  psychoJS.experiment.addData("window_height", "window_height")
  psychoJS.experiment.addData("browser", "browser")
  psychoJS.experiment.addData("browserZoomLevel", "browserZoomLevel")
  psychoJS.experiment.nextEntry();
  // Initialize components for Routine "donotuseSAFARI"
  donotuseSAFARIClock = new util.Clock();
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  welcomeText = new visual.ImageStim({
    win : psychoJS.window,
    name : 'welcomeText', units : 'pix', 
    image : 'welcomeText.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1320, 726],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  nextButton_warning = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_warning', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  mouseWarning = new core.Mouse({
    win: psychoJS.window,
  });
  mouseWarning.mouseClock = new util.Clock();
  // Initialize components for Routine "generalInstructions2"
  generalInstructions2Clock = new util.Clock();
  generalInstructionsText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'generalInstructionsText_2',
    text: "This test consists of several parts. The 1st part is a warm-up. Then you will complete 6 short rounds of reading passagess and comprehension questions.\n\nDuring the reading sections, please read as quickly as you can, without reading out-loud or re-reading. However, be prepared to answer comprehension questions about the passage. You must select an answer to each question and press the button at the bottom of the screen to advance to the next page.\n\nIf you want to take a break, please do so while on an instruction page, not during the reading rounds as the timer will be running.\n\nIf you have questions, contact the primary investigator: Ben D. Sawyer, team@readabilitylab.xyz\n\nPlease sit at arm's length from the screen and try not to move your chair or move the distance of your head relative to the screen. Do not refresh the browser as it will reset the test.\n\nPlease press the button below to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_Instructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_Instructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "waitForNormalization"
  waitForNormalizationClock = new util.Clock();
  //// CAUTION ABOUT THE ORDER OF FONT FAMILY NAMES AND DIRECTORIES ////
  
  // place the family name and directory of the practice font in the first element ALWAYS
  // in the example below the practice font is Arial
  fontNames = ['ArialNormalized','GaramondNormalized','LexendNormalized','MontserratNormalized','NotoSansNormalized','RobotoNormalized','TimesNormalized'];
  fontDirectories = ['fonts/ArialFont.woff','fonts/Garamond.woff','fonts/LexendDeca.woff','fonts/Montserrat.woff','fonts/NotoSans.woff','fonts/Roboto.woff','fonts/TimesNew.woff'];
  howManyFonts = 7;
  normalized_xsizes = {};
  heightDifferences = {};
  waitFor10Secs_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'waitFor10Secs_2',
    text: "We are calibrating the test files for you. \n\nThis shouldn't take more than 10 seconds.\n\nPlease wait until the test instructions appear on the screen.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "setBlockParameters"
  setBlockParametersClock = new util.Clock();
  // Initialize components for Routine "setTrialParameters"
  setTrialParametersClock = new util.Clock();
  // Initialize components for Routine "instructions_passage"
  instructions_passageClock = new util.Clock();
  readPassageInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'readPassageInstructions',
    text: 'In the next section, please try to read the passage at your normal speed without reading aloud, re-reading, or taking breaks, and then press the button at the bottom of the screen when you finish. \n\n• Keep in mind you will answer questions after reading. \n\n• If you need to take a very short break please do so now.\n\nOnce you are ready, please press the button below to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [xAxisCenter, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_readingInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_readingInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseReadingInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseReadingInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "displayPassaages"
  displayPassaagesClock = new util.Clock();
  passageText = new visual.TextStim({
    win: psychoJS.window,
    name: 'passageText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthPassages, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  passageKeyPress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  nextButton_passage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_passage', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mousePassage = new core.Mouse({
    win: psychoJS.window,
  });
  mousePassage.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions_questions"
  instructions_questionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "You've finished reading this passage.\n\nIn the next section, you will answer multiple choice questions about the passage.\n\nClick on the answer you think best suits the passage.\n\nPlease press the button below to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  nextButton_questionInstructions = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_questionInstructions', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  mouseQuestionInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseQuestionInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "displayQuestions"
  displayQuestionsClock = new util.Clock();
  questionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'questionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  pressSpaceText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressSpaceText',
    text: 'The <next page> button will appear below after your choice. Please press the button below to continue after your choice.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  clickOnCircleText = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickOnCircleText',
    text: 'Click on the black circle to the left of the correct answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  questionSlider = new visual.Slider({
    win: psychoJS.window, name: 'questionSlider',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('white'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: true,
  });
  
  nextButton_comprehension = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_comprehension', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  mouseComprehension = new core.Mouse({
    win: psychoJS.window,
  });
  mouseComprehension.mouseClock = new util.Clock();
  // Initialize components for Routine "displayMiniSurvey"
  displayMiniSurveyClock = new util.Clock();
  miniSurveyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'miniSurveyText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  pressMiniSpaceText = new visual.TextStim({
    win: psychoJS.window,
    name: 'pressMiniSpaceText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  clickOnCircleText_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickOnCircleText_2',
    text: 'Click on the black circle to the left of the correct answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  miniSurveySlider = new visual.Slider({
    win: psychoJS.window, name: 'miniSurveySlider',
    startValue: undefined,
    size: 1.0, pos: [0, 0], ori: 0.0, units: 'pix',
    labels: undefined, fontSize: 1.0, ticks: [1, 2, 3, 4, 5],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('white'), lineColor: new util.Color('black'), 
    opacity: undefined, fontFamily: 'Arial', bold: true, italic: false, depth: -4, 
    flip: true,
  });
  
  nextButton_mini = new visual.ImageStim({
    win : psychoJS.window,
    name : 'nextButton_mini', units : undefined, 
    image : 'next_button.png', mask : undefined,
    ori : 0.0, pos : [buttonX, buttonY], size : [buttonWidth, buttonHeight],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  mouseMiniSurvey = new core.Mouse({
    win: psychoJS.window,
  });
  mouseMiniSurvey.mouseClock = new util.Clock();
  // Initialize components for Routine "findFastest"
  findFastestClock = new util.Clock();
  // Initialize components for Routine "writeDataToFile"
  writeDataToFileClock = new util.Clock();
  // Initialize components for Routine "finalInstructions"
  finalInstructionsClock = new util.Clock();
  finish_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'finish_instructions',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: wrapWidthText, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  formLink = new visual.TextStim({
    win: psychoJS.window,
    name: 'formLink',
    text: 'Fill out the form',
    font: 'Arial',
    units: undefined, 
    pos: [formLinkX, formLinkY], height: instructionTextSize*y_scale,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 1.0]),  opacity: undefined,
    depth: -2.0 
  });
  
  websiteLink = new visual.TextStim({
    win: psychoJS.window,
    name: 'websiteLink',
    text: 'Return to our website',
    font: 'Arial',
    units: undefined, 
    pos: [websiteLinkX, websiteLinkY], height: instructionTextSize*y_scale,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), 1.0]),  opacity: undefined,
    depth: -3.0 
  });
  
  redirectMouse = new core.Mouse({
    win: psychoJS.window,
  });
  redirectMouse.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var initializeComponents;
function initializeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initialize' ---
    t = 0;
    initializeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    initializeComponents = [];
    
    for (const thisComponent of initializeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function initializeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initialize' ---
    // get current time
    t = initializeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of initializeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initializeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initialize' ---
    for (const thisComponent of initializeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "initialize" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_12_allKeys;
var gotValidClick;
var donotuseSAFARIComponents;
function donotuseSAFARIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'donotuseSAFARI' ---
    t = 0;
    donotuseSAFARIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    //safariText.setAlignHoriz("left");
    
    
    nextButton_warning.setSize([buttonWidth,buttonHeight])
    nextButton_warning.setPos([buttonX,buttonY])
    
    // setup some python lists for storing info about the mouseWarning
    // current position of the mouse:
    mouseWarning.x = [];
    mouseWarning.y = [];
    mouseWarning.leftButton = [];
    mouseWarning.midButton = [];
    mouseWarning.rightButton = [];
    mouseWarning.time = [];
    mouseWarning.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    donotuseSAFARIComponents = [];
    donotuseSAFARIComponents.push(key_resp_12);
    donotuseSAFARIComponents.push(welcomeText);
    donotuseSAFARIComponents.push(nextButton_warning);
    donotuseSAFARIComponents.push(mouseWarning);
    
    for (const thisComponent of donotuseSAFARIComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function donotuseSAFARIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'donotuseSAFARI' ---
    // get current time
    t = donotuseSAFARIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp_12* updates
    if (t >= 0.0 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }

    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *welcomeText* updates
    if (t >= 0.0 && welcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeText.tStart = t;  // (not accounting for frame time here)
      welcomeText.frameNStart = frameN;  // exact frame index
      
      welcomeText.setAutoDraw(true);
    }

    
    // *nextButton_warning* updates
    if (t >= 0.2 && nextButton_warning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_warning.tStart = t;  // (not accounting for frame time here)
      nextButton_warning.frameNStart = frameN;  // exact frame index
      
      nextButton_warning.setAutoDraw(true);
    }

    // *mouseWarning* updates
    if (t >= 2 && mouseWarning.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseWarning.tStart = t;  // (not accounting for frame time here)
      mouseWarning.frameNStart = frameN;  // exact frame index
      
      mouseWarning.status = PsychoJS.Status.STARTED;
      mouseWarning.mouseClock.reset();
      prevButtonState = mouseWarning.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseWarning.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseWarning.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_warning]) {
            if (obj.contains(mouseWarning)) {
              gotValidClick = true;
              mouseWarning.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseWarning.getPos();
            mouseWarning.x.push(_mouseXYs[0]);
            mouseWarning.y.push(_mouseXYs[1]);
            mouseWarning.leftButton.push(_mouseButtons[0]);
            mouseWarning.midButton.push(_mouseButtons[1]);
            mouseWarning.rightButton.push(_mouseButtons[2]);
            mouseWarning.time.push(mouseWarning.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of donotuseSAFARIComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function donotuseSAFARIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'donotuseSAFARI' ---
    for (const thisComponent of donotuseSAFARIComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseWarning.x) {  psychoJS.experiment.addData('mouseWarning.x', mouseWarning.x[0])};
    if (mouseWarning.y) {  psychoJS.experiment.addData('mouseWarning.y', mouseWarning.y[0])};
    if (mouseWarning.leftButton) {  psychoJS.experiment.addData('mouseWarning.leftButton', mouseWarning.leftButton[0])};
    if (mouseWarning.midButton) {  psychoJS.experiment.addData('mouseWarning.midButton', mouseWarning.midButton[0])};
    if (mouseWarning.rightButton) {  psychoJS.experiment.addData('mouseWarning.rightButton', mouseWarning.rightButton[0])};
    if (mouseWarning.time) {  psychoJS.experiment.addData('mouseWarning.time', mouseWarning.time[0])};
    if (mouseWarning.clicked_name) {  psychoJS.experiment.addData('mouseWarning.clicked_name', mouseWarning.clicked_name[0])};
    
    // the Routine "donotuseSAFARI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var generalInstructions2Components;
function generalInstructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'generalInstructions2' ---
    t = 0;
    generalInstructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    generalInstructionsText_2.setPos([xAxisCenter, 0]);
    generalInstructionsText_2.setHeight(instructionTextSize);
    generalInstructionsText_2.setAlignHoriz("left");
    
    // setup some python lists for storing info about the mouseInstructions
    // current position of the mouse:
    mouseInstructions.x = [];
    mouseInstructions.y = [];
    mouseInstructions.leftButton = [];
    mouseInstructions.midButton = [];
    mouseInstructions.rightButton = [];
    mouseInstructions.time = [];
    mouseInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    generalInstructions2Components = [];
    generalInstructions2Components.push(generalInstructionsText_2);
    generalInstructions2Components.push(nextButton_Instructions);
    generalInstructions2Components.push(mouseInstructions);
    
    for (const thisComponent of generalInstructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function generalInstructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'generalInstructions2' ---
    // get current time
    t = generalInstructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *generalInstructionsText_2* updates
    if (t >= 0.0 && generalInstructionsText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      generalInstructionsText_2.tStart = t;  // (not accounting for frame time here)
      generalInstructionsText_2.frameNStart = frameN;  // exact frame index
      
      generalInstructionsText_2.setAutoDraw(true);
    }

    
    // *nextButton_Instructions* updates
    if (t >= 0.2 && nextButton_Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_Instructions.tStart = t;  // (not accounting for frame time here)
      nextButton_Instructions.frameNStart = frameN;  // exact frame index
      
      nextButton_Instructions.setAutoDraw(true);
    }

    // *mouseInstructions* updates
    if (t >= 2 && mouseInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions.tStart = t;  // (not accounting for frame time here)
      mouseInstructions.frameNStart = frameN;  // exact frame index
      
      mouseInstructions.status = PsychoJS.Status.STARTED;
      mouseInstructions.mouseClock.reset();
      prevButtonState = mouseInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_Instructions]) {
            if (obj.contains(mouseInstructions)) {
              gotValidClick = true;
              mouseInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseInstructions.getPos();
            mouseInstructions.x.push(_mouseXYs[0]);
            mouseInstructions.y.push(_mouseXYs[1]);
            mouseInstructions.leftButton.push(_mouseButtons[0]);
            mouseInstructions.midButton.push(_mouseButtons[1]);
            mouseInstructions.rightButton.push(_mouseButtons[2]);
            mouseInstructions.time.push(mouseInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of generalInstructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function generalInstructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'generalInstructions2' ---
    for (const thisComponent of generalInstructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseInstructions.x) {  psychoJS.experiment.addData('mouseInstructions.x', mouseInstructions.x[0])};
    if (mouseInstructions.y) {  psychoJS.experiment.addData('mouseInstructions.y', mouseInstructions.y[0])};
    if (mouseInstructions.leftButton) {  psychoJS.experiment.addData('mouseInstructions.leftButton', mouseInstructions.leftButton[0])};
    if (mouseInstructions.midButton) {  psychoJS.experiment.addData('mouseInstructions.midButton', mouseInstructions.midButton[0])};
    if (mouseInstructions.rightButton) {  psychoJS.experiment.addData('mouseInstructions.rightButton', mouseInstructions.rightButton[0])};
    if (mouseInstructions.time) {  psychoJS.experiment.addData('mouseInstructions.time', mouseInstructions.time[0])};
    if (mouseInstructions.clicked_name) {  psychoJS.experiment.addData('mouseInstructions.clicked_name', mouseInstructions.clicked_name[0])};
    
    // the Routine "generalInstructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var normalizeFontTrials;
function normalizeFontTrialsLoopBegin(normalizeFontTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    normalizeFontTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: howManyFonts, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'normalizeFontTrials'
    });
    psychoJS.experiment.addLoop(normalizeFontTrials); // add the loop to the experiment
    currentLoop = normalizeFontTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisNormalizeFontTrial of normalizeFontTrials) {
      snapshot = normalizeFontTrials.getSnapshot();
      normalizeFontTrialsLoopScheduler.add(importConditions(snapshot));
      normalizeFontTrialsLoopScheduler.add(waitForNormalizationRoutineBegin(snapshot));
      normalizeFontTrialsLoopScheduler.add(waitForNormalizationRoutineEachFrame());
      normalizeFontTrialsLoopScheduler.add(waitForNormalizationRoutineEnd(snapshot));
      normalizeFontTrialsLoopScheduler.add(normalizeFontTrialsLoopEndIteration(normalizeFontTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function normalizeFontTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(normalizeFontTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function normalizeFontTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var blocks;
function blocksLoopBegin(blocksLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    blocks = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'blocks/blocks_1.xlsx',
      seed: undefined, name: 'blocks'
    });
    psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
    currentLoop = blocks;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBlock of blocks) {
      snapshot = blocks.getSnapshot();
      blocksLoopScheduler.add(importConditions(snapshot));
      blocksLoopScheduler.add(setBlockParametersRoutineBegin(snapshot));
      blocksLoopScheduler.add(setBlockParametersRoutineEachFrame());
      blocksLoopScheduler.add(setBlockParametersRoutineEnd(snapshot));
      const stimulus_listLoopScheduler = new Scheduler(psychoJS);
      blocksLoopScheduler.add(stimulus_listLoopBegin(stimulus_listLoopScheduler, snapshot));
      blocksLoopScheduler.add(stimulus_listLoopScheduler);
      blocksLoopScheduler.add(stimulus_listLoopEnd);
      blocksLoopScheduler.add(findFastestRoutineBegin(snapshot));
      blocksLoopScheduler.add(findFastestRoutineEachFrame());
      blocksLoopScheduler.add(findFastestRoutineEnd(snapshot));
      blocksLoopScheduler.add(blocksLoopEndIteration(blocksLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var stimulus_list;
function stimulus_listLoopBegin(stimulus_listLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stimulus_list = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, stimulus_file, passageSetOrder),
      seed: undefined, name: 'stimulus_list'
    });
    psychoJS.experiment.addLoop(stimulus_list); // add the loop to the experiment
    currentLoop = stimulus_list;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStimulus_list of stimulus_list) {
      snapshot = stimulus_list.getSnapshot();
      stimulus_listLoopScheduler.add(importConditions(snapshot));
      stimulus_listLoopScheduler.add(setTrialParametersRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(setTrialParametersRoutineEachFrame());
      stimulus_listLoopScheduler.add(setTrialParametersRoutineEnd(snapshot));
      stimulus_listLoopScheduler.add(instructions_passageRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(instructions_passageRoutineEachFrame());
      stimulus_listLoopScheduler.add(instructions_passageRoutineEnd(snapshot));
      const passage_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(passage_trialsLoopBegin(passage_trialsLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(passage_trialsLoopScheduler);
      stimulus_listLoopScheduler.add(passage_trialsLoopEnd);
      stimulus_listLoopScheduler.add(instructions_questionsRoutineBegin(snapshot));
      stimulus_listLoopScheduler.add(instructions_questionsRoutineEachFrame());
      stimulus_listLoopScheduler.add(instructions_questionsRoutineEnd(snapshot));
      const question_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(question_trialsLoopBegin(question_trialsLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(question_trialsLoopScheduler);
      stimulus_listLoopScheduler.add(question_trialsLoopEnd);
      const minisurvey_trialsLoopScheduler = new Scheduler(psychoJS);
      stimulus_listLoopScheduler.add(minisurvey_trialsLoopBegin(minisurvey_trialsLoopScheduler, snapshot));
      stimulus_listLoopScheduler.add(minisurvey_trialsLoopScheduler);
      stimulus_listLoopScheduler.add(minisurvey_trialsLoopEnd);
      stimulus_listLoopScheduler.add(stimulus_listLoopEndIteration(stimulus_listLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var passage_trials;
function passage_trialsLoopBegin(passage_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    passage_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: passageCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'passage_trials'
    });
    psychoJS.experiment.addLoop(passage_trials); // add the loop to the experiment
    currentLoop = passage_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPassage_trial of passage_trials) {
      snapshot = passage_trials.getSnapshot();
      passage_trialsLoopScheduler.add(importConditions(snapshot));
      passage_trialsLoopScheduler.add(displayPassaagesRoutineBegin(snapshot));
      passage_trialsLoopScheduler.add(displayPassaagesRoutineEachFrame());
      passage_trialsLoopScheduler.add(displayPassaagesRoutineEnd(snapshot));
      passage_trialsLoopScheduler.add(passage_trialsLoopEndIteration(passage_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function passage_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(passage_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function passage_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var question_trials;
function question_trialsLoopBegin(question_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    question_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: questionCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'question_trials'
    });
    psychoJS.experiment.addLoop(question_trials); // add the loop to the experiment
    currentLoop = question_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisQuestion_trial of question_trials) {
      snapshot = question_trials.getSnapshot();
      question_trialsLoopScheduler.add(importConditions(snapshot));
      question_trialsLoopScheduler.add(displayQuestionsRoutineBegin(snapshot));
      question_trialsLoopScheduler.add(displayQuestionsRoutineEachFrame());
      question_trialsLoopScheduler.add(displayQuestionsRoutineEnd(snapshot));
      question_trialsLoopScheduler.add(question_trialsLoopEndIteration(question_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function question_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(question_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function question_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var minisurvey_trials;
function minisurvey_trialsLoopBegin(minisurvey_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    minisurvey_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: miniSurveyCount, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'minisurvey_trials'
    });
    psychoJS.experiment.addLoop(minisurvey_trials); // add the loop to the experiment
    currentLoop = minisurvey_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMinisurvey_trial of minisurvey_trials) {
      snapshot = minisurvey_trials.getSnapshot();
      minisurvey_trialsLoopScheduler.add(importConditions(snapshot));
      minisurvey_trialsLoopScheduler.add(displayMiniSurveyRoutineBegin(snapshot));
      minisurvey_trialsLoopScheduler.add(displayMiniSurveyRoutineEachFrame());
      minisurvey_trialsLoopScheduler.add(displayMiniSurveyRoutineEnd(snapshot));
      minisurvey_trialsLoopScheduler.add(minisurvey_trialsLoopEndIteration(minisurvey_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function minisurvey_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(minisurvey_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function minisurvey_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function stimulus_listLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(stimulus_list);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function stimulus_listLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function blocksLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(blocks);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function blocksLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var normiteration;
var _key_resp_8_allKeys;
var waitForNormalizationComponents;
function waitForNormalizationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'waitForNormalization' ---
    t = 0;
    waitForNormalizationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    waitFor10Secs_2.setAlignHoriz("center");
    normiteration= normalizeFontTrials.thisN;
    console.log('norm iteration', normiteration)
    yourX = gen_normalization(fontDirectories[normiteration],fontNames[normiteration],fontNames[normiteration])
    
    waitFor10Secs_2.setPos([0, 0]);
    waitFor10Secs_2.setHeight(instructionTextSize*y_scale);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    waitForNormalizationComponents = [];
    waitForNormalizationComponents.push(waitFor10Secs_2);
    waitForNormalizationComponents.push(key_resp_8);
    
    for (const thisComponent of waitForNormalizationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function waitForNormalizationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'waitForNormalization' ---
    // get current time
    t = waitForNormalizationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *waitFor10Secs_2* updates
    if (t >= 0.0 && waitFor10Secs_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      waitFor10Secs_2.tStart = t;  // (not accounting for frame time here)
      waitFor10Secs_2.frameNStart = frameN;  // exact frame index
      
      waitFor10Secs_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (waitFor10Secs_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      waitFor10Secs_2.setAutoDraw(false);
    }
    
    // *key_resp_8* updates
    if (t >= 0.0 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_8.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: [], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of waitForNormalizationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var normXsize;
var customXsize;
var HeightDif;
function waitForNormalizationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'waitForNormalization' ---
    for (const thisComponent of waitForNormalizationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    normXsize = yourX; 
    console.log('norm output',normXsize)
    // create normalized font size 
    customXsize=[]
    customXsize = Math.ceil(baseSizePixels * normXsize * passageSizeMultiplier); 
    console.log('custom norm size',customXsize)
    
    // register normalized font size (for display) in pixels
    normalized_xsizes[fontNames[normiteration]] = customXsize;
    console.log('normalized vector',normalized_xsizes)
    // estimate the height difference for Y axis shift
    HeightDif=[]
    HeightDif = ((baseSizePixels)-Math.ceil(baseSizePixels * normXsize))*2;
    
    // adjust for Y axis shift after normalization
    if (HeightDif < 0) {
            HeightDif = Math.ceil(HeightDif);
        } else {
                HeightDif = Math.floor(-HeightDif);
            }        
    heightDifferences[fontNames[normiteration]] = HeightDif;
    console.log(fontNames[normiteration],'normSize',normXsize,'height difference',HeightDif);
    
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        }
    
    key_resp_8.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blockFileName;
var dotIndex;
var blockName;
var practiceCount;
var testCount;
var blockFonts;
var practiceFonts;
var blockFontLabels;
var blockFontCount;
var repFontTrials;
var getFastestFont;
var blockFontsForDisplay;
var passageSetIndices;
var blockIteration;
var trialIteration;
var setBlockParametersComponents;
function setBlockParametersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setBlockParameters' ---
    t = 0;
    setBlockParametersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // block information (get from the blocks file)
    blockFileName    = thisBlock['stimulus_file']   // name of the excel file that contains stim set for the block
    dotIndex         = blockFileName.indexOf(".");
    blockName        = blockFileName.slice(0, (dotIndex));      // remove .xlsx from the file name
    blockName        = blockName.substring(8)                  // remove "stimuli/" text from the block name
    
    // practice and test trials, fonts and their names (get from the blocks file)
    practiceCount    = thisBlock['practiceTrials']; // how many practice trials
    testCount        = thisBlock['testTrials'];     // how many test trials
    blockFonts       = thisBlock['testFonts'];  // which fonts will be used in this block as test fonts
    practiceFonts    = thisBlock['practiceFonts'] // get the practice font
    blockFontLabels  = thisBlock['fontLabels']
    blockFontLabels  = blockFontLabels.split(";")
    blockFonts       = blockFonts.split(";")
    blockFontCount   = blockFonts.length;
    repFontTrials    = testCount / blockFontCount; // these two have to be divisible
    
    getFastestFont = [];
    for (var i = 0; i < blockFontCount; i++) {
      getFastestFont[blockFonts[i]] = [0,0];
    }
    console.log('fastest fonts',getFastestFont)
    
    // reproduce block fonts in an array to match the trial count 
    // e.g. blockFonts = ["arial", "helvetica"], repFontTrials = 2
    // new block font variable: blockFonts = ["arial", "helvetica", "arial", "helvetica"];
    blockFontsForDisplay = [];
    for (var i = 0; i < repFontTrials; i++) {
      blockFontsForDisplay = blockFontsForDisplay.concat(blockFonts);
    }
    
    // counterbalance order of font weights
    blockFontsForDisplay   = balancedLatinSquare(blockFontsForDisplay,PID);
    // ["arial", "helvetica", "arial", "helvetica"]
    // ["arial", "arial", "helvetica", "helvetica"] = (group 'A') = (PID = 0)
    // ["arial","helvetica", "helvetica", "arial"] = (group 'B') = (PID = 1) etc. 
    
    // add the practice font to the beginning of the counterbalanced font order
    blockFontsForDisplay.unshift(practiceFonts); 
    console.log("displayed fonts")
    console.log(blockFontsForDisplay)
    // counterbalance order of passage sets
    passageSetIndices = range(1,testCount);
    passageSetOrder   = balancedLatinSquare(passageSetIndices,PID);
    
    // always show the practice trial (0 index) the first, so we concatenate the latin-square
    // balanced array to 0. 
    passageSetOrder.unshift(0);
    
    // block iteration index
    blockIteration = thisBlock.thisN;
    
    // initiate/reset trial iteration index
    trialIteration = -1;
    
    // keep track of which components have finished
    setBlockParametersComponents = [];
    
    for (const thisComponent of setBlockParametersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setBlockParametersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setBlockParameters' ---
    // get current time
    t = setBlockParametersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setBlockParametersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setBlockParametersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setBlockParameters' ---
    for (const thisComponent of setBlockParametersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setBlockParameters" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trialproperties;
var passageCount;
var questionCount;
var miniSurveyCount;
var randomizePassages;
var randomizeQuestions;
var rand_po;
var rand_qo;
var rand_mo;
var trialType;
var setTrialParametersComponents;
function setTrialParametersRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setTrialParameters' ---
    t = 0;
    setTrialParametersClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup trial parameters
    trialproperties = thisStimulus_list["trialproperties"] // cell that indicates the number of passages and questions
    trialproperties = trialproperties.split(";") 
    //passage counts
    passageCount = trialproperties[0]
    passageCount = Number(passageCount[passageCount.length-1]) // get the last element (count)
    //question counts
    questionCount = trialproperties[1]
    questionCount = Number(questionCount[questionCount.length-1]) // get the last element (count)
    //mini survey count
    miniSurveyCount = trialproperties[2]
    miniSurveyCount = Number(miniSurveyCount[miniSurveyCount.length-1]) // get the last element (count)
    //randomization of passages within a set (1= yes, 0=no)
    randomizePassages = trialproperties[3]
    randomizePassages = Number(randomizePassages[randomizePassages.length-1]) // get the last element (count)
    //randomization of questions within a set (1= yes, 0=no)
    randomizeQuestions = trialproperties[4]
    randomizeQuestions = Number(randomizeQuestions[randomizeQuestions.length-1]) // get the last element (count)
    
    // create passage index array
    rand_po = [];
    for (var i, _pj_c = 0, _pj_a = util.range(0, passageCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        rand_po.push(_pj_c+1);
    }
    
    // create question index array
    rand_qo = [];
    for (var i, _pj_c = 0, _pj_a = util.range(0, questionCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        rand_qo.push(_pj_c+1);
    }
    
    // create mini survey index array
    rand_mo = [];
    for (var i, _pj_c = 0, _pj_a = util.range(0, miniSurveyCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        rand_mo.push(_pj_c+1);
    }
    
    
    //randomize passage and question orders
    if (randomizePassages === 1) {
        rand_po = randomArrayShuffle(rand_po);
        
    }
    if (randomizeQuestions === 1) {
         rand_qo = randomArrayShuffle(rand_qo);
         rand_mo = randomArrayShuffle(rand_mo);
        }
    
    
    // what is this trial: practice or test?
    trialType = thisStimulus_list['trialType'];
    // increase trial iteration index for each iteration of stimulus list
    trialIteration = trialIteration +1;
    totalTrialIterationIndex = totalTrialIterationIndex+1;
    // keep track of which components have finished
    setTrialParametersComponents = [];
    
    for (const thisComponent of setTrialParametersComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function setTrialParametersRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setTrialParameters' ---
    // get current time
    t = setTrialParametersClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setTrialParametersComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setTrialParametersRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setTrialParameters' ---
    for (const thisComponent of setTrialParametersComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setTrialParameters" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_passageComponents;
function instructions_passageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_passage' ---
    t = 0;
    instructions_passageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    readPassageInstructions.setHeight(instructionTextSize*y_scale);
    readPassageInstructions.setAlignHoriz("left");
    
    // setup some python lists for storing info about the mouseReadingInstructions
    // current position of the mouse:
    mouseReadingInstructions.x = [];
    mouseReadingInstructions.y = [];
    mouseReadingInstructions.leftButton = [];
    mouseReadingInstructions.midButton = [];
    mouseReadingInstructions.rightButton = [];
    mouseReadingInstructions.time = [];
    mouseReadingInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions_passageComponents = [];
    instructions_passageComponents.push(readPassageInstructions);
    instructions_passageComponents.push(nextButton_readingInstructions);
    instructions_passageComponents.push(mouseReadingInstructions);
    
    for (const thisComponent of instructions_passageComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_passageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_passage' ---
    // get current time
    t = instructions_passageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *readPassageInstructions* updates
    if (t >= 0.0 && readPassageInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      readPassageInstructions.tStart = t;  // (not accounting for frame time here)
      readPassageInstructions.frameNStart = frameN;  // exact frame index
      
      readPassageInstructions.setAutoDraw(true);
    }

    
    // *nextButton_readingInstructions* updates
    if (t >= 0.2 && nextButton_readingInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_readingInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_readingInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_readingInstructions.setAutoDraw(true);
    }

    // *mouseReadingInstructions* updates
    if (t >= 2 && mouseReadingInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseReadingInstructions.tStart = t;  // (not accounting for frame time here)
      mouseReadingInstructions.frameNStart = frameN;  // exact frame index
      
      mouseReadingInstructions.status = PsychoJS.Status.STARTED;
      mouseReadingInstructions.mouseClock.reset();
      prevButtonState = mouseReadingInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseReadingInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseReadingInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_readingInstructions]) {
            if (obj.contains(mouseReadingInstructions)) {
              gotValidClick = true;
              mouseReadingInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseReadingInstructions.getPos();
            mouseReadingInstructions.x.push(_mouseXYs[0]);
            mouseReadingInstructions.y.push(_mouseXYs[1]);
            mouseReadingInstructions.leftButton.push(_mouseButtons[0]);
            mouseReadingInstructions.midButton.push(_mouseButtons[1]);
            mouseReadingInstructions.rightButton.push(_mouseButtons[2]);
            mouseReadingInstructions.time.push(mouseReadingInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_passageComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_passageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_passage' ---
    for (const thisComponent of instructions_passageComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseReadingInstructions.x) {  psychoJS.experiment.addData('mouseReadingInstructions.x', mouseReadingInstructions.x[0])};
    if (mouseReadingInstructions.y) {  psychoJS.experiment.addData('mouseReadingInstructions.y', mouseReadingInstructions.y[0])};
    if (mouseReadingInstructions.leftButton) {  psychoJS.experiment.addData('mouseReadingInstructions.leftButton', mouseReadingInstructions.leftButton[0])};
    if (mouseReadingInstructions.midButton) {  psychoJS.experiment.addData('mouseReadingInstructions.midButton', mouseReadingInstructions.midButton[0])};
    if (mouseReadingInstructions.rightButton) {  psychoJS.experiment.addData('mouseReadingInstructions.rightButton', mouseReadingInstructions.rightButton[0])};
    if (mouseReadingInstructions.time) {  psychoJS.experiment.addData('mouseReadingInstructions.time', mouseReadingInstructions.time[0])};
    if (mouseReadingInstructions.clicked_name) {  psychoJS.experiment.addData('mouseReadingInstructions.clicked_name', mouseReadingInstructions.clicked_name[0])};
    
    // the Routine "instructions_passage" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var currentTrialType;
var registerResponse;
var currentFont;
var currentFontSize;
var currentHeightDifference;
var passageIdentifier;
var itemIDIdentifier;
var currentPassage;
var itemID;
var wordCount;
var splitWord;
var passageWord;
var startTime;
var _passageKeyPress_allKeys;
var clearEventAfterChoice;
var updateFont;
var displayPassaagesComponents;
function displayPassaagesRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayPassaages' ---
    t = 0;
    displayPassaagesClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    currentTrialType = thisStimulus_list["trialType"];
    if (currentTrialType === "test") {
            registerResponse = 1; 
        } else {
                registerResponse = 0;
            }
    // call font to be displayed in this trial
    currentFont             = blockFontsForDisplay[trialIteration];  
    currentFontSize         = normalized_xsizes[currentFont];
    currentFontSize         = currentFontSize * y_scale;
    currentHeightDifference = heightDifferences[currentFont];
    console.log('currentSize', currentFontSize);
    console.log('currentFont', currentFont)
    // create the excel column name that represents the current passage text
    passageIdentifier = ('pas'+((rand_po[passage_trials.thisN]).toString())+'text')
    itemIDIdentifier = ('pas'+((rand_po[passage_trials.thisN]).toString())+'ID')
    // call the passage text 
    currentPassage = thisStimulus_list[passageIdentifier];
    // what is the item type (passage, comp question, mini survey?)
    itemID = thisStimulus_list[itemIDIdentifier];
    
    // count how many words there are in this passage
    wordCount = currentPassage;
    wordCount = wordCount.replace(/'+/g, ''); // remove apostrophes
    wordCount = wordCount.replace(/-+/g, ' '); // turn dashes into sapce
    wordCount = wordCount.replace(/\s+/g, ' '); // turn more than one space into one space
    wordCount = wordCount.replace(/[\W_]+/g," "); // turn all non alphanumericals into space
    wordCount = wordCount.split(" "); // split the text by spaces
    splitWord = wordCount;
    wordCount = wordCount.length -1 // count how many words there are (-1 because .split creates a [""] element in the array. We remove that by -1. 
    
    passageWord = splitWord.slice(0,2); // get first three words of the passage to identify it within developer mode
    
    
    
    console.log('first word and word count of passages',passageWord,wordCount)
    console.log('passage words separated',splitWord)
    // start Timer for 2 second delay during passages
    myClock.reset(); // reset the timer
    startTime = myClock.getTime();
    
    // center left 
    passageText.setAlignHoriz("left");
    console.log('currentSize', currentFontSize/y_scale);
    console.log('yscale', y_scale);
    console.log('scaledsize', currentFontSize);
    passageText.setPos([xAxisCenterPassages, currentHeightDifference]);
    passageText.setText(currentPassage);
    passageText.setFont(currentFont);
    passageText.setHeight(currentFontSize);
    passageKeyPress.keys = undefined;
    passageKeyPress.rt = undefined;
    _passageKeyPress_allKeys = [];
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless 2 seconds have elapsed since
    // the passage display
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    updateFont = 1;
    startTime = myClock.getTime();
    // setup some python lists for storing info about the mousePassage
    // current position of the mouse:
    mousePassage.x = [];
    mousePassage.y = [];
    mousePassage.leftButton = [];
    mousePassage.midButton = [];
    mousePassage.rightButton = [];
    mousePassage.time = [];
    mousePassage.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayPassaagesComponents = [];
    displayPassaagesComponents.push(passageText);
    displayPassaagesComponents.push(passageKeyPress);
    displayPassaagesComponents.push(nextButton_passage);
    displayPassaagesComponents.push(mousePassage);
    
    for (const thisComponent of displayPassaagesComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var currentTime;
function displayPassaagesRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayPassaages' ---
    // get current time
    t = displayPassaagesClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *passageText* updates
    if (t >= 0.3 && passageText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      passageText.tStart = t;  // (not accounting for frame time here)
      passageText.frameNStart = frameN;  // exact frame index
      
      passageText.setAutoDraw(true);
    }

    
    // *passageKeyPress* updates
    if (t >= 0.3 && passageKeyPress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      passageKeyPress.tStart = t;  // (not accounting for frame time here)
      passageKeyPress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { passageKeyPress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { passageKeyPress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { passageKeyPress.clearEvents(); });
    }

    if (passageKeyPress.status === PsychoJS.Status.STARTED) {
      let theseKeys = passageKeyPress.getKeys({keyList: ['space'], waitRelease: false});
      _passageKeyPress_allKeys = _passageKeyPress_allKeys.concat(theseKeys);
      if (_passageKeyPress_allKeys.length > 0) {
        passageKeyPress.keys = _passageKeyPress_allKeys[_passageKeyPress_allKeys.length - 1].name;  // just the last key pressed
        passageKeyPress.rt = _passageKeyPress_allKeys[_passageKeyPress_allKeys.length - 1].rt;
      }
    }
    
    // trying to debug the error of fullscreen-miniscreen 
    // display problem with fonts. First display does not show 
    // the font used if you don't exit fullscreen and come back
    if (updateFont === 1) {
        passageText.setText(currentPassage);
        passageText.setFont(currentFont);
        passageText.setHeight(currentFontSize);
    }
    
    currentTime = myClock.getTime();
    
    ////////////////////////////////////////////////////////
    //// MOUSE-CLICK VERSION OF TWO SECOND DELAY SCRIPT ////
    ////////////////////////////////////////////////////////
    /*
    // && (mousePassage.time.length >= 1)
    if ((currentTime - startTime > 1 ) ){ 
        startTime = myClock.getTime();
        
    
        console.log('wholemouse',mousePassage)
        mouselength= mousePassage.time.length
        mouse_tStart = mousePassage.tStart; // get the mouse component's starting second
        button_tStart = nextButton_passage.tStart // get 'next button's starting second
        validClick = mousePassage.time[mouselength-1]; // get the latest mouse click-- which terminates the loop
        if (validClick >=0){
            validClickTime = validClick + mouse_tStart + button_tStart; // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
            console.log('mouse time',validClick)
            console.log('mouse rt', validClickTime)
            continueRoutine = false
        }
    }
    */
    
    
    /////////////////////////////////////////////////////
    //// KEYBOARD VERSION OF TWO SECOND DELAY SCRIPT ////
    /////////////////////////////////////////////////////
    /*
    twoSecondElapsed = currentTime-startTime >=.2;
    if (twoSecondElapsed===true) {
        if (clearEventAfterChoice === 1){
            psychoJS.eventManager.clearEvents(); // clears keypress events after choice so that previous unrelated space 
            clearEventAfterChoice=0;             // does not terminate the loop prematurely        
            }
        
        var _pj;
        function _pj_snippets(container) {
            function in_es6(left, right) {
                if (((right instanceof Array) || ((typeof right) === "string"))) {
                    return (right.indexOf(left) > (- 1));
                } else {
                    if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                        return right.has(left);
                    } else {
                        return (left in right);
                    }
                }
            }
            container["in_es6"] = in_es6;
            return container;
        }
    
        _pj = {};
        _pj_snippets(_pj);
        keys = psychoJS.eventManager.getKeys();
        
            if (keys.length) {
                if (_pj.in_es6("space", keys)) {         
                    continueRoutine = false;            
                }
            }
     }
    */
    
    // *nextButton_passage* updates
    if (t >= 0.45 && nextButton_passage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_passage.tStart = t;  // (not accounting for frame time here)
      nextButton_passage.frameNStart = frameN;  // exact frame index
      
      nextButton_passage.setAutoDraw(true);
    }

    // *mousePassage* updates
    if (t >= 2 && mousePassage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mousePassage.tStart = t;  // (not accounting for frame time here)
      mousePassage.frameNStart = frameN;  // exact frame index
      
      mousePassage.status = PsychoJS.Status.STARTED;
      mousePassage.mouseClock.reset();
      prevButtonState = mousePassage.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mousePassage.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mousePassage.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_passage]) {
            if (obj.contains(mousePassage)) {
              gotValidClick = true;
              mousePassage.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mousePassage.getPos();
            mousePassage.x.push(_mouseXYs[0]);
            mousePassage.y.push(_mouseXYs[1]);
            mousePassage.leftButton.push(_mouseButtons[0]);
            mousePassage.midButton.push(_mouseButtons[1]);
            mousePassage.rightButton.push(_mouseButtons[2]);
            mousePassage.time.push(mousePassage.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayPassaagesComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var mouselength;
var mouse_tStart;
var button_tStart;
var validClick;
var validClickTime;
var passageReactionTime;
var wpm;
var wpmDictionary;
var currentDictionaryWpm;
var currentDictionaryDivisor;
function displayPassaagesRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayPassaages' ---
    for (const thisComponent of displayPassaagesComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(passageKeyPress.corr, level);
    }
    psychoJS.experiment.addData('passageKeyPress.keys', passageKeyPress.keys);
    if (typeof passageKeyPress.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('passageKeyPress.rt', passageKeyPress.rt);
        }
    
    passageKeyPress.stop();
    if (registerResponse === 1) {
        
        
        // get reaction time from psychopy's keyboard component
        //passageReactionTime = passageKeyPress.rt;
        
        // get reaction time from psychopy's mouse component 
        mouselength= mousePassage.time.length
        mouse_tStart = mousePassage.tStart; // get the mouse component's starting second
        button_tStart = passageText.tStart // get 'next button's starting second
        validClick = mousePassage.time[mouselength-1]; // get the latest mouse click-- which terminates the loop    
        validClickTime = validClick + mouse_tStart - button_tStart; // add mouse's and button's starting seconds to the click RT, because it starts to count RT after these are displayed
        console.log('mouse time',validClick)
        console.log('mouse rt', validClickTime)    
        passageReactionTime = validClickTime;
        // calculate words per minute
        wpm = (wordCount*(60/passageReactionTime));
        // get browser zoom
        browserZoom = window.outerWidth*100 / window.innerWidth;
        // register data
        data_zoomLevel.push(browserZoom);
        data_miniRating.push([]); // empty because there is no rating but only accuracy for comprehension questions
        data_compChoice.push([]); // empty because there is no choice during passages
        data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
        data_itemType.push("passage");  // item type (what appeared on the screen)
        data_compAccuracy.push([]); // empty because there is no accuracy during passages 
        data_blockName.push(blockName); // what is the name of this block 
        data_trialType.push(trialType); // is this a test or a practice trial
        data_passageFont.push(currentFont); // what was the font used in this passage
        data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
        data_dateTime.push(util.MonotonicClock.getDateStr()); // date and time 
        data_passageRT.push(wpm); // words per minute
    
        
        wpmDictionary = getFastestFont[currentFont];
        currentDictionaryWpm = wpmDictionary[0] + wpm;
        currentDictionaryDivisor = wpmDictionary[1] + 1;
        getFastestFont[currentFont] = [currentDictionaryWpm, currentDictionaryDivisor];
        console.log('dictionary itself', getFastestFont);
        console.log('dictionary wpm', getFastestFont[currentFont]);
        
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mousePassage.x) {  psychoJS.experiment.addData('mousePassage.x', mousePassage.x[0])};
    if (mousePassage.y) {  psychoJS.experiment.addData('mousePassage.y', mousePassage.y[0])};
    if (mousePassage.leftButton) {  psychoJS.experiment.addData('mousePassage.leftButton', mousePassage.leftButton[0])};
    if (mousePassage.midButton) {  psychoJS.experiment.addData('mousePassage.midButton', mousePassage.midButton[0])};
    if (mousePassage.rightButton) {  psychoJS.experiment.addData('mousePassage.rightButton', mousePassage.rightButton[0])};
    if (mousePassage.time) {  psychoJS.experiment.addData('mousePassage.time', mousePassage.time[0])};
    if (mousePassage.clicked_name) {  psychoJS.experiment.addData('mousePassage.clicked_name', mousePassage.clicked_name[0])};
    
    // the Routine "displayPassaages" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instructions_questionsComponents;
function instructions_questionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_questions' ---
    t = 0;
    instructions_questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.setPos([xAxisCenter, 0]);
    text_2.setHeight(instructionTextSize*y_scale);
    text_2.setAlignHoriz("left");
    // setup some python lists for storing info about the mouseQuestionInstructions
    // current position of the mouse:
    mouseQuestionInstructions.x = [];
    mouseQuestionInstructions.y = [];
    mouseQuestionInstructions.leftButton = [];
    mouseQuestionInstructions.midButton = [];
    mouseQuestionInstructions.rightButton = [];
    mouseQuestionInstructions.time = [];
    mouseQuestionInstructions.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructions_questionsComponents = [];
    instructions_questionsComponents.push(text_2);
    instructions_questionsComponents.push(nextButton_questionInstructions);
    instructions_questionsComponents.push(mouseQuestionInstructions);
    
    for (const thisComponent of instructions_questionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_questionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_questions' ---
    // get current time
    t = instructions_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *nextButton_questionInstructions* updates
    if (t >= 0.2 && nextButton_questionInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_questionInstructions.tStart = t;  // (not accounting for frame time here)
      nextButton_questionInstructions.frameNStart = frameN;  // exact frame index
      
      nextButton_questionInstructions.setAutoDraw(true);
    }

    // *mouseQuestionInstructions* updates
    if (t >= 2 && mouseQuestionInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseQuestionInstructions.tStart = t;  // (not accounting for frame time here)
      mouseQuestionInstructions.frameNStart = frameN;  // exact frame index
      
      mouseQuestionInstructions.status = PsychoJS.Status.STARTED;
      mouseQuestionInstructions.mouseClock.reset();
      prevButtonState = mouseQuestionInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseQuestionInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseQuestionInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_questionInstructions]) {
            if (obj.contains(mouseQuestionInstructions)) {
              gotValidClick = true;
              mouseQuestionInstructions.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseQuestionInstructions.getPos();
            mouseQuestionInstructions.x.push(_mouseXYs[0]);
            mouseQuestionInstructions.y.push(_mouseXYs[1]);
            mouseQuestionInstructions.leftButton.push(_mouseButtons[0]);
            mouseQuestionInstructions.midButton.push(_mouseButtons[1]);
            mouseQuestionInstructions.rightButton.push(_mouseButtons[2]);
            mouseQuestionInstructions.time.push(mouseQuestionInstructions.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructions_questionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructions_questionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_questions' ---
    for (const thisComponent of instructions_questionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseQuestionInstructions.x) {  psychoJS.experiment.addData('mouseQuestionInstructions.x', mouseQuestionInstructions.x[0])};
    if (mouseQuestionInstructions.y) {  psychoJS.experiment.addData('mouseQuestionInstructions.y', mouseQuestionInstructions.y[0])};
    if (mouseQuestionInstructions.leftButton) {  psychoJS.experiment.addData('mouseQuestionInstructions.leftButton', mouseQuestionInstructions.leftButton[0])};
    if (mouseQuestionInstructions.midButton) {  psychoJS.experiment.addData('mouseQuestionInstructions.midButton', mouseQuestionInstructions.midButton[0])};
    if (mouseQuestionInstructions.rightButton) {  psychoJS.experiment.addData('mouseQuestionInstructions.rightButton', mouseQuestionInstructions.rightButton[0])};
    if (mouseQuestionInstructions.time) {  psychoJS.experiment.addData('mouseQuestionInstructions.time', mouseQuestionInstructions.time[0])};
    if (mouseQuestionInstructions.clicked_name) {  psychoJS.experiment.addData('mouseQuestionInstructions.clicked_name', mouseQuestionInstructions.clicked_name[0])};
    
    // the Routine "instructions_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var questionIdentifier;
var labelIdentifier;
var currentQuestion;
var currentlabel;
var sliderLabels;
var labelCount;
var tickMarks;
var correctAnswer;
var shuffledLabels;
var displayQuestionsComponents;
function displayQuestionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayQuestions' ---
    t = 0;
    displayQuestionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    currentTrialType = thisStimulus_list["trialType"];
    if (currentTrialType === "test") {
            registerResponse = 1; 
        } else {
                registerResponse = 0;
            }
    
    // create the excel column name that represents the current question text
    questionIdentifier  = ('ques'+((rand_qo[question_trials.thisN]).toString())+'text')
    labelIdentifier     = ('ques'+((rand_qo[question_trials.thisN]).toString())+'label')
    itemIDIdentifier = ('ques'+((rand_po[passage_trials.thisN]).toString())+'ID')
    // call the question text 
    currentQuestion     = thisStimulus_list[questionIdentifier];
    currentlabel        = thisStimulus_list[labelIdentifier];
    // what is the item type (passage, comp question, mini survey?)
    itemID = thisStimulus_list[itemIDIdentifier];
    // change additional question text's centering and style
    questionText.setAlignHoriz('left')
    questionText.bold = true;
    pressSpaceText.setAlignHoriz('left')
    pressSpaceText.bold = true;
    clickOnCircleText.setAlignHoriz('left')
    clickOnCircleText.bold = true;
    
    
    questionText.setPos([questionsXaxis, questionsTopYaxis]);
    questionText.setText(currentQuestion);
    questionText.setHeight(questionTextSize*y_scale);
    pressSpaceText.setPos([questionsXaxis, questionsBottomYaxis]);
    pressSpaceText.setHeight(questionTextSize*y_scale);
    clickOnCircleText.setPos([questionsXaxis, (questionsTopYaxis * 2)]);
    clickOnCircleText.setHeight(questionTextSize*y_scale*1.15);
    questionSlider.reset()
    // Run 'Begin Routine' code from updateAndRegister
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels = thisStimulus_list[labelIdentifier];
    sliderLabels = sliderLabels.split(";");
    labelCount = (sliderLabels.length);
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks = range(1,labelCount);
    
    // get the correct answer which always should be the last label
    correctAnswer = sliderLabels[labelCount-1]; // -1 because index starts with 0
    // shuffle slider labels after you get the correct answer
    shuffledLabels = randomArrayShuffle(sliderLabels)
    // display shuffled labels as tick marks 
    questionSlider.setLabels(shuffledLabels);
    // change ticks of the slider
    questionSlider.setTicks(tickMarks);    
    // change font of the slider text
    questionSlider.setFontSize(questionTextSize*y_scale);
    // adjust slider's position and size
    questionSlider._pos = sliderPosition;
    questionSlider._size = sliderSize;
    
    // change slider's color and marker properties
    questionSlider._lineColor = "black";
    questionSlider._tickColor = "white";
    questionSlider._markerColor = "white";
    questionSlider._tickSize= 15;
    questionSlider._markerSize_px = 7;
    
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    
    // align texts
    
    // setup some python lists for storing info about the mouseComprehension
    // current position of the mouse:
    mouseComprehension.x = [];
    mouseComprehension.y = [];
    mouseComprehension.leftButton = [];
    mouseComprehension.midButton = [];
    mouseComprehension.rightButton = [];
    mouseComprehension.time = [];
    mouseComprehension.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayQuestionsComponents = [];
    displayQuestionsComponents.push(questionText);
    displayQuestionsComponents.push(pressSpaceText);
    displayQuestionsComponents.push(clickOnCircleText);
    displayQuestionsComponents.push(questionSlider);
    displayQuestionsComponents.push(nextButton_comprehension);
    displayQuestionsComponents.push(mouseComprehension);
    
    for (const thisComponent of displayQuestionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var compChoice;
function displayQuestionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayQuestions' ---
    // get current time
    t = displayQuestionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *questionText* updates
    if (t >= 0.0 && questionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionText.tStart = t;  // (not accounting for frame time here)
      questionText.frameNStart = frameN;  // exact frame index
      
      questionText.setAutoDraw(true);
    }

    
    // *pressSpaceText* updates
    if (t >= 0.0 && pressSpaceText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressSpaceText.tStart = t;  // (not accounting for frame time here)
      pressSpaceText.frameNStart = frameN;  // exact frame index
      
      pressSpaceText.setAutoDraw(true);
    }

    
    // *clickOnCircleText* updates
    if (t >= 0.0 && clickOnCircleText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickOnCircleText.tStart = t;  // (not accounting for frame time here)
      clickOnCircleText.frameNStart = frameN;  // exact frame index
      
      clickOnCircleText.setAutoDraw(true);
    }

    
    // *questionSlider* updates
    if (t >= 0.0 && questionSlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      questionSlider.tStart = t;  // (not accounting for frame time here)
      questionSlider.frameNStart = frameN;  // exact frame index
      
      questionSlider.setAutoDraw(true);
    }

    compChoice = questionSlider.getRating();
    
    
    // *nextButton_comprehension* updates
    if ((questionSlider.rating) && nextButton_comprehension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_comprehension.tStart = t;  // (not accounting for frame time here)
      nextButton_comprehension.frameNStart = frameN;  // exact frame index
      
      nextButton_comprehension.setAutoDraw(true);
    }

    // *mouseComprehension* updates
    if ((questionSlider.rating) && mouseComprehension.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseComprehension.tStart = t;  // (not accounting for frame time here)
      mouseComprehension.frameNStart = frameN;  // exact frame index
      
      mouseComprehension.status = PsychoJS.Status.STARTED;
      mouseComprehension.mouseClock.reset();
      prevButtonState = mouseComprehension.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseComprehension.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseComprehension.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_comprehension]) {
            if (obj.contains(mouseComprehension)) {
              gotValidClick = true;
              mouseComprehension.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { 
            _mouseXYs = mouseComprehension.getPos();
            mouseComprehension.x.push(_mouseXYs[0]);
            mouseComprehension.y.push(_mouseXYs[1]);
            mouseComprehension.leftButton.push(_mouseButtons[0]);
            mouseComprehension.midButton.push(_mouseButtons[1]);
            mouseComprehension.rightButton.push(_mouseButtons[2]);
            mouseComprehension.time.push(mouseComprehension.mouseClock.getTime());
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayQuestionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var compChoiceText;
var compAccuracy;
function displayQuestionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayQuestions' ---
    for (const thisComponent of displayQuestionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('questionSlider.response', questionSlider.getRating());
    psychoJS.experiment.addData('questionSlider.rt', questionSlider.getRT());
    if (registerResponse === 1) {
        // get the selected option among the labels
        compChoiceText = shuffledLabels[compChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
        // check if selected answer matches the correct answer
        if (correctAnswer === compChoiceText) {
                compAccuracy = 1;
                console.log("CORRECT ANSWER TO COMP")
                
            } else {
                compAccuracy = 0;
                console.log("WRONG ANSWER TO COMP")
            }
        accuracyTotal[0] = accuracyTotal[0] + compAccuracy
        accuracyTotal[1] = accuracyTotal[1] + 1 
        // get browser zoom
        browserZoom = window.outerWidth*100 / window.innerWidth;
        // register data
        data_zoomLevel.push(browserZoom);
        data_miniRating.push([]); // empty because there is no rating but only accuracy for comprehension questionsdata_compChoice.push(compChoiceText); // empty because there is no choice during passages
        data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
        data_itemType.push("comperehension");  // item type (what appeared on the screen)
        data_compAccuracy.push(compAccuracy); // empty because there is no accuracy during passages 
        data_blockName.push(blockName); // what is the name of this block 
        data_trialType.push(trialType); // is this a test or a practice trial
        data_passageFont.push(currentFont); // what was the font used in this passage
        data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
        data_dateTime.push(util.MonotonicClock.getDateStr()); // date and time 
        data_passageRT.push([]); // words per minute
        data_compChoice.push(compChoiceText) // chosen option is registered as text
    }
    
    
    
    
    
    
    
    
    
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseComprehension.x) {  psychoJS.experiment.addData('mouseComprehension.x', mouseComprehension.x[0])};
    if (mouseComprehension.y) {  psychoJS.experiment.addData('mouseComprehension.y', mouseComprehension.y[0])};
    if (mouseComprehension.leftButton) {  psychoJS.experiment.addData('mouseComprehension.leftButton', mouseComprehension.leftButton[0])};
    if (mouseComprehension.midButton) {  psychoJS.experiment.addData('mouseComprehension.midButton', mouseComprehension.midButton[0])};
    if (mouseComprehension.rightButton) {  psychoJS.experiment.addData('mouseComprehension.rightButton', mouseComprehension.rightButton[0])};
    if (mouseComprehension.time) {  psychoJS.experiment.addData('mouseComprehension.time', mouseComprehension.time[0])};
    if (mouseComprehension.clicked_name) {  psychoJS.experiment.addData('mouseComprehension.clicked_name', mouseComprehension.clicked_name[0])};
    
    // the Routine "displayQuestions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var miniSurveyIdentifier;
var currentMiniQuestion;
var currentMiniLabel;
var displayMiniSurveyComponents;
function displayMiniSurveyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'displayMiniSurvey' ---
    t = 0;
    displayMiniSurveyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    currentTrialType = thisStimulus_list["trialType"];
    if (currentTrialType === "test") {
            registerResponse = 1; 
        } else {
                registerResponse = 0;
            }
    
    // create the excel column name that represents the current question text
    miniSurveyIdentifier  = ('mini'+((rand_mo[minisurvey_trials.thisN]).toString())+'text')
    labelIdentifier     = ('mini'+((rand_mo[minisurvey_trials.thisN]).toString())+'label')
    itemIDIdentifier = ('mini'+((rand_mo[passage_trials.thisN]).toString())+'ID')
    // call the question text 
    currentMiniQuestion = thisStimulus_list[miniSurveyIdentifier];
    currentMiniLabel    = thisStimulus_list[labelIdentifier];
    // what is the item type (passage, comp question, mini survey?)
    itemID = thisStimulus_list[itemIDIdentifier];
    // change additional question text's centering and style
    miniSurveyText.setAlignHoriz('left')
    miniSurveyText.bold = true;
    pressMiniSpaceText.setAlignHoriz('left')
    pressMiniSpaceText.bold = true;
    clickOnCircleText_2.setAlignHoriz('left')
    clickOnCircleText_2.bold = true;
    
    miniSurveyText.setPos([questionsXaxis, questionsTopYaxis]);
    miniSurveyText.setText(currentMiniQuestion);
    miniSurveyText.setHeight(questionTextSize*y_scale);
    pressMiniSpaceText.setPos([questionsXaxis, questionsBottomYaxis]);
    pressMiniSpaceText.setText('The <next page> button will appear below after your choice. Please press the button below to continue after your choice.');
    pressMiniSpaceText.setHeight(questionTextSize*y_scale);
    clickOnCircleText_2.setPos([questionsXaxis, (questionsTopYaxis * 2)]);
    clickOnCircleText_2.setHeight(questionTextSize*y_scale*1.15);
    miniSurveySlider.reset()
    // Run 'Begin Routine' code from updateAndRegisterMini
    ////////////////////////////////////////////////
    //// UPDATE SLIDER LABELS, SIZE, COLOR ETC. ////
    ////////////////////////////////////////////////
    
    // get slider labels from the excel file
    sliderLabels = thisStimulus_list[labelIdentifier];
    sliderLabels = sliderLabels.split(";");
    labelCount = (sliderLabels.length);
    // create tick marks so that data registry makes sense in terms of scores of each 
    // label: start from 1 not 0.
    tickMarks = range(1,labelCount);
    
    // display shuffled labels as tick marks 
    miniSurveySlider.setLabels(sliderLabels);
    // change ticks of the slider
    miniSurveySlider.setTicks(tickMarks);    
    // change font of the slider text
    miniSurveySlider.setFontSize(questionTextSize*y_scale);
    // adjust slider's position and size
    miniSurveySlider._pos = sliderPosition;
    miniSurveySlider._size = sliderSize;
    // change slider's color and marker properties
    miniSurveySlider._lineColor = "black";
    miniSurveySlider._tickColor = "white";
    miniSurveySlider._markerColor = "white";
    miniSurveySlider._tickSize= 60;
    miniSurveySlider._markerSize_px = 40;
    
    //////////////////////////////////////////////////////////////////
    // initiate input monitoring for conditional next-page command 
    // (next page command does not work unless participant chose one of 
    // the labels. 
    psychoJS.eventManager.clearEvents();
    clearEventAfterChoice = 1;
    // setup some python lists for storing info about the mouseMiniSurvey
    mouseMiniSurvey.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    displayMiniSurveyComponents = [];
    displayMiniSurveyComponents.push(miniSurveyText);
    displayMiniSurveyComponents.push(pressMiniSpaceText);
    displayMiniSurveyComponents.push(clickOnCircleText_2);
    displayMiniSurveyComponents.push(miniSurveySlider);
    displayMiniSurveyComponents.push(nextButton_mini);
    displayMiniSurveyComponents.push(mouseMiniSurvey);
    
    for (const thisComponent of displayMiniSurveyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function displayMiniSurveyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'displayMiniSurvey' ---
    // get current time
    t = displayMiniSurveyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *miniSurveyText* updates
    if (t >= 0.0 && miniSurveyText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      miniSurveyText.tStart = t;  // (not accounting for frame time here)
      miniSurveyText.frameNStart = frameN;  // exact frame index
      
      miniSurveyText.setAutoDraw(true);
    }

    
    // *pressMiniSpaceText* updates
    if (t >= 0.0 && pressMiniSpaceText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressMiniSpaceText.tStart = t;  // (not accounting for frame time here)
      pressMiniSpaceText.frameNStart = frameN;  // exact frame index
      
      pressMiniSpaceText.setAutoDraw(true);
    }

    
    // *clickOnCircleText_2* updates
    if (t >= 0.0 && clickOnCircleText_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickOnCircleText_2.tStart = t;  // (not accounting for frame time here)
      clickOnCircleText_2.frameNStart = frameN;  // exact frame index
      
      clickOnCircleText_2.setAutoDraw(true);
    }

    
    // *miniSurveySlider* updates
    if (t >= 0.0 && miniSurveySlider.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      miniSurveySlider.tStart = t;  // (not accounting for frame time here)
      miniSurveySlider.frameNStart = frameN;  // exact frame index
      
      miniSurveySlider.setAutoDraw(true);
    }

    compChoice = miniSurveySlider.getRating();
    /*
    if (compChoice >= 1 && compChoice <= labelCount) {
        if (clearEventAfterChoice === 1){
            psychoJS.eventManager.clearEvents(); // clears keypress events after choice so that previous unrelated space 
            clearEventAfterChoice=0;             // does not terminate the loop prematurely        
            }
        
        var _pj;
        function _pj_snippets(container) {
            function in_es6(left, right) {
                if (((right instanceof Array) || ((typeof right) === "string"))) {
                    return (right.indexOf(left) > (- 1));
                } else {
                    if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                        return right.has(left);
                    } else {
                        return (left in right);
                    }
                }
            }
            container["in_es6"] = in_es6;
            return container;
        }
    
        _pj = {};
        _pj_snippets(_pj);
        keys = psychoJS.eventManager.getKeys();
        
            if (keys.length) {
                if (_pj.in_es6("space", keys)) {         
                    continueRoutine = false;            
                }
            }
    }
    */
    
    // *nextButton_mini* updates
    if ((miniSurveySlider.rating) && nextButton_mini.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      nextButton_mini.tStart = t;  // (not accounting for frame time here)
      nextButton_mini.frameNStart = frameN;  // exact frame index
      
      nextButton_mini.setAutoDraw(true);
    }

    // *mouseMiniSurvey* updates
    if ((miniSurveySlider.rating) && mouseMiniSurvey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseMiniSurvey.tStart = t;  // (not accounting for frame time here)
      mouseMiniSurvey.frameNStart = frameN;  // exact frame index
      
      mouseMiniSurvey.status = PsychoJS.Status.STARTED;
      mouseMiniSurvey.mouseClock.reset();
      prevButtonState = mouseMiniSurvey.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseMiniSurvey.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseMiniSurvey.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [nextButton_mini]) {
            if (obj.contains(mouseMiniSurvey)) {
              gotValidClick = true;
              mouseMiniSurvey.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of displayMiniSurveyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function displayMiniSurveyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'displayMiniSurvey' ---
    for (const thisComponent of displayMiniSurveyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('miniSurveySlider.response', miniSurveySlider.getRating());
    psychoJS.experiment.addData('miniSurveySlider.rt', miniSurveySlider.getRT());
    if (registerResponse === 1) {
    
        // get the selected option among the labels
        compChoiceText = sliderLabels[compChoice-1]; // -1 because label index starts with 0, tick mark starts with 1. 
    
        // get browser zoom
        browserZoom = window.outerWidth*100 / window.innerWidth;
        // register data
        data_zoomLevel.push(browserZoom);
        data_compChoice.push(compChoiceText) // chosen option is registered as text
        data_itemID.push(itemID); // item ID is the unique ID assigned to each stimulus displayed on the screen
        data_itemType.push("minisurvey");  // item type (what appeared on the screen)
        data_compAccuracy.push([]); // empty because there is no accuracy during passages 
        data_miniRating.push(compChoice) // rating of the likert scale
        data_blockName.push(blockName); // what is the name of this block 
        data_trialType.push(trialType); // is this a test or a practice trial
        data_passageFont.push(currentFont); // what was the font used in this passage
        data_totalTrialIndex.push(totalTrialIterationIndex); // what is the trial number (total across all blocks)
        data_dateTime.push(util.MonotonicClock.getDateStr()); // date and time 
        data_passageRT.push([]); // words per minute
    
    }
    
    
    
    
    
    
    
    
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouseMiniSurvey.getPos();
    _mouseButtons = mouseMiniSurvey.getPressed();
    psychoJS.experiment.addData('mouseMiniSurvey.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseMiniSurvey.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseMiniSurvey.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseMiniSurvey.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseMiniSurvey.rightButton', _mouseButtons[2]);
    if (mouseMiniSurvey.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouseMiniSurvey.clicked_name', mouseMiniSurvey.clicked_name[0]);}
    // the Routine "displayMiniSurvey" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var averageFontWpm;
var fontWpm;
var fontDivisior;
var fontAverageWpm;
var maxWPM;
var minWPM;
var maxIndex;
var minIndex;
var fastestFont;
var fastestFontLabel;
var slowestFont;
var slowestFontLabel;
var findFastestComponents;
function findFastestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'findFastest' ---
    t = 0;
    findFastestClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    currentDictionaryWpm = + wpm; 
    currentDictionaryDivisor =  + 1;
    averageFontWpm = []
    wpmDictionary = []
    fontWpm = []
    fontDivisior = []
    fontAverageWpm = []
    
    for (var i = 0; i < blockFontCount; i++) {
      wpmDictionary = getFastestFont[blockFonts[i]];
      fontWpm = wpmDictionary[0];
      fontDivisior = wpmDictionary[1];
      fontAverageWpm = fontWpm / fontDivisior;
      averageFontWpm[i] = fontAverageWpm;
    }
    
    console.log('avg wpm array',averageFontWpm);
    maxWPM = []
    minWPM = []
    maxIndex = []
    minIndex = []
    
    
    maxWPM = Math.max(...averageFontWpm);
    minWPM = Math.min(...averageFontWpm);
    
    maxIndex = averageFontWpm.indexOf(maxWPM);
    minIndex = averageFontWpm.indexOf(minWPM);
    
    fastestFont = blockFonts[maxIndex];  // using calculated fastest font
    fastestFontLabel = blockFontLabels[maxIndex];
    console.log('fastest wpm',maxWPM);
    console.log('fastest font',fastestFont);
    console.log('fastest font label',fastestFontLabel)
    
    slowestFont = blockFonts[minIndex];  // using calculated fastest font
    slowestFontLabel = blockFontLabels[minIndex];
    console.log('slowest wpm',minWPM);
    console.log('slowest font',slowestFont);
    console.log('slowest font label',slowestFontLabel)  
    // keep track of which components have finished
    findFastestComponents = [];
    
    for (const thisComponent of findFastestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function findFastestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'findFastest' ---
    // get current time
    t = findFastestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of findFastestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function findFastestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'findFastest' ---
    for (const thisComponent of findFastestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "findFastest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iterationCountTrials;
var writeDataToFileComponents;
function writeDataToFileRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'writeDataToFile' ---
    t = 0;
    writeDataToFileClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from writeToFile
    // write trial by trial data
    trialColumNames = ["trialNo","itemID" ,"blockName", "trialType", "FontName", "wordsPerMinute", "comprehensionAccuracy", "comprehensionChoice","miniSurveyRating"];
    iterationCountTrials = data_totalTrialIndex.length;
    
    // add headers right above the data 
    psychoJS.experiment.addData("dateTime", "dateTime")
    psychoJS.experiment.addData(trialColumNames[0], trialColumNames[0]);
    psychoJS.experiment.addData("subid", "subid")
    psychoJS.experiment.addData("counterbalanceGroup", "counterbalanceGroup")
    psychoJS.experiment.addData(trialColumNames[1], trialColumNames[1]);
    psychoJS.experiment.addData(trialColumNames[2], trialColumNames[2]);
    psychoJS.experiment.addData(trialColumNames[3], trialColumNames[3]);
    psychoJS.experiment.addData(trialColumNames[4], trialColumNames[4]);
    psychoJS.experiment.addData(trialColumNames[5], trialColumNames[5]);
    psychoJS.experiment.addData(trialColumNames[6], trialColumNames[6]);
    psychoJS.experiment.addData(trialColumNames[7], trialColumNames[7]);
    psychoJS.experiment.addData(trialColumNames[8], trialColumNames[8]);
    psychoJS.experiment.addData("X_Scale", "X_Scale");
    psychoJS.experiment.addData("Y_Scale", "Y_Scale");
    psychoJS.experiment.addData("IsFullScreen", "IsFullScreen")
    psychoJS.experiment.addData("window_width", "window_width")
    psychoJS.experiment.addData("window_height", "window_height")
    psychoJS.experiment.addData("browser", "browser")
    psychoJS.experiment.addData("browserZoomLevel", "browserZoomLevel")
    psychoJS.experiment.nextEntry();
    
    // write data in long format
    for (var i, _pj_c = 0, _pj_a = util.range(0, iterationCountTrials), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        psychoJS.experiment.addData("dateTime", data_dateTime[i])
        psychoJS.experiment.addData(trialColumNames[0], data_totalTrialIndex[i]);
        psychoJS.experiment.addData("subid", participantCode)
        psychoJS.experiment.addData("counterbalanceGroup", thisGroup.group)
        psychoJS.experiment.addData(trialColumNames[1], data_itemID[i]);
        psychoJS.experiment.addData(trialColumNames[2], data_blockName[i]);
        psychoJS.experiment.addData(trialColumNames[3], data_trialType[i]);
        psychoJS.experiment.addData(trialColumNames[4], data_passageFont[i]);
        psychoJS.experiment.addData(trialColumNames[5], data_passageRT[i]);
        psychoJS.experiment.addData(trialColumNames[6], data_compAccuracy[i]);
        psychoJS.experiment.addData(trialColumNames[7], data_compChoice[i]);
        psychoJS.experiment.addData(trialColumNames[8], data_miniRating[i]);
        thisExp.addData("X_Scale", x_scale);
        thisExp.addData("Y_Scale", y_scale);
        psychoJS.experiment.addData("IsFullScreen", psychoJS.window._windowAlreadyInFullScreen)
        psychoJS.experiment.addData("window_width", psychoJS.window._size[0])
        psychoJS.experiment.addData("window_height", psychoJS.window._size[1])
        psychoJS.experiment.addData("browser", psychoJS._browser)
        psychoJS.experiment.addData("browserZoomLevel", data_zoomLevel[i])
        psychoJS.experiment.nextEntry();
    }
    // keep track of which components have finished
    writeDataToFileComponents = [];
    
    for (const thisComponent of writeDataToFileComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function writeDataToFileRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'writeDataToFile' ---
    // get current time
    t = writeDataToFileClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of writeDataToFileComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function writeDataToFileRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'writeDataToFile' ---
    for (const thisComponent of writeDataToFileComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "writeDataToFile" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var accuracyPercentage;
var thanksText;
var fastestFontText;
var fastestWpmText;
var accuracyText;
var furtherQuestionText;
var formLinkText;
var wholeFinalInstruction;
var finalInstructionsComponents;
function finalInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'finalInstructions' ---
    t = 0;
    finalInstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    accuracyPercentage = Math.round((accuracyTotal[0] / accuracyTotal[1]) * 100)
    
    thanksText = "Thank you for participating!\n\n"
    
    fastestFontText = "You read fastest in " + fastestFontLabel + " font.\n\n";
    
    fastestWpmText = "You've read " + (Math.round(maxWPM)).toString() + " words per minute with your fastest font.\n\n";
    
    accuracyText = "You've had " + accuracyPercentage.toString() + "% accuracy on the comprehension questions.\n\n";
    
    furtherQuestionText = "﻿﻿If you have further questions, email team@readabilitylab.xyz\n﻿\n"
    
    formLinkText = "Thank you for your interest in the Virtual Readability Lab! Join our mailing list to be informed of future readability tests and research conducted by the VRL and The Readability Consortium. Simply click on the form link below."
    
    
    wholeFinalInstruction = thanksText+fastestFontText+fastestWpmText+accuracyText+furtherQuestionText+formLinkText;
    finish_instructions.setAlignHoriz('left');
    
    
    formLinkX = hsize * 3/10;
    formLinkY = 0-(vsize * 3/10);
    
    websiteLinkX = 0-(hsize * 3/10);
    websiteLinkY = 0-(vsize * 3/10);
    finish_instructions.setPos([xAxisCenter, 0]);
    finish_instructions.setText(wholeFinalInstruction);
    finish_instructions.setHeight(instructionTextSize*y_scale);
    // setup some python lists for storing info about the redirectMouse
    redirectMouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    finalInstructionsComponents = [];
    finalInstructionsComponents.push(finish_instructions);
    finalInstructionsComponents.push(formLink);
    finalInstructionsComponents.push(websiteLink);
    finalInstructionsComponents.push(redirectMouse);
    
    for (const thisComponent of finalInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function finalInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'finalInstructions' ---
    // get current time
    t = finalInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (redirectMouse.isPressedIn(formLink)) {
        psychoJS.setRedirectUrls('https://forms.gle/CeJH17fwSuennK5i9','');
        continueRoutine= false
        }
    
    
    if (redirectMouse.isPressedIn(websiteLink)) {
        psychoJS.setRedirectUrls('https://readabilitylab.xyz','');
        continueRoutine= false
        }
        
    
    // *finish_instructions* updates
    if (t >= 0 && finish_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finish_instructions.tStart = t;  // (not accounting for frame time here)
      finish_instructions.frameNStart = frameN;  // exact frame index
      
      finish_instructions.setAutoDraw(true);
    }

    
    // *formLink* updates
    if (t >= 0.0 && formLink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      formLink.tStart = t;  // (not accounting for frame time here)
      formLink.frameNStart = frameN;  // exact frame index
      
      formLink.setAutoDraw(true);
    }

    
    // *websiteLink* updates
    if (t >= 0.0 && websiteLink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      websiteLink.tStart = t;  // (not accounting for frame time here)
      websiteLink.frameNStart = frameN;  // exact frame index
      
      websiteLink.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'finalInstructions' ---
    for (const thisComponent of finalInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = redirectMouse.getPos();
    _mouseButtons = redirectMouse.getPressed();
    psychoJS.experiment.addData('redirectMouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('redirectMouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('redirectMouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('redirectMouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('redirectMouse.rightButton', _mouseButtons[2]);
    if (redirectMouse.clicked_name.length > 0) {
      psychoJS.experiment.addData('redirectMouse.clicked_name', redirectMouse.clicked_name[0]);}
    // the Routine "finalInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
