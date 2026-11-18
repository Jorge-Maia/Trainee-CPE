import api from "./api";

export async function GetUsers() {
    const {data} = await api.get("/usuarios");
    return data;
    
}

export async function GetPerfil() {
    const {data} = await api.get("/perfil");
    return data;
}

export async function CreateUser(body) {
    const {data} = await api.post("/usuarios", body);
    return data;
    
}

export async function UpdateUsers({ id, body }) {
    const {data} = await api.put(`/usuarios/${id}`, body);
    return data;
    
}

export async function DeleteUsers({ id }) {
    const {data} = await api.delete(`/usuarios/${id}`);
    return data;
    
}

//entidade 2

export async function GetSessoes() {
    const {data} = await api.get("/sessoes");
    return data;
}

export async function CreateSessao(body) {
    const {data} = await api.post("/sessoes", body);
    return data;
}

export async function DeleteSessao(id_usuario) {
    const {data} = await api.delete(`/sessoes/${id_usuario}`);
    return data;
}
