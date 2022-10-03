const app = Vue.createApp({
    data(){
        return{
            text: '',
            confirmedText: ''
        }
    },

    methods: {
      show(){
        alert('This buttton was clicked')
      },
      inputValue(event){
        this.text = event.target.value
      },
      textInput(){
        this.confirmedText = this.text
      }
    }
})

app.mount('#assignment');