
const App = new Vue (

  {
    el: '#root',

    data: {

      list:[
        "Svegliarsi alle 8:30",
        "Connettersi alla classe Boolean alle 9:30",
        "Pausella caffè 11:10",
        "Pranzo 13:15",
        "Fare la To Do list con Vue --> Right Now!"
      ],

      newItem: "",

    },

    methods: {

      //Funzione che cancella al click sulla x:
      deleteIt: function (i) {
        this.list.splice(i, 1);
      },

      //Funzione che aggiunge al click sul button E al KeyUp su Enter:
      addIt: function() {
        if (this.newItem != "") {
          this.list.push(this.newItem);
          this.newItem = "";
        }
      },

    },

  }

);
