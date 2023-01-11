import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'amfe-flexible'

import './assets/main.css'
import { 
  InputNumber,
  Icon,
  Button,
  Picker, 
  Popup, 
  OverLay,
  Cell,
} from '@nutui/nutui';


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(InputNumber);
app.use(Icon);
app.use(Button);
app.use(Picker);
app.use(Popup);
app.use(OverLay);
app.use(Cell);

app.mount('#app')
