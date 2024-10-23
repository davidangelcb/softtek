const { Clients } = require('../../databases/mysql/models/clients')
async function findAll(req, res) {
  try {
   
    let data = await Clients.find();
    
    res.json(data);

  } catch (err) {
    process.env.STAGE === "dev"
      ? res.status(400).json(err)
      : res.status(400).json({ message: "Malformed payload" });
  }
}
 
async function findByPrimaryKey(req, res ){
    try{
        let client = await Clients.findByPk(req.params.uid);
        if(client==null){
          res.status(404).json('Client not found!')
        } else {
          res.json(client);
        }
    } catch(err){
        process.env.STAGE === "dev"
      ? res.status(400).json(err)
      : res.status(400).json({ message: "Malformed payload" });
    }
}

async function findWithPagination(req, res){
    try {
        const { page = 1, per_page = 10 } = req.query || {}
        const offset = (Number(page) - 1) * Number(per_page);
        const pagination = { offset, per_page };
         
        let { rows, count } = await Clients.findWithPagination(pagination);
    
        const result = {
            page: Number(page),
            per_page: Number(per_page),
            count,
            total_pages: Math.ceil(Number(count) / Number(per_page)),
            clients : rows
        };

        res.json(result);
    
      } catch (err) {
        process.env.STAGE === "dev"
          ? res.status(400).json(err)
          : res.status(400).json({ message: "Malformed payload" });
      }
}

module.exports = {
  findAll,
  findByPrimaryKey,
  findWithPagination
};
