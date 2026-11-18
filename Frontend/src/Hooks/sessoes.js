import { useQuery, useMutation } from '@tanstack/react-query';
import { GetSessoes, CreateSessao, DeleteSessao } from '../services/api/endpoint';

export function useGetSessoes() {
    return useQuery({
        queryKey: ['sessoes'],
        queryFn: GetSessoes
    });
}

export function useCreateSessao({
    onSuccess = () => {},
    onError = () => {} }
)
{
    return useMutation({ mutationFn: CreateSessao, onSuccess, onError });
}

export function useDeleteSessao({
    onSuccess = () => {},
    onError = () => {} }
)
{
    return useMutation({ mutationFn: DeleteSessao, onSuccess, onError });
}
