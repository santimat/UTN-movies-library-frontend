import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';
import type { GetUsersProps } from '@/features/admin/types';
import { API_URL } from '@/shared/utils/constants';

const BASE_URL = `${API_URL}/users`;

export const userService = {
  getUsers: async (filters: GetUsersProps) => {
    const url = new URL(BASE_URL);
    Object.entries(filters).forEach(([key, value]) => {
      if (value != '') {
        url.searchParams.append(
          key,
          key === 'page' ? String(+value - 1) : String(value)
        );
      }
    });

    try {
      const res = await fetch(url, {
        credentials: 'include',
      });
      handleResponseErrors(res);
      const { content, page } = await res.json();
      return {
        users: content,
        currentPage: page.number + 1,
        totalPages: page.totalPages,
        totalElements: page.totalElements,
      };
    } catch (err) {
      throw handleFetchErrors(err);
    }
  },
  updateUserRole: async (userId: number, role: string) => {
    try {
      const res = await fetch(`${BASE_URL}/${userId}`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      });
      handleResponseErrors(res);
      const updatedUser = await res.json();
      return updatedUser;
    } catch (err) {
      throw handleFetchErrors(err);
    }
  },
};
