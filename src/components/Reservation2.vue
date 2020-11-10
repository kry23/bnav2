<template>
<div class="menu-area">
    <ul>
        <li><a href="#">Online Rezervasyon</a></li>
        <li><a href="#">

               <div>
    <div class="datepicker-trigger">
      <input
        type="text"
        id="datepicker-trigger"
        placeholder="Select dates"
        :value="formatDates(dateOne, dateTwo)"
      >

      <AirbnbStyleDatepicker
        :trigger-element-id="'datepicker-trigger'"
        :mode="'range'"
        :fullscreen-mobile="true"
        :date-one="dateOne"
        :date-two="dateTwo"
        @date-one-selected="val => { dateOne = val }"
        @date-two-selected="val => { dateTwo = val }"
      />
    </div>
  </div>
            </a></li>

       

        <li><a href="#">Misafirler</a>
        
        <ul class="dropdown-1">
            <li><a href="#">
                
                    <tr>

                        <td><span> Yetişkinler: </span></td>
                        <td>
                            <div class="" style="width: 110px;">
                                <button class="deneme" :style="{maxWidth:deneme}"  @click="subtract2()">-</button>
                                <input :value="$store.state.adultCount" type="text" style="width: 50px;">
                                <button class="deneme" :style="{maxWidth:deneme}" @click="increment2()">+</button>

                            </div>
                        </td>
                    </tr>
                </a></li>
            <li><a href="#">
                    <tr>
                        <td><span> Çocuklar:</span> </td>
                        <td>
                            <div class="" style="width: 110px;">
                                <button tabindex="0" class="deneme" :style="{maxWidth:deneme}" type="button" role="button" @click="subtract()" >-</button>
                                <input :value="$store.state.childrenCount" style="width: 50px;">
                                <button tabindex="0" class="deneme" :style="{maxWidth:deneme}" type="button" role="button" @click="increment()">+
                                </button>
                            </div>
                        </td>
                    </tr>
                </a></li>
            <div>
                <ul class="dropdown-1">

                    <li v-for="(count,index) in $store.state.childrenCount" :key="index"><a>
                            <tr>
                                <div>
                                    <td><span> {{index+1}}. Çocuk: </span></td>
                                    <td>
                                        <div class="" style="width: 110px;">
                                            <button  @click="subtractAge(index)">-</button>
                                            <input :value="$store.state.childrenAge" type="text" style="width: 50px;">
                                            <button @click="addAge(index)">+</button>

                                        </div>
                                    </td>

                                </div>
                            </tr>
                        </a></li>
                </ul>
            </div>

        </ul>
        </li>
        <li><a href="#">Fiyat Listele</a></li>
    </ul>

</div>
</template>

<script lang="ts">
import {
    Component,
    Prop,
    Vue
} from "vue-property-decorator";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import format from 'date-fns/format'
// import { FunctionalCalendar } from 'vue-functional-calendar';

@Component({
    components: {
        DatePicker,
        
    },
})
export default class Reservation2 extends Vue {


    dateFormat= 'D MMM'
      dateOne= ''
      dateTwo= ''
    maxWidth= '20px';

    increment() {
        this.$store.commit('increment')
    }
    subtract() {
        this.$store.commit('subtract')
    }
    increment2() {
        this.$store.commit('increment2')
    }
    subtract2() {
        this.$store.commit('subtract2')
    }
    subtractAge() {
        this.$store.commit('subtractAge')
    }
    addAge() {
        this.$store.commit('addAge');
    }
    addDate() {
        this.$store.commit('addDate');
    }
    dateDivide() {
        this.$store.commit('dateDivide')
    }

    get deneme(){
        return this.maxWidth;
    }
   
   formatDates(dateOne: any, dateTwo: any) {
      let formattedDates = ''
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat)
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat)
      }
      return formattedDates
    }
  }


</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto+Condensed&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 1px;

    @media all and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
}

.menu-area a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ivory;
    background: #41B883;
    height: 60px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

}

.menu-area a:hover {
    background: #8A10FF;
    color: ivory;
}

.menu-area ul {
    list-style: none;
    display: flex;
}

.menu-area li {
    position: relative;
    width: 100%;
    text-align: center;
}

.menu-area li:hover .dropdown-1>li {
    display: block;
    top: 0;
}

.dropdown-1 li {
     display: none;
    position: relative;
}

.dropdown-1 {
    
    display: flex;
    flex-direction: column;
    width: 100%;
      
    flex-wrap: nowrap;
   

    @media all and (max-width: 768px) {
        
        flex-direction: column;
         width: 100%;
        
          
    }
}
//  .dropdown-1 button {
//       max-width: 20px;
//  }





</style>
