import { API_URL } from '@/shared/utils/constants';
import { handleFetchErrors } from '@/shared/utils/handleFetchErrors';
import { handleResponseErrors } from '@/shared/utils/handleResponseErrors';

const BASE_URL = `${API_URL}/users`;

export const userService = {
  fetchUsers: async () => {
    try {
      const res = await fetch(`${BASE_URL}`);
      handleResponseErrors(res);
      const data = await res.json();
      return data;
    } catch (err) {
      throw handleFetchErrors(err);
    }
  },
};
