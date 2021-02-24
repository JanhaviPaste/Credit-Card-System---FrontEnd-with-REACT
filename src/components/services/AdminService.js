import axios from 'axios';
import React from 'react';

const GET_USERS = "http://localhost:9292/ccs/getAllUsers"
const ADD_USERS = "http://localhost:9292/ccs/addAdmin"
const GET_ADMIN = "http://localhost:9292/ccs/getAdmin"
const DELETE_ADMIN = "http://localhost:9292/ccs/deleteAdmin"
const ADMIN_LOGIN = "http://localhost:9292/ccs/users/adminlogin/"

class AdminService {

    getAdmin() {
        return axios.get(GET_USERS);
    }

    addAdmin(adminDetails) {
        return axios.post(ADD_USERS, adminDetails);
    }

    adminLogin(userName, userPassword) {
        return axios.get("http://localhost:9292/ccs/users/adminlogin" + "/" + userName + "/" + userPassword);
    }

    getAdminById(userId) {
        return axios.get(GET_ADMIN + '/' + userId);
    }

    deleteAdmin(userId) {
        return axios.delete(DELETE_ADMIN + '/' + userId);
    }
}

export default new AdminService()