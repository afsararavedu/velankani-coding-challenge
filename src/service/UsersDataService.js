import axios from 'axios'
//const INSTRUCTOR = 'in28minutes'
var apiBaseUrl = "http://vcti.com:8765/aaservice";
// var headers = {
//     'Content-Type': 'application/json',
//     }
class UsersDataService {
    
    
    validateLogin(userName, password){
         return axios.get(`${apiBaseUrl}/validateLogin/${userName}/${password}`)
        //return axios.get(`http://localhost:8081/validateLogin/${userName}/${password}`)
    }

    getPermission(userName){
         return axios.get(`${apiBaseUrl}/permByUserId/${userName}`)
        //return axios.get(`http://localhost:8081/permByUserId/${userName}`)
    }

    getAllUser(){
         return axios.get(`${apiBaseUrl}/users/`)
        //return axios.get(`http://localhost:8081/users`)
    }
    getAllCandidates(userName){
       return axios.get(`http://vcti.com:8765/srvservice/candidateReport/${userName}`,{headers: {
            'Access-Control-Allow-Origin': '*',
          },})
    }
    download(userId,challengeid){
        return axios.get(`http://vcti.com:8765/srvservice/subjResReport/${userId}/${challengeid}`,{headers: {
            'Access-Control-Allow-Origin': '*',
          },responseType: 'blob',})
    }
    getAllRequests(){
        return axios.get(`http://vcti.com:8765/srvservice/schedule/request`,{headers: {
             'Access-Control-Allow-Origin': '*',
           },})
     }
    deleteUser(id) {
        return axios.delete(`${apiBaseUrl}/user/${id}`);
        //return axios.delete(`http://vcti.com:8765/aaservice/user/${id}`);
    }

    retrieveUsers(id) {
        return axios.get(`${apiBaseUrl}/user/${id}`);
        //return axios.get(`http://localhost:8081/user/${id}`);
    }

    retrieveUserByUserId(id) {
        return axios.get(`${apiBaseUrl}/user/userid/${id}`);
        //return axios.get(`http://localhost:8081/user/userid/${id}`);
    }

    updateUser(id, user) {
        //console.log('executed service')
        return axios.put(`${apiBaseUrl}/user/${id}`, user);
        //return axios.put(`http://localhost:8081/user/${id}`, user);
    }

    updateUserUsingUserId(id, user) {
        //console.log('executed service')
        return axios.put(`${apiBaseUrl}/user/userid/${id}`, user);
        //return axios.put(`http://localhost:8081/user/userid/${id}`, user);
    }
    createUser(user) {
        console.log('Create User',user);
        return axios.post(`${apiBaseUrl}/user`, user);
        //return axios.post(`http://localhost:8081/user`, user);
    }

    retrieveUsersByRole(roleId){
         return axios.get(`${apiBaseUrl}/usersByRole/${roleId}`)
        //return axios.get(`http://localhost:8081/usersByRole/${roleId}`)
    }
    getInterviewer(){
            return axios.get(`${apiBaseUrl}/usersByRole/INTERVIEWER`,{headers: {
                 'Access-Control-Allow-Origin': '*',
               },})

            //    return axios.get(`http://localhost:8081/usersByRole/INTERVIEWER`,{headers: {
            //     'Access-Control-Allow-Origin': '*',
            //   },})   
    }
    sendToInterviewers(user, challengeid) {
        console.log('Create User');
        // return axios.post(`${apiBaseUrl}/user`, user);
        return axios.post(`http://vcti.com:8765/srvservice/send/candidate/report/${challengeid}`, user);
    }
	updateRolePermission(roleId, permissionDTO) {
        //console.log('executed service')
        return axios.put(`${apiBaseUrl}/permission/${roleId}`, permissionDTO);
        //return axios.put(`http://localhost:8081/permission/${roleId}`, permissionDTO);
    }

    getPermissionIdByRole(roleId){
         return axios.get(`${apiBaseUrl}/permissionByRole/${roleId}`)
        //return axios.get(`http://localhost:8081/permissionByRole/${roleId}`)
    }

}

export default new UsersDataService()