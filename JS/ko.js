var vm = new CharacterViewModel;

function Character(name, title, count, url, codename){
  this.name = name;
  this.title = ko.observable(title);
  this.counter = count;
  this.url = url;
  this.code = codename;
}
function CharacterViewModel() {

    this.titled = [
        { title: "Noob" },
        { title: "Beginner" },
        { title: "Amatuer" },
        { title: "Adventurer" },
        { title: "Thumping Rabit" },
        { title: "Pro" },
        { title: "Tapping Ninja" },
        { title: "GodLike" }
    ];

    // Editable data
    this.characters = ko.observableArray([
        pumpkin = new Character("Pumpkin", this.titled[0],0, "../IMG/pumpkin.png", "pumpkin" ),
        ghoul = new Character("Ghoul", this.titled[2],0, "../IMG/ghoul.png", "ghoul" ),
        ghost = new Character("Ghost", this.titled[2],0, "../IMG/ghost.png", "ghost" )
    ]);
    this.test = "Tested";

    this.pumpkin = function() {
      console.log("Test 1");
    }
    this.ghoul = function() {
      console.log("Test 2");
    }
    this.ghost = function() {
      console.log("Test 3");
    }
}
ko.applyBindings(vm);
