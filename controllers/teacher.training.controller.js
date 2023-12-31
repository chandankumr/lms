const TeacherTrainingService=require("../services/teacher.training.service");
module.exports={
    async addNewTeacherForTraining(req,res){
        try{
            const newTrainingDetail=await TeacherTrainingService.addNewTeacherForTraining(req.body);
            return res.send(newTrainingDetail);
        }catch (e) {
            console.log(e);
            return res.status(400).send(e);
        }
    },
    async updateTrainingDetails(req,res){
        try{
            const trainingDetail=await TeacherTrainingService.updateTeacherInTrainingUsingId(req.params.trainingId,req.body);
            return res.send(trainingDetail);
        }catch (e) {
            console.log(e)
            return res.status(400).send(e);
        }
    },
    async deleteTrainingDetails(req,res){
        try{
            const trainingDetail=await TeacherTrainingService.deleteTeacherInTrainingUsingId(req.params.trainingId);
            return res.send(trainingDetail);
        }catch (e) {
            return res.status(400).send(e);
        }
    },
    async getAllTrainingDetails(req,res){
        try{
            const trainingDetail=await TeacherTrainingService.getAllTrainingDetails();
            return res.send(trainingDetail);
        }catch (e) {
            return res.status(400).send(e);
        }
    },
    async getAllTrainingDetailsByTrainerId(req,res){
        try{
            const trainingDetail=await TeacherTrainingService.getAllTrainingDetailsByTrainerId(req.params.trainerId);
            return res.send(trainingDetail);
        }catch (e) {
            return res.status(400).send(e);
        }
    },
    async getAllTrainingDetailsByTeacherId(req,res){
        try{
            const trainingDetail=await TeacherTrainingService.getAllTrainingDetailsByTrainerId(req.params.teacherId);
            return res.send(trainingDetail);
        }catch (e) {
            return res.status(400).send(e);
        }
    }
};