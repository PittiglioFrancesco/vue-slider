const app = new Vue(
    {
        el: '#app',
        data: {
            counter: 0,
            photos: [
                'img/img1.jpeg',
                'img/img2.jpeg',
                'img/img3.jpeg',
                'img/img4.jpeg'
            ]
        },
        methods: {
            nextPhoto() {
                (this.counter == this.photos.length - 1) ? this.counter = 0 : this.counter++;
            },

            prevPhoto() {
                if (this.counter != 0) {
                    this.counter--;
                } else {
                    this.counter = 3;
                }
            },

            cambiaPhoto(index){
                this.counter = index;
            }
        }
    }
);