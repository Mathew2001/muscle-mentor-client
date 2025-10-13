
import requests from './httpServices'

const workoutServices = {
  getAllWorkouts(){
    return requests.post("workouts/allWorkouts")
  },
  getWorkoutById(id){
    return requests.post(`workouts/getbyid/${id}`);
  },
}

export default workoutServices