const app = new Vue({
    el:'#app',
    data: {
        paths: [{0:'telo',1:'https://telo.com'}],
        time:5,
        minurl:'',
        url:'',
        there : false,
    },
    mounted:async function(){
        // fetch('http://localhost:4030')
        // .then(response=>response.json())
        // .then((data)=>{
        //     this.paths = data;
        //     for (let i = 0; i < this.paths.length; i++) {
        //         if (window.location.hash === '#/' + this.paths[i][0]) {
        //             this.minurl = this.paths[i][0];
        //             console.log(this.minurl);
        //             this.url = this.paths[i][1];
        //             console.log(this.url);
        //             this.there = true;
        //             this.timer();
        //             return;
        //         }
        //     }
        //     this.minurl = window.location.hash;
        //     return;
        // })
        // .catch((err)=>{
        //     for (let i = 0; i < this.paths.length; i++) {
        //         if (window.location.hash === '#/' + this.paths[i][0]) {
        //             this.minurl = this.paths[i][0];
        //             console.log(this.minurl);
        //             this.url = this.paths[i][1];
        //             console.log(this.url);
        //             this.there = true;
        //             this.timer();
        //             return;
        //         }
        //     }
        //     this.minurl = window.location.hash;
        //     return;
        // });
        for (let i = 0; i < this.paths.length; i++) {
            if (window.location.hash === '#/' + this.paths[i][0]) {
                this.minurl = this.paths[i][0];
                console.log(this.minurl);
                this.url = this.paths[i][1];
                console.log(this.url);
                this.there = true;
                this.timer();
                return;
            }
        }
        this.minurl = window.location.hash;
        return;
    },
    methods:{
        geturl:function(){
            fetch('http://localhost:4000')
                .then(response => response.json())
                .then((data) => {
                    this.paths = data;
                })
                .catch((err)=>{
                    console.log(err);
                });
        },
        addurl:function(){

        },
        timer: function () {
            var a = setInterval(() => {
                if(this.time <= 0){
                    clearInterval(a);
                    document.getElementById('ahref').click();
                    return;
                }
                this.time = this.time - 1;
            }, 1000);
        },
    },
    template: `<div> 
        <p v-if="there">if not redirected automaticly in {{time}} seconds then, click <a :href=url id='ahref' >here</a> to continue </p>
        <div v-else-if="minurl != ''">url not found</div>
        <div v-else>
            <h1>enter an link to continue</h1>
            <p><strong>enter min url</strong></input></input>: https:localhost:5500/#/<input type="text" id="minurl"></p>
            <p><strong>enter url:</strong> </input></input><input type="text" id="url"></p>
            <br>
            <button @click="addurl">add</button>
        </div>
    </div>`
});

