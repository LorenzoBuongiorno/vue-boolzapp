new Vue({
    el: "#app",
       data:{
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        answer:[
            'davvero? non lo sapevo!',
            'ok',
            'sicuro?',
            'no non ci credo',
            'ricordati anche di pulire la casa',
            'salutami la famiglia',
            'buon anno 2007!',
        ],

        
        openChat: 0,
        temporaryText: '',
        contactSearch: '',
        messageMenu: false,
        messageClicked: 0,
        
       },



       methods: {
           chooseChat: function (index){
               this.openChat = index;
           },

           addItem: function () {

            this.contacts[this.openChat].messages.push({
                date:  dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.temporaryText,
                status: 'sent'
            }),
            this.temporaryText = "",



            setTimeout(() => {
                this.contacts[this.openChat].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: this.answer[Math.round(Math.random() * (this.answer.length - 0)) + 0],
                    status: 'recived'
                })
            }, 1000);
        },

        deleteMenu: function(index){
            this.messageMenu = !this.messageMenu;
            this.messageClicked = index;
        },
        deleteMessage: function(index){
            this.contacts[this.openChat].messages.splice(index, 1);
            this.messageMenu = false;
        },
        

        
    },

})