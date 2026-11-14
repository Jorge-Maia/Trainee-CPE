import api from "./api";

export async function GetUsers() {
    const {data} = await api.get("/users");
    return data;
    
}

export async function CreateUser(body) {
    const {data} = await api.post("/users", body);
    return data;
    
}

export async function UpdateUsers(id,body) {
    const {data} = await api.put(`/users:${id}`, body);
    return data;
    
}

export async function DeleteUsers(id) {
    const {data} = await api.delete(`/users:${id}`);
    return data;
    
}

//entidade 2
