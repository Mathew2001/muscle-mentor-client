import requests from "./httpServices";

const workoutSevices = {
  getAllPrograms(){
    return requests.post("programs/allPrograms")
  },
  getProgramById(id){
    return requests.post(`/programs/getbyid/${id}`)
  },
} 

export default workoutSevices