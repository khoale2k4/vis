import axios, { AxiosResponse } from "axios";


export interface createUserInfo {
  fullName: string;
  email: string;
  password: string;
  address?: string;
  phone?: string
}

export interface updateUserInfo {
  name: string;
  address?: string;
  phone?: string;
}

export interface changePasswordInfo {

}

export interface loginInfo {
  username: string;
  password: string;
}

export interface refreshTokenInfo {
  refreshToken: string;
}

export interface createCompanyInfo {
  // payment information: 
  name: string;
  description: string;
  limit: number;
}

export interface upgradeCompanyInfo {
  // optional
}

export interface updateCompanyInfo {
  name: string;
  description: string;
}

export interface createDepartmentInfo {
  name: string;
  description: string;
  companyId: string;

}

export interface addUserToCompanyInfo {
  employeeEmail: string;
  companyId: string;
}

export interface updateDepartmentNameInfo {
  departmentId: string;
  name: string;
}

export interface createUserOfDepartmentInfo {
  userId: string;
  departmentId: string;
}

export interface getUserOfDepartmentInfo {
  userId: string;
  departmentId: string;
}

export interface updateUserOfDepartmentInfo {
  userId: string;
  departmentId: string;
  isManager: boolean;
}

export class User {
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://113.161.103.139/alphastorage/user';

  }
  async signup(info: createUserInfo) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/signUp`, info);
      const data = response.data;
      return { result: data.result, success: data.success, status: response.status };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data.success, message: error?.response?.data.message, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async updateUser(info: updateUserInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success, status: response.status  };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getMyinfo(token: string) {  // lấy thông tin user 
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/myInfo`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success, status: response.status  };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getUserById(userId: String, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/get/${userId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error});
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getAllUser(currentPage: number, pageSize: number, token: string) {  // lấy thông tin user 
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/getAll?current=${currentPage}&pageSize=${pageSize}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async changePassword(info: changePasswordInfo) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/changePassword`);
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }
}

export class Authentication {
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://113.161.103.139/alphastorage/auth';
  }

  async login(info: loginInfo) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/login`, info);
      const data = response.data;
      return { result: data.result, success: data.success, status: response.status };
    }
    catch (error: any) {
      // console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async logout(token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/logout`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = response.data;
      return { result: data.result, success: data.succes, status: response.status };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async refreshToken(info: refreshTokenInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/refresh`, info, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = response.data;
      return { result: data.result, success: data.success, status: response.status };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

}

export class UserOfCompany {
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://113.161.103.139/alphastorage/user_company';

  }
  async addUserToCompany(info: addUserToCompanyInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/add`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getAllUserBelongToComapny(companyId: string, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/get/${companyId}/employees`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

}

export class Department {
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://113.161.103.139/alphastorage/department';

  }

  async createDepartment(info: createDepartmentInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getDepartment(departmentId: String, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/get/${departmentId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async updateDepartmentName(departmentId: string, info: updateDepartmentNameInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update/${departmentId}`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async deleteDepartment(departmentId: string, token: string) {
    try {
      const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${departmentId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }
  async getAllDepartment(currentPage: number, pageSize: number, companyId: string, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/getAllDepartment/${companyId}?current=${currentPage}&pageSize=${pageSize}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }
}

export class Company {
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://113.161.103.139/alphastorage/company';

  }

  async createCompany(info: createCompanyInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/create`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error creating patient: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async updateInfoCompany(companyId: string, info: updateCompanyInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update/${companyId}`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async upgradeInfoCompany(companyId: string, info: upgradeCompanyInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/upgrade/${companyId}`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getCompanyProperties(pageSize: number, currentPage: number, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/getOwn?current=${currentPage}&pageSize=${pageSize}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async getOneCompanyProperties(companyId: string, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/get/${companyId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async deleteCompany(companyId: string, token: string) {
    try {
      const response: AxiosResponse = await axios.delete(`${this.baseUrl}/delete/${companyId}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }
}

export class UserOfDepartment {
  private baseUrl: string;
  constructor() {
    this.baseUrl = 'http://113.161.103.139/alphastorage/userOfDepartment';
  }

  async addUserToDepartment(info: createUserOfDepartmentInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/add`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }


  async getAll(info: getUserOfDepartmentInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/getByUserIdAndDepartmentId`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }
  async getAllUserOfDepartment(currentPage: number, pageSize: number, departmentId: string, token: string) {
    try {
      const response: AxiosResponse = await axios.get(`${this.baseUrl}/getAllUserOfDepartment/${departmentId}?current=${currentPage}&pageSize=${pageSize}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async updateUserOfDepartment(companyId: string, info: updateUserOfDepartmentInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/update/${companyId}`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }

  async deleteUserOfDepartment(info: getUserOfDepartmentInfo, token: string) {
    try {
      const response: AxiosResponse = await axios.post(`${this.baseUrl}/delete`, info,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", { success: error?.response?.data, status: error.response ? error.response.status : null });
      return { 
        success: error?.response?.data.success, 
        message: error?.response?.data.message, 
        status: error.response ? error.response.status : null };
    }
  }


}