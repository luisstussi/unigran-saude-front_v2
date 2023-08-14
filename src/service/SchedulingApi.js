import axios from "axios";

const userToken = JSON.parse(sessionStorage.getItem('USER_TOKEN'));

class SchedulingAPI{
    constructor(){
        this.instance = axios.create({
            //baseURL: 'https://050f-200-199-220-74.ngrok.io',
            baseURL: 'http://192.168.32.177:3000',
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsIm5hbWUiOiJHdXN0YXZvIEZyZWl0YXMiLCJlbWFpbCI6Imd1c3Rhdm9AZ21haWwuY29tIn0.ZD597fTVwTzn5GKBfiiil60Y8Pbndqw2pjtBWn9O-Wc`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }    
        })
    }

    createScheduling(data){
        return this.instance.post('/agendamento', data)
    }

    listSchedulings(dateStart, dateEnd){

        // inicio=2023-02-01&fim=2023-03-01

        if(dateStart && dateEnd){
            return this.instance.get(`/agendamento?inicio=${dateStart}&fim=${dateEnd}`);  
        } else{
            return this.instance.get(`/agendamento`);
        }
        
    }

    deleteScheduling(schedulingId){
        return this.instance.post(`/agendamento/${schedulingId}`)
    }

    updateScheduling(schedulingId, data){
        return this.instance.post(`/agendamento/${schedulingId}/update`, data)
    }
}


export default new SchedulingAPI();