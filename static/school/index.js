! function init() {
    initVue();
}();

function initVue() {
    _app = new Vue({
        delimiters: ["[[", "]]"],
        el: '#app',
        data: {
            url:[
                "http://modelbucket.oss-cn-shanghai.aliyuncs.com/school/0/0.svf",
                "http://modelbucket.oss-cn-shanghai.aliyuncs.com/school/1/_3D_.svf",
                "http://modelbucket.oss-cn-shanghai.aliyuncs.com/school/full/3d.svf",
            ],
            videosrc: 'rtmp://rtmp.open.ys7.com/openlive/01c8d597e6c8453a9402fedb41e52620.hd',
            videomobile:'http://hls.open.ys7.com/openlive/01c8d597e6c8453a9402fedb41e52620.m3u8'
        },
        methods:{
            onSelectedCallback0(event) {
                console.log('构件',event.dbIdArray[0]);
            },
            onSelectedCallback1(event) {
                var self = this;
                if(event.dbIdArray[0]==430 || event.dbIdArray[0]==284){
                    loadInitialModelV1(this.url[0],self.onSelectedCallback0);
                }else if(event.dbIdArray[0]==268 || event.dbIdArray[0]==882){
                    loadInitialModelV1(this.url[1],self.onSelectedCallback0);
                }
                console.log('构件',event.dbIdArray[0]);
            }
        },
        created(){

        },
        mounted(){
            loadInitialModelV1(this.url[0],this.onSelectedCallback0);
            loadInitialModelV2(this.url[2],this.onSelectedCallback1);
            var player1 = new EZUIPlayer('player');
        }
    })
}