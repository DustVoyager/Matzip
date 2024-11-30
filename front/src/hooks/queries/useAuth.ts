import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {postSignup} from '../../api/auth';
import {AxiosError} from 'axios';

type ResponseError = AxiosError<{
  statusCOde: string;
  message: string;
  error: string;
}>;

type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, ResponseError, TVariables, unknown>,
  'mutationFn'
>;

function useSignup(mutationOptions?: UseMutationCustomOptions) {
  return useMutation({
    mutationFn: postSignup,
    ...mutationOptions,
  });
}
