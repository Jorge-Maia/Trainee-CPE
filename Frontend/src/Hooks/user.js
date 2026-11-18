import {useQuery, useMutation} from '@tanstack/react-query';
import { CreateUser, UpdateUsers, DeleteUsers, GetUsers, GetPerfil } from '../services/api/endpoint';
import api from '../services/api/api';

export function useLogin() {
  return useMutation({
    mutationFn: async ({ email, senha }) => {
      const { data } = await api.post('/login', { email, senha });
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
}

export function useGetUser() {
    return useQuery({
        queryKey: ['users'],
        queryFn: GetUsers
    });
}

export function useGetPerfil() {
    return useQuery({
        queryKey: ['perfil'],
        queryFn: GetPerfil
    });
}

export function useCreateUser({
    onSuccess= () => {},
     onError=()=>{}}
)
{ 
    return useMutation({mutationFn: CreateUser, onSuccess, onError});
}

export function useUpdateUser({
    onSuccess= () => {},
     onError=()=>{}}
)
{ 
    return useMutation({mutationFn: UpdateUsers, onSuccess, onError});
}

export function useDeleteUser({
    onSuccess= () => {},
     onError=()=>{}}
)
{ 
    return useMutation({mutationFn: DeleteUsers, onSuccess, onError});
}
