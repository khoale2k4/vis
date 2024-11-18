import axios, { AxiosResponse } from "axios";


export interface createUserInfo {
  name: string;
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
  async signup(info: createUserInfo, token: string) {
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
    }
  }

  async changePassword(info: changePasswordInfo) {
    try {
      const response: AxiosResponse = await axios.patch(`${this.baseUrl}/changePassword`);
      const data = response.data;
      return { result: data.result, success: data.success };
    }
    catch (error: any) {
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      // console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error creating patient: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
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
      console.log("Error: ", error.response.data);
      return error.response.data;
    }
  }


}