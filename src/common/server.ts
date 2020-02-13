import express, { Express } from "express"
import cors from "cors";
import  { userInfoSvc } from "service/userInfoSvc";

export async function run() {
    const app = route(express().use(cors()));
    app.listen("3500", ()=>{
        console.log("listening at port 3500.")
    })

}

function route(app: Express): Express {
    app.get("/users/:userId", (req, res) =>{
        //res.header("Access-Control-Allow-Origin", "*");
        userInfoSvc.getInstance().getUser(req.params.userId).then(result => {
            res.send(result);
        })
    });
    return app;
}