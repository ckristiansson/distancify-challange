"user strict"

const app = Vue.createApp({
  data() {
    return {
      passwordVisibility: false,
      repeatedPwVisibility: false,
      password: null,
      repeatedPassword: null,
    };
  },
  methods: {
    toggleVisibility(value){
      
      if(value === 'password'){
        this.passwordVisibility = !this.passwordVisibility;
      }
      else if(value === 'repeatedPassword'){
        this.repeatedPwVisibility = !this.repeatedPwVisibility;
      }
    },
  },
});

app.mount("#signup");