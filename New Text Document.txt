const express = require("express");
const conn = require("../connection");
const multer  = require('multer')

const routes = express();

routes.use(express.urlencoded({extended:false}));



routes.get("/", (req, res) => {
    res.send("hello routes");
});

routes.get("/projects", async (req, res) => {
    try {
        const projectsQuery = "SELECT p.*,s.img  FROM projects p LEFT JOIN screen s ON p.project_id = s.project_id AND s.is_main =1 WHERE s.is_main IS NOT NULL";
        conn.query(projectsQuery, async (err, projectsData) => {
            if (err) {
                throw err;
            }
         
            const promise = projectsData.map((pr_data)=>{
                return new Promise((resolve,reject)=>{
// Assuming pr_data.project_id holds a valid value
const project_idd = "project_" + pr_data.project_id;
const query_2 = `SELECT DISTINCT title, icon FROM language WHERE JSON_CONTAINS(projects, '{"id": "${project_idd}"}', '$')`;

conn.query(query_2, (err, language_data) => {
    if (err) {
        reject(err);
    } else {
        pr_data.languages = language_data;
        resolve(pr_data);
    }
});




                });
            });

Promise.all(promise).then((res_data)=>{
 
    res.json(res_data);
    res.end();
}
).catch((err)=>{

    
res.send(err);
});

         
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

routes.get("/project_exp",(req,res)=>{



    try {
        conn.query("SELECT DISTINCT title,experience,icon FROM language",(err,data)=>{
            
if(err){
    res.status(500).send("error");
}
else{

    res.status(200).json(data);
}
        })  
    } catch (error) {
    console.log(error)
    }

})


routes.get("/project_slider",(req,res)=>{
  



        try {
            const querry = "SELECT * FROM projects p LEFT JOIN screen s ON p.project_id = s.project_id WHERE s.is_main = 1 AND s.is_main IS NOT NULL LIMIT 5";
          
            conn.query(querry
            ,(err,data)=>{
                
    if(err){
        res.status(500).send(err);
    }
    else{

        const promise = data.map((data)=>{
        return new Promise((resolve,reject)=>{

            const project_idd = "project_" + data.project_id;
            const query_2 = `SELECT DISTINCT title, icon FROM language WHERE JSON_CONTAINS(projects, '{"id": "${project_idd}"}', '$')`;
            
conn.query(query_2,[data.project_id],(err,language_data)=>{

if (err) {
    reject(err);
} else {
    
data.languages=language_data;

resolve(data);


}

});

            });





        });

        Promise.all(promise).then((screen_data)=>{

            res.json(screen_data);
        res.end
        }).catch((err)=>{
            res.status(500).json(err);
        })
        

    }
            })  
        } catch (error) {
        console.log(error)
        }
    
        

});


routes.get("/mobile_projects",(req,res)=>{



    try {
        const querry = "SELECT DISTINCT p.project_id, s.img AS screen_img, l.icon AS language_icon FROM projects p LEFT JOIN screen s ON p.project_id = s.project_id LEFT JOIN language l ON p.language = l.title WHERE p.type = 0 AND s.is_main IS NOT NULL AND s.is_main=1 GROUP BY p.project_id LIMIT 3";
        conn.query(querry,(err,data)=>{
            
if(err){
    res.status(500).send(err);
}
else{

    res.status(200).json(data);
}
        })  
    } catch (error) {
    console.log(error)
    }

})

routes.get("/website_projects",(req,res)=>{



    try {
        const querry = "SELECT * FROM projects p LEFT JOIN screen s ON p.project_id = s.project_id WHERE p.type=1 AND s.is_main IS NOT NULL GROUP BY p.project_id LIMIT 3";
        conn.query(querry,(err,data)=>{
            
if(err){
    res.status(500).send(err);
}
else{

    res.status(200).json(data);
}
        })  
    } catch (error) {
    console.log(error)
    }

})


routes.get("/project_screens",(req,res)=>{



    try {
        const querry = "SELECT * FROM projects WHERE project_id=?";
        conn.query(querry,[req.query.project_id],(err,data)=>{
            const dat = [{...data[0],screen:[]}];
            
if(err){
    res.status(500).send(err);
}
else{
    const querry1 = "SELECT * FROM screen WHERE project_id=?";
    conn.query(querry1,[req.query.project_id],(err,data1)=>{
        if(err){
            res.status(500).send(err);
        }
    else{
dat[0].screen=data1;
       
            res.status(200).json(dat);
        }});





    
}
        })  
    } catch (error) {
    console.log(error)
    }

})



routes.get("/project_screens_language",(req,res)=>{

    try {
        
        const project_idd = "project_" + req.query.project_id;
        const query_2 = `SELECT * FROM language WHERE JSON_CONTAINS(projects, '{"id": "${project_idd}"}', '$') AND type =?`;
        

conn.query(query_2,[req.query.type],(err,data)=>{

    if(err){
        res.status(500).send(err);
       
    }
    else{
    
        res.status(200).json(data);
    }

})
    } catch (error) {
        res.status(500)
.json("error")    }



  })




  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      
      cb(null, `${process.env.BASE_URL+"/image/"+Date.now()}-${file.originalname}`);
    }
  })
  
  const upload = multer({ storage: storage })



  routes.post("/upload_project", (req, res) => {


    if (!req.body.name) {
        return res.status(400).json({ "status": "error", "message": "Project name is required" });
    }

    const query = "INSERT INTO projects (project_name, project_desc, link, type, language) VALUES (?, ?, ?, ?, ?)";

    conn.query(query, [req.body.name, req.body.desc, req.body.link, req.body.type, req.body.language], (err, result) => {
        if (err) {
            console.error("Failed to upload:", err);
            return res.status(500).json({ "status": "error", "message": "Failed to upload project" });
        }

        console.log("Project uploaded successfully with ID:", result.insertId);
        res.status(200).json({ "status": "success", "message": "Project uploaded successfully", "project_id": result.insertId });
    });
});


routes.post("/upload_language", upload.single("language_img"),(req, res) => {

    const query = "INSERT INTO language (title, experience, icon, projects, type,project_id) VALUES (?, ?, ?, ?, ?,?)";

    conn.query(query, [req.body.title, req.body.experience, req.file.path, req.body.projects, req.body.type,req.body.project_id,req.body.project_id], (err, result) => {
        if (err) {
            console.error("Failed to upload:", err);
            return res.status(500).json({ "status": "error", "message": "Failed to upload project" });
        }

        console.log("Project uploaded successfully with ID:", result.insertId);
        res.status(200).json({ "status": "success", "message": "Project uploaded successfully", "project_id": result.insertId });
    });

})




routes.post("/upload_screens", upload.single("screen_img"), (req, res) => {
    const query = "INSERT INTO screen (title, description, img, project_id, is_main) VALUES (?, ?, ?, ?, ?)";

    
        conn.query(query, [req.body.title, req.body.desc, req.file.path, req.body.project_id, req.body.is_main], (err, result) => {
            if (err) {
                console.error("Failed to upload screen:", err);
                // If an error occurs, you might want to handle it appropriately, e.g., return an error response
                return res.status(500).json({ "status": "error", "message": "Failed to upload screen" });
            }
            // Optionally, you can handle success cases here
            res.status(200).json({ "status": "success", "message": "Screens uploaded successfully" });

        });
    
    
});


routes.get("/projects_id",(req,res)=>{

const querry = "SELECT project_id FROM projects";

conn.query(querry,(err,data)=>{

if (err) {
    return res.status(500).json({ "status": "error", "message": "Failed to get data" });

} else {



return  res.status(200).json({ "status": "success", data });

}


});

});

routes.get("/screens",(req,res)=>{

    const querry = "SELECT * FROM screen WHERE project_id=?";
    
    conn.query(querry,[req.query.project_id],(err,data)=>{
    
    if (err) {
        return res.status(500).json({ "status": "error", "message": "Failed to get data" });
    
    } else {
    
    
    
    return  res.status(200).json({ "status": "success", data });
    
    }
    
    
    });
    
    });


    routes.get("/language",(req,res)=>{

        const querry = "SELECT * FROM language WHERE project_id=?";
        
        conn.query(querry,[req.query.project_id],(err,data)=>{
        
        if (err) {
            return res.status(500).json({ "status": "error", "message": "Failed to get data" });
        
        } else {
        
        
        
        return  res.status(200).json({ "status": "success", data });
        
        }
        
        
        });
        
        });

module.exports = routes;
