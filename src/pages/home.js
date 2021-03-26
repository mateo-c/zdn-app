import React, { Component } from 'react'
import axios from 'axios';
import ItemCard from '../components/ItemCard';


const token =  'eyJhbGciOiJSUzI1NiIsImtpZCI6IjRlMDBlOGZlNWYyYzg4Y2YwYzcwNDRmMzA3ZjdlNzM5Nzg4ZTRmMWUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20venVpZGVuLWFwaS12MSIsImF1ZCI6Inp1aWRlbi1hcGktdjEiLCJhdXRoX3RpbWUiOjE2MTY1MDYzNTcsInVzZXJfaWQiOiJtZlk4b2Y1a1Q4ZWRWWDlJZXJVZWExb3ZpSUEyIiwic3ViIjoibWZZOG9mNWtUOGVkVlg5SWVyVWVhMW92aUlBMiIsImlhdCI6MTYxNjUwNjM1NywiZXhwIjoxNjE2NTA5OTU3LCJlbWFpbCI6InBvc3RhbWFuQG1haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInBvc3RhbWFuQG1haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.oPycHUfeNsOixEx9tczZpQe1_Fhpvb0YnmzWxL2_2Q2ZIzrZFNs2jzfFJcBh-74tv09xlNZCm3IA5gIqLhy1c2D6bgd0LQI4SAZiXFk73rZBr0WOrDVMYHRjplIa9yh4m_WfyqggVQ1RqI6C-Yd9S0x6o3nbpXNelWLWA8kTx6s_dgovf_FUdy23BOOCrjtRu3VraSdp5EOmjurosqq18ITzGPOVLP-XOD-QRZKIwPM4KiBkcv74mp-S2QSaAplB9qZtC-b28Ddbbvgq3EOxUNHhajGlxgRLKOau9FvsgeCaWCNKqSjc6Adzw0GIalAnL4anbkZJZBhonBztr4Nr0Q';

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = {
   key: "value"
};

export class home extends Component {
state = {
    items: null
}



    componentDidMount(){
        axios.get('/items',
        config )
        .then(res =>{
            console.log(res.data);
            this.setState({
                items: res.data
            })
        })
        .catch((err) =>{
            console.log(err);
        })
    }

    render() {
        let itemsDisponibles = this.state.items ? (
            this.state.items.map(item => <ItemCard key={item.itemId} item={item}/>)
            ) : (
            <p>Loading...</p>
            );
        
        return (
            <div>
                <h1>Home</h1>
                <ul>
                {itemsDisponibles}
                </ul>
            </div>
        )
    }
}

export default home
