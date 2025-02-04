import {useQuery} from '@tanstack/react-query';

import {ResponseSinglePost, getPost} from '@/api';

import type {UseQueryCustomOptions} from '@/types';
import {queryKeys} from '@/constans';

function useGetPost(
  id: number | null,
  queryOptions?: UseQueryCustomOptions<ResponseSinglePost>,
) {
  return useQuery({
    queryFn: () => getPost(Number(id)),
    queryKey: [queryKeys.POST, queryKeys.GET_POST, id],
    enabled: Boolean(id),
    ...queryOptions,
  });
}

export default useGetPost;
