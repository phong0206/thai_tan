/* eslint-disable @typescript-eslint/dot-notation */
import axios, { AxiosRequestConfig } from 'axios';
import { USER_TOKEN, API_URL } from '../utils/config';

interface Props {
  email?: string,
  password?: string,
  name?: string,
  token?: string
  categoryName?: string,
  categoryId?: string,
  unitId?: string,
  file?: File,
  image?: string,
  content?: string,
  title?: string
}
export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10 * 1000,
  validateStatus: (status) => status < 500,
});

export const apiProtected = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10 * 1000,
  validateStatus: (status) => status < 500,
});

export const apiProtectedUploadFile = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 10 * 1000,
  validateStatus: (status) => status < 500,
});

//user
export const login = async ({ email, password }: Props) => {
  try {
    const res = await api.post(
      '/user/auth/login',
      {
        email,
        password,
      },
      { withCredentials: true });
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const register = async ({ email, password, name }: Props) => {
  try {
    const res = await api.post(
      '/user/auth/register',
      {
        email,
        password,
        name,
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const logout = async () => {
  try {
    const res = await apiProtected.post('/logout');
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const forgotPassword = async (email: Props) => {
  try {
    const res = await api.post('/forgot-password', email);
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const me = async () => {
  try {
    const res = await apiProtected.get('/user/auth/profile');
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

//category 
export const getAllCategories = async () => {
  try {
    const res = await api.get('/category/get-all-categories');
    return res;
  } catch (e) {
    return { error: 'server_error' };
  }
};

//unit 

export const getUnitsAndCategory = async () => {
  try {
    const res = await api.get('/unit/get-all-unit');
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const getUnitsByCategoryId = async (categoryId: Props) => {
  try {
    const res = await api.post(
      '/unit/get-all-unit-by-categoryid',
      {
        categoryId
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

//blog

export const uploadBlog = async ({ file, content, title, unit }) => {
  const formData = new FormData();
  formData.append('photo', file);
  formData.append('content', content);
  formData.append('title', title);
  formData.append('unitId', unit);

  try {
    const res = await apiProtectedUploadFile.post('/blog/auth/create-blog', formData, {
      withCredentials: true,
    });
    console.log('Response:', res);
    return res.data;
  } catch (e) {
    console.error('Error:', e);
    return { error: 'server_error' };
  }
};

export const getAllBlogs = async () => {
  try {
    const res = await api.get('/blog/auth/get-all-blogs');
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const getDetailBlog = async (slug: string) => {
  try {
    const res = await api.get(`/blog/auth/detail-blog/${slug}`);
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};
// export const getAllSlugs = async () => {
//   try {
//     const res = await api.get('/blog/auth/get-all-slugs');
//     return res.data;
//   } catch (e) {
//     return { error: 'server_error' };
//   }
// };

export const getBlogByCategoryId = async (categoryId: Props) => {
  try {
    const res = await api.post(
      '/blog/auth/get-all-blogs-by-category',
      {
        categoryId
      },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (e) {
    return { error: 'server_error' };
  }
};

export const setAccessToken = (token: Props) => {
  apiProtected.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  apiProtectedUploadFile.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
