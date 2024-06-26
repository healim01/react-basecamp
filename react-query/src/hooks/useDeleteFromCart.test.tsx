import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';

import { act } from 'react';
import { useDeleteFromCart } from './useDeleteFromCart';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useDeleteFromCart', () => {
  it('장바구니에서 상품을 삭제할 수 있다.', async () => {
    const { result } = renderHook(() => useDeleteFromCart(), { wrapper });

    act(() => {
      result.current.mutate(3);
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual('3');
  });
});
