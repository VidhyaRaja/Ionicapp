import { createStore } from 'vuex';

export const store = createStore({
    state(){
        return {
            users:[
                {
                    user_id:'01',
                    username:'admin',
                    password:'admin'
                },
                {
                    user_id:'02',
                    username:'superadmin',
                    password:'superadmin'
                }
            ],
            tickets:[{
                id : 1,
                title: 'Bed(D00001-B1-F1-R1-B7) - Disinfect Alert',
                image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2020%2F09%2F25%2FPeytons-room-UofI-2000.jpg',
                description: 'Disinfect Alert',
                ticket_type:'Safety'
            }
            ]
        }
    },
    mutations:{
        saveUser(state:any, data){
            const newUser = {
                user_id:data.user_id,
                username:data.username,
                password:data.password
            }

            state.users.unshift(newUser);
        },
        createTicket(state, newTicketData){
            const newTicket = {
                id : new Date().toISOString(),
                title: newTicketData.title,
                image: newTicketData.imageUrl,
                description: newTicketData.description,
                ticket_type: newTicketData.ticket_type
            }

            state.tickets.unshift(newTicket);
        }
    },
    actions:{
        registerUser(context, data){
            context.commit('saveUser', data)
        },
        createTicket(context, newTicketData){
            console.log("In createTicket", context, newTicketData);
            context.commit('createTicket', newTicketData)
        }
    },
    getters:{
        users(state){
            return state.users;
        },
        user(state:any){
            return(userId:any) => {
                return state.users.find((user: { id: any; })=> user.id === userId)
            }
        },
        authentication(state){
            return(credential:any) => {
                return state.users.find((user: { username: any; password: any; }) => user.username === credential.username && user.password === credential.password) ? true:false
            }
        }
    }
})
