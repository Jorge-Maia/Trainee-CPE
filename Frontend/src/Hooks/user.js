import {useQuery, useMutation} from '@tanstack/react-query';
import { CreateUser, UpdateUsers, DeleteUsers, GetUsers } from '../services/api/endpoint';


export function useGetUser() {
    return useQuery({
        queryKey: ['users'],
        queryFn: GetUsers
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
