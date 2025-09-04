class CrudRepository {
     constructor(model){
        this.model = model;
    }

    // Create Repository 
    // data: {title: Milkman, completed: true}
    async create(data){ 
            try{
            const response = await this.model.create(data);
            return response; 
            } catch{
                throw error;
            }   
    }

    // destroy Repository
    // data: id: 1
    async destroy(data){
            try {
                const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
            } catch (error) {
                throw error;
            }
    }

    // Get Data by Primary Key
    async get(data){
            try {
            const response = await this.model.findByPk(data); // Primary Key
                return response;
            } catch (error) {
                throw error;
            }
    }

    // GetAll Data 
    async getAll(){
            try {
            const response = await this.model.findAll();
            return response;
            } catch (error) {
                throw error;
            }
    }

    // Update Repository Data: {title: Project Work}, id: 1
    async update(id,data){ // data = {col : value}
        try {
            const response = await this.model.update(data,{
                where:{
                    id : id
                }
            });
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = CrudRepository;