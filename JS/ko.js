document
var vm = new CharacterViewModel;
var char;
var titles;
//Titles/Levels 
titles = [
  "Noob",
  "Beginner",
  "Amatuer",
  "Adventurer",
  "Thumping Rabit",
  "Pro",
  "Tapping Ninja",
  "GodLike"
];

//Model
function Character(data) {
  this.name = ko.observable(data.name);
  this.counter = ko.observable(data.counter);
  this.url = ko.observable(data.url);
  this.levels = ko.observableArray(data.title);
  this.title = ko.computed(function() {
    var title;
    var clicks = this.counter();
    if (clicks < 5) {
      title = "Noob";
    }else if(clicks < 10) {
      title = "Beginner" 
    }else if(clicks < 15) {
      title = "Amatuer" 
    }else if(clicks < 20) {
      title = "Adventurer" 
    }else if(clicks < 25) {
      title = "Thumping Rabit" 
    }else if(clicks < 30) {
      title = "Pro" 
    }else if(clicks < 35) {
      title = "Tapping Ninja" 
    }else{
      title = "GodLike" 
    }
    return title;
  },this);
}

//ViewModel
function CharacterViewModel() {
  var self = this;

  char = [
    {
    name: 'Ghost',
    counter: 0,
    url: '../IMG/ghost.png',
    levels: titles
    },
    {
    name: 'Ghoul',
    counter: 0,
    url: '../IMG/ghoul.png',
    levels: titles
    },
    {
    name: 'Pumpkin',
    counter: 0,
    url: '../IMG/pumpkin.png',
    levels: titles
    }
  ];

  this.charList = ko.observableArray([]);
  char.forEach(function(chars) {
    self.charList.push( new Character(chars) );
  });

  this.currentChar = ko.observable( this.charList()[0]);
  this.setChar = function(clickedchar) {
    self.currentChar(clickedchar);
  };

  this.Counter = function() {
    this.counter(this.counter() + 1);
  };
}
ko.applyBindings(vm);
