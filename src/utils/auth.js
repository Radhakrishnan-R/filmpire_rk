import axios from "axios";


const tmdbApiKey = "2aa5d79c4682e4f1c21ed2b6b71264b7";

export const tmdbAuth = axios.create({
    baseURL:  `https://api.themoviedb.org/3`,
    params: {
        api_key: tmdbApiKey,
    }
});

export const createToken = async () => {
    try {
        const {data} = await tmdbAuth.get(`/authentication/token/new`);

        const token = data.request_token;
        

        if(data.success){
            
            localStorage.setItem("request_token", token);

            window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
            
        }
    } catch (error) {
        
    }
}

export const createSessionId = async () => {
    const token = localStorage.getItem("request_token");
    try {
        if(token){
            const {data: {session_id}} = await tmdbAuth.post(`/authentication/session/new`, {request_token: token});
            
            localStorage.setItem("session_id", session_id);

            return session_id;

        }
    } catch (error) {
        
    }

    

}