const app = new Vue({
    el: '#app',
    data: {
        name: 'rahul',
        age : 19,
        website : 'www.google.com',
        webtag: '<p>telo</p>',
        x:0,
        y:0,
    },
    methods: {
        h1h: function(){
            return 'good morning ' + this.name;
        },
        add: function(a=1){
            this.age += a;
        },
        sub: function (a=1){
            this.age -= a;
        },
        updatepos: function (event,a){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        aclick : function (){
            alert('you click me');
        },
        logname: function (){
            console.log('helo');
        }
    },
    template: `
        <div style="display: block;">
            <p>{{ h1h() }}</p>
            <a v-on:click.prevent='aclick' :href='website' >helo</a>
            <p v-html='webtag'></p>
            <input type='text' v-on:keyup.alt.enter='logname' v-model='name' />
            <button v-on:dblclick='add(10)'>double click to add 10</button>
            <button v-on:dblclick='sub(10)'>double click to sub 10</button>
            <button v-on:click='add(1)'>add 1</button>
            <button v-on:click='sub(1)'>sub 1</button>
            <button v-on:click.once='sub(1)'>sub 1 once</button>
            <p class='nosel' >age : {{age}}</p>
            <div v-on:mousemove='updatepos' id="canvas">{{x}}, {{y}}</div>
        </div>
    `,
});

const app1 = new Vue({
    el: '#app1',
    data: {
        age: 20,
        a:1,
        b:1,
        red:false,
    },
    methods:{
        switchc:function(){
            this.red = !this.red;
        }
    },
    computed: {
        addA: function () {
            console.log('a is runing');
            return this.age + this.a;
        },
        addB: function () {
            console.log('b is running');
            return this.age + this.b;
        },
    },
});

 