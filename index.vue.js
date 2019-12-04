var app2 = new Vue({
  el: "#app",
  data: {
    pergunta: "",
    falsa: "",
    perguntas: [
        "Grandioso e magnífico sistema que tudo sabe, me diga",
        "Inteligente e super poderoso computador, saberia me dizer",
        "Se você for esperto o quanto imaginam de você, me diga ",
        "Por favor, poderia me informar, se possível, ",
        "Oh sabio e grandioso sistema inteligente de comunicação",
        "Poderoso, inteligente e magnífico sistema de informação",
        "Magnífico e poderoso programa de computador, me diga",
        "Me diga, ó grandioso sistema automatizado de computação",
        "Super poderoso e inteligente computador, consegue me dizer",
        "Esperto, potente, robusto e inteligente sistema, ",
        "Poderoso e inteligente computador, me informe"
    ],
    enter: false,
    frase: "",
    width: 0,
    sclass: "",
    respostaFinal: ""
  },
  created() {
    this.$nextTick(() => {
      this.$refs.pergunta.focus();
    });
  },
  mounted() {
    this.frase = this.perguntas[this.getRandomInt()];
    window.addEventListener(
      "keypress",
      function(e) {
        e.preventDefault();
        if (!this.enter) {
          this.pergunta = this.pergunta + String.fromCharCode(e.keyCode);
          this.falsa = this.frase.substr(0, this.pergunta.length);
        } else {
          this.falsa = this.falsa + String.fromCharCode(e.keyCode);
        }
        if (e.keyCode == 13) {
          this.enter = true;
        }
      }.bind(this)
    );
  },
  methods: {
    reset() {
      this.$refs.pergunta.focus();
      this.pergunta = "";
      this.falsa = "";
      this.respostaFinal = "";
      this.width = 0;
      let index = this.getRandomInt();
      this.enter = false;

      this.frase = this.perguntas[index];
    },
    getRandomInt() {
      min = 0;
      max = this.perguntas.length;
      return Math.floor(Math.random() * (max - min) + min);
    },
    responder() {
        for (let i = 0; i <= 100; i++) {
            this.width = i;
            this.sclass = "bg-" + (i <= 33 ? "danger" : (i > 33 && i <= 66 ? "primary" : "success"));
        }
        window.setTimeout(() => {
            this.respostaFinal = this.pergunta;
        }, 700
        );
    }
  }
});
