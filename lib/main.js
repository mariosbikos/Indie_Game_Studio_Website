// code.9leap.net default template
// based on enchant.js v0.7.1
var DIR_UP = 1;
var DIR_RIGHT = 2;
var DIR_LEFT = 3;
var DIR_DOWN = 0;
var RIGHT_AWARD_Y = 3;
var RIGHT_AWARD_X = 18;
var CENTER_AWARD_Y = 3;
var CENTER_AWARD_X = 16;
var LEFT_AWARD_Y = 3;
var LEFT_AWARD_X = 14;
var GROUP_PHOTO1_Y = 3;
var GROUP_PHOTO1_X = 12;
var SCREEN_GAME_SCENE_HEIGHT = 352;
var SCREEN_GAME_SCENE_WIDTH = 576;
var GAME_SCENE_WIDTH = 576;
var GAME_SCENE_HEIGHT = 576;
var dialog = 0;
var speed = 1;
var bp = 0;
var sprites_1_1 = [12, 32, 52, 54];
var sprites_1_2 = [106, 104, 84, 64];
var sprites_2_1 = [120, 140, 160, 162];
var ch_dir = 0;
var peop_talk_1 = 0;
var peop_talk_2 = 0;
var peop_talk_3 = 0;



enchant();


window.onload = function() {
    
    
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        document.body.style.background = "rgb(143,143,143) url('resources/toplogo2.png') no-repeat right top";
       

    }
    else {
        document.body.style.background = "#6dd42a";
    }
    
    
    var game = new Core(GAME_SCENE_WIDTH,GAME_SCENE_HEIGHT);
    var vid1 = document.getElementById("myVid1");
    var vid2 = document.getElementById("myVid2");
    var vid3 = document.getElementById("myVid3");
    
    function people_idle(people_sprite, sprites){
        if(Math.random() < 0.05){
            ch_dir = Math.floor(Math.random() * 4);
            if(ch_dir == 0){people_sprite.frame = sprites[ch_dir];}
            else if(ch_dir == 1){people_sprite.frame = sprites[ch_dir];}
            else if(ch_dir == 2){people_sprite.frame = sprites[ch_dir];}
            else{people_sprite.frame = sprites[ch_dir];}
        }
    }
    
    
    
    game.fps = 15;
    game.keybind(88, 'a'); //88=X for a
    game.keybind(120, 'a'); //120=x for a
    game.keybind(90, 'b'); //90=Z for b
    game.keybind(27, 'b'); //90=Z for b
    game.keybind(122, 'b'); //122=z for b
    game.keybind(65, 'left'); //a for left
    game.keybind(68, 'right'); //d for right
    game.keybind(87, 'up');  //w for up
    game.keybind(83, 'down'); //s for down

    game.preload('resources/Doctor_Sprite_by_AlbertoV.gif','resources/people_1.png','resources/people_2.png','resources/people_3.png','resources/reception_girl.png','resources/triant_sprite.png','resources/photoFallia.png','resources/bill_sprite.png','resources/photoGeorge.png','resources/photoBill.png','resources/george_sprite.png','resources/blue_poster.jpg','resources/tommies.jpg','resources/toplogo2.png','resources/black_circle.png','resources/characters.png','resources/icon.png','resources/pistateliki.png', 'resources/sprites.png', 'resources/char1.png','resources/char2.png','resources/char3.png', 'resources/floor3.png','resources/photoJohn.png','resources/photoSoto.png','resources/award_plaque.png','resources/group_photo.png');
    
    game.mapSpriteWidth = 8;
    game.mapSpriteHeight = 8;
    
    game.spriteWidth = 16;
    game.spriteHeight = 16;
    //player sprite dimensions
    game.spriteSheetWidth = 256;
    game.spriteSheetHeight = 16;
    
    // Create a Map and draw it on-screen
    var map1 = new Map(8, 8);
    var map2 = new Map(8, 8);
    var map3 = new Map(8, 8);
    var foregroundMap = new Map(8, 8);
    var player = new Sprite(game.spriteWidth, game.spriteHeight);
    var photo_John = new Sprite(160, 125);
    var photo_person1=new Sprite(160,141);
    var photo_person2=new Sprite(160,141);
    var photo_person3=new Sprite(160,141);
    var photo_doctor=new Sprite(160,141);
    var photo_Soto = new Sprite(160, 125);
    var photo_Triant = new Sprite(160, 125);
    var photo_Bill = new Sprite(160, 125);
    var photo_George = new Sprite(160, 125);
    var photo_ReceptionGirl = new Sprite(160, 125);

    photo_George.width = 0;
    photo_George.x = 50;
    photo_George.y = 50;

    photo_John.width = 0;
    photo_John.x = 50;
    photo_John.y = 50;
    
    photo_person1.width=0;
    photo_person1.x=50;
    photo_person1.y=70;
    
    photo_person2.width=0;
    photo_person2.x=50;
    photo_person2.y=70;
    
    photo_person3.width=0;
    photo_person3.x=50;
    photo_person3.y=70;
    
    photo_doctor.width=0;
    photo_doctor.x=80;
    photo_doctor.y=90;

    photo_Soto.width = 0;
    photo_Soto.x = 50;
    photo_Soto.y = 50;

    photo_Bill.width = 0;
    photo_Bill.x = 50;
    photo_Bill.y = 50;

    photo_Triant.width = 0;
    photo_Triant.x = 50;
    photo_Triant.y = 50;

    photo_ReceptionGirl.width = 0;
    photo_ReceptionGirl.x = 50;
    photo_ReceptionGirl.y = 50;

    //Create game sprites
    var award_sprite = new Sprite(350, 227);
    var group_photo_sprite = new Sprite(559, 233);
    var logo_photo_sprite = new Sprite(295, 295);
    var bluePosterPhoto = new Sprite(564, 214);
    var tommies = new Sprite(562, 208);

    award_sprite.width = 350;
    award_sprite.height = 227;
    award_sprite.visible = false;
    award_sprite.x = 0;
    award_sprite.y = 0;
    award_sprite.scaleX = 1.5;
    award_sprite.scaleY = 1.5;
    award_sprite.x = 113;
    award_sprite.y = 60;

    group_photo_sprite.width = 559;
    group_photo_sprite.height = 233;
    group_photo_sprite.visible = false;
    group_photo_sprite.x = 8.5;
    group_photo_sprite.y = 30;

    bluePosterPhoto.x = 8.5;
    bluePosterPhoto.y = 69;
    bluePosterPhoto.visible = false;
    bluePosterPhoto.width = 564;
    bluePosterPhoto.height = 214;

    tommies.x = 7;
    tommies.y = 77;
    tommies.visible = false;
    tommies.width = 562;
    tommies.height = 208;

    logo_photo_sprite.width = 295;
    logo_photo_sprite.height = 233;
    logo_photo_sprite.visible = false;
    logo_photo_sprite.x = 140.5;
    logo_photo_sprite.y = 28.5;
    
    var scene1 = new Scene();
    var scene2;
    var scene3;
    var stage1;
    var stage2;
    var stage3;
    //buttons
    var UIbuttons;
    var labelButtonA;
    var labelButtonB;
     //John sprite
    var john_npc_sprite = new Sprite(game.spriteWidth, game.spriteHeight);
    //reception girl sprite
    var receptionGirl_npc_sprite = new Sprite(game.spriteWidth, game.spriteHeight);
    //Sotiris sprite
    var sotiris_npc_sprite = new Sprite(game.spriteWidth, game.spriteHeight);
    //Triantafullia sprite
    var triant_npc_sprite = new Sprite(game.spriteWidth, game.spriteHeight);
    //Bill sprite
    var bill_npc_sprite = new Sprite(game.spriteWidth, game.spriteHeight);
    //George sprite
    var george_npc_sprite = new Sprite(game.spriteWidth, game.spriteHeight);
    var people_1_1_sprite = new Sprite(16, 18);
    var people_1_2_sprite = new Sprite(16, 18);
    var people_2_1_sprite = new Sprite(16, 18);
    var people_3_1_sprite = new Sprite(16, 18);
    


    var UIbuttons;
    var gameboyBackgroundLabel;
    var groupButtonA;
    var groupButtonB;
    var backgroundButtonA;
    var backgroundButtonB;
    var groupButtonA;
    var groupButtonB;

    var setButtons = function() {
        UIbuttons = new Group();
        groupButtonA = new Group();
        groupButtonB = new Group();
        gameboyBackgroundLabel = new Label();
        gameboyBackgroundLabel.width = SCREEN_GAME_SCENE_WIDTH;
        gameboyBackgroundLabel.height = GAME_SCENE_HEIGHT - SCREEN_GAME_SCENE_HEIGHT;
        gameboyBackgroundLabel.x = 0;
        gameboyBackgroundLabel.y = SCREEN_GAME_SCENE_HEIGHT;
        gameboyBackgroundLabel.backgroundColor = "#6dd42a";

        labelButtonA = new Label("A");
        labelButtonA.width = 50;
        labelButtonA.height = 50;
        labelButtonA.x = game.width - 2 * labelButtonA.width;
        labelButtonA.y = game.height - 156;
        labelButtonA.font = "30px Lucida Console";
        labelButtonA.color = "white";

        backgroundButtonA = new Sprite(80, 80);
        backgroundButtonA.image = game.assets["resources/black_circle.png"];
        backgroundButtonA.x = labelButtonA.x - 30;
        backgroundButtonA.y = labelButtonA.y - 25;
        backgroundButtonA.width = 80;
        backgroundButtonA.height = 80;
        backgroundButtonA.scaleX = 0.9;
        backgroundButtonA.scaleY = 0.9;

        groupButtonA.addChild(backgroundButtonA);
        groupButtonA.addChild(labelButtonA);

        labelButtonB = new Label("B");
        labelButtonB.width = 50;
        labelButtonB.height = 50;
        labelButtonB.x = game.width - 3 * labelButtonB.width - 20;
        labelButtonB.y = game.height - 96;
        labelButtonB.font = "30px Lucida Console";
        labelButtonB.color = "white";

        backgroundButtonB = new Sprite(80, 80);
        backgroundButtonB.image = game.assets["resources/black_circle.png"];
        backgroundButtonB.x = labelButtonB.x - 30;
        backgroundButtonB.y = labelButtonB.y - 25;
        backgroundButtonB.width = 80;
        backgroundButtonB.height = 80;
        backgroundButtonB.scaleX = 0.9;
        backgroundButtonB.scaleY = 0.9;

        groupButtonB.addChild(backgroundButtonB);
        groupButtonB.addChild(labelButtonB);

        UIbuttons.addChild(gameboyBackgroundLabel);
        UIbuttons.addChild(groupButtonA);
        UIbuttons.addChild(groupButtonB);
        }


    var setNPCs = function() {
            john_npc_sprite.name = "John";
            john_npc_sprite.characterClass = "CEO";
            john_npc_sprite.text = "Hi visitor!<br/>My name is John and I am the " + john_npc_sprite.characterClass + "<br/>of Flipped Horizons.<br/>This is our new Website made by <br/>Marios Bikos & Chris Tsekes!<br/>You can press the A button when you are <br/>in front of frames and certificates <br/>and learn more about us...<br/>Why don't you visit our Game Room?";
    
            john_npc_sprite.startingX = 16;
            john_npc_sprite.startingY = 14;
            john_npc_sprite.spriteOffset = 0;
    
            //Paizei me tiles anti gia pixels
            john_npc_sprite.x = john_npc_sprite.startingX * 2 * game.mapSpriteWidth;
            john_npc_sprite.y = john_npc_sprite.startingY * 2 * game.mapSpriteHeight;
    
            john_npc_sprite.direction = 0;
    
            john_npc_sprite.frame = john_npc_sprite.spriteOffset + john_npc_sprite.direction;
            john_npc_sprite.image = game.assets['resources/char1.png'];
    
            //Reception girl
            receptionGirl_npc_sprite.name = "Mary";
            receptionGirl_npc_sprite.characterClass = "Reception Girl";
            receptionGirl_npc_sprite.text = "Welcome to the Cube Athens,<br/>a new startup cluster and innovation <br/>space in the heart of the city,<br/>hosting the best of Athens innovators <br/>in the technology and making space. <br/>Flipped Horizons has it's headquarters here .";
    
            receptionGirl_npc_sprite.startingX = 5;
            receptionGirl_npc_sprite.startingY = 6;
    
            receptionGirl_npc_sprite.x = receptionGirl_npc_sprite.startingX * 2 * game.mapSpriteWidth;
            receptionGirl_npc_sprite.y = receptionGirl_npc_sprite.startingY * 2 * game.mapSpriteWidth;
    
            receptionGirl_npc_sprite.image = game.assets['resources/char2.png'];
    
    
            sotiris_npc_sprite.name = "Sotiris";
    
            sotiris_npc_sprite.characterClass = "Game Artist";
            sotiris_npc_sprite.text = "Hi!<br/>My name is Sotiris and I am a " + sotiris_npc_sprite.characterClass + "<br/>Once I was called idea printer.<br/>Then, I rapidly proved that I am a master in Arts,<br/>Color and can easily disappear <br/>into colorful shadows.";
    
            sotiris_npc_sprite.startingX = 14;
            sotiris_npc_sprite.startingY = 12;
            sotiris_npc_sprite.spriteOffset = 0;
    
            //Paizei me tiles anti gia pixels
            sotiris_npc_sprite.x = sotiris_npc_sprite.startingX * 2 * game.mapSpriteWidth;
            sotiris_npc_sprite.y = sotiris_npc_sprite.startingY * 2 * game.mapSpriteHeight;
    
            sotiris_npc_sprite.direction = 3;
    
            sotiris_npc_sprite.frame = sotiris_npc_sprite.spriteOffset + sotiris_npc_sprite.direction;
            sotiris_npc_sprite.image = game.assets['resources/char3.png'];
    
    
            triant_npc_sprite.name = "Triantafyllia";
            triant_npc_sprite.characterClass = "Game Designer";
            triant_npc_sprite.text = "Hello there!<br/>My name is " + triant_npc_sprite.name + " and I am <br/>the " + triant_npc_sprite.characterClass + " of Flipped Horizons.<br/>I talk a little, but I am wise and determined.<br/>People say that I am mysterious and seductive,<br/>with a mind focused to the feelings and <br/>psychology of the players.";
            triant_npc_sprite.startingX = 4;
            triant_npc_sprite.startingY = 12;
    
            triant_npc_sprite.spriteOffset = 0;
            triant_npc_sprite.x = triant_npc_sprite.startingX * 2 * game.mapSpriteWidth;
            triant_npc_sprite.y = triant_npc_sprite.startingY * 2 * game.mapSpriteHeight;
    
            triant_npc_sprite.direction = 3;
    
            triant_npc_sprite.frame = triant_npc_sprite.spriteOffset + triant_npc_sprite.direction;
            triant_npc_sprite.image = game.assets['resources/triant_sprite.png'];
    
            bill_npc_sprite.name = "Bill";
            bill_npc_sprite.characterClass = "CTO";
            bill_npc_sprite.text = "Hmm I have to fix that bug...where did I <br/>put that variable...hmmm.<br/>Oh! Hi visitor!<br/>I am " + bill_npc_sprite.name + " the " + bill_npc_sprite.characterClass + " of Flipped Horizons." + " <br/>People say that I am the master of The Code<br/> and the master of Technology. <br/>I cannot be found easily as I am a ninja in hiding. <br/>I loop songs and code extremely rapidly."
            bill_npc_sprite.startingX = 31;
            bill_npc_sprite.startingY = 13;
    
            bill_npc_sprite.spriteOffset = 0;
            bill_npc_sprite.x = bill_npc_sprite.startingX * 2 * game.mapSpriteWidth;
            bill_npc_sprite.y = bill_npc_sprite.startingY * 2 * game.mapSpriteHeight;
            bill_npc_sprite.direction = 3;
            bill_npc_sprite.frame = bill_npc_sprite.spriteOffset + bill_npc_sprite.direction;
            bill_npc_sprite.image = game.assets['resources/bill_sprite.png'];
    
            george_npc_sprite.name = "George";
            george_npc_sprite.characterClass = "Project Manager and Game Designer";
            george_npc_sprite.text = "Hi visitor!<br/>My name is " + george_npc_sprite.name + " and I am " + george_npc_sprite.characterClass + " <br/>Actually I am a mechanism & <br/>system structures master.<br/>I can trick you but you cannot trick me.<br/>My mind is sharp and accurate <br/>like a Samurai blade<br/>Look at all those games!<br/>Why don't you check out some of our titles?";
    
            george_npc_sprite.startingX = 29;
            george_npc_sprite.startingY = 17;
            george_npc_sprite.spriteOffset = 0;
            george_npc_sprite.x = george_npc_sprite.startingX * 2 * game.mapSpriteWidth;
            george_npc_sprite.y = george_npc_sprite.startingY * 2 * game.mapSpriteWidth;
    
            george_npc_sprite.direction = 0;
            george_npc_sprite.frame = george_npc_sprite.spriteOffset + george_npc_sprite.direction;
            george_npc_sprite.image = game.assets['resources/george_sprite.png'];
            
            
            
            people_1_1_sprite.name = "mwb";
            
            people_1_1_sprite.characterClass = "Art Sensei";
            people_1_1_sprite.text = "Wow!<br/>This place is amazing!<br/>I went upstairs and met the people<br/>behind Flipped Horizons!";

            people_1_1_sprite.startingX = 28;
            people_1_1_sprite.startingY = 12;
            

            //Paizei me tiles anti gia pixels
            people_1_1_sprite.x = people_1_1_sprite.startingX * 2 * game.mapSpriteWidth;
            people_1_1_sprite.y = people_1_1_sprite.startingY * 2 * game.mapSpriteHeight;

            
            people_1_1_sprite.frame = 12;
            people_1_1_sprite.image = game.assets['resources/characters.png'];
            
            
            people_1_2_sprite.name = "kitrinos";
            
            people_1_2_sprite.characterClass = "Art Sensei";
            people_1_2_sprite.text = "Hey!<br/>Did you know that Flipped Horizons have<br/>their own Game Room?<br/>Go visit it!It is awesome!";

            people_1_2_sprite.startingX = 28;
            people_1_2_sprite.startingY = 14;
           

            //Paizei me tiles anti gia pixels
            people_1_2_sprite.x = people_1_2_sprite.startingX * 2 * game.mapSpriteWidth;
            people_1_2_sprite.y = people_1_2_sprite.startingY * 2 * game.mapSpriteHeight;

            

            people_1_2_sprite.frame = 84;
            people_1_2_sprite.image = game.assets['resources/characters.png'];
            
            
            
            people_3_1_sprite.name = "prasinos";
            
            people_3_1_sprite.characterClass = "Art Sensei";
            people_3_1_sprite.text = "Hi!<br/>I am watching some videos from games built by Flipped Horizons!<br/>Why don't you watch them too?<br/>Just Press the A button when you are<br/>in front of a screen";

            people_3_1_sprite.startingX = 24;
            people_3_1_sprite.startingY = 2;
           

            //Paizei me tiles anti gia pixels
            people_3_1_sprite.x = people_3_1_sprite.startingX * 2 * game.mapSpriteWidth;
            people_3_1_sprite.y = people_3_1_sprite.startingY * 2 * game.mapSpriteHeight;

            

            people_3_1_sprite.frame = 328;
            people_3_1_sprite.image = game.assets['resources/characters.png'];
			
			
	    people_2_1_sprite.name = "aspros";
            
            people_2_1_sprite.characterClass = "Art Sensei";
            people_2_1_sprite.text = "ohh... Don't mind me. I am not part of this <br>awesome team. I am just the maintenance and <br>repair guy. I will leave as soon as my job is done.";

            people_2_1_sprite.startingX = 11;
            people_2_1_sprite.startingY = 18;
           

            //Paizei me tiles anti gia pixels
            people_2_1_sprite.x = people_2_1_sprite.startingX * 2 * game.mapSpriteWidth;
            people_2_1_sprite.y = people_2_1_sprite.startingY * 2 * game.mapSpriteHeight;

            

            people_2_1_sprite.frame = 140;
            people_2_1_sprite.image = game.assets['resources/characters.png'];
        }
        
        
    var setPlayer = function() {

            player.name = "Roger";
            player.characterClass = "Visitor";
            /*player.exp = 0;
            player.level = 1;
            player.gp = 100;
            player.hp = 10;
            player.maxHp = 10;
            player.mp = 0;
            player.maxMp = 0;*/
            
            player.statusLabel = new Label("");
            player.upperBar = new Label("");
            player.bottomBar = new Label("");
            player.farLeftBar = new Label("");
            player.centerBar = new Label("");
            player.rightBar = new Label("");
            player.dialogue = new Label("");
            player.dialogue.textAlign = "center";
            player.award_dialogue = new Label("");
            player.photo_caption = new Label("");
            player.photo_caption.font = "25px Lucida Console";
            player.award_dialogue.font = "30px Impact";
            player.award_dialogue.textAlign = "center";
            player.photo_caption.textAlign = "center";
            //---!!!!-----//
            player.statusLabel.width = game.width;
            player.upperBar.width = game.width - 2 * 20;
            player.bottomBar.width = game.width - 2 * 20;
            player.farLeftBar.width = 8;
            player.centerBar.width = 8;
            player.rightBar.width = 8;
            player.dialogue.width = 290;
            player.award_dialogue.width = 536;
            player.photo_caption.width = 536;
            player.photo_caption.height = 50;
            player.photo_caption.visible = false;
            //undefined=always top of the screen we are looking at
            player.statusLabel.y = 0;
            player.upperBar.y = 20;
            player.bottomBar.y = SCREEN_GAME_SCENE_HEIGHT - 20;
            player.farLeftBar.y = 20 + 10;
            player.centerBar.y = 20 + 10;
            player.rightBar.y = 20 + 10;
            player.dialogue.y = 50;
            player.award_dialogue.y = 100;
            player.photo_caption.y = SCREEN_GAME_SCENE_HEIGHT - 50;
            //GAME_SCENE_HEIGHT - 50;
            player.statusLabel.x = 0;
            player.upperBar.x = 20;
            player.bottomBar.x = 20;
            player.farLeftBar.x = 20;
            player.centerBar.x = 0.4 * SCREEN_GAME_SCENE_WIDTH;
            player.rightBar.x = SCREEN_GAME_SCENE_WIDTH - 20 - 8;
            player.dialogue.x = 0.4 * SCREEN_GAME_SCENE_WIDTH + 20;
            player.award_dialogue.x = 50;
            player.photo_caption.x = 20;
            //0;
    
            player.statusLabel.color = '#fff';
            player.upperBar.backgroundColor = '#fff';
            player.bottomBar.backgroundColor = '#fff';
            player.farLeftBar.backgroundColor = '#fff';
            player.centerBar.backgroundColor = '#fff';
            player.rightBar.backgroundColor = '#fff';
            player.dialogue.color = '#fff';
            player.award_dialogue.color = '#000';
            player.photo_caption.color = '#fff'
            player.photo_caption.backgroundColor = '#000'
            player.statusLabel.backgroundColor = "#000";
    
            player.statusLabel.opacity = 0.7;
            player.upperBar.opacity = 0.7;
            player.bottomBar.opacity = 0.7;
            player.farLeftBar.opacity = 0.7;
            player.centerBar.opacity = 0.7;
            player.rightBar.opacity = 0.7;
    
            player.startingX = 8;
            player.startingY = 21;
            player.spriteOffset = 5;
    
            //Paizei me tiles anti gia pixels
            player.x = player.startingX * 2 * game.mapSpriteWidth;
            player.y = player.startingY * 2 * game.mapSpriteHeight;
            player.direction = 1;
            player.walk = 0;
    
            player.frame = player.spriteOffset + player.direction;
            player.image = new Surface(game.spriteSheetWidth, game.spriteSheetHeight);

            player.image.draw(game.assets['resources/sprites.png']);

        }

    player.square = function() {
        return {
            x: Math.floor(this.x / game.spriteWidth),
            y: Math.floor(this.y / game.spriteHeight)
        }
    }

    player.facingSquare = function() {
        var playerSquare = player.square();
        var facingSquare;
        if (player.direction === 0) {
            facingSquare = {
                x: playerSquare.x,
                y: playerSquare.y + 1
            }
        } else if (player.direction === 1) {
            facingSquare = {
                x: playerSquare.x,
                y: playerSquare.y - 1
            }
        } else if (player.direction === 2) {
            facingSquare = {
                x: playerSquare.x + 1,
                y: playerSquare.y
            }
        } else if (player.direction === 3) {
            facingSquare = {
                x: playerSquare.x - 1,
                y: playerSquare.y
            }
        }

        if (
          (facingSquare.x < 0 || facingSquare.x >= map1.width / 16) || 
          (facingSquare.y < 0 || facingSquare.y >= map1.height / 16)) 
        {
            return null;
        } else {
            return facingSquare;

        }
    }


    player.facing = function() {
        var facingSquare = player.facingSquare();
        if (!facingSquare) {
            return null;
        } else {
            //Epistrefo ton kodiko sto simeio ekeino tou xarti
            if(game.currentScene==scene1)
            {
                return map1Data[facingSquare.y][facingSquare.x];
            }

        }
    }

    player.move = function() {
        
        if(peop_talk_1 == 0){
            people_idle(people_1_1_sprite, sprites_1_1);
        }
        if(peop_talk_2 == 0){
            people_idle(people_1_2_sprite, sprites_1_2);
        }
	if(peop_talk_3 == 0){
            people_idle(people_2_1_sprite, sprites_2_1);
        }
        
        if (game.input.b) {
            player.clearStatus();
            speed=2;
            dialog = 0;
            clearvid();
            
        }
        else{
            if (bp == 1){
                speed = 2;
            }
            else{
                speed = 1;
            }
        }
        
        if (game.input.a) {
            pressingA();
        }
        
        this.frame = this.spriteOffset + this.direction * 2 + this.walk;
        if (this.isMoving) {
            this.moveBy(this.xMovement, this.yMovement);
            console.log("x= " + player.square().x + ", y=" + player.square().y);
            

            if (!(game.frame % 2)) {
                this.walk++;
                this.walk = this.walk % 2;
            }
            if ((this.xMovement && this.x % 16 === 0 || this.yMovement && this.y % 16 === 0)) {
                this.isMoving = false;
                this.walk = 1;
            }
        } else {
            this.xMovement = 0;
            this.yMovement = 0;
            if (game.input.up) {
                this.direction = DIR_UP;
                this.yMovement = -4*speed;
                dialog = 0;
                player.clearStatus();
                clearvid();
                

            } else if (game.input.right) {
                this.direction = DIR_RIGHT;
                this.xMovement = 4*speed;
                dialog = 0;
                player.clearStatus();
                clearvid();
                

            } else if (game.input.left) {
                this.direction = DIR_LEFT;
                this.xMovement = -4*speed;
                dialog = 0;
                player.clearStatus();
                clearvid();
                

            } else if (game.input.down) {
                this.direction = DIR_DOWN;
                this.yMovement = 4*speed;
                dialog = 0;
                player.clearStatus();
                clearvid();

            }

            if (this.xMovement || this.yMovement) {
                var x = this.x + (this.xMovement ? this.xMovement / Math.abs(this.xMovement) * 16 : 0);
                var y = this.y + (this.yMovement ? this.yMovement / Math.abs(this.yMovement) * 16 : 0);

            //  collision / scene
                if (game.currentScene == scene1) {
                    if (0 <= x && x < map1.width && 0 <= y && y < map1.height && !map1.hitTest(x, y)) {
                        this.isMoving = true;
                        this.move();
                    }
                } else if (game.currentScene == scene2) {
                    if (0 <= x && x < map2.width && 0 <= y && y < map2.height && !map2.hitTest(x, y)) {
                        this.isMoving = true;
                        this.move();
                    }
                } else if (game.currentScene == scene3) {
                    if (0 <= x && x < map3.width && 0 <= y && y < map3.height && !map3.hitTest(x, y)) {
                        this.isMoving = true;
                        this.move();
                    }
                }
            }

        }
    }

    player.clearStatus = function() {
        player.statusLabel.text = "";
        player.award_dialogue.text = "";
        player.dialogue.text = "";
        player.statusLabel.height = 0;
        player.upperBar.height = 0;
        player.farLeftBar.height = 0;
        player.bottomBar.height = 0;
        player.centerBar.height = 0;
        player.rightBar.height = 0;
        player.dialogue.height = 0;
        photo_person1.width=0;
        photo_person2.width=0;
        photo_person3.width=0;
	photo_doctor.width=0;
        photo_John.width = 0;
        photo_Soto.width = 0;
        photo_Bill.width = 0;
        photo_Triant.width = 0;
        photo_George.width = 0;
        photo_ReceptionGirl.width = 0;
        award_sprite.visible = false;
        group_photo_sprite.visible = false;
        bluePosterPhoto.visible = false;
        tommies.visible = false;
        logo_photo_sprite.visible = false;
        player.photo_caption.visible = false;
        peop_talk_1 = 0;
        peop_talk_2 = 0;
	peop_talk_3 = 0;
        people_3_1_sprite.frame = 328;
        
    }
    
    
    function pressingA(){
        var playerFacing = player.facing();
            //facing John,change his direction
            if (player.facingSquare().x == 16 && player.facingSquare().y == 14 && game.currentScene == scene1) {
                if (player.facingSquare().x < player.square().x) {
                    john_npc_sprite.direction = 3;
                }
                else if (player.facingSquare().x > player.square().x) {
                    john_npc_sprite.direction = 1;
                }
                else if (player.facingSquare().y > player.square().y) {
                    john_npc_sprite.direction = 2;
                }
                else if (player.facingSquare().y < player.square().y) {
                    john_npc_sprite.direction = 0;
                }
                npc1.action();
            }

            if (player.facingSquare().x == 6 && player.facingSquare().y == 6 && game.currentScene == scene1) {
                npc2.action();
            }

            if (player.facingSquare().x == 14 && player.facingSquare().y == 12 && game.currentScene == scene2) {
                if (player.facingSquare().x < player.square().x) {
                    sotiris_npc_sprite.direction = 3;
                }
                else if (player.facingSquare().x > player.square().x) {
                    sotiris_npc_sprite.direction = 1;
                }
                else if (player.facingSquare().y > player.square().y) {
                    sotiris_npc_sprite.direction = 2;
                }
                else if (player.facingSquare().y < player.square().y) {
                    sotiris_npc_sprite.direction = 0;
                }
                npc3.action();
            }
            //triantafullia direction
            if (player.facingSquare().x == 4 && player.facingSquare().y == 12 && game.currentScene == scene2) {
                if (player.facingSquare().x < player.square().x) {
                    triant_npc_sprite.direction = 3;
                }
                else if (player.facingSquare().x > player.square().x) {
                    triant_npc_sprite.direction = 1;
                }
                else if (player.facingSquare().y > player.square().y) {
                    triant_npc_sprite.direction = 2;
                }
                else if (player.facingSquare().y < player.square().y) {
                    triant_npc_sprite.direction = 0;
                }
                triant_npc_sprite.frame = triant_npc_sprite.spriteOffset + triant_npc_sprite.direction;
                npc4.action();
            }


            //Bill direction
            if (player.facingSquare().x == 31 && player.facingSquare().y == 13 && game.currentScene == scene2) {
                if (player.facingSquare().x < player.square().x) {
                    bill_npc_sprite.direction = 3;
                }
                else if (player.facingSquare().x > player.square().x) {
                    bill_npc_sprite.direction = 1;
                }
                else if (player.facingSquare().y > player.square().y) {
                    bill_npc_sprite.direction = 2;
                }
                else if (player.facingSquare().y < player.square().y) {
                    bill_npc_sprite.direction = 0;
                }
                bill_npc_sprite.frame = bill_npc_sprite.spriteOffset + bill_npc_sprite.direction;
                npc5.action();
            }


            //George direction
            if (player.facingSquare().x == george_npc_sprite.startingX && player.facingSquare().y == george_npc_sprite.startingY && game.currentScene == scene3) {
                if (player.facingSquare().x < player.square().x) {
                    george_npc_sprite.direction = 3;
                }
                else if (player.facingSquare().x > player.square().x) {
                    george_npc_sprite.direction = 1;
                }
                else if (player.facingSquare().y > player.square().y) {
                    george_npc_sprite.direction = 2;
                }
                else if (player.facingSquare().y < player.square().y) {
                    george_npc_sprite.direction = 0;
                }
                george_npc_sprite.frame = george_npc_sprite.spriteOffset + george_npc_sprite.direction;
                npc6.action();
            }
            
            
            if (player.facingSquare().x == 6 && player.facingSquare().y == 6 && game.currentScene == scene1) {
                npc2.action();
            }
            if (player.facingSquare().x == 19 && player.facingSquare().y == 1 && game.currentScene == scene3) {
                video1.action();
            }
            
            if (player.facingSquare().x == 3 && player.facingSquare().y == 1 && game.currentScene == scene3) {
                video2.action();
            }
            
            if (player.facingSquare().x == 11 && player.facingSquare().y == 1 && game.currentScene == scene3) {
                video3.action();
            }
            
            if (player.facingSquare().x == 28 && player.facingSquare().y == 12 && game.currentScene == scene1) {
                if(player.facingSquare().x<player.square().x)
                {
                    people_1_1_sprite.frame = 54;
                }
                else if(player.facingSquare().x>player.square().x)
                {
                    people_1_1_sprite.frame = 52; 
                }
                else if(player.facingSquare().y>player.square().y)
                {
                    people_1_1_sprite.frame = 32; 
                }
                else if(player.facingSquare().y<player.square().y)
                {
                    people_1_1_sprite.frame = 12;
                }
                npc7.action();
                peop_talk_1 = 1;
            }
            
            if (player.facingSquare().x == 28 && player.facingSquare().y == 14 && game.currentScene == scene1) {
                if(player.facingSquare().x<player.square().x)
                {
                    people_1_2_sprite.frame = 106;
                }
                else if(player.facingSquare().x>player.square().x)
                {
                    people_1_2_sprite.frame = 104; 
                }
                else if(player.facingSquare().y>player.square().y)
                {
                    people_1_2_sprite.frame = 84; 
                }
                else if(player.facingSquare().y<player.square().y)
                {
                    people_1_2_sprite.frame = 64;
                }
                npc8.action();
                peop_talk_2 = 1;
            }
            
	    if (player.facingSquare().x == 11 && player.facingSquare().y == 18 && game.currentScene == scene2) {
                if(player.facingSquare().x<player.square().x)
                {
                    people_2_1_sprite.frame = 162;
                }
                else if(player.facingSquare().x>player.square().x)
                {
                    people_2_1_sprite.frame = 160; 
                }
                else if(player.facingSquare().y>player.square().y)
                {
                    people_2_1_sprite.frame = 140; 
                }
                else if(player.facingSquare().y<player.square().y)
                {
                    people_2_1_sprite.frame = 120;
                }
                npc10.action();
                peop_talk_3 = 1;
            }
	    
            
            if (player.facingSquare().x == 24 && player.facingSquare().y == 2 && game.currentScene == scene3) {
                if(player.facingSquare().x<player.square().x)
                {
                    people_3_1_sprite.frame = 350;
                }
                else if(player.facingSquare().x>player.square().x)
                {
                    people_3_1_sprite.frame = 348; 
                }
                else if(player.facingSquare().y>player.square().y)
                {
                    people_3_1_sprite.frame = 328; 
                }
                else if(player.facingSquare().y<player.square().y)
                {
                    people_3_1_sprite.frame = 308;
                }
                npc9.action();
            }

            //------Player facing Awards Plaques---//
            if (player.facingSquare().y == RIGHT_AWARD_Y && player.facingSquare().x == RIGHT_AWARD_X && game.currentScene == scene1) {
                award3.action();
            }
            if (player.facingSquare().y == CENTER_AWARD_Y && player.facingSquare().x == CENTER_AWARD_X && game.currentScene == scene1) {
                award2.action();
            }
            if (player.facingSquare().y == LEFT_AWARD_Y && player.facingSquare().x == LEFT_AWARD_X && game.currentScene == scene1) {
                award1.action();
            }
            //Facing floor1 label
            if (player.facingSquare().y == 1 && player.facingSquare().x == 30 && game.currentScene == scene1) {
                floor1.action();
            }
            //Facing floor2 label
            if (player.facingSquare().y == 1 && player.facingSquare().x == 29 && game.currentScene == scene2) {
                floor2.action();
            }
            //group photo
            if (player.facingSquare().y == GROUP_PHOTO1_Y && player.facingSquare().x == GROUP_PHOTO1_X && game.currentScene == scene1) {
                photos.action(1, 30, 30, group_photo_sprite.width, group_photo_sprite.height);
            }
            //logo photo
            if (player.facingSquare().y == 3 && player.facingSquare().x == 10 && game.currentScene == scene1) {
                photos.action(2, 140.5, 28.5, logo_photo_sprite.width, logo_photo_sprite.height);
            }
            //!!!
            //photo1stfloorright
            if (player.facingSquare().y == 3 && (player.facingSquare().x == 22 || player.facingSquare().x == 23) && game.currentScene == scene2) {
                photos.action(3, bluePosterPhoto.x, bluePosterPhoto.y, bluePosterPhoto.width, bluePosterPhoto.height);
            }
            //photo1stfloorleft
            if (player.facingSquare().y == 3 && (player.facingSquare().x == 9 || player.facingSquare().x == 10) && game.currentScene == scene2) {
                photos.action(4, tommies.x, tommies.y, tommies.width, tommies.height);
            }
    }

    function clearvid(){
        vid1.style.display = "none";
        vid1.load();
        if (vid1.exitFullscreen) {
            vid1.exitFullscreen();
        } else if (vid1.mozCancelFullscreen) {
            vid1.mozCancelFullscreen();
        } else if (vid1.webkitExitFullscreen) {
            vid1.webkitExitFullscreen();
        }
        
        vid2.style.display = "none";
        vid2.load();    
        if (vid2.exitFullscreen) {
            vid2.exitFullscreen();
        } else if (vid2.mozCancelFullscreen) {
            vid2.mozCancelFullscreen();
        } else if (vid2.webkitExitFullscreen) {
            vid2.webkitExitFullscreen();
        }
        
        vid3.style.display = "none";
        vid3.load();    
        if (vid3.exitFullscreen) {
            vid3.exitFullscreen();
        } else if (vid3.mozCancelFullscreen) {
            vid3.mozCancelFullscreen();
        } else if (vid3.webkitExitFullscreen) {
            vid3.webkitExitFullscreen();
        }
    }
    var setMaps = function() {
            map1.image = game.assets['resources/pistateliki.png'];
            map2.image = game.assets['resources/pistateliki.png'];
            map3.image = game.assets['resources/floor3.png'];
            foregroundMap.image = game.assets['resources/floor3.png'];


            for (var i = 0; i < 44; i++) {
                for (var j = 0; j < 72; j++) {
                    map1Data[i][j]--;
                    map2Data[i][j]--;
                    map3Data[i][j]--;
                    foregroundMapData[i][j]--;
                    if (collisionData3[i][j] == 116) {
                        collisionData3[i][j] = 1;
                    }
                }
            }


            map1.loadData(map1Data);
            map2.loadData(map2Data);
            map3.loadData(map3Data);
            foregroundMap.loadData(foregroundMapData);
            
            map1.collisionData = collisionData1;
            map2.collisionData = collisionData2;
            map3.collisionData = collisionData3;
        }


    var npc = {
        say: function(message) {
            player.statusLabel.height =SCREEN_GAME_SCENE_HEIGHT;
            player.upperBar.height =10;
            player.bottomBar.height =10;
            player.farLeftBar.height =SCREEN_GAME_SCENE_HEIGHT-2*20-10;
            player.centerBar.height =SCREEN_GAME_SCENE_HEIGHT-2*20-10;
            player.rightBar.height =SCREEN_GAME_SCENE_HEIGHT-2*20-10;
            player.dialogue.height=SCREEN_GAME_SCENE_HEIGHT-100;
            
            //player.statusLabel.text = message;
            player.dialogue.text = message;
        }
    };
    
    var wall_award = {
        say: function(message,x_position) {
            player.statusLabel.height =SCREEN_GAME_SCENE_HEIGHT;
            player.award_dialogue.text = message;
            player.award_dialogue.width=536;
            player.award_dialogue.x=x_position;
        }
    };
    
    var photo_captions = {
        say: function(message) {
            player.statusLabel.height =SCREEN_GAME_SCENE_HEIGHT;
            player.photo_caption.text = message;
            
        }
    };
    
    var floor1 = {
        action: function () {
            //award_sprite.visible=true;
            player.photo_caption.visible = true;
            photo_captions.say("Upstairs: Floor 1-Offices");
        }
    };
    var floor2 = {
        action: function () {
            player.photo_caption.visible = true;
            photo_captions.say("Upstairs: Floor 2-Game Room");
        }
    };

    
    var award1 = {
        action: function() {
            award_sprite.visible=true;
            wall_award.say("Nomination for Best Game Award<br/>'Gaming Forum by AIT'<br/><br/>The Hub Events, 27 April, 2012",20);
        }
    };
    
    var award2 = {
        action: function() {
            award_sprite.visible=true;
            wall_award.say("3rd Place<br/>'Windows Phone 7.5 Hackathon'<br/><br/>Microsoft Hellas, 20 February, 2012",20);
        }
    };
    
    var award3 = {
        action: function() {
            award_sprite.visible=true;
            wall_award.say("1st Place Grand Winners<br/>'Windows 8 Hackathon'<br/><br/>CoLab, 23 June, 2012",20);
        }
    };
    
    var video1 = {
        action: function(){          
            vid1.style.display = "inline";
            vid1.play();
            if (vid1.requestFullscreen) {
                vid1.requestFullscreen();
            } else if (vid1.mozRequestFullScreen) {
                vid1.mozRequestFullScreen();
            } else if (vid1.webkitRequestFullscreen) {
                vid1.webkitRequestFullscreen();
            }
        }
    }
    
    
    var video2 = {
        action: function(){          
        
            vid2.play();
            if (vid2.requestFullscreen) {
                vid2.requestFullscreen();
            } else if (vid2.mozRequestFullScreen) {
                vid2.mozRequestFullScreen();
            } else if (vid2.webkitRequestFullscreen) {
                vid2.webkitRequestFullscreen();
            }
        }
    }
    
    var video3 = {
        action: function(){          
        
            vid3.play();
            if (vid3.requestFullscreen) {
                vid3.requestFullscreen();
            } else if (vid3.mozRequestFullScreen) {
                vid3.mozRequestFullScreen();
            } else if (vid3.webkitRequestFullscreen) {
                vid3.webkitRequestFullscreen();
            }
        }
    }
    
    
    var photos = {
        action: function (photoID, posX, posY, image_width, image_height) {
            player.statusLabel.height = SCREEN_GAME_SCENE_HEIGHT;
            player.photo_caption.visible = true;
            if (photoID == 1) {
                group_photo_sprite.visible = true;
                photo_captions.say("Group Session Photo 2013");
            }
            else if (photoID == 2) {
                logo_photo_sprite.visible = true;
                photo_captions.say("Official Logo-Flipped Horizons");
            }
            else if (photoID == 3) {
                bluePosterPhoto.visible = true;
                photo_captions.say("Poster 2012");
            }
            else if (photoID == 4) {
                tommies.visible = true;
                photo_captions.say("Meet the Tommies");
            }
        }
    };
     
     

    var npc1 = {
        action: function () {
            photo_John.width = 160;
            npc.say(john_npc_sprite.text);

        },
        action2: function () {
            npc.say("2nd part");
        }
    };

    var npc2 = {
        action: function () {
            photo_ReceptionGirl.width = 160;
            npc.say(receptionGirl_npc_sprite.text);

        },
        action2: function () {
            npc.say("2nd part");
        }
    };

    var npc3 = {
        action: function () {
            photo_Soto.width = 160;
            npc.say(sotiris_npc_sprite.text);

        }
    };
    //
    var npc4 = {
        action: function () {
            photo_Triant.width = 160;
            npc.say(triant_npc_sprite.text);

        }
    };

    var npc5 = {
        action: function () {
            photo_Bill.width = 160;
            npc.say(bill_npc_sprite.text);

        }
    };


    var npc6 = {
        action: function () {
            photo_George.width = 160;
            npc.say(george_npc_sprite.text);

        }
    };
    
    var npc7 = {
        action: function () {
            photo_person1.width = 160;
            npc.say(people_1_1_sprite.text);

        }
    };
    
    var npc8 = {
        action: function () {
            photo_person2.width = 160;
            npc.say(people_1_2_sprite.text);

        }
    };
    
    var npc9 = {
        action: function () {
            photo_person3.width = 160;
            npc.say(people_3_1_sprite.text);

        }
    };

    var npc10 = {
        action: function () {
            photo_doctor.width = 85;
            npc.say(people_2_1_sprite.text);

        }
    };

    

    

    game.onload = function() {
        
        photo_John.image = game.assets['resources/photoJohn.png'];
        photo_person1.image=game.assets['resources/people_1.png'];
        photo_person2.image=game.assets['resources/people_2.png'];
        photo_person3.image=game.assets['resources/people_3.png'];
	photo_doctor.image=game.assets['resources/Doctor_Sprite_by_AlbertoV.gif'];
        award_sprite.image = game.assets['resources/award_plaque.png'];
        group_photo_sprite.image = game.assets['resources/group_photo.png'];
        bluePosterPhoto.image = game.assets['resources/blue_poster.jpg'];
        tommies.image = game.assets['resources/tommies.jpg'];
        logo_photo_sprite.image = game.assets['resources/icon.png'];
        photo_Soto.image = game.assets['resources/photoSoto.png'];
        photo_Bill.image = game.assets['resources/photoBill.png'];
        photo_Triant.image = game.assets['resources/photoFallia.png'];
        photo_George.image = game.assets['resources/photoGeorge.png'];
        photo_ReceptionGirl.image = game.assets['resources/reception_girl.png'];
        
        //UI stuff
        var pad = new Pad();
        pad.x = 50;
        pad.y = GAME_SCENE_HEIGHT-156;
        pad.scaleX = 2;
        pad.scaleY = 2;


        game.makeScene1 = function() {
            scene1 = new Scene();
            stage1 = new Group();
            stage1.addChild(map1);
            stage1.addChild(john_npc_sprite);
            stage1.addChild(people_1_1_sprite);
            stage1.addChild(people_1_2_sprite);
            stage1.addChild(receptionGirl_npc_sprite);
            stage1.addChild(player);
            stage1.addChild(player.statusLabel);
            stage1.addChild(player.upperBar);
            stage1.addChild(player.bottomBar);
            stage1.addChild(player.farLeftBar);
            stage1.addChild(player.centerBar);
            stage1.addChild(player.rightBar);
            stage1.addChild(player.dialogue);

            stage1.addChild(photo_John);
            stage1.addChild(photo_ReceptionGirl);
            stage1.addChild(photo_person1);
            stage1.addChild(photo_person2);
            stage1.addChild(award_sprite);
            stage1.addChild(player.award_dialogue);
            stage1.addChild(group_photo_sprite);
            stage1.addChild(logo_photo_sprite);
            stage1.addChild(player.photo_caption);
            stage1.addChild(UIbuttons);
            stage1.addChild(pad);
            scene1.addChild(stage1);
            return scene1;

        };

        game.makeScene2 = function() {
            scene2 = new Scene();
            stage2 = new Group();
            stage2.addChild(map2);
            stage2.addChild(sotiris_npc_sprite);
            stage2.addChild(triant_npc_sprite);
            stage2.addChild(bill_npc_sprite);
	    stage2.addChild(people_2_1_sprite);

            stage2.addChild(player);
            stage2.addChild(player.statusLabel);
            stage2.addChild(player.upperBar);
            stage2.addChild(player.bottomBar);
            stage2.addChild(player.farLeftBar);
            stage2.addChild(player.centerBar);
            stage2.addChild(player.rightBar);
            stage2.addChild(player.dialogue);

            stage2.addChild(photo_Soto);
            stage2.addChild(photo_Bill);
            stage2.addChild(photo_Triant);
            stage2.addChild(award_sprite);
            stage2.addChild(player.photo_caption);
            stage2.addChild(player.award_dialogue);
            stage2.addChild(bluePosterPhoto);
            stage2.addChild(tommies);
            stage2.addChild(UIbuttons);
            stage2.addChild(pad);
	    stage2.addChild(photo_doctor);
            scene2.addChild(stage2);
            return scene2;

        };

        game.makeScene3 = function() {
            scene3 = new Scene();
            stage3 = new Group();
            stage3.addChild(map3);
            stage3.addChild(foregroundMap);
            stage3.addChild(george_npc_sprite);

            stage3.addChild(player);
            stage3.addChild(people_3_1_sprite);
            stage3.addChild(player.statusLabel);
            stage3.addChild(player.upperBar);
            stage3.addChild(player.bottomBar);
            stage3.addChild(player.farLeftBar);
            stage3.addChild(player.centerBar);
            stage3.addChild(player.rightBar);
            stage3.addChild(player.dialogue);
            stage3.addChild(photo_George);
            stage3.addChild(award_sprite);
            stage3.addChild(player.award_dialogue);
            stage3.addChild(UIbuttons);
            stage3.addChild(pad);
            
            stage3.addChild(photo_person3);
            scene3.addChild(stage3);
            return scene3;

        };


        setMaps();
        setPlayer();
        setNPCs();
        setButtons();
        game.pushScene(game.makeScene1());

        groupButtonA.addEventListener(Event.TOUCH_END, function(e) {
            pressingA();
        });

        //Button B Actions
        groupButtonB.addEventListener(Event.TOUCH_START, function(e) {
            player.clearStatus();
            speed=2;
            dialog = 0;
            clearvid();
            bp = 1;
        });
        
        groupButtonB.addEventListener(Event.TOUCH_END, function(e) {
            speed=1;
            bp = 0;
        });

        john_npc_sprite.addEventListener(Event.ENTER_FRAME,function(){
            this.frame = this.direction;
        });
        
        sotiris_npc_sprite.addEventListener(Event.ENTER_FRAME,function(){
            this.frame = this.direction;
        });
        
        
        

        
        player.addEventListener(Event.ENTER_FRAME, function() {
            
            player.move();
            
            //go from floor1(scene1)-->floor 2(scene2)
            if (player.square().x == 32 && player.square().y == 2 && game.currentScene == scene1) {
                this.moveTo(28 * 16, 2 * 16);
                this.direction = DIR_RIGHT;
                game.pushScene(game.makeScene2());

            }
            //go from floor2(scene2)-->floor 1(scene1)
            if (player.square().x == 27 && player.square().y == 2 && game.currentScene == scene2) {
                this.moveTo(32 * 16, 2 * 16);
                this.direction = DIR_LEFT;
                game.replaceScene(game.makeScene1());

            }
            //go from floor2(scene2)-->floor 3(scene3)
            if (player.square().x == 31 && player.square().y == 2 && game.currentScene == scene2) {
                this.moveTo(33 * 16, 20 * 16);
                this.direction = DIR_LEFT;
                game.replaceScene(game.makeScene3());

            }
            //go from floor3(scene3)-->floor 2(scene2)
            if (player.square().x == 34 && player.square().y == 20 && game.currentScene == scene3) {
                this.moveTo(29 * 16, 2 * 16);
                this.direction = DIR_LEFT;
                game.replaceScene(game.makeScene2());

            }
        });
        /*
        game.currentScene.addEventListener(Event.ENTER_FRAME,function(e){
            game.focusViewport();
        });*/

    };
    
    game.start();
};