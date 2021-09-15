import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#00a0ff',
        secondary: '#00caff',
        accent: '#424242',
        error: '#FF5252',
        info: '#82B1FF',
        success: '#2196F3',
        warning: '#FFC107'
      },
    },
  },
});
