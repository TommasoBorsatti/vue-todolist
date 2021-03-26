
const App = new Vue (

  {
    el: '#root',

    data: {

      list:[
        "Svegliarsi alle 8:30",
        "Connettersi alla classe Boolean alle 9:30",
        "Pausella caffè 11:10",
        "Pranzo 13:15",
        "Esercizio sulla To Do list con Vue --> Right Now!"
      ],



    },

    methods: {

      deleteIt: function (i) {
        this.list.splice(i, 1);
      }

    },

  }

);
